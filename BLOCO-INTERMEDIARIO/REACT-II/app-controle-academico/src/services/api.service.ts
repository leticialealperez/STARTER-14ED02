/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const apiService = axios.create({
	baseURL: 'http://localhost:8080',
});

export default apiService;

export interface ResponseAPI {
	ok: boolean;
	mensagem: string;
	dados?: any;
}
