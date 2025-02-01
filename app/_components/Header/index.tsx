import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <h1>TOP</h1>
      </Link>
      <Menu />
    </header>
  );
}