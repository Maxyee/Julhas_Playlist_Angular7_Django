from django.urls import include, path, re_path
from . import views


urlpatterns = [
    re_path(r'^api/v1/categories/(?P<pk>[0-9]+)$',  # Url to get update or delete a movie
        views.get_delete_update_categorie.as_view(),
        name='get_delete_update_movie'
    ),
    path('api/v1/categories/',      # urls list all and create new one
        views.get_post_categories.as_view(),
        name='get_post_movies'
    )
]
