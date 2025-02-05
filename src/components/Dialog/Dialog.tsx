import { useEffect, useState } from 'react';

import { MessageForm } from '../MessageForm/MessageForm';
import styles from './Dialog.module.scss';
import AuthSetup from '../AuthSetup/AuthSetup';
import { LogMessages } from '../LogMessages/LogMessages';
import { useNotifications } from '../../hooks/useNotifications';

export const Dialog = () => {
  const [idInstance, setIdInstance] = useState<string | null>(null);
  const [apiTokenInstance, setApiTokenInstance] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const { notifications } = useNotifications(
    idInstance || '',
    apiTokenInstance || '',
    5,
    selectedContact || ''
  );

  useEffect(() => {
    if (!selectedContact) return;

    notifications.forEach((notification) => {
      setMessages((prev) => [...prev, notification]);
    });
  }, [notifications, selectedContact]);

  if (!idInstance || !apiTokenInstance) {
    return (
      <div className={styles.container}>
        <AuthSetup
          onSave={(id, token) => {
            setIdInstance(id);
            setApiTokenInstance(token);
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {selectedContact && <h1>Контакт с {selectedContact}</h1>}

        <div className={styles.notifications}>
          {selectedContact && <LogMessages messages={messages} />}
        </div>

        <MessageForm
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
          onContactChange={setSelectedContact}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};
