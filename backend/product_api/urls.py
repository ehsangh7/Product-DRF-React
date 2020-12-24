from django.urls import path
from .views import (
    ProductList
)

app_name = 'Product_api'

urlpatterns = [
    path('', ProductList.as_view(), name='listproduct'),
]
