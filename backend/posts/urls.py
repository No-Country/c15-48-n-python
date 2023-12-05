from django.urls import include,path
from rest_framework import routers
from .api import (
    PostViewSet,
    PostImageViewSet,
    PostVideoViewSet,
    CommentViewSet,
    LikeViewSet
)

router = routers.DefaultRouter()
router.register('api/posts', PostViewSet, 'posts')
router.register('api/images', PostImageViewSet, 'images')
router.register('api/videos', PostVideoViewSet, 'videos')
router.register('api/comments', CommentViewSet, 'comments')
router.register('api/likes', LikeViewSet, 'likes')

urlpatterns = router.urls