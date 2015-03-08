from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Wine(models.Model):
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=1000)

