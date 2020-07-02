from rest_framework import serializers
from .models import Pictures


class PicturesSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('pk', 'autor', 'titulo', 'url_pic', 'year',)
        model = Pictures
