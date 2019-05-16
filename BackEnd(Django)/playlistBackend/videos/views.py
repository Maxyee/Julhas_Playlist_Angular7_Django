from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Videos
from .permissions import IsOwnerOrReadOnly, IsAuthenticated
from .serializers import VideosSerializer
from .pagination import CustomPagination
from rest_framework import status


class GetDeleteUpdateVideo(RetrieveUpdateDestroyAPIView):
    serializer_class = VideosSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)

    def get_queryset(self, pk):
        try:
            videos = Videos.objects.get(pk=pk)
        except Videos.DoesNotExist:
            content = {
                'status': 'Not Found'
            }
            return Response(content, status=status.HTTP_404_NOT_FOUND)
        return videos

    def get(self, request, pk):
        video = self.get_queryset(pk)
        serializer = VideosSerializer(video)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Update a categories
    def put(self, request, pk):

        videos = self.get_queryset(pk)

        if request.user == videos.user:  # If creator is who makes request
            serializer = VideosSerializer(videos, data=request.data)
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

        videos = self.get_queryset(pk)

        if request.user == videos.user:  # If creator is who makes request
            videos.delete()
            content = {
                'status': 'NO CONTENT'
            }
            return Response(content, status=status.HTTP_204_NO_CONTENT)
        else:
            content = {
                'status': 'UNAUTHORIZED'
            }
            return Response(content, status=status.HTTP_401_UNAUTHORIZED)


class GetPostVideos(ListCreateAPIView):
    serializer_class = VideosSerializer
    permission_classes = (IsAuthenticated,)
    pagination_class = CustomPagination


    def get_queryset(self):
        videos = Videos.objects.all()
        return videos

    # Get all movies
    def get(self, request):
        videos = self.get_queryset()
        paginate_queryset = self.paginate_queryset(videos)
        serializer = self.serializer_class(paginate_queryset, many=True)
        return self.get_paginated_response(serializer.data)

    # Create a new movie
    def post(self, request):
        serializer = VideosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)