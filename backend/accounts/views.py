from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions
from .models import User, Follower, Blocker, Pet
from .permissions import IsOwner, IsOwnerOrReadOnly
from .serializers import (
    AccountSerializer,
    FollowerSerializer,
    BlockerSerializer,
    PetSerializer,
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AccountSerializer
    permission_classes = (
        IsOwnerOrReadOnly,
    )
    lookup_field = "username"


class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    serializer_class = PetSerializer
    lookup_field = "name"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



class FollowerViewSet(viewsets.ModelViewSet):
    queryset = Follower.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    serializer_class = FollowerSerializer
    lookup_field = "followed"

    def perform_create(self, serializer):
        followed_id = self.kwargs.get('followed')
        followed_pet = get_object_or_404(Pet, id=followed_id)
        
        serializer.save(followed=followed_pet)


class BlockerViewSet(viewsets.ModelViewSet):
    queryset = Blocker.objects.all()
    permission_classes = (IsOwner,)
    serializer_class = BlockerSerializer
    lookup_field = "blocked"


    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
