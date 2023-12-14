export const alunoSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
            summary: 'ID do aluno',
            example: 'fcf14690-9e08-407b-911c-12354409b9d7'
        },
        nome: {
            type: 'string',
            summary: 'Nome completo do aluno',
            example: 'João da Silva'
        },
        email: {
            type: 'string',
            format: 'email',
            summary: 'E-mail do aluno',
            example: 'joao@teste.com'
        },
        idade: {
            type: 'integer',
            format: 'int32',
            summary: 'Idade do aluno',
            example: 27
        },
        endereco: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    summary: 'ID do registro de endereço do aluno',
                    example: 'fcf14690-9e08-407b-911c-12354409b9d7'
                },
                logradouro: {
                    type: 'string',
                    summary: 'Nome da rua do aluno',
                    example: 'Rua 1'
                },
                cep: {
                    type: 'string',
                    summary: 'CEP do endereço do aluno',
                    example: '99887-777'
                },
                numero: {
                    type: 'string',
                    summary: 'Numero do endereço do aluno',
                    example: 'casa 10 Bloco C'
                },
                cidade: {
                    type: 'string',
                    summary: 'Cidade do endereço do aluno',
                    example: 'Porto Alegre'
                },
                uf: {
                    type: 'string',
                    summary: 'UF do endereço do aluno',
                    example: 'RS'
                },
                complemento: {
                    type: 'string',
                    summary: 'Complemento do endereço do aluno',
                    example: 'apto 102'
                }
            },
            required: ['id', 'logradouro', 'cep', 'numero', 'cidade', 'uf']
        }
    },
    required: ['id', 'nome', 'email']
}