const API_URL = 'https://1103.api.green-api.com';

export const apiClient = {
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

  async getNotificationData<T>(
    idInstance: string,
    apiTokenInstance: string,
    receiveTimeout: number
  ): Promise<T> {
    const url = `${API_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=${receiveTimeout}`;

    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
  },

  async deleteNotification(
    receiptId: number,
    idInstance: string,
    apiTokenInstance: string
  ): Promise<void> {
    const response = await fetch(
      `${API_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
      { method: 'DELETE' }
    );

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
  },
};
