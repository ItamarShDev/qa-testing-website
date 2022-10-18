import type { NextPage } from 'next'
import { Link } from "../components/link";
import styles from "../styles/Home.module.css";
import { Head } from "../components/head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head pageName="Home" />
      <main className={styles.main}>
        <Link route={"/case1"} text={"Go to case 1"} />
        <Link route={"/case2"} text={"Go to case 2"} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home
