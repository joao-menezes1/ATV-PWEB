let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();


const clientes = new Clientes();

const C1 = new Cliente('122', 'João');
const C2 = new Cliente('222', 'Silas');


clientes.inserir(C1);
clientes.inserir(C2);

const conta1 = new Conta('2', 100);

const conta2 = new Conta('3', 200);

C1.inserirConta(conta1);

console.log(clientes.listar());

console.log(clientes.pesquisar('122'));
