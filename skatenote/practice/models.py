from django.db import models
from django.contrib.auth.models import User
from trick.models import Trick

# Create your models here.
class Practice(models.Model):
    user = models.ForeignKey(
        User, related_name="practices", null=True, on_delete=models.CASCADE
    )
    trick = models.ForeignKey(Trick, null=True, on_delete=models.SET_NULL)
    isCompleted = models.BooleanField(default=False)