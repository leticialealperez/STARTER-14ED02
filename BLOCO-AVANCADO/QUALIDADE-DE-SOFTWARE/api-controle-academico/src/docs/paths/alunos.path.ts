export const alunosPath = {
    post: {
        tags: ['Alunos'],
        summary: 'Endpoint para cadastrar um aluno',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            nome: {
                                type: 'string',
                                summary: 'Nome completo do aluno a ser cadastrado.',
                                example: 'João da Silva'
                            },
                            email: {
                                type: 'string',
                                format: 'email',
                                summary: 'E-mail do aluno que será utilizado para acessar a aplicação.',
                                example: 'joao@teste.com'
                            },
                            senha: {
                                type: 'string',
                                summary: 'Senha do aluno que será utilizada para acessar a aplicação.',
                                example: 'senha123@'
                            },
                            tipo: {
                                type: 'string',
                                summary: 'Tipo do aluno a ser cadastrado. Aceita apenas M - MATRICULADO, T - TECH HELPER e F - FORMADO',
                                example: 'T'
                            },
                            idade: {
                                type: 'integer',
                                format: 'int32',
                                summary: 'Idade do aluno',
                                example: 27
                            }
                        },
                        required: ['nome', 'email', 'senha', 'tipo']
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
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
                                    example: true
                                },
                                mensagem: {
                                    type: 'string',
                                    summary: 'Mensagem amigável para mostrar ao usuário',
                                    example: 'Aluno cadastrado com sucesso!'
                                },
                                dados: {
                                    $ref: '#/schemas/aluno'
                                }
                            },
                            required: ["code", "ok", "mensagem", "dados"],
                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
    get: {
        tags: ['Alunos'],
        summary: 'Endpoint para listar os alunos cadastrados',
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                code: {
                                    type: 'integer',
                                    format: 'int32',
                                    summary: 'Status code conforme padrão REST',
                                    example: 200,
                                },
                                ok: {
                                    type: 'boolean',
                                    summary: 'Indica se a requisição deu certo ou não',
                                    example: true
                                },
                                mensagem: {
                                    type: 'string',
                                    summary: 'Mensagem amigável para mostrar ao usuário',
                                    example: 'Alunos listados com sucesso!'
                                },
                                dados: {
                                    type: 'array',
                                    summary: 'Lista de alunos cadastrados',
                                    items: {
                                        $ref: '#/schemas/aluno'
                                    }
                                }
                            },
                            required: ["code", "ok", "mensagem", "dados"],
                        }
                    }
                }
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
}

export const alunosPathWithId = {
    get: {
        tags: ['Alunos'],
        summary: 'Endpoint para buscar um aluno por ID',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
           {
            name: "id",
            in: "path",
            description: "ID do aluno buscado",
            required: true,
            schema: {
              type: "string",
              format: "uuid"
            }
          } 
        ],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                code: {
                                    type: 'integer',
                                    format: 'int32',
                                    summary: 'Status code conforme padrão REST',
                                    example: 200,
                                },
                                ok: {
                                    type: 'boolean',
                                    summary: 'Indica se a requisição deu certo ou não',
                                    example: true
                                },
                                mensagem: {
                                    type: 'string',
                                    summary: 'Mensagem amigável para mostrar ao usuário',
                                    example: 'Aluno encontrado com sucesso!'
                                },
                                dados: {
                                    $ref: '#/schemas/aluno'
                                }
                            },
                            required: ["code", "ok", "mensagem", "dados"],
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
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
    put: {
        tags: ['Alunos'],
        summary: 'Endpoint para atualizar os dados de um aluno',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
           {
            name: "id",
            in: "path",
            description: "ID do aluno",
            required: true,
            schema: {
              type: "string",
              format: "uuid"
            }
          } 
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            nome: {
                                type: 'string',
                                summary: 'Nome completo do aluno a ser cadastrado.',
                                example: 'João da Silva'
                            },
                            senha: {
                                type: 'string',
                                summary: 'Senha do aluno que será utilizada para acessar a aplicação.',
                                example: 'senha123@'
                            },
                            idade: {
                                type: 'integer',
                                format: 'int32',
                                summary: 'Idade do aluno',
                                example: 27
                            }
                        },
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                code: {
                                    type: 'integer',
                                    format: 'int32',
                                    summary: 'Status code conforme padrão REST',
                                    example: 200,
                                },
                                ok: {
                                    type: 'boolean',
                                    summary: 'Indica se a requisição deu certo ou não',
                                    example: true
                                },
                                mensagem: {
                                    type: 'string',
                                    summary: 'Mensagem amigável para mostrar ao usuário',
                                    example: 'Aluno atualizado com sucesso!'
                                },
                                dados: {
                                    $ref: '#/schemas/aluno'
                                }
                            },
                            required: ["code", "ok", "mensagem", "dados"],
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
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
    delete: {
        tags: ['Alunos'],
        summary: 'Endpoint para buscar um aluno por ID',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
           {
            name: "id",
            in: "path",
            description: "ID do aluno",
            required: true,
            schema: {
              type: "string",
              format: "uuid"
            }
          } 
        ],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                code: {
                                    type: 'integer',
                                    format: 'int32',
                                    summary: 'Status code conforme padrão REST',
                                    example: 200,
                                },
                                ok: {
                                    type: 'boolean',
                                    summary: 'Indica se a requisição deu certo ou não',
                                    example: true
                                },
                                mensagem: {
                                    type: 'string',
                                    summary: 'Mensagem amigável para mostrar ao usuário',
                                    example: 'Aluno encontrado com sucesso!'
                                },
                                dados: {
                                    $ref: '#/schemas/aluno'
                                }
                            },
                            required: ["code", "ok", "mensagem", "dados"],
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
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
}