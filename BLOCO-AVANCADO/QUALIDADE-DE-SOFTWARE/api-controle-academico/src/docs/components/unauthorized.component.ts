export const unauthorized = {
    description: 'Não autorizado',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
}