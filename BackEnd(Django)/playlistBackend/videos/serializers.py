from rest_framework import serializers
from .models import Videos
from django.contrib.auth.models import User


class VideosSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Videos
        fields = ('id', 'video_title', 'video_description', 'video_url', 'created_at', 'updated_at', 'categories', 'user')


class UserSerializer(serializers.ModelSerializer):
    videos = serializers.PrimaryKeyRelatedField(many=True, queryset=Videos.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'categories')
