import { useState } from 'react';
// import { useContactContext } from '../../context/ContactContext';

import { MessageForm } from '../MessageForm/MessageForm';
import styles from './Dialog.module.scss';
import AuthSetup from '../AuthSetup/AuthSetup';

export const Dialog = () => {
  // const { selectedContactId, selectedContactName } = useContactContext();

  const [idInstance, setIdInstance] = useState<string | null>(null);
  const [apiTokenInstance, setApiTokenInstance] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  // if (!selectedContactId) {

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
        {/* <h1>{selectedContact ? selectedContactName : selectedContactId}</h1> */}
        {selectedContact && <h1>Контакт с {selectedContact}</h1>}
        {/* <Notifications
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
        /> */}
        <MessageForm
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
          onContactChange={setSelectedContact}
        />
      </div>
    </div>
  );
};
