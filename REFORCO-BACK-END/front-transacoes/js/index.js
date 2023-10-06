const modalCadastrar = new bootstrap.Modal('#register-modal');

localStorage.setItem('usuarioLogado', JSON.stringify(""))
sessionStorage.setItem('usuarioLogado', JSON.stringify(""))

// Configura o axios (instancia)
const api = axios.create({
  baseURL: "http://localhost:8080", // Aqui definimos nossa URL default
  timeout: 5000, // (opcional) podemos definir um time limite para as requisições
});

// POST | GET | PUT | DELETE

// Cadastrar usuarios
async function cadastrarUsuario(email, senha) {
  try {
    //                                  url         body
    const resposta = await api.post("/usuarios", { email, senha });
    console.log(resposta.data);

    // Esse data é o da requisição e dentro dele tem o nosso dados = {....}
    return resposta.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
}

async function fazerLogin(email, senha) {
    try {
        const resposta = await api.post('/usuarios/login', { email: email, senha: senha })
        console.log(resposta.data);

        // Esse data é o da requisição e dentro dele tem o nosso dados = {....}
        return resposta.data
    } catch (error) {
        console.log(error.response.data);
        throw error.response.data;
    }
}

// Função para limpar minhas inputs de CADASTRO
function limparInputsDeCadastro() {
    // Pega os valores da inputs e atribui o valor de string vazia 
    const email = document.getElementById("email-create-input").value = '';
    const senha = document.getElementById("password-create-input").value = '';
    const repetirSenha = document.getElementById("re-password-create-input").value = '';
}

// Função para limpar minhas inputs de LOGIN
function limparInputsDeLogin() {
    const email = document.getElementById('email-input').value = '';
    const senha = document.getElementById('password-input').value = '';
    const inputCheck = document.getElementById('session-check').checked = false;
}

// CADASTRO DE USUARIOS
document.getElementById("create-form").addEventListener("submit", async (evento) => {
    // Previne qualquer comportamento padrão do nosso form
    evento.preventDefault();

    // Pega os valores da inputs
    const email = document.getElementById("email-create-input").value;
    const senha = document.getElementById("password-create-input").value;
    const repetirSenha = document.getElementById("re-password-create-input").value;

    console.log(email);
    console.log(senha);
    console.log(repetirSenha);

    // VALIDAÇõES de dados (inputs)
    if (email.length < 5 || !email.includes(".com")) {
      alert("❌ Insira um email válido!");
      return;
    }

    if (senha.length < 6) {
      alert("❌ Senha deve conter no minimo 6 caracteres!");
      return;
    }

    if (senha !== repetirSenha) {
      alert("❌ As senhas não condizem!");
      return;
    }

    // Chamar a função para cadastrar usuário
    try {
      //    const resposta = await api.post("/usuarios", { email, senha });
      const resposta = await cadastrarUsuario(email, senha);

      modalCadastrar.hide();
      limparInputsDeCadastro();

      // Mostra o alerta conforme a mensagem da api
      alert(`✔ ${resposta.mensagem}`);
    } catch (error) {
      // Mostra o alerta conforme a mensagem da api
      alert(`❌ ${error.mensagem}`);
    }
  });

  // LOGIN
  document.getElementById('login-form').addEventListener('submit', async (evento) => {
    // Previne qualquer comportamento padrão do nosso form
    evento.preventDefault()

    const email = document.getElementById('email-input').value;
    const senha = document.getElementById('password-input').value;
    const inputCheck = document.getElementById('session-check').checked;

    console.log(email)
    console.log(senha)
    console.log(inputCheck)

    // Validações de dados (inputs)
      if (email.length < 5 || !email.includes(".com")) {
      alert("❌ Insira um email válido!");
      return;
    }

    // Chamda da função fazer login
    try {
        const resposta = await fazerLogin(email, senha);

        // Caso de bom, fazemos a navegação para a home
        window.location.href = "home.html";

        // Verifica se o check esta marcado como true ou false para poder salvar no local ou no session
        salvarLocalOuSession(inputCheck, resposta.dados);
        limparInputsDeLogin();

        // Mostra o alerta conforme a mensagem da api
        alert(`✔ ${resposta.mensagem}`);
    } catch (error) {
        // Mostra o alerta conforme a mensagem da api
        alert(`❌ ${error.mensagem}`);
    }
  })

  function salvarLocalOuSession(check, dados) {
    if(check) {
        localStorage.setItem('usuarioLogado', JSON.stringify(dados))
        sessionStorage.setItem('usuarioLogado', JSON.stringify(dados))
    } else {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(dados))
    }
}
