export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, _cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
};
