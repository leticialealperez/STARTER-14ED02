export function validaFiltros(request, response, next) {
    const { tipoTransacao, valorMin, valorMax } = request.query;

    if (tipoTransacao) {

        if (typeof tipoTransacao !== 'string' && tipoTransacao !== 'entrada' && tipoTransacao !== 'saida') {
            return response.status(400).json({
                mensagem: "Parametro inválido para tipo da transação."
            });
        }

        request.body.tipoTransacao = tipoTransacao.toLowerCase()
    }

    if (valorMin && valorMax) {
        const valorMinConvertido = Number(valorMin)
        const valorMaxConvertido = Number(valorMax)

        if (isNaN(valorMinConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor mínimo."
            })
        }

        if (isNaN(valorMaxConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor máximo."
            })
        }

        if (valorMinConvertido > valorMaxConvertido) {
            return response.status(400).json({
                mensagem: "Parametros inválidos. O valor mínimo deve ser menor que o valor máximo."
            })
        }

        request.body.valorMin = valorMinConvertido;
        request.body.valorMax = valorMaxConvertido;

    }

    if (valorMin) {
        const valorMinConvertido = Number(valorMin)

        if (isNaN(valorMinConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor mínimo."
            })
        }

        request.body.valorMin = valorMinConvertido;
    }

    if (valorMax) {
        const valorMaxConvertido = Number(valorMax)

        if (isNaN(valorMaxConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor máximo."
            })
        }

        request.body.valorMax = valorMaxConvertido;
    }

    next();
}