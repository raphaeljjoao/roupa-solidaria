from django.db import models
from . import BaseModel, User, Chat

class Message(BaseModel):
    chat_id = models.ForeignKey(Chat, on_delete=models.CASCADE)
    sender_id = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
