export function validaDescricao(request, response, next) {
    const { descricao } = request.body;

    if (!descricao) {
        return response.status(400).json({
            mensagem: 'É preciso informar a descrição da transação'
        })
    }

    if (typeof descricao !== 'string') {
        return response.status(400).json({
            mensagem: 'É preciso informar a descrição do tipo string'
        })
    }

    next();
}