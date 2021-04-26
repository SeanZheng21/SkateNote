from rest_framework import serializers
from session.models import Session

# Practice Serializer
class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = "__all__"