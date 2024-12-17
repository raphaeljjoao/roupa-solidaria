from django.db import models
from . import BaseModel, User

class Review(BaseModel):
    reviewer_id = models.ForeignKey(User, related_name='reviews_given', on_delete=models.CASCADE)
    reviewed_id = models.ForeignKey(User, related_name='reviews_received', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()