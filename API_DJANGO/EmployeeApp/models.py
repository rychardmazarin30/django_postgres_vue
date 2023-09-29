from django.db import models

class Departmento(models.Model):
    id_departamento = models.AutoField(primary_key=True, )
    nome_departamento = models.CharField(max_length=500)

class Funcionario(models.Model):
    id_funcionario = models.AutoField(primary_key=True, )
    nome_funcionario = models.CharField(max_length=500)
    departamento = models.CharField(max_length=500)
    data_adesao = models.DateField(max_length=500)
    arquivo_foto = models.CharField(max_length=500)
