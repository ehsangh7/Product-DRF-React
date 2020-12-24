from django.shortcuts import render
from product.models import Product, Order, OrderItem
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer
from rest_framework import generics

# Create your views here.



class ProductList(generics.ListAPIView):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()

