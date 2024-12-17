from django.db import models
from .base_model import BaseModel
from .user import User

class ClothingItem(BaseModel):
    donor_id = models.ForeignKey(User, on_delete=models.PROTECT)
    photo = models.BinaryField()
    description = models.TextField()
    color = models.CharField(max_length=50)
    gender = models.CharField(max_length=20)
    size = models.CharField(max_length=10)
    season = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.description} ({self.color}, {self.size})"