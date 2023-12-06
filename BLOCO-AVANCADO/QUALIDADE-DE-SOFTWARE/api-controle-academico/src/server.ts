import cors from 'cors';
import express from 'express';
import { envs } from './envs';
import { alunoRoutes, authRoutes, avaliacaoRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth', authRoutes());
app.use('/alunos', alunoRoutes());
app.use('/avaliacoes', avaliacaoRoutes());

app.listen(envs.PORTA, () => console.log(`Servidor ta rodando na porta ${envs.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ ok: true }));
