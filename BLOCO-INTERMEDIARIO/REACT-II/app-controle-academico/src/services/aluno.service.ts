/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService, { ResponseAPI } from "./api.service";

export async function listarAlunos(token: string): Promise<ResponseAPI> {
  try {
    const response = await apiService.get("/alunos", {
      headers: {
        Authorization: token,
      },
    });

    return {
      ok: response.data.ok,
      mensagem: response.data.mensagem,
      dados: response.data.dados,
    };
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      mensagem: error.response.data.mensagem,
    };
  }
}
