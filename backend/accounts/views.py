from .permissions import IsOwner, IsOwnerOrReadOnly
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
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    serializer_class = AccountSerializer


class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    serializer_class = PetSerializer


class FollowerViewSet(viewsets.ModelViewSet):
    queryset = Follower.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    serializer_class = FollowerSerializer


class BlockerViewSet(viewsets.ModelViewSet):
    queryset = Blocker.objects.all()
    permission_classes = (IsOwner,)
    serializer_class = BlockerSerializer
