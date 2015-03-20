# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('eagle', '0002_auto_20150319_0452'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2015, 3, 20, 7, 38, 50, 215843, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='wine',
            name='last_updated',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 20, 7, 38, 59, 276697, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
    ]
