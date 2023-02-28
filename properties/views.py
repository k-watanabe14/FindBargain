from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Property
from .serializers import PropertySerializer


@api_view(['GET', 'POST'])
def properties_list(request):
    if request.method == 'GET':
        data = Property.objects.all()

        serializer = PropertySerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def properties_detail(request, pk):
    try:
        property = Property.objects.get(pk=pk)
    except Property.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PropertySerializer(
            property, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        property.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
