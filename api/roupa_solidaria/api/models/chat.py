from django.db import models
from . import BaseModel, Order

class Chat(BaseModel):
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
