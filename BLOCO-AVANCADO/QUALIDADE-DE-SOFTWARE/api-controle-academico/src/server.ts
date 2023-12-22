import cors from 'cors';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import docs from './docs';
import { alunoRoutes, authRoutes, avaliacaoRoutes } from './routes';

export function createServer() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());

    app.use('/alunos', alunoRoutes());
    app.use('/auth', authRoutes());
    app.use('/avaliacoes', avaliacaoRoutes());
    app.use('/docs', serve, setup(docs));
    app.get('/', (_, res) => res.status(200).json({ ok: true }));

    return app;
}

// const server = createServer();
// server.listen(envs.PORTA, () => console.log(`Servidor ta rodando na porta ${envs.PORTA}`));

