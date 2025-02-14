# Generated by Django 5.1.4 on 2024-12-17 06:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_clothingitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(max_length=50)),
                ('beneficiary_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.user')),
                ('clothing_item_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.clothingitem')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
