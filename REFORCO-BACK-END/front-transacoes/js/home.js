const modalCadastrar = new bootstrap.Modal("#transaction-modal");
let token = JSON.parse(sessionStorage.getItem("usuarioLogado"));
let tokenLocal = JSON.parse(localStorage.getItem("usuarioLogado"));

verificarSeEstaLogado();

// Configurar o axios (nova instancia)
const api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    headers: { Authorization: `Bearer ${token}` }, // Preseta no nosso headers o token
});


// CADASTRAR TRANSACAO
document
    .getElementById("transaction-form")
    .addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const valor = document.getElementById("value-input").value;
        const descricao = document.getElementById("description-input").value;
        const tipo = document.querySelector(
            'input[name="type-input"]:checked'
        ).value;

        console.log("VALOR: ", valor);
        console.log("DESCRICAO: ", descricao);
        console.log("TIPO: ", tipo);

        // VALIDAÇõES
        if (valor <= 0) {
            alert("❌ Verifique o valor, não pode ser menor ou igual a 0.");
        }

        if (descricao.length < 3) {
            alert("❌ Insira uma descrição maior que 3 caracteres.");
        }

        try {
            // const resultado = await api.post('/transacoes', {valor, descricao, tipo}, { headers: {'Authorization': `Bearer ${token}`} });
            const resultado = await api.post("/transacoes", {
                valor,
                descricao,
                tipo,
            });

            modalCadastrar.hide();
            evento.target.reset();

            console.log(resultado.data.dados);

            const entradasFilter = resultado.data.dados.transacoes.filter(
                (transacao) => transacao.tipo === "entrada"
            );
            const saidasFilter = resultado.data.dados.transacoes.filter(
                (transacao) => transacao.tipo === "saida"
            );

            mostrarTransacoes(entradasFilter, saidasFilter);
            mostrarSaldo(resultado.data.dados.saldo);

            alert(`✔ ${resultado.data.mensagem}`);
        } catch (error) {
            console.log(error);
            alert(`❌ ${error.response.data.mensagem}`);
        }
    });

// BUSCAR TODAS AS TRANSACOES QUANDO DADO REFRESHER OU A PRIMEIRA VEZ
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const resultadoEntradas = await api.get("/transacoes", {
            params: { tipoTransacao: "entrada" },
        });
        const resultadoSaidas = await api.get("/transacoes", {
            params: { tipoTransacao: "saida" },
        });

        console.log(resultadoEntradas.data.dados);
        console.log(resultadoSaidas.data.dados);

        mostrarTransacoes(
            resultadoEntradas.data.dados.transacoes,
            resultadoSaidas.data.dados.transacoes
        );

        mostrarSaldo(resultadoEntradas.data.dados.saldo)

    } catch (error) {
        console.log(error.response.data.mensagem);
        alert(`❌ ${error.response.data.mensagem}`)
        sair();
    }
});

function mostrarTransacoes(listaEntradas, listaSaidas) {
    let entradasInnerHtml = '';
    listaEntradas.forEach(
        (transacao) =>
        entradasInnerHtml +=
            `   <div class="row mb-4">
                    <div class="col-12">
                         <div class="container p-0 mb-3">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <h3 class="fs-2">R$ ${transacao.valor.toFixed(2)}</h3>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-end gap-2">
                                    <button type="button" class="btn button-default"
                                        onclick="editar()">Editar</button>
                                    <button type="button" class="btn button-default"
                                        onclick="apagar()">Apagar</button>
                                </div>
                            </div>
                        </div>
                        <div class="container p-0">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <p>${transacao.descricao}</p>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-center">
                                    ${transacao.dataLancamento}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    );

    let saidasInnerHtml = '';
    listaSaidas.map(
        (transacao) =>
        saidasInnerHtml +=
            `   <div class="row mb-4">
                    <div class="col-12">
                        <div class="container p-0 mb-3">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <h3 class="fs-2">R$ ${transacao.valor.toFixed(2)}</h3>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-end gap-2">
                                    <button type="button" class="btn button-default"
                                        onclick="editar()">Editar</button>
                                    <button type="button" class="btn button-default"
                                        onclick="apagar()">Apagar</button>
                                </div>
                            </div>
                        </div>
                        <div class="container p-0">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <p>${transacao.descricao}</p>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-center">
                                    ${transacao.dataLancamento}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    );
    // Mostrar na div de entradas e saidas
    document.getElementById("div-entradas").innerHTML = entradasInnerHtml;
    document.getElementById("div-saidas").innerHTML = saidasInnerHtml;
}

function mostrarSaldo(saldo) {
    document.getElementById("total").innerHTML = `R$ ${saldo.toFixed(2)}`
}

// FUNÇÃO PARA SAIR 
function sair() {
    localStorage.removeItem("usuarioLogado");
    sessionStorage.removeItem("usuarioLogado");

    window.location.href = "index.html";
};

document.getElementById("button-logout").addEventListener("click", sair);

function verificarSeEstaLogado() {
    // Se tiver no localStorage, seta para o session
    if (tokenLocal) {
        sessionStorage.setItem("usuarioLogado", JSON.stringify(tokenLocal))

        // Atribui o que tem no localStorage p/ o sessionStorage
        token = tokenLocal
    }

    // Se não tiver token no sessionStorage navega para o index.html
    if(!token) {
        window.location.href = "index.html"
        return
    }
}

function editar(id) {
    alert("Editando....", id);
}

function apagar(id) {
    alert("Apagando....", id);
}
