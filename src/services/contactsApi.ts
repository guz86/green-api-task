import { apiClient } from './api';

export const contactsApi = {
  getContacts: () => apiClient.get('getContacts'),
};
