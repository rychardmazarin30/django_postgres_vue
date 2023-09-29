# Generated by Django 4.2.5 on 2023-09-28 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Departmento",
            fields=[
                (
                    "id_departamento",
                    models.AutoField(primary_key=True, serialize=False),
                ),
                ("nome_departamento", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="Funcionario",
            fields=[
                ("id_funcionario", models.AutoField(primary_key=True, serialize=False)),
                ("nome_funcionario", models.CharField(max_length=500)),
                ("departamento", models.CharField(max_length=500)),
                ("data_adesao", models.DateField(max_length=500)),
                ("arquivo_foto", models.CharField(max_length=500)),
            ],
        ),
    ]