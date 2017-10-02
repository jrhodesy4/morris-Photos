from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Family(models.Model):
    picture = models.ImageField(upload_to='media/', blank=True)

class Landscape(models.Model):
    picture = models.ImageField(upload_to='media/', blank=True)

class Personal(models.Model):
    picture = models.ImageField(upload_to='media/', blank=True)

class GoPro(models.Model):
    movie = models.FileField(upload_to='media/', blank=True)
    picture = models.ImageField(upload_to='media/', blank=True)

class Wedding(models.Model):
    picture = models.ImageField(upload_to='media/', blank=True)

class Shower(models.Model):
    picture = models.ImageField(upload_to='media/', blank=True)
