export const serverError = {
    description: 'Erro no servidor ou base de dados',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
}