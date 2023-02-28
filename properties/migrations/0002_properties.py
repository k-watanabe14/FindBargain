from django.db import migrations


def create_data(apps, schema_editor):
    Properties = apps.get_model('properties', 'Property')
    Properties(name="house", address="Tokyo", document="test").save()


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
