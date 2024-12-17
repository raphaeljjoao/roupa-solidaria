from django.db import models
from . import BaseModel, User, ClothingItem

class Order(BaseModel):
    beneficiary_id = models.ForeignKey(User, on_delete=models.PROTECT)
    clothing_item_id = models.ForeignKey(ClothingItem, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)