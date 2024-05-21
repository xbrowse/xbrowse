# Generated by Django 3.2.23 on 2024-05-16 15:05

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seqr', '0064_alter_phenotypeprioritization'),
    ]

    operations = [
        migrations.AddField(
            model_name='family',
            name='external_data',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('M', 'Methylation'), ('P', 'PacBio lrGS'), ('R', 'PacBio RNA'), ('L', 'ONT lrGS'), ('O', 'ONT RNA'), ('B', 'BioNano')], max_length=1, null=True), default=list, size=None),
        ),
    ]