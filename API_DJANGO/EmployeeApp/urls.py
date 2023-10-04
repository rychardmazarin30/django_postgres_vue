from django.urls import re_path
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path(r"^departamento$", views.departamentoApi, name="departamentoApi"),
    re_path(r"^departamento/([0-9]+)$", views.departamentoApi, name="departamentoApi"),

    re_path(r"^funcionario$", views.funcionarioApi, name="funcionarioApi"),
    re_path(r"^funcionario/([0-9]+)$", views.funcionarioApi, name="funcionarioApi"),

    re_path(r"^funcionario/salvararquivo", views.salvarArquivo, name="salvarArquivo")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
