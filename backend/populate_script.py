pictures = [
    {
        "autor": "Ruth Marten",
        "titulo": "El futuro llegó hace rato",
        "url_pic": "https://pbs.twimg.com/media/Eb31bEtXkAAoa0p?format=jpg&name=large",
        "year": ""
    },
    {
        "autor": "Aykut Aydoğdu",
        "titulo": "Mar de humo",
        "url_pic": "https://pbs.twimg.com/media/Eb4VszVWsAArURA?format=jpg&name=large",
        "year": "2019"
    },
    {
        "autor": "Priyesh Trivedi",
        "titulo": "JJOO",
        "url_pic": "https://pbs.twimg.com/media/Eb4Y1MoXgAAChes?format=jpg&name=large",
        "year": "2019"
    },
    {
        "autor": "petite.doll",
        "titulo": "Coffewoman",
        "url_pic": "https://pbs.twimg.com/media/Ebyb6sjXQAEMvWW?format=jpg&name=large",
        "year": "2020"
    },
    {
        "autor": "Miles Johnston",
        "titulo": "Mil caras",
        "url_pic": "https://pbs.twimg.com/media/EbyYKbsXQAAd8-m?format=jpg&name=large",
        "year": ""
    },
]

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'api_project.settings')
import django
django.setup()
from api_app.models import Pictures


def populate(pics):

    for dic in pics:
        p = Pictures.objects.create()
        p.autor = dic['autor']
        p.titulo = dic['titulo']
        p.url_pic = dic['url_pic']
        p.year = dic['year']
        print(f"Populando: - {dic['autor']} - {dic['titulo']} - {dic['url_pic']} - {dic['year']} ")
        p.save()



if __name__ == '__main__':
    print('Empezando la population...')
    populate(pictures)


# from django.db import migrations
#
# pictures = [
#     {
#         "pk": 5,
#         "autor": "Miles Johnston",
#         "titulo": "Mil caras",
#         "url_pic": "https://pbs.twimg.com/media/EbyYKbsXQAAd8-m?format=jpg&name=large",
#         "year": ""
#     },
#     {
#         "pk": 4,
#         "autor": "petite.doll",
#         "titulo": "Coffewoman",
#         "url_pic": "https://pbs.twimg.com/media/Ebyb6sjXQAEMvWW?format=jpg&name=900x900",
#         "year": "2020"
#     },
#     {
#         "pk": 3,
#         "autor": "Priyesh Trivedi",
#         "titulo": "JJOO",
#         "url_pic": "https://pbs.twimg.com/media/Eb4Y1MoXgAAChes?format=jpg&name=medium",
#         "year": "2019"
#     },
#     {
#         "pk": 2,
#         "autor": "Aykut Aydoğdu",
#         "titulo": "Mar de humo",
#         "url_pic": "https://pbs.twimg.com/media/Eb4VszVWsAArURA?format=jpg&name=large",
#         "year": "2019"
#     },
#     {
#         "pk": 1,
#         "autor": "Ruth Marten",
#         "titulo": "El futuro llegó hace rato",
#         "url_pic": "https://pbs.twimg.com/media/Eb31bEtXkAAoa0p?format=jpg&name=large",
#         "year": ""
#     }
# ]
#
#
# def create_data(apps, schema_editor):
#     Picture = apps.get_model('api_app', 'Pictures')
#     for dic in pictures:
#         Picture(pk=dic['pk'],
#                 autor=dic['autor'],
#                 titulo=dic['titulo'],
#                 url_pic=dic['url_pic'],
#                 year=dic['year']).save()
#
#
# class Migration(migrations.Migration):
#
#     dependencies = [
#         ('api_app', '0001_initial'),
#     ]
#
#     operations = [
#         migrations.RunPython(create_data),
#     ]
