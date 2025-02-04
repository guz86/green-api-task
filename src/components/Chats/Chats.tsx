import { useEffect } from 'react';
import { Contact } from '../Contact/Contact';
import styles from './Chats.module.scss';
import { useContacts } from '../../hooks/useContacts';

export const Chats = () => {
  const { userContacts, fetchContacts, loading, error } = useContacts();
  // const { userContacts, groupContacts, fetchContacts, loading, error } =

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.container}>
      <h1>Chats</h1>
      <div>
        <h2>{userContacts.length}</h2>
        <ul>
          {userContacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      </div>

      {/* <Contact /> */}
    </div>
  );
};
