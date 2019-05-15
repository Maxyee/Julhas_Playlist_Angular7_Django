from rest_framework import serializers
from .models import Categories
from django.contrib.auth.models import User


class CategoriesSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Categories
        fields = ('category_name', 'created_at', 'updated_at', 'user')


class UserSerializer(serializers.ModelSerializer):
    categories = serializers.PrimaryKeyRelatedField(many=True, queryset=Categories.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'categories')
