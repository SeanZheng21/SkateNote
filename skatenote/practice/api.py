from practice.models import Practice
from rest_framework import viewsets, permissions
from .serializers import PracticeSerializer

# Practice viewset
class PracticeViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    # permission_classes = [permissions.AllowAny]
    serializer_class = PracticeSerializer

    def get_queryset(self):
        return self.request.user.practice.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
