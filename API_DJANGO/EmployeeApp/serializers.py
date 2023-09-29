from rest_framework import serializers
from EmployeeApp.models import Departmento, Funcionario

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departmento
        fields=("id_departamento", "nome_departamento")

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Funcionario
        fields=("id_funcionario", "nome_funcionario", "departamento", "data_adesao", "arquivo_foto")