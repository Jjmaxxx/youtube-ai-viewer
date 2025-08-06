const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export async function post<TResponse, TBody>(path: string, body: TBody): Promise<TResponse> {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`POST ${path} failed: ${response.status} - ${errorText}`);
  }

  return response.json();
}
