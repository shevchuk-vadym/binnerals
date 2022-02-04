import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { SideMenuContextProvider } from '../SideMenu/SideMenu.context';
const Cabinet = () => {
  return (
    <SideMenuContextProvider>
      <Layout />
    </SideMenuContextProvider>
    // <div className={styles.cabinet}>
    //   <header>
    //     <Link to='/'>
    //       <h4>Logo</h4>
    //     </Link>
    //   </header>
    // </div>
  );
};

export default Cabinet;
