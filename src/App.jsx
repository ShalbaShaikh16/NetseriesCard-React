import { NetflexSeries } from "./components/NetflexSeries";
//import "./components/Netflix.css";
import './components/Netflix.module.css';
import styles from './components/Netflix.module.css';
export const App = () => {
  return (
    <div className={styles.cont}>
      <section className="container">
        <h1 className={styles['card-heading']}>Netflix Must-Watch: Popular K-Dramas and Chinese Dramas</h1>
        <NetflexSeries />;

      </section>
    </div>
  );
}

//NAN- Not a Number