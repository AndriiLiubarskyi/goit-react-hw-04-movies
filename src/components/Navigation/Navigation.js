import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.active}
    > Home
    </NavLink>
    <NavLink
      to="/movies"
      className={styles.link}
      activeClassName={styles.active}
    > Movies
    </NavLink>
  </nav>
);

export default Navigation;