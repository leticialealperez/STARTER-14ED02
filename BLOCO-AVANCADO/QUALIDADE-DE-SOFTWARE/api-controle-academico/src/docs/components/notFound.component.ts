export const notFound = {
    description: 'Dado não encontrado',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
}