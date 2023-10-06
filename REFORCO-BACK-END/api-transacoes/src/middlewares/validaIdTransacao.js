import { carteira } from ".."

export function validaIDTransacao(request, response, next) {
    const { idTransacao } = request.params

    const indiceEncontrado = carteira.transacoes.findIndex((transacao) => transacao.id === idTransacao)

    if (indiceEncontrado === -1) {
        return response.status(404).json({
            mensagem: "Este ID informado não consta na base de dados!"
        })
    }

    request.body.indiceTransacao = indiceEncontrado
    next()

}