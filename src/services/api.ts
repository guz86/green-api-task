const API_URL = import.meta.env.VITE_API_URL;
const ID_INSTANCE = import.meta.env.VITE_APP_ID_INSTANCE;
const API_TOKEN_INSTANCE = import.meta.env.VITE_APP_API_TOKEN_INSTANCE;

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(
      `${API_URL}/waInstance${ID_INSTANCE}/${endpoint}/${API_TOKEN_INSTANCE}`
    );

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
  },

  async getWithParams<T>(
    endpoint: string,
    params: Record<string, string>
  ): Promise<T> {
    const url = new URL(
      `${API_URL}/waInstance${ID_INSTANCE}/${endpoint}/${API_TOKEN_INSTANCE}`
    );

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
  },

  //idInstance, apiTokenInstance

  async post<T>(
    endpoint: string,
    body: object,
    idInstance: string,
    apiTokenInstance: string
  ): Promise<T> {
    const response = await fetch(
      `${API_URL}/waInstance${idInstance}/${endpoint}/${apiTokenInstance}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
  },
};
