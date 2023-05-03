import express from 'express';

// criação do app api servidor
const app = express();

// parse / converte o JSON para o formato que o dado for (array, objeto, string, number ...)
app.use(express.json());

app.listen(8080, () => console.log("Bombou 🚀"));


// DECLARAÇÃO/ DEFINIÇÃO DAS ROTAS E SEUS VERBOS
// ROTA DE APRESENTAÇÃO DA API
app.get('/', (request, response) => {
    // request => todos os dados que forem enviados na requisição

    // response => é a resposta que será dada/enviada para a solicitação feita na respectiva rota
    return response.status(200).send('<h1>API Teste</h1><p>Descrição da api</p>')

});


/*

id,
nome
matricula
turma
skills

*/
const listaGrowdevers = [];

// CADASTRO - CREATE - post
app.post('/growdevers', (request, response) => {
    const dados = request.body

    if (!dados.id) {
        return response.status(400).json("O campo id é obrigatório")
    }

    if (!dados.nome) {
        return response.status(400).json("O campo nome é obrigatório")
    }

    if (!dados.matricula) {
        return response.status(400).json("O campo matricula é obrigatório")
    }

    // if (typeof dados.idade !== 'number') {
    //     return response.status(400).json("O campo idade deve ser do tipo number")
    // }

    // validar o recebimento do nome da turma 

    // validar o recebimento da lista de skills - string[]
    // ['JS', 'HTML', 'CSS']

    //adicionar o growdever na lista
    listaGrowdevers.push(dados)

    return response.json('OK')

})