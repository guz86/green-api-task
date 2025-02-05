import CommunityIcon from '../../shared/CommunityIcon';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <CommunityIcon />
      <CommunityIcon />
      <CommunityIcon />
    </div>
  );
};
