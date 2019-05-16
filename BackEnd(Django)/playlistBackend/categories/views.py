from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Categories
from .permissions import IsOwnerOrReadOnly, IsAuthenticated
from .serializers import CategoriesSerializer
from .pagination import CustomPagination
from rest_framework import status


class GetDeleteUpdateCategories(RetrieveUpdateDestroyAPIView):
    serializer_class = CategoriesSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)


    def get_queryset(self, pk):
        try:
            categories = Categories.objects.get(pk=pk)
        except Categories.DoesNotExist:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status=status.HTTP_404_NOT_FOUND)
        return categories
        

    def get(self, request, pk):
        movie = self.get_queryset(pk)
        serializer = CategoriesSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)


    # Update a categories
    def put(self, request, pk):

        categories = self.get_queryset(pk)

        if request.user == categories.user:  # If creator is who makes request
            serializer = CategoriesSerializer(categories, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            content = {
                'status': 'UNAUTHORIZED'
            }
            return Response(content, status=status.HTTP_401_UNAUTHORIZED)


    # Delete a movie
    def delete(self, request, pk):

        categories = self.get_queryset(pk)

        if request.user == categories.user:  # If creator is who makes request
            categories.delete()
            content = {
                'status': 'NO CONTENT'
            }
            return Response(content, status=status.HTTP_204_NO_CONTENT)
        else:
            content = {
                'status': 'UNAUTHORIZED'
            }
            return Response(content, status=status.HTTP_401_UNAUTHORIZED)


class GetPostCategories(ListCreateAPIView):
    serializer_class = CategoriesSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = CustomPagination

    def get_queryset(self):
        categories = Categories.objects.all()
        return categories

    # Get all movies
    def get(self, request):
        categories = self.get_queryset()
        paginate_queryset = self.paginate_queryset(categories)
        serializer = self.serializer_class(paginate_queryset, many=True)
        return self.get_paginated_response(serializer.data)

    # Create a new movie
    def post(self, request):
        serializer = CategoriesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)