from django.db import models


class Pictures(models.Model):
    autor = models.CharField(max_length=546)
    titulo = models.CharField(max_length=546)
    url_pic = models.URLField(max_length=546, null=True)
    year = models.CharField(max_length=4, blank=True)

    def __str__(self):
        return self.titulo
