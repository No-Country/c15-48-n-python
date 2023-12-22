from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from .permissions import IsOwner, IsOwnerOrReadOnlyPet
from rest_framework import viewsets, permissions
from .models import User, Follower, Blocker, Pet
from .serializers import (
    AccountSerializer,
    FollowerSerializer,
    BlockerSerializer,
    PetSerializer,
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = AccountSerializer
    lookup_field = "username"

    def get_permissions(self):
        if self.action == "create":
            return (permissions.AllowAny(),)
        return super().get_permissions()


class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnlyPet,
    )
    serializer_class = PetSerializer
    lookup_field = "nick"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class FollowerViewSet(viewsets.ModelViewSet):
    queryset = Follower.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnlyPet,
    )
    http_method_names = ("get", "post", "delete")
    serializer_class = FollowerSerializer
    lookup_field = "follower"

    def list(self, request, *args, **kwargs):
        followed_param = request.GET.get("follower_nick")
        follower_param = request.GET.get("followed_nick")

        if followed_param:
            followed_queryset = Follower.objects.filter(
                followed=get_object_or_404(Pet.objects.all(), nick=followed_param)
            )
            return Response(self.get_serializer(followed_queryset, many=True).data)

        elif follower_param:
            follower_queryset = Follower.objects.filter(
                follower=get_object_or_404(Pet.objects.all(), nick=follower_param)
            )
            return Response(self.get_serializer(follower_queryset, many=True).data)
        else:
            return super().list(request, *args, **kwargs)

    @action(detail=False, methods=["post"])
    def remove_follower(self, request):
        follower_nick = self.request.data.get("follower")
        followed_nick = self.request.data.get("followed")

        pet_queryset = Pet.objects.filter(user=self.request.user)
        pet_follower = get_object_or_404(pet_queryset, nick=follower_nick)
        pet_followed = get_object_or_404(Pet.objects.all(), nick=followed_nick)

        self.perform_destroy(
            get_object_or_404(
                Follower.objects.all(), follower=pet_follower, followed=pet_followed
            )
        )
        return Response(status=status.HTTP_204_NO_CONTENT)


class BlockerViewSet(viewsets.ModelViewSet):
    queryset = Blocker.objects.all()
    permission_classes = (IsOwner,)
    serializer_class = BlockerSerializer
    lookup_field = "blocked"
