from django.db import models
from django.utils.translation import gettext_lazy as _

# Create Upload file directory
def upload_to(instance, filename):
    return 'products/{filename}'.format(filename=filename)

# create Customer model
# class Customer(models.Model):

#     user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
#     name = models.CharField(max_length=200, null=True)
#     email = models.CharField(max_length=200, null=True)

#     def __str__(self):
#         return self.name


# create Category model
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Create Product models here.
class Product(models.Model):
    
    stars = (
        ('1', '1star'),
        ('2', '2star'),
        ('3', '3star'),
        ('4', '4star'),
        ('5', '5star'),
    )

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    image = models.ImageField(_("Image"),upload_to=upload_to, default='products/default.jpg')
    price = models.DecimalField(max_digits=7, decimal_places=2)
    description = models.CharField(max_length=500)
    rating = models.CharField(max_length=1, choices=stars, default='1')
    digital = models.BooleanField(default=False, null=True, blank=False)

    objects = models.Manager() # default Manager




    def __str__(self):
        return self.title


# Create Order model
class Order(models.Model):
    # customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    date_orderd = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    tranaction_id = models.CharField(max_length=200, null=True)


# Create Order Item models
class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, blank=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

