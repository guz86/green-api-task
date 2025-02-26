import { useState } from 'react';
import styles from './MessageForm.module.scss';
import { messageApi } from '../../services/messageApi';
import ContactSetup from '../ContactSetup/ContactSetup';
import { MessageFormProps } from './types';

export const MessageForm = ({
  idInstance,
  apiTokenInstance,
  onContactChange,
  onSendMessage,
}: MessageFormProps) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [contact, setContact] = useState<string | null>(null);

  if (!contact) {
    return (
      <div className={styles.container}>
        <ContactSetup
          onSave={(id) => {
            setContact(id);
            onContactChange(id);
          }}
        />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setError(null);

    try {
      await messageApi.sendMessage(
        contact,
        message,
        idInstance,
        apiTokenInstance
      );
      onSendMessage(`Отправлено: ${contact}: ${message}`);
      setMessage('');
    } catch (err) {
      setError('Не удалось отправить сообщение');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.messageForm} onSubmit={handleSubmit}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Type a message...'
        className={styles.textarea}
        disabled={loading}
      />
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};
