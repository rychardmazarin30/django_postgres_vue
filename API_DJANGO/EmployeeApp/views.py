from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departmento, Funcionario
from EmployeeApp.serializers import DepartamentoSerializer, FuncionarioSerializer

from django.core.files.storage import default_storage

@csrf_exempt
def departamentoApi(request, id=0):
    if request.method == "GET":
        departamento = Departmento.objects.all()
        departamento_serializer = DepartamentoSerializer(departamento, many=True)
        return JsonResponse(departamento_serializer.data, safe=False)

    elif request.method == "POST":
        departamento_data = JSONParser().parse(request)
        departamento_serializer = DepartamentoSerializer(data=departamento_data)
        if departamento_serializer.is_valid():
            departamento_serializer.save()
            return JsonResponse("Adicionado com Sucesso!", safe=False)
        return JsonResponse("Falha ao adicionar", safe=False)

    elif request.method == "PUT":
        departamento_data = JSONParser().parse(request)
        departamento = Departmento.objects.get(id_departamento=departamento_data["id_departamento"])
        departamento_serializer = DepartamentoSerializer(departamento, data=departamento_data)
        if departamento_serializer.is_valid():
            departamento_serializer.save()
            return JsonResponse("Atualizado com Sucesso!", safe=False)
        return JsonResponse("Falha ao adicionar", safe=False)

    elif request.method == "DELETE":
        departamento = Departmento.objects.get(id_departamento=id)
        departamento.delete()
        return JsonResponse("Excluido com Sucesso!", safe=False)
    

@csrf_exempt
def funcionarioApi(request, id=0):
    if request.method == "GET":
        funcionario = Funcionario.objects.all()
        funcionario_serializer = FuncionarioSerializer(funcionario, many=True)
        return JsonResponse(funcionario_serializer.data, safe=False)
    
    elif request.method == "POST":
        funcionario_data = JSONParser().parse(request)
        funcionario_serializer = FuncionarioSerializer(data=funcionario_data)
        if funcionario_serializer.is_valid():
            funcionario_serializer.save()
            return JsonResponse("Adicionado com Sucesso!", safe=False)
        return JsonResponse("Falha ao adicionar", safe=False)
    
    elif request.method == "PUT":
        funcionario_data = JSONParser().parse(request)
        funcionario = Funcionario.objects.get(id_funcionario=funcionario_data["id_funcionario"])
        funcionario_serializer = FuncionarioSerializer(funcionario, data=funcionario_data)
        if funcionario_serializer.is_valid():
            funcionario_serializer.save()
            return JsonResponse("Atualizado com Sucesso!", safe=False)
        return JsonResponse("Falha ao adicionar", safe=False)

    elif request.method == "DELETE":
        funcionario = Funcionario.objects.get(id_funcionario=id)
        funcionario.delete()
        return JsonResponse("Excluido com Sucesso!", safe=False)
    

@csrf_exempt
def salvarArquivo(request):
    arquivo = request.FILES['arquivo']
    nome_arquivo = default_storage.save(arquivo.name, arquivo)

    return JsonResponse(nome_arquivo, safe=False)


    
