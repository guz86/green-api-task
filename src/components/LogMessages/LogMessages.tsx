import styles from './LogMessages.module.scss';
import { LogMessagesProps } from './types';

export const LogMessages = ({ messages }: LogMessagesProps) => {
  if (!messages || messages.length === 0) {
    return (
      <div className={styles.container}>
        <h2>Нет сообщений</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Уведомления:</h2>
      <div className={styles.messages}>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
