from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import User


class RegisterView(APIView):
    def post(self, request):

        data = request.data
        try:
            user = {
                "username": data['username'],
                "email": data['email'],
                "password": data['password'],
                "cpf": data['cpf'],
                "first_name": data.get('first_name', ''),
                "last_name": data.get('last_name', ''),
                "address": data.get('address', ''),
                "preferences": data.get('preferences', {})
            }
        except:
            return Response(data=None, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=user['username']).exists() or User.objects.filter(email=user['email']).exists():
            return Response(data=None, status=status.HTTP_400_BAD_REQUEST)
        
        created_user = {
            "username": user['username'],
            "email": user['email'],
            "cpf": user['cpf'],
            "first_name": user['first_name'],
            "last_name": user['last_name'],
            "address": user['address'],
            "preferences": user['preferences']
        }

        return Response(data=created_user, status=status.HTTP_201_CREATED)