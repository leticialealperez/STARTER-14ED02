const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    //VERIFICAR SE O FORMULÁRIO ESTÁ VALIDO
    const formularioValido = formLogin.checkValidity()

    if (!formularioValido) {
        formLogin.classList.add('was-validated') // was-validated
        return
    }

    // LÓGICA LOGIN USUARIO

    formLogin.classList.remove('was-validated')
});

const botaoConfirmar = document.getElementById('botao-confirmar');
const modalCadastrar = new bootstrap.Modal('#exampleModal'); // diz que o elemento de id exampleModal será usado para criar um modal do bootstrap

botaoConfirmar.addEventListener('click', () => {
    // LÓGICA CADASTRAR USUARIO
    modalCadastrar.hide()
})


