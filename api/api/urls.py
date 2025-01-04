from django.urls import path
from .views import TestView, UserView, ClothingItemView

urlpatterns = [
    path('test/', TestView.as_view(), name='test'),
    path('register/', UserView.as_view(), name='register'),
    path('clothing/', ClothingItemView.as_view(), name='clothing_item'),
    path('clothing/<int:id>/', ClothingItemView.as_view(), name='clothing_item_with_id'),
]
