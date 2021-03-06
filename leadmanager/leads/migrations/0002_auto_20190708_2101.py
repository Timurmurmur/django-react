# Generated by Django 2.2.3 on 2019-07-08 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='lead',
            name='finished',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='lead',
            name='email',
            field=models.EmailField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='lead',
            name='message',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='lead',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
