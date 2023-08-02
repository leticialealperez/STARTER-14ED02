/*

padrão do nome do arquivo => PascalCase
extensão => .tsx
num componente só é recebido um parametro que deve ser um objeto

*/

interface MeuBotaoParametro {
	tituloBotao: string;
}

function MeuBotao(prop: MeuBotaoParametro) {
	return <button>{prop.tituloBotao}</button>;
}

export default MeuBotao;
