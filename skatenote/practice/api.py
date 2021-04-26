from practice.models import Practice
from rest_framework import viewsets, permissions
from .serializers import PracticeSerializer

# Practice viewset
class PracticeViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    # permission_classes = [permissions.AllowAny]
    serializer_class = PracticeSerializer

    def get_queryset(self):
        print(dir(self.request.user.practice_set.all()))
        return self.request.user.practice_set.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
