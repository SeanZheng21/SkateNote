from session.models import Session
from rest_framework import viewsets, permissions
from .serializers import SessionSerializer

# Session viewset
class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    serializer_class = SessionSerializer

    # def get_queryset(self):
    #     # print(dir(self.request.user.practice_set.all()))
    #     return self.request.user.practice_set.all()

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)
