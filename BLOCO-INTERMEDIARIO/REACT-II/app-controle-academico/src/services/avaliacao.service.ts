/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService, { ResponseAPI } from "./api.service";

interface CadastrarAvalicao {
  nota: number;
  modulo: string;
}

export interface AtualizarAvaliacao {
  nota?: number;
  modulo?: string;
  idAvaliacao: string;
}

export async function cadastrarAvaliacao(
  token: string,
  dados: CadastrarAvalicao
): Promise<ResponseAPI> {
  try {
    const resposta = await apiService.post("/avaliacoes", dados, {
      headers: { Authorization: token },
    });

    return {
      ok: resposta.data.ok,
      code: resposta.data.code,
      mensagem: resposta.data.mensagem,
      dados: resposta.data.dados,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      code: error.response.data.code,
      mensagem: error.response.data.mensagem,
    };
  }
}

export async function listarTodasAvaliacoes(
  token: string
): Promise<ResponseAPI> {
  try {
    const resposta = await apiService.get("/avaliacoes", {
      headers: { Authorization: token },
    });

    return {
      ok: resposta.data.ok,
      code: resposta.data.code,
      mensagem: resposta.data.mensagem,
      dados: resposta.data.dados,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      code: error.response.data.code,
      mensagem: error.response.data.mensagem,
    };
  }
}

export async function listarAvaliacaoPorId(
  token: string,
  idAvaliacao: string
): Promise<ResponseAPI> {
  try {
    const resposta = await apiService.get(`/avaliacoes/${idAvaliacao}`, {
      headers: { Authorization: token },
    });

    return {
      ok: resposta.data.ok,
      code: resposta.data.code,
      mensagem: resposta.data.mensagem,
      dados: resposta.data.dados,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      code: error.response.data.code,
      mensagem: error.response.data.mensagem,
    };
  }
}

export async function atualizarAvaliacao(
  token: string,
  { idAvaliacao, ...restante }: AtualizarAvaliacao
): Promise<ResponseAPI> {
  try {
    const resposta = await apiService.put(
      `/avaliacoes/${idAvaliacao}`,
      restante,
      { headers: { Authorization: token } }
    );

    return {
      ok: resposta.data.ok,
      code: resposta.data.code,
      mensagem: resposta.data.mensagem,
      dados: resposta.data.dados,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      code: error.response.data.code,
      mensagem: error.response.data.mensagem,
    };
  }
}

export async function deletarAvaliacao(
  token: string,
  idAvaliacao: string
): Promise<ResponseAPI> {
  try {
    const resposta = await apiService.delete(`/avaliacoes/${idAvaliacao}`, {
      headers: { Authorization: token },
    });

    return {
      ok: resposta.data.ok,
      code: resposta.data.code,
      mensagem: resposta.data.mensagem,
      dados: resposta.data.dados,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      code: error.response.data.code,
      mensagem: error.response.data.mensagem,
    };
  }
}
