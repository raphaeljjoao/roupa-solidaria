# Generated by Django 5.1.4 on 2024-12-18 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_user_options_alter_user_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='preferences',
            field=models.JSONField(default=dict),
        ),
    ]
