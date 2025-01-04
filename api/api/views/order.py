from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Order, User, ClothingItem
from api.models.order import REQUESTED, FINISHED
from django.shortcuts import get_object_or_404

class OrderView(APIView):
    def get(self, request, order_id=None):
        if order_id:
            order = get_object_or_404(Order, id=order_id)
            order_data = {
                "beneficiary_id": order.beneficiary_id.id,
                "clothing_item_id": order.clothing_item_id.id,
                "status": order.status,
                "created_at": order.created_at,
                "updated_at": order.updated_at
            }
            return Response(order_data, status=status.HTTP_200_OK)

        orders = Order.objects.all()
        data = [
            {
            "id": order.id,
            "beneficiary_id": order.beneficiary_id.id,
            "clothing_item_id": order.clothing_item_id.id,
            "status": order.status,
            "created_at": order.created_at,
            "updated_at": order.updated_at
            }
            for order in orders
        ]
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data

        try:
            beneficiary = get_object_or_404(User, id=data['beneficiary_id'])
            clothing_item = get_object_or_404(ClothingItem, id=data['clothing_item_id'])
            order_status = data['status']

            if order_status not in [REQUESTED, FINISHED]:
                return Response({"detail": "Status inválido."}, status=order_status.HTTP_400_BAD_REQUEST)
        except KeyError as e:
            return Response({"detail": f"Campo {e.args[0]} é obrigatório."}, status=order_status.HTTP_400_BAD_REQUEST)

        order = Order.objects.create(
            beneficiary_id=beneficiary,
            clothing_item_id=clothing_item,
            status=order_status
        )

        order_data = {
            "beneficiary_id": order.beneficiary_id.id,
            "clothing_item_id": order.clothing_item_id.id,
            "status": order.status,
            "created_at": order.created_at,
            "updated_at": order.updated_at
        }

        return Response(order_data, status=status.HTTP_201_CREATED)
