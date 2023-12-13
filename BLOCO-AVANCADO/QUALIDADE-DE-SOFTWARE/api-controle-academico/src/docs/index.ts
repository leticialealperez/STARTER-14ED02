import { authorize, badRequest, notFound, serverError, unauthorized } from './components';
import { authPath } from './paths';
import { error } from './schemas';

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
        '/alunos': {},
        '/avaliacoes': {}
    },
    components: {
        badRequest: badRequest,
        notFound: notFound,
        unauthorized: unauthorized,
        serverError: serverError,
        securitySchemes: authorize
    },
    schemas: {
        error: error,
        avalicao: {},
        aluno: {}
    }
}

export default docs;