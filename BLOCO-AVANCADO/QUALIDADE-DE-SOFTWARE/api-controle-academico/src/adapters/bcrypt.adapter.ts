import bcrypt from 'bcrypt';
// salt - quantidade de numeros que serão gerados para embaralhar a senha e tornar a hash mais complexa

// gerarHash - recebe a senha que o usuario quer cadastrar e devolve a senha embaralhada (hash)
// compararHash - receber a senha informada no login e a hash que foi salva no banco e retorna true ou false

export class BcryptAdapter {
    private _salt: number;

    constructor(salt: number) {
        this._salt = salt;
    }

    public async gerarHash(senha: string): Promise<string> {
        const hash = await bcrypt.hash(senha, this._salt);
        return hash;
    }

    public async compararHash(senha: string, hash: string): Promise<boolean> {
        const corresponde = await bcrypt.compare(senha, hash);
        return corresponde;
    }

}