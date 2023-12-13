export const error = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32',
            summary: 'Status code conforme padrão REST',
        },
        ok: {
            type: 'boolean',
            summary: 'Indica se a requisição deu certo ou não',
            example: false
        },
        mensagem: {
            type: 'string',
            summary: 'Mensagem amigável para mostrar ao usuário',
            example: 'Erro ocorrido'
        },
    },
    required: ["code", "ok", "mensagem"],
}