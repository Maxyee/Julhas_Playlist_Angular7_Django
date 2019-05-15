from django.db import models


# Create your models here.
class Categories(models.Model): 
    category_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('auth.User', related_name='categories', on_delete=models.CASCADE)



