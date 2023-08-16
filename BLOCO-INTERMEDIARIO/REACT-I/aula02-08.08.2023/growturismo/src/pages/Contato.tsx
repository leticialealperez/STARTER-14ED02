import { useState } from 'react';
import InputStyled from '../components/Content/InputStyled';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';

//const valorInput = 'Le';
// const teste = 10;

// COMPARTILHAMENTO DE ESTADOS ENTRE COMPONENTES
function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  function enviarDados() {
    console.log(formulario);
  }

  function mudaEstado(evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  }

  return (
    <FlexContainerStyled modo="content">
      <div>
        <TittleStyled tamanho="sm" primario>
          Formulário
        </TittleStyled>

        <form
          action=""
          onSubmit={(ev) => {
            ev.preventDefault();
            enviarDados();
          }}
        >
          <InputStyled>
            <label>Nome: </label>
            <input type="text" name="nome" value={formulario.nome} onChange={mudaEstado} />
          </InputStyled>

          <InputStyled>
            <label>E-mail: </label>
            <input type="email" name="email" value={formulario.email} onChange={mudaEstado} />
          </InputStyled>

          <InputStyled>
            <label>Telefone: </label>
            <input type="text" name="telefone" value={formulario.telefone} onChange={mudaEstado} />
          </InputStyled>

          <InputStyled>
            <label>Mensagem: </label>
            <textarea value={formulario.mensagem} name="mensagem" onChange={mudaEstado} />
          </InputStyled>

          <InputStyled>
            <button type="submit">Enviar</button>
          </InputStyled>
        </form>
      </div>
    </FlexContainerStyled>
  );
}

export default Contato;
