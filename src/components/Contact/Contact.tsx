import styles from './Contact.module.scss';

interface ContactItemProps {
  id: string;
  name: string;
  contactName?: string;
}

export const Contact = ({ name, contactName }: ContactItemProps) => {
  return (
    <li className={styles.contact}>
      <strong>{name}</strong>
      {contactName && <span> ({contactName})</span>}
    </li>
  );
};
