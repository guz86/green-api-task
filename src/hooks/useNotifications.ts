import { useEffect, useState } from 'react';
import { apiClient } from '../services/api';
import { NotificationResponse } from './types';

export const useNotifications = (
  idInstance: string,
  apiTokenInstance: string,
  receiveTimeout: number,
  contactId: string
) => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idInstance || !apiTokenInstance) return;

    const fetchNotifications = async () => {
      try {
        const response = await apiClient.getNotificationData(
          idInstance,
          apiTokenInstance,
          receiveTimeout
        );

        if (!response) {
          return;
        }

        const data = response as NotificationResponse;
        const { receiptId, body } = data;

        if (!receiptId || !body) {
          return;
        }

        const newMessage = body?.messageData?.textMessageData?.textMessage;

        if (body.senderData.chatId === contactId && newMessage) {
          setNotifications((prev) => [...prev, `Получено: ${newMessage}`]);
        }

        await apiClient.deleteNotification(
          receiptId,
          idInstance,
          apiTokenInstance
        );
      } catch (err) {
        setError('Ошибка при получении уведомлений');
        console.error(err);
      }
    };

    const intervalId = setInterval(() => {
      fetchNotifications();
    }, 15000);

    return () => clearInterval(intervalId);
  }, [idInstance, apiTokenInstance, receiveTimeout, contactId]);

  return { notifications, error };
};
