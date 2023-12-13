export const authPath = {
    post: {
        tags: ['Autenticação'],
        summary: 'Endpoint para gerar o token de autorização do aluno usuário',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        required: ['email', 'senha'],
                        type: "object",
                        properties: {
                            email: {
                                type: 'string',
                                format: 'email',
                                summary: 'E-mail de acesso à aplicação',
                                example: 'teste@teste.com'
                            },
                            senha: {
                                type: 'string',
                                summary: 'Senha de acesso à aplicação',
                                example: 'senha123@'
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Sucesso",
                content: {
                    'application/json': {
                        schema: {
                            required: ['code', 'ok', 'mensagem', 'dados'],
                            type: "object",
                            properties: {
                                code: {
                                    type: 'integer',
                                    format: 'int32',
                                    summary: 'Status code conforme padrão REST',
                                    example: 200
                                },
                                ok: {
                                    type: 'boolean',
                                    summary: 'Indica se a requisição deu certo ou não',
                                    example: true
                                },
                                mensagem: {
                                    type: 'string',
                                    summary: 'Mensagem amigável para mostrar ao usuário',
                                    example: 'Login efetuado com sucesso!'
                                },
                                dados: {
                                    type: 'object',
                                    properties: {
                                        token: {
                                            type: 'string',
                                            format: 'JWT',
                                            summary: 'Token de autorização gerado a partir dos dados do aluno logado',
                                            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                                        },
                                        dadosAluno: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'string',
                                                    format: 'uuid',
                                                    summary: 'ID do aluno logado'
                                                },
                                                email: {
                                                    type: 'string',
                                                    format: 'email',
                                                    summary: 'E-mail do aluno logado'
                                                }
                                            },
                                            required: ['id', 'email']
                                        }
                                    },
                                    required: ['token', 'dadosAluno'],
                                }
                            }

                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            500: {
                $ref: '#/components/serverError'
            },
        }
    }
}