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
        "url_pic": "https://pbs.twimg.com/media/Eb4Y1MoXgAAChes?format=jpg&name=medium",
        "year": "2019"
    },
    {
        "autor": "petite.doll",
        "titulo": "Coffewoman",
        "url_pic": "https://pbs.twimg.com/media/Ebyb6sjXQAEMvWW?format=jpg&name=900x900",
        "year": "2020"
    }
]

pic_vacio = [
    {
        "autor": "",
        "titulo": "",
        "url_pic": "",
        "year": ""
    }

]
from django.db import migrations


def create_data(apps, schema_editor):
    Picture = apps.get_model('api_app', 'Pictures')
    Picture(autor="petite.doll",
            url_pic="https://pbs.twimg.com/media/Ebyb6sjXQAEMvWW?format=jpg&name=900x900",
            titulo="Coffewoman",
            year="2020").save()


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
for dic in pictures:
    print('- {} - {} - {} - {}'.format(dic['autor'], dic['titulo'], dic['url_pic'], dic['year']))

    # for key, value in dic.items():
    #     print('{} - {} - {} - {}', key)
    #     print('value=', value)
    #     print('Primer ronda')
from django.db import migrations

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
        "url_pic": "https://pbs.twimg.com/media/Eb4Y1MoXgAAChes?format=jpg&name=medium",
        "year": "2019"
    },
    {
        "autor": "petite.doll",
        "titulo": "Coffewoman",
        "url_pic": "https://pbs.twimg.com/media/Ebyb6sjXQAEMvWW?format=jpg&name=900x900",
        "year": "2020"
    }
]


def create_data(apps, schema_editor):
    Picture = apps.get_model('api_app', 'Pictures')
    for dic in pictures:
        Picture(autor=dic['autor'],
                titulo=dic['titulo'],
                url_pic=dic['url_pic'],
                year=dic['year']).save()


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
