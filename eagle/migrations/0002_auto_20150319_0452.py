# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eagle', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='image_url',
            field=models.CharField(max_length=1000, default='http://i.imgur.com/CnLHeey.jpg'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='wine',
            name='location',
            field=models.CharField(max_length=256, default='N/A'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='wine',
            name='description',
            field=models.CharField(max_length=1000, default='N/A'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='wine',
            name='name',
            field=models.CharField(max_length=256, default='N/A'),
            preserve_default=True,
        ),
    ]
