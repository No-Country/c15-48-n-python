from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import Post, Comment, Like, Pet
from .permissions import IsOwnerOrReadOnly
from rest_framework import viewsets, permissions
from .serializers import (
    PostSerializer,
    CommentSerializer,
    LikeSerializer,
)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        nick = self.request.data.get("nick")
        pet_queryset = Pet.objects.filter(user=self.request.user)
        pet = get_object_or_404(pet_queryset, nick=nick)

        serializer.save(pet=pet)


class PostImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostVideoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    http_method_names = ("get", "post", "delete")

    def list(self, request, *args, **kwargs):
        param = request.GET.get("post_id")

        if param:
            comment_queryset = Comment.objects.filter(post=param)
            return Response(self.get_serializer(comment_queryset, many=True).data)
        else:
            return super().list(self, request, *args, **kwargs)

    def perform_create(self, serializer):
        nick = self.request.data.get("nick")
        pet_queryset = Pet.objects.filter(user=self.request.user)
        pet = get_object_or_404(pet_queryset, nick=nick)
        serializer.save(pet=pet)


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    http_method_names = ("get", "post", "delete")
    serializer_class = LikeSerializer
