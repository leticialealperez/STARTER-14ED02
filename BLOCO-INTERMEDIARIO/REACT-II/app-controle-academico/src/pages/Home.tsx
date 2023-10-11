import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno, TabelaAlunos } from "../components/TabelaAlunos";
import { listarAlunos } from "../services/aluno.service";

function Home() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token") ?? "false");
  const [listaAlunos, setListaAlunos] = useState<Aluno[]>([]);

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

export default Home;
