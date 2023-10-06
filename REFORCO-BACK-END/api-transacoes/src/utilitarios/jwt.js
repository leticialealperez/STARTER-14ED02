import jwt from 'jsonwebtoken'
import 'dotenv/config'


export function gerarToken(dado) {
    const tokenGerado = jwt.sign(dado, process.env.JWT_CHAVE)

    return tokenGerado
}

export function verificarToken(token) {
    try {
        const tokenVerificado = jwt.verify(token, process.env.JWT_CHAVE)

        return tokenVerificado
    } catch (error) {
        return null
    }  
}

export function decodificarToken(token) {
    const tokenDecodificado = jwt.decode(token)

    return tokenDecodificado
}