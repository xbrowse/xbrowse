# Generated by Django 3.2.11 on 2022-03-08 19:49

from django.db import migrations, models

def set_demo_projects(apps, schema_editor):
    ProjectCategory = apps.get_model('seqr', 'ProjectCategory')
    db_alias = schema_editor.connection.alias

    demo_categories =  ProjectCategory.objects.using(db_alias).filter(name='Demo')
    if not demo_categories:
        return

    demo_category = demo_categories.first()
    demo_category.projects.update(is_demo=True)
    print(f'Set demo status for {demo_category.projects.count()} projects')

def remove_demo_project_category(apps, schema_editor):
    ProjectCategory = apps.get_model('seqr', 'ProjectCategory')
    db_alias = schema_editor.connection.alias

    demo_categories =  ProjectCategory.objects.using(db_alias).filter(name='Demo')
    if not demo_categories:
        return
    demo_categories.first().delete()

def create_demo_project_category(apps, schema_editor):
    Project = apps.get_model('seqr', 'Project')
    ProjectCategory = apps.get_model('seqr', 'ProjectCategory')
    db_alias = schema_editor.connection.alias

    demo_projects = Project.objects.using(db_alias).filter(is_demo=True)
    if not demo_projects:
        return

    project_category = ProjectCategory.objects.using(db_alias).create(name='Demo')
    project_category.projects.update(demo_projects)
    print(f'Created demo project category with {demo_projects.count()} projects')


class Migration(migrations.Migration):

    dependencies = [
        ('seqr', '0038_alter_family_analysis_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='is_demo',
            field=models.BooleanField(default=False),
        ),
        migrations.RunPython(set_demo_projects, reverse_code=migrations.RunPython.noop),
        migrations.RunPython(remove_demo_project_category, reverse_code=create_demo_project_category),
    ]
