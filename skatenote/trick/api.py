from trick.models import Trick
from rest_framework import viewsets, permissions
from .serializers import TrickSerializer

# Trick Viewset
class TrickViewSet(viewsets.ModelViewSet):
    queryset = Trick.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrickSerializer