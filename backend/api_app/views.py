from rest_framework import viewsets, filters

from .models import Pictures
from .serializers import PicturesSerializer


class PicturesViewSet(viewsets.ModelViewSet):
        queryset = Pictures.objects.all()
        serializer_class = PicturesSerializer
        filter_backends = [filters.OrderingFilter]
        ordering_fields = ['pk']
        ordering = ['-pk']
