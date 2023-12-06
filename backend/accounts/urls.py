from rest_framework import routers
from .views import UserViewSet, BlockerViewSet, PetViewSet, FollowerViewSet

router = routers.DefaultRouter()
router.register("api/user", UserViewSet, "user")
router.register("api/blocker", BlockerViewSet, "blocker")
router.register("api/pet", PetViewSet, "pet")
router.register("api/follower", FollowerViewSet, "follower")

urlpatterns = router.urls
