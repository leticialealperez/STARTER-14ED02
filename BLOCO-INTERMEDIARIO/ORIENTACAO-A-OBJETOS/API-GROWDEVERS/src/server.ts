import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rotas from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(process.env.PORTA, () =>
	console.log(`API Growdever rodando na porta ${process.env.PORTA}`)
);
