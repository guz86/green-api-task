import { apiClient } from './api';

export const messageApi = {
  sendMessage: (chatId: string, message: string) =>
    apiClient.post('sendMessage', { chatId, message }),
};
