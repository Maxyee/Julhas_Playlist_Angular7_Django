from django.contrib import admin

from .models import Categories
# Register your models here.

#admin.site.register(Categories)


class CategoriesModelAdmin(admin.ModelAdmin):
    list_display = ["user", "created_at", "updated_at", "category_name"]

    class Meta:
        model = Categories


admin.site.register(Categories, CategoriesModelAdmin)