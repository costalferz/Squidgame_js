from os import name
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from game1 import views
# from views import *
urlpatterns = [

    path('',views.game),


]