/*

padrão do nome do arquivo => PascalCase
extensão => .tsx
num componente só é recebido um parametro que deve ser um objeto

*/

import BotaoEstilo from './BotaoEstilo';

interface MeuBotaoParametro {
	tituloBotao: string;
	primario?: boolean;
}

function MeuBotao(prop: MeuBotaoParametro) {
	return (
		<BotaoEstilo
			meuestilo={{ altura: '80px', largura: '200px' }}
			primary={prop.primario}
		>
			{prop.tituloBotao}
		</BotaoEstilo>
	);
}

export default MeuBotao;
