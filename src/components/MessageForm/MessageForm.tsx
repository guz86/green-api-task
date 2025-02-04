import { useState } from 'react';
import styles from './MessageForm.module.scss';

interface MessageFormProps {
  id: string;
}

export const MessageForm = ({ id }: MessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log(`Отправка сообщения для контакта с ID ${id}: ${message}`);
      setMessage('');
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
      />
    </form>
  );
};
