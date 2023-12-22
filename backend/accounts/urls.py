from rest_framework import routers
from .views import UserViewSet, BlockerViewSet, PetViewSet, FollowerViewSet

router = routers.DefaultRouter()
router.register("user", UserViewSet, "user")
router.register("blocker", BlockerViewSet, "blocker")
router.register("pet", PetViewSet, "pet")
router.register("follower", FollowerViewSet, "follower")

urlpatterns = router.urls
