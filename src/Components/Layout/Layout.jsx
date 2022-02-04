import {
  useSideMenu,
  SideMenuContextProvider,
} from '../SideMenu/SideMenu.context';
import { SideMenu } from '../SideMenu/SideMenu';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';
export const Layout = ({ children }) => {
  const { isOpen } = useSideMenu();
  console.log('>>>>', isOpen);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideMenu />
        <div className={styles.home}>
          <h1>Home title</h1>
        </div>
        <div className={`${isOpen ? 'opened' : ''}`}>
          {children} {isOpen}
        </div>
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
