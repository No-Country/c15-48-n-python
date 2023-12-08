from rest_framework import routers
from .views import (
    PostViewSet,
    PostImageViewSet,
    PostVideoViewSet,
    CommentViewSet,
    LikeViewSet,
)

router = routers.DefaultRouter()
router.register("posts", PostViewSet, "posts")
router.register("images", PostImageViewSet, "images")
router.register("videos", PostVideoViewSet, "videos")
router.register("comments", CommentViewSet, "comments")
router.register("likes", LikeViewSet, "likes")

urlpatterns = router.urls
