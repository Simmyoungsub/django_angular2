from django.conf.urls import url, include
from django.contrib import admin
from blog.views import *

urlpatterns = [
    url(r'^list', list)
]
