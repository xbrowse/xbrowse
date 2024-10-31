# Generated by Django 4.2.16 on 2024-10-27 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seqr', '0076_alter_individual_sex'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rnasample',
            name='tissue_type',
            field=models.CharField(choices=[('WB', 'whole_blood'), ('F', 'fibroblasts'), ('M', 'muscle'), ('L', 'lymphocytes'), ('A', 'airway_cultured_epithelium'), ('B', 'brain')], max_length=2),
        ),
    ]