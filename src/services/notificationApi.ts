import { apiClient } from './api';

export const notificationApi = {
  getNotifications: (receiveTimeout: number) => {
    return apiClient.getWithParams('receiveNotification', {
      receiveTimeout: String(receiveTimeout),
    });
  },
};
