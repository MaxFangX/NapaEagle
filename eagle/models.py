from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Wine(models.Model):
    name = models.CharField(max_length=256)
    location = models.CharField(max_length=256)
    description = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    image_url = models.CharField(max_length=1000, 
                                default="http://i.imgur.com/CnLHeey.jpg") #Generic image
    created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    

