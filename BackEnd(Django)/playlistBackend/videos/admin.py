from django.contrib import admin

from .models import Videos
# Register your models here.

#admin.site.register(Videos)


class VideosModelAdmin(admin.ModelAdmin):
    list_display = ["video_title", "video_description", "created_at","updated_at", "categories", "user"]

    class Meta:
        model = Videos


admin.site.register(Videos, VideosModelAdmin)