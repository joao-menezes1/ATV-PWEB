class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteRemover: Cliente = this.pesquisar(cpf);
        if (clienteRemover) {
            const indiceCliente = this.clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        const cliente =  this.clientes.find(
            cliente => cliente.cpf === cpf
        );

        if (cliente) {
            return cliente
        } else{
            new Error("Cliente não encontrado");
        }
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}
