from rest_framework import routers
from .api import SessionViewSet

router = routers.DefaultRouter()
router.register("api/session", SessionViewSet, "session")

urlpatterns = router.urls