import { envs } from './envs';
import { createServer } from './server/app.server';


const server = createServer();
server.listen(envs.PORTA, () => console.log(`Servidor ta rodando na porta ${envs.PORTA}`));

