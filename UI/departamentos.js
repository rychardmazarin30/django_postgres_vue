const departamentos = {template: `

<div>

<button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">
    Adicionar Departamento
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            ID Departamento
        </th>
        <th>
            Nome Departamento
        </th>
        <th>
            Opções
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="dep in departamentos">
        <td>{{ dep.id_departamento }}</td>
        <td>{{ dep.nome_departamento }}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(dep)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(dep.id_departamento)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text">Nome Departamento</span>
            <input type="text" class="form-control" v-model="nome_departamento">
        </div>

        <button type="button" @click="createClick()" v-if="id_departamento==0" class="btn btn-primary">
            Criar
        </button>

        <button type="button" @click="updateClick()" v-if="id_departamento!=0" class="btn btn-primary">
            Atualizar
        </button>
    </div>
</div>
</div>
</div>

</div>

`, 

data(){
    return {
        departamentos: [],
        modalTitle: "",
        id_departamento: 0,
        nome_departamento: "",   
    }
},
methods: {
    refreshData(){
        axios.get(variables.API_URL + "departamento")
        .then((response) => {
            this.departamentos = response.data;
        });
    },
    addClick(){
        this.modalTitle = "Adicionar Departamento";
        this.id_departamento = 0;
        this.nome_departamento = "";
    },
    editClick(dep){
        this.modalTitle = "Editar Departamento";
        this.id_departamento = dep.id_departamento;
        this.nome_departamento = dep.nome_departamento;
    }, 
    createClick(){
        axios.post(variables.API_URL + "departamento", {
            nome_departamento: this.nome_departamento
        })
        .then((response) => {
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL + "departamento", {
            id_departamento: this.id_departamento,
            nome_departamento: this.nome_departamento
        })
        .then((response) => {
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Você tem certeza que deseja excluir?")){
            return;
        }
        axios.delete(variables.API_URL + "departamento/" + id)
        .then((response) => {
            this.refreshData();
            alert(response.data);
        });
    }
},
mounted: function(){
    this.refreshData();
}

};