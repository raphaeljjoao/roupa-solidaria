from django.urls import path
from .views import UserView, ClothingItemView, OrderView

urlpatterns = [
    path('user/', UserView.as_view(), name='user'),
    path('user/<int:id>/', UserView.as_view(), name='user_with_id'),
    path('clothing/', ClothingItemView.as_view(), name='clothing_item'),
    path('clothing/<int:id>/', ClothingItemView.as_view(), name='clothing_item_with_id'),
    path('order/', OrderView.as_view(), name='order'),
    path('order/<int:order_id>/', OrderView.as_view(), name='order_with_id'),
]
