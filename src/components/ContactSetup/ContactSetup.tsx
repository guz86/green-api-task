import { useState } from 'react';
import styles from './ContactSetup.module.scss';
import { ContactSetupProps } from './types';

const ContactSetup = ({ onSave }: ContactSetupProps) => {
  //"wid": "79119365221@c.us",
  const [id, setId] = useState('');

  return (
    <div className={styles.messageForm}>
      <h2>Введите номер контакта</h2>
      <input
        type='text'
        placeholder='79213065341'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={() => onSave(id + '@c.us')} disabled={!id}>
        Создать чат
      </button>
    </div>
  );
};

export default ContactSetup;
