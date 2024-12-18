from django.contrib.auth.models import AbstractUser
from django.db import models
from . import BaseModel

class User(AbstractUser, BaseModel):
    cpf = models.CharField(max_length=14)
    address = models.TextField()
    preferences = models.JSONField()

    def __str__(self):
        return self.username