import { Link } from "react-router-dom";

import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br />
            <span>Lucas Wagner</span> <br />
            <p>Dev Front-End</p>
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure>
            <img
              className={styles.img_home}
              src="public\web-development.png"
              alt="Imagem de Home"
              />
           
        </figure>
      </section>
    </>
  );
}
export default Home;
