import styles from './Contact.module.scss';

interface ContactItemProps {
  id: string;
  name: string;
  contactName?: string;
  onClick: (id: string, name: string) => void;
}

export const Contact = ({
  id,
  name,
  contactName,
  onClick,
}: ContactItemProps) => {
  return (
    <li onClick={() => onClick(id, name)} className={styles.contact}>
      <strong>{name}</strong>
      {contactName && <span> ({contactName})</span>}
    </li>
  );
};
