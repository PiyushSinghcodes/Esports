from django.urls import path
from .views import tour

urlpatterns = [
    path('', tour, name='tournaments'),
]