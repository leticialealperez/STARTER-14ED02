export function validaValor(request, response, next) {
    const { valor } = request.body;

    if (!valor) {
        return response.status(400).json({
            mensagem: 'É preciso informar o valor da transação'
        })
    }

    const valorConvertido = Number(valor)

    if (isNaN(valorConvertido) || valorConvertido < 0) {
        return response.status(400).json({
            mensagem: "o dado enviado para valor não é um dado numérico válido."
        })
    }

    // { valor: "1000" } => { valor: 1000 }
    request.body.valor = valorConvertido
    next();

}