class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indiceCliente = this.clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        const cliente = this.clientes.find(cliente => cliente.cpf === cpf);
        if (cliente) {
            return cliente;
        }
        else {
            new Error("Cliente não encontrado");
        }
    }
    listar() {
        return this.clientes;
    }
}
