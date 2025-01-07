from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from api.models import ClothingItem

class ClothingItemView(APIView):
    def get(self, request, id=None):
        if id:
            clothing_item = get_object_or_404(ClothingItem, id=id)
            data = {
                'id': clothing_item.id,
                'donor_id': clothing_item.donor_id.id,
                # 'photo': clothing_item.photo.decode('utf-8') if clothing_item.photo else None,
                'description': clothing_item.description,
                'color': clothing_item.color,
                'gender': clothing_item.gender,
                'size': clothing_item.size,
                'season': clothing_item.season,
                'created_at': clothing_item.created_at,
                'updated_at': clothing_item.updated_at,
            }
            return Response(data, status=status.HTTP_200_OK)
        else:
            clothing_items = ClothingItem.objects.all()
            data = [
                {
                    'id': item.id,
                    'donor_id': item.donor_id.id,
                    # 'photo': item.photo.decode('utf-8') if item.photo else None,
                    'description': item.description,
                    'color': item.color,
                    'gender': item.gender,
                    'size': item.size,
                    'season': item.season,
                    'created_at': item.created_at,
                    'updated_at': item.updated_at,
                }
                for item in clothing_items
            ]
            return Response(data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            data = request.data
            print(data)
            clothing_item = ClothingItem.objects.create(
                donor_id_id=data['donor_id'],
                # photo=data.get('photo').encode('utf-8') if data.get('photo') else None,
                description=data['description'],
                color=data['color'],
                gender=data['gender'],
                size=data['size'],
                season=data['season']
            )
            return Response({'id': clothing_item.id}, status=status.HTTP_201_CREATED)
        except KeyError as e:
            return Response({'error': f'Missing field: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id):
        try:
            data = request.data
            clothing_item = get_object_or_404(ClothingItem, id=id)
            clothing_item.donor_id_id = data.get('donor_id', clothing_item.donor_id.id)
            # clothing_item.photo = data.get('photo', clothing_item.photo).encode('utf-8') if data.get('photo') else clothing_item.photo
            clothing_item.description = data.get('description', clothing_item.description)
            clothing_item.color = data.get('color', clothing_item.color)
            clothing_item.gender = data.get('gender', clothing_item.gender)
            clothing_item.size = data.get('size', clothing_item.size)
            clothing_item.season = data.get('season', clothing_item.season)
            clothing_item.save()
            return Response({'id': clothing_item.id}, status=status.HTTP_200_OK)
        except KeyError as e:
            return Response({'error': f'Missing field: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        clothing_item = get_object_or_404(ClothingItem, id=id)
        clothing_item.delete()
        return Response({'message': 'Deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
