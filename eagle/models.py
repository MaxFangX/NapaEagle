from django.db import models
from django.contrib.auth.models import User


class Wine(models.Model):
    name = models.CharField(max_length=256)
    location = models.CharField(max_length=256)
    description = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    image_url = models.CharField(max_length=1000, null=False)
    created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)


class Profile(models.Model):
    user = models.OneToOneField(User)
    referrer = models.ForeignKey(User, null=True, related_name='+')
    full_name = models.CharField(null=True, blank=True, max_length=128)


class Purchase(models.Model):
    buyer = models.ForeignKey(User, null=False)
    product = models.ForeignKey(Wine)
    date = models.DateTimeField()


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField(max_length=2000)
