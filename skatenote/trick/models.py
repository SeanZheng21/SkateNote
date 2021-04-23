from django.db import models

# Create your models here.
class Trick(models.Model):
    name = models.CharField(max_length=100)
    difficulty = models.IntegerField()
    stances = models.IntegerField()
    description = models.TextField()
    guide = models.TextField()
    