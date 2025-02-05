import { useState } from 'react';
import styles from './ContactSetup.module.scss';

interface ContactSetupProps {
  onSave: (id: string) => void;
}

const ContactSetup = ({ onSave }: ContactSetupProps) => {
  //"wid": "79119065211@c.us",
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
