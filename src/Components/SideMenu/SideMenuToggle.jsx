import { useSideMenu } from './SideMenu.context';
import styles from './SideMenuToggle.module.scss';

export const SideMenuToggle = () => {
  const { isOpen, setIsOpen } = useSideMenu();
  return (
    <button
      className={styles.menu__btn}
      onClick={() => {
        console.log(isOpen);
        setIsOpen(true);
      }}
    >
      <span></span>
    </button>
  );
};
