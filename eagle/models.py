from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Wine(models.Model):
    name = models.CharField(max_length=256,
                                default='N/A')
    location = models.CharField(max_length=256,
                                default='N/A')
    description = models.CharField(max_length=1000,
                                default="N/A")
    image_url = models.CharField(max_length=1000, 
            default="http://i.imgur.com/CnLHeey.jpg") #Generic image
    created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    

