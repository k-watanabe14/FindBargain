from django.contrib import admin
from django.urls import path, re_path
from properties import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/properties/$', views.properties_list),
    re_path(r'^api/properties/([0-9])$', views.properties_detail),
]
