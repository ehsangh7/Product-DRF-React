from django.contrib import admin
from . import models
# Register your models here.


@admin.register(models.Product)
class OwnerAdmin(admin.ModelAdmin):
    list_display = ('id' ,'title' , 'price' , 'rating')
    prepopulated_fields = {'title': ('title',), }


admin.site.register(models.Category)
