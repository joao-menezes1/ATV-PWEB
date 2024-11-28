class Cliente{

    private _cpf: string;
    private  _nome: string;
    private _conta: Conta;

    constructor(cpf: string, nome: string){
        this._cpf = cpf;
        this._nome = nome;
    }

    get cpf(){
        return this._cpf
    }

    get nome(){
        return this._nome
    }

    get conta(){
        return this._conta
    }


    set cpf(newcpf: string){
        this._cpf = newcpf;
    }

    set nome(newnome: string){
        this._nome = newnome;
    }

    inserirConta(newconta: Conta){
        this._conta = newconta;
    }

    toString(): string {
        const contaInfo = this._conta
            ? `Conta: ${this._conta.toString()}`
            : "Conta: Nenhuma conta associada";
        return `Cliente: 
        CPF: ${this._cpf}
        Nome: ${this._nome}
        ${contaInfo}`;
    }
    

    
}
