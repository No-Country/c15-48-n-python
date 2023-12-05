from .models import Post, PostImage, PostVideo, Comment, Like
from rest_framework import viewsets, permissions
from .serializers import (
    PostSerializer,
    PostImageSerializer,
    PostVideoSerializer,
    CommentSerializer,
    LikeSerializer)

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer


class PostImageViewSet(viewsets.ModelViewSet):
    queryset = PostImage.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostImageSerializer


class PostVideoViewSet(viewsets.ModelViewSet):
    queryset = PostVideo.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostVideoSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CommentSerializer


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LikeSerializer

