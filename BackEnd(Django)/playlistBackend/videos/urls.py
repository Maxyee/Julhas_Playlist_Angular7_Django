from django.urls import include, path, re_path
from . import views


urlpatterns = [
    re_path(r'^api/v1/videos/(?P<pk>[0-9]+)$',  # Url to get update or delete a movie
        views.get_delete_update_video.as_view(),
        name='get_delete_update_movie'
    ),
    path('api/v1/videos/',      # urls list all and create new one
        views.get_post_videos.as_view(),
        name='get_post_movies'
    )
]
