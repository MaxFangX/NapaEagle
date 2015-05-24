# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eagle', '0004_wine_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='description',
            field=models.CharField(max_length=1000),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='wine',
            name='location',
            field=models.CharField(max_length=256),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='wine',
            name='name',
            field=models.CharField(max_length=256),
            preserve_default=True,
        ),
    ]
