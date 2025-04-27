// src/services/api.ts

/**
 * Cliente HTTP genérico usando Fetch API
 * Configure a base URL no arquivo .env (ex: VITE_API_BASE_URL)
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export interface ApiResponse<T> {
  data: T;
  status: number;
}

/**
 * Função genérica para chamadas HTTP
 * @param path Caminho relativo (ex: '/users')
 * @param options Configurações do fetch (method, headers, body, etc.)
 * @returns ApiResponse<T>
 */
export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const status = response.status;
  const data = (await response.json()) as T;

  if (!response.ok) {
    // Ajuste conforme a estrutura de erro da sua API
    const errorMsg = (data as any)?.message || `HTTP Error: ${status}`;
    throw new Error(errorMsg);
  }

  return { data, status };
}

/**
 * Confort wrapper para GET
 */
export function get<T = unknown>(path: string): Promise<T> {
  return apiFetch<T>(path, { method: 'GET' }).then(res => res.data);
}

/**
 * Confort wrapper para POST
 */
export function post<T = unknown>(path: string, body: any): Promise<T> {
  return apiFetch<T>(path, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then(res => res.data);
}
