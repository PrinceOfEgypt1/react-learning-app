export function handleApiError(error: any) {
  // Centraliza o tratamento de erros (pode ser melhorado conforme a necessidade)
  console.error("API Error:", error);
  throw error;
}

export async function fetchData(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    return await response.json();
  } catch (error) {
    handleApiError(error);
  }
}
