from rest_framework import serializers
from product.models import Product, Order, OrderItem


# Quantity remain
# Product Serializer class
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('category', 'title', 'image', 'price', 'description', 'rating', 'digital')


# Order Serializer class
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('customer', 'date_orderd', 'complete', 'tranaction_id')

# OrderItem Serializer class
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('product', 'order', 'quantity', 'date_added')