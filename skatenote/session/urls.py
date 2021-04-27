from rest_framework import routers
from .api import SessionViewSet, SessionOfPracticeViewSet

router = routers.DefaultRouter()
router.register("api/session", SessionViewSet, "session")
router.register(
    "api/session_of_practice", SessionOfPracticeViewSet, "session_of_practice"
)

urlpatterns = router.urls