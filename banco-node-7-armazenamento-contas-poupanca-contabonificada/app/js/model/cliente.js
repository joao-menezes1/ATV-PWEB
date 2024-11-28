class Cliente {
    constructor(cpf, nome) {
        this._cpf = cpf;
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
    get conta() {
        return this._conta;
    }
    set cpf(newcpf) {
        this._cpf = newcpf;
    }
    set nome(newnome) {
        this._nome = newnome;
    }
    inserirConta(newconta) {
        this._conta = newconta;
    }
    toString() {
        const contaInfo = this._conta
            ? `Conta: ${this._conta.toString()}`
            : "Conta: Nenhuma conta associada";
        return `Cliente: 
        CPF: ${this._cpf}
        Nome: ${this._nome}
        ${contaInfo}`;
    }
}
