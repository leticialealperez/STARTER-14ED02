import { decodificarToken, verificarToken } from "../utilitarios/jwt"


export function validaToken(request, response, next) {
    const tokenHeader = request.headers.authorization

    // SE NÃO VIER TOKEN
    if(!tokenHeader) {
        return response.status(401).json({
            mensagem: 'Token inválido. Não autorizado!'
        })
    }

    // RETORNA TRUE OU FALSE
    const possuiBearer = tokenHeader.startsWith('Bearer ')

    // SET NO TOKEN QUE VIER NÃO TEM A PALAVRA 'Bearer '
    if(!possuiBearer) {
        return response.status(401).json({
            mensagem: 'Token inválido. Não autorizado!'
        })
    }

    // REMOVE A PARALAVRA 'Bearer '
    const tokenSemBearer = tokenHeader.substring(7)

    // VERIFICA O TOKEN 
    const tokenValido = verificarToken(tokenSemBearer)

    if(!tokenValido) {
        return response.status(401).json({
            mensagem: 'Token inválido. Não autorizado!'
        })
    }

    // {id: 'aoskdoask', email: 'example@gmail.com'}
    const usuarioDecodificado = decodificarToken(tokenSemBearer)

    console.log(usuarioDecodificado)

    // MANDA NO AUTHORIZATION O ID DO USUARIO LOGADO
    request.headers.authorization = usuarioDecodificado

    next()
}