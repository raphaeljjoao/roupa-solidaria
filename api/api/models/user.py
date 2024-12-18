from django.contrib.auth.models import AbstractUser
from django.db import models
from . import BaseModel

class User(AbstractUser, BaseModel):
    cpf = models.CharField(max_length=14)
    address = models.TextField()
    preferences = models.JSONField(default=dict)

    def __str__(self):
        return self.username
    
    @classmethod
    def create_user(cls, username, email, password, cpf, first_name='', last_name='', address='', preferences={}):
        user = cls(username=username, email=email, first_name=first_name, last_name=last_name, cpf=cpf, address=address, preferences=preferences)
        user.set_password(password)
        user.save()
        return user