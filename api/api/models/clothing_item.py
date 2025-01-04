from django.db import models
from .base_model import BaseModel
from .user import User

MALE = 'male'
FEMALE = 'female'
UNISSEX = 'unissex'
    
GENDER_CHOICES = (
    (
        (MALE, 'M'),
        (FEMALE, 'F'),
        (UNISSEX, 'U')
    )
)

SMALL = 'S'
MEDIUM = 'M'
LARGE = 'L'
EXTRA_LARGE = 'XL'

SIZE_CHOICES = (
    (SMALL, 'Small'),
    (MEDIUM, 'Medium'),
    (LARGE, 'Large'),
    (EXTRA_LARGE, 'Extra Large')
)

SPRING = 'spring'
SUMMER = 'summer'
FALL = 'fall'
WINTER = 'winter'

SEASON_CHOICES = (
    (SPRING, 'Spring'),
    (SUMMER, 'Summer'),
    (FALL, 'Fall'),
    (WINTER, 'Winter')
)

class ClothingItem(BaseModel):
    donor_id = models.ForeignKey(User, on_delete=models.PROTECT)
    photo = models.BinaryField()
    description = models.TextField()
    color = models.CharField(max_length=50)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=20)
    size = models.CharField(choices=SIZE_CHOICES, max_length=10)
    season = models.CharField(choices=SEASON_CHOICES, max_length=20)

    def __str__(self):
        return f"{self.description} ({self.color}, {self.size})"