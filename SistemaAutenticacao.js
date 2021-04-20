export class SistemaAutenticacao {
    static login (funcionario, senha) {
        if (funcionario.senha === senha) {
            return true
        }

        return false
    }
}
