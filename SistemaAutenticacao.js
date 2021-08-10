export class SistemaAutenticacao {
    
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Functions;
    }
    
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
}