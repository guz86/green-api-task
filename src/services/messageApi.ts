import { apiClient } from './api';

export const messageApi = {
  sendMessage: (chatId: string, message: string, idInstance: string, apiTokenInstance: string) =>
    apiClient.post('sendMessage', { chatId, message }, idInstance, apiTokenInstance),
};