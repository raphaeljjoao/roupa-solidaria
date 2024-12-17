from django.db import models
from .base_model import BaseModel

class User(BaseModel):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    cpf = models.CharField(max_length=14)
    address = models.TextField()
    preferences = models.JSONField()