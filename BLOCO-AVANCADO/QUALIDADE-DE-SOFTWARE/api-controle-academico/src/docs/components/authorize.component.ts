export const authorize = {
    bearerAuth: {
        type: 'http',
        name: 'Authorization',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Informar o token para acessar as rotas privadas'
    }
}