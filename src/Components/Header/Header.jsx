import { SideMenuToggle } from '../SideMenu/SideMenuToggle';
import styles from './Header.module.scss';
export const Header = () => {
  const isLoggedIn = true;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h4>Logo</h4>
        <SideMenuToggle />
      </div>
      {isLoggedIn && <div className={styles.avatar}>hello from avatar</div>}
    </header>
  );
};
