from django.db import models


class Videos(models.Model):
    video_title = models.CharField(max_length=50)
    video_description = models.TextField()
    video_url = models.CharField(max_length=200, default='no-video')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    categories = models.CharField(max_length=50)
    user = models.ForeignKey('auth.User', related_name='videos', on_delete=models.CASCADE)

