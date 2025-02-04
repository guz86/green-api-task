import { useState } from 'react';
import styles from './MessageForm.module.scss';
import { messageApi } from '../../services/messageApi';

interface MessageFormProps {
  id: string;
}

export const MessageForm = ({ id }: MessageFormProps) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setError(null);

    try {
      await messageApi.sendMessage(id, message);
      console.log(`Отправка сообщения для контакта с ID ${id}: ${message}`);
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
