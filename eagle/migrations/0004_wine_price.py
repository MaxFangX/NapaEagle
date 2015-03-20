# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eagle', '0003_auto_20150320_0738'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='price',
            field=models.DecimalField(max_digits=7, decimal_places=2, default=78.22),
            preserve_default=False,
        ),
    ]
