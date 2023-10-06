import * as bcrypt from 'bcrypt';

// GERAR O HASH - cadastro do usuario
export async function gerarHash(senha) {

    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    return senhaCriptografada;
}

export async function compararHash(senha, hashComparar) {

    const ehIgual = await bcrypt.compare(senha, hashComparar)
    return ehIgual

}
