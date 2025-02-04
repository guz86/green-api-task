import { useContactContext } from '../../context/ContactContext';
import { MessageForm } from '../MessageForm/MessageForm';
import styles from './Dialog.module.scss';

export const Dialog = () => {
  const { selectedContactId, selectedContactName } = useContactContext();

  if (!selectedContactId) {
    return (
      <div className={styles.container}>Download WhatsApp for Windows</div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>{selectedContactName ? selectedContactName : selectedContactId}</h2>
      <MessageForm id={selectedContactId} />
    </div>
  );
};
