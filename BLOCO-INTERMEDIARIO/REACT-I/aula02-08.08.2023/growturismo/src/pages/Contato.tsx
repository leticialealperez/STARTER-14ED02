import { useState } from 'react';
import ButtonActionStyled from '../components/Content/ButtonActionsStyled';
import ContatoItemStyled from '../components/Content/ContatoItemStyled';
import Feedback from '../components/Content/Feedback';
import Input from '../components/Content/Input';
import InputStyled from '../components/Content/InputStyled';
import WrapperForm from '../components/Content/WrapperForm';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';

//const valorInput = 'Le';
// const teste = 10;

interface FeedbackType {
  cor: 'success' | 'error' | 'info' | 'warning' | '';
  texto: string;
  mostrar: boolean;
}

interface ContatosType {
  nome: string;
  telefone: string;
}

// COMPARTILHAMENTO DE ESTADOS ENTRE COMPONENTES
function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [feedback, setFeedback] = useState<FeedbackType>({
    cor: '',
    texto: '',
    mostrar: false
  });

  const [contatos, setContatos] = useState<ContatosType[]>([]);

  function enviarDados() {
    if (!formulario.nome) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar o nome ❌'
      });

      return;
    }

    if (!formulario.email) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar o e-mail ❌'
      });

      return;
    }

    if (!formulario.telefone) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar o telefone ❌'
      });

      return;
    }

    if (!formulario.mensagem) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar a mensagem ❌'
      });

      return;
    }

    setFeedback({
      cor: 'info',
      mostrar: true,
      texto: 'Enviando seus dados... 🚀'
    });

    setTimeout(() => {
      console.log(formulario);

      // CREATE
      setContatos([
        ...contatos,
        {
          nome: formulario.nome,
          telefone: formulario.telefone
        }
      ]);

      setFeedback({
        cor: 'success',
        mostrar: true,
        texto: 'Dados Recebidos. Em breve entraremos em contato 🎉'
      });

      setFormulario({
        email: '',
        mensagem: '',
        nome: '',
        telefone: ''
      });
    }, 4000);

    setTimeout(() => {
      setFeedback({
        cor: '',
        mostrar: false,
        texto: ''
      });
    }, 6000);
  }

  function mudaEstado(evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  }

  return (
    <FlexContainerStyled modo="content">
      <WrapperForm>
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
          <Input
            elemento="input"
            tipoInput="text"
            nomeInput="nome"
            valor={formulario.nome}
            textoLabel="Nome"
            funcaoOnChange={mudaEstado}
          />

          <Input
            elemento="input"
            tipoInput="email"
            nomeInput="email"
            valor={formulario.email}
            textoLabel="E-mail"
            funcaoOnChange={mudaEstado}
          />

          <Input
            elemento="input"
            tipoInput="text"
            nomeInput="telefone"
            valor={formulario.telefone}
            textoLabel="Telefone"
            funcaoOnChange={mudaEstado}
          />

          <Input
            elemento="textarea"
            nomeInput="mensagem"
            valor={formulario.mensagem}
            textoLabel="Mensagem"
            funcaoOnChange={mudaEstado}
          />

          <InputStyled>
            <button type="submit">Enviar</button>
          </InputStyled>
        </form>

        <Feedback cor={feedback.cor} texto={feedback.texto} show={feedback.mostrar} />
      </WrapperForm>

      {/* CRIAR AQUI UMA UL PARA MOSTRAR OS ELEMENTOS QUE TIVEREM DENTRO DA LISTA DE CONTATOS */}
      <ul>
        {contatos.map((contato, index) => (
          <ContatoItemStyled>
            <div>
              <p>
                <strong>#{index + 1} </strong>
                {contato.nome} - {contato.telefone}
              </p>

              <div>
                <ButtonActionStyled
                  mode="update"
                  onClick={() => {
                    console.log(`Atualizar contato de indice ${index}`);
                    const novoNome = prompt('Informe o novo nome: ');
                    const novoTelefone = prompt('Informe o novo telefone');

                    const aux = [...contatos];
                    aux[index].nome = novoNome ?? aux[index].nome;
                    aux[index].telefone = novoTelefone ?? aux[index].telefone;

                    setContatos(aux);
                  }}
                >
                  ✏️
                </ButtonActionStyled>
                <ButtonActionStyled
                  mode="delete"
                  onClick={() => {
                    const confirma = confirm('Tem certeza que seja excluir o contato?');

                    if (confirma) {
                      const aux = [...contatos];
                      aux.splice(index, 1);
                      setContatos(aux);
                    }
                  }}
                >
                  🗑️
                </ButtonActionStyled>
              </div>
            </div>
          </ContatoItemStyled>
        ))}
      </ul>
    </FlexContainerStyled>
  );
}

export default Contato;
