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

  //   async post<T>(endpoint: string, body: object): Promise<T> {
  //     const response = await fetch(
  //       `${API_URL}/waInstance${ID_INSTANCE}/${endpoint}/${API_TOKEN_INSTANCE}`,
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(body),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  //     }

  //     return response.json();
  //   },
};
