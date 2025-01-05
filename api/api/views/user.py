from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import User


class UserView(APIView):

    def get(self, request, id):
        user_id = id

        if user_id:
            try:
                users = User.objects.filter(id=user_id)
            except User.DoesNotExist:
                return Response(data={"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        else:
            users = User.objects.all()

        user_data = [
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "cpf": user.cpf,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "address": user.address,
                "preferences": user.preferences
            }
            for user in users
        ]

        if len(user_data) == 1:
            user_data = user_data[0]

        return Response(data=user_data, status=status.HTTP_200_OK)


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
        except KeyError as e:
            return Response({"detail": f"Campo {e.args[0]} é obrigatório"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=user['username']).exists() or User.objects.filter(email=user['email']).exists():
            return Response({"detail": "Usuário ou e-mail já existe."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            created_user = User.objects.create_user(
                username=user['username'],
                email=user['email'],
                password=user['password'],
                cpf=user['cpf'],
                first_name=user['first_name'],
                last_name=user['last_name'],
                address=user['address'],
                preferences=user['preferences']
            )
        except ValidationError as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        user_data = {
            "username": created_user.username,
            "email": created_user.email,
            "cpf": created_user.cpf,
            "first_name": created_user.first_name,
            "last_name": created_user.last_name,
            "address": created_user.address,
            "preferences": created_user.preferences
        }

        return Response(data=user_data, status=status.HTTP_201_CREATED)
