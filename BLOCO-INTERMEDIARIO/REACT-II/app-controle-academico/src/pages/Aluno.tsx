import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno as AlunoI, TabelaAlunos } from "../components/TabelaAlunos";
import { listarAlunos } from "../services/aluno.service";

function Aluno() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token") ?? "false");
  const [listaAlunos, setListaAlunos] = useState<AlunoI[]>([]);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  useEffect(() => {
    async function buscarListaAlunos() {
      const resposta = await listarAlunos(token);
      setListaAlunos(resposta.dados);
    }

    buscarListaAlunos();
  }, []);

  return (
    <>
      <h1>Bem-vindo</h1>
      <h2>Listagem de Alunos</h2>

      <TabelaAlunos listaAlunos={listaAlunos} />
    </>
  );
}

export default Aluno;
