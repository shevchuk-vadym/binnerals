import { useSideMenu } from './SideMenu.context';
import styles from './SideMenu.module.scss';
import home from '../assets/home.svg';
import chat from '../assets/chat.svg';
import settings from '../assets/settings.svg';
import quit from '../assets/quit.svg';

export const SideMenu = () => {
  const { isOpen, setIsOpen } = useSideMenu();
  return (
    <aside className={styles.aside}>
      <div className={styles.tabs}>
        <div className={styles.home}>
          <img src={home} alt='' />
        </div>
        <div className={styles.chat}>
          <img src={chat} alt='' />
        </div>
        <div className={styles.settings}>
          <img src={settings} alt='' />
        </div>
      </div>
      <button onClick={() => setIsOpen(false)}>close</button>
    </aside>
  );
};
