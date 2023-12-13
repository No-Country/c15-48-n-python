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
    serializer_class = AccountSerializer
    lookup_field = "username"
    def get_queryset(self):
        return User.objects.all()



class PetViewSet(viewsets.ModelViewSet):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnlyPet,
    )
    serializer_class = PetSerializer
    lookup_field = "name"

    def get_queryset(self):
        return Pet.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



class FollowerViewSet(viewsets.ModelViewSet):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnlyPet,
    )
    serializer_class = FollowerSerializer
    lookup_field = "followed"

    def get_queryset(self):
        return Follower.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BlockerViewSet(viewsets.ModelViewSet):
    permission_classes = (IsOwner,)
    serializer_class = BlockerSerializer
    lookup_field = "blocked"

    def get_queryset(self):
        return Blocker.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
