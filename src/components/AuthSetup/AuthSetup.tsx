import { useState } from 'react';
import styles from './AuthSetup.module.scss';
import { AuthSetupProps } from './types';

const AuthSetup = ({ onSave }: AuthSetupProps) => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  return (
    <div className={styles.messageForm}>
      <h2>Введите API-данные</h2>
      <input
        type='text'
        placeholder='ID Instance'
        value={idInstance}
        onChange={(e) => setIdInstance(e.target.value)}
      />
      <input
        type='password'
        placeholder='API Token'
        value={apiTokenInstance}
        onChange={(e) => setApiTokenInstance(e.target.value)}
      />
      <button
        onClick={() => onSave(idInstance, apiTokenInstance)}
        disabled={!idInstance || !apiTokenInstance}
      >
        Войти
      </button>
    </div>
  );
};

export default AuthSetup;
