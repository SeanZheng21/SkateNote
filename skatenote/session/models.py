from django.db import models
from practice.models import Practice
import os

# Create your models here.
class Session(models.Model):
    practice = models.ForeignKey(Practice, null=True, on_delete=models.CASCADE)
    duration = models.IntegerField(null=True)
    date = models.DateField(null=True, auto_now=False, auto_now_add=False)
    summary = models.TextField(null=True)
    note = models.TextField(null=True)
    videolink = models.URLField(null=True)
    video = models.FileField(null=True, upload_to="./VideoUpload")
