from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import random

class TestView(APIView):
    def get(self, request):
        random_number = random.randint(1, 100)
        return Response(data={"message": f"It's updating. Number: {random_number}"}, status=status.HTTP_200_OK)