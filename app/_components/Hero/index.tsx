import styles from "./index.module.css";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}