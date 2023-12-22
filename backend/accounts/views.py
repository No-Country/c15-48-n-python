from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
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

    def destroy(self, request, *args, **kwargs):
        nick = request.data.get("follower")
        pet_queryset = Pet.objects.filter(user=self.request.user)
        follower = get_object_or_404(pet_queryset, nick=nick)
        instace = self.get_object()
        follower_object = get_object_or_404(
            Follower.objects.all(), follower=follower, followed=instace
        )
        follower_object.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_create(self, serializer):
        followed_id = self.kwargs.get('followed')
        followed_pet = get_object_or_404(Pet, id=followed_id)
        
        serializer.save(followed=followed_pet)


class BlockerViewSet(viewsets.ModelViewSet):
    queryset = Blocker.objects.all()
    permission_classes = (IsOwner,)
    serializer_class = BlockerSerializer
    lookup_field = "blocked"
