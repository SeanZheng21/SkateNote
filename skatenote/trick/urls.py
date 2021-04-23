from rest_framework import routers
from .api import TrickViewSet

router = routers.DefaultRouter()
router.register('api/trick', TrickViewSet, 'trick')

urlpatterns = router.urls