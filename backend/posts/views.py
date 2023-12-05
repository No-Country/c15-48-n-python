from .models import Post, PostImage, PostVideo, Comment, Like
from .permissions import IsOwnerOrReadOnly
from rest_framework import viewsets, permissions
from .serializers import (
    PostSerializer,
    PostImageSerializer,
    PostVideoSerializer,
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


class PostImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PostImage.objects.all()
    serializer_class = PostImageSerializer


class PostVideoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PostVideo.objects.all()
    serializer_class = PostVideoSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    http_method_names = ("get", "post", "delete")
    serializer_class = CommentSerializer


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )
    http_method_names = ("get", "post", "delete")
    serializer_class = LikeSerializer
