from practice.models import Practice
from rest_framework import viewsets, permissions
from .serializers import PracticeSerializer

# Practice viewset
class PracticeViewSet(viewsets.ModelViewSet):
    queryset = Practice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PracticeSerializer