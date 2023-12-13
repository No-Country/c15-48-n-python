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
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
    )
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
    queryset = Follower.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnlyPet,
    )
    serializer_class = FollowerSerializer
    lookup_field = "followed"


class BlockerViewSet(viewsets.ModelViewSet):
    queryset = Blocker.objects.all()
    permission_classes = (IsOwner,)
    serializer_class = BlockerSerializer
    lookup_field = "blocked"
