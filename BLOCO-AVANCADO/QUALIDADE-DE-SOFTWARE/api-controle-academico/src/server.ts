import cors from 'cors';
import express from 'express';
import { docsRoutes } from './docs/config-swagger';
import { envs } from './envs';
import { alunoRoutes, authRoutes, avaliacaoRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth', authRoutes());
app.use('/alunos', alunoRoutes());
app.use('/avaliacoes', avaliacaoRoutes());
app.use('/docs', docsRoutes());

app.listen(envs.PORTA, () => console.log(`Servidor ta rodando na porta ${envs.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ ok: true }));
