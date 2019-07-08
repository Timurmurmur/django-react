from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, blank=True)
    message = models.CharField(max_length=500)
    active = models.BooleanField(default=True)
    finished = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)