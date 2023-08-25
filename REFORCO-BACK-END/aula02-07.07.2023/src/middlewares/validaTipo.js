export function validaTipo(request, response, next) {
    const { tipo } = request.body;

    if (!tipo) {
        return response.status(400).json({
            mensagem: 'É preciso informar o tipo da transação'
        })
    }

    let tipoConvertido = '';

    if (typeof tipo === 'string') {
        console.log(tipo)
        tipoConvertido = tipo.toLowerCase()
    }

    if (tipoConvertido !== 'entrada' && tipoConvertido !== 'saida') {
        return response.status(400).json({
            mensagem: 'O tipo precisa ser "entrada" ou "saida"'
        })
    }

    request.body.tipo = tipoConvertido;
    next();
}