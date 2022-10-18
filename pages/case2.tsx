import { DatePicker } from "antd";
import { Head } from "../components/head";
import { HomeLink } from "../components/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { RangePicker } = DatePicker;
  return (
    <div className={styles.container}>
      <Head pageName="Case2" />
      <main className={styles.main}>
        <h1>Select range</h1>
        <RangePicker showTime />
        <HomeLink />
      </main>
    </div>
  );
}
