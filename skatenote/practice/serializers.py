from rest_framework import serializers
from practice.models import Practice

# Practice Serializer
class PracticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practice
        fields = "__all__"
        # depth = 1