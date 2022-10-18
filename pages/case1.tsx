import { Button } from "antd";
import { useState } from "react";
import { Head } from "../components/head";
import { HomeLink } from "../components/link";
import { Modal } from "../components/modal";
import styles from "../styles/Home.module.css";
export default function Index() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const showModal = () => {
    setOpen(true);
  };
  return (
    <div className={styles.container}>
      <Head pageName="Case1" />

      <main className={styles.main}>
        <Button
          id="create-username"
          type="primary"
          onClick={showModal}
          disabled={open}
        >
          Create User Name
        </Button>
        <Modal setOpen={setOpen} setUserName={setUsername} open={open} />
        {username && (
          <div className="username">
            <h2>Welcome {username}</h2>
          </div>
        )}

        <HomeLink />
      </main>
    </div>
  );
}
