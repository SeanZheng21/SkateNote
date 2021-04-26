from session.models import Session
from rest_framework import viewsets, permissions
from .serializers import SessionSerializer

# Session viewset
class SessionViewSet(viewsets.ModelViewSet):
    # queryset = Session.objects.all()
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    serializer_class = SessionSerializer

    def get_queryset(self):
        # print(dir(Session.objects.all()))

        all_practice = self.request.user.practice_set.all()
        all_practice_ids = [elt.id for elt in all_practice]
        # print(all_practice_ids)
        result = Session.objects.filter(practice__in=all_practice_ids)
        print(result)
        return result

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)
