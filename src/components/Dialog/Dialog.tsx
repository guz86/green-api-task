import { useContactContext } from '../../context/ContactContext';
import { MessageForm } from '../MessageForm/MessageForm';
import styles from './Dialog.module.scss';

export const Dialog = () => {
  const { selectedContactId, selectedContactName } = useContactContext();

  if (!selectedContactId) {
    return (
      <div className={styles.container}>
        <h1>Download WhatsApp for Windows</h1>
        <h2>
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        <h1>{selectedContactName ? selectedContactName : selectedContactId}</h1>
        <MessageForm id={selectedContactId} />
      </div>
    </div>
  );
};
