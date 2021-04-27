from session.models import Session
from rest_framework import viewsets, permissions
from .serializers import SessionSerializer

# Session viewset
class SessionViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = SessionSerializer

    def get_queryset(self):
        all_practice = self.request.user.practice_set.all()
        all_practice_ids = [elt.id for elt in all_practice]
        return Session.objects.filter(practice__in=all_practice_ids)

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


# Session of practice viewset
class SessionOfPracticeViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = SessionSerializer

    def get_queryset(self):
        pid = self.request.query_params.get("pid")
        return Session.objects.filter(practice=pid)
