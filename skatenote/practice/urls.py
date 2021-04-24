from rest_framework import routers
from .api import PracticeViewSet

router = routers.DefaultRouter()
router.register("api/practice", PracticeViewSet, "practice")

urlpatterns = router.urls