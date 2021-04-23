from rest_framework import serializers
from trick.models import Trick

# Trick Serializer
class TrickSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trick
        fields = '__all__'