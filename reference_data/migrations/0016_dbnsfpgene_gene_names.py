# -*- coding: utf-8 -*-
# Generated by Django 1.11.22 on 2019-08-09 17:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reference_data', '0015_auto_20190625_1813'),
    ]

    operations = [
        migrations.AddField(
            model_name='dbnsfpgene',
            name='gene_names',
            field=models.TextField(blank=True),
        ),
    ]
