from django.db import models
from . import BaseModel, User, ClothingItem
from django.utils.translation import gettext_lazy as _
from enum import Enum

REQUESTED = 'requested'
FINISHED = 'finished'

STATUS_CHOICES = (
    (REQUESTED, 'Requested'),
    (FINISHED, 'Finished')
)

class Order(BaseModel):
    beneficiary_id = models.ForeignKey(User, on_delete=models.PROTECT)
    clothing_item_id = models.ForeignKey(ClothingItem, on_delete=models.CASCADE)
    status = models.CharField(choices=STATUS_CHOICES, max_length=50)