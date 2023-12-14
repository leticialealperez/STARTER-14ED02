import { badRequest, notFound, securitySchemes, serverError, unauthorized } from './components';
import { alunosPath, alunosPathWithId, authPath } from './paths';
import { alunoSchema, error } from './schemas';

const docs = {
    openapi: "3.0.0",
    info: {
        title: "API Controle Acadêmico - Turma 14ed 02",
        description: "Endpoints do Projeto Controle Acadêmico",
        version: "1.0.0",
        contact: {
            email: "mentor13@growdev.academy"
        }
    },
    servers: [
        {
            url: "http://localhost:8080"
        }
    ],
    paths: {
        '/auth/login': authPath,
        '/alunos': alunosPath,
        '/alunos/{id}': alunosPathWithId,
        '/avaliacoes': {}
    },
    components: {
        badRequest: badRequest,
        notFound: notFound,
        unauthorized: unauthorized,
        serverError: serverError,
        securitySchemes: securitySchemes
    },
    schemas: {
        error: error,
        aluno: alunoSchema,
        avalicao: {},
    }
}

export default docs;