import Image from "next/image";
import styles from "./page.module.css"; // ✅ 必ずstylesとしてインポート

export default function SelfIntroduction() {
  return (
    <div className={styles.container}> {/* ✅ ここで正しくクラスを適用 */}
      <h1 className={styles.title}>自己紹介</h1>
      <div className={styles.profile}>
        <Image
          src="/image11.jpg"
          alt="プロフィール画像"
          width={150}
          height={150}
          className={styles.image}
        />
        <div className={styles.info}>
          <p className={styles.name}>成田 晴希</p>
          <p className={styles.bio}>
            京都デザイン＆テクノロジー専門学校でプログラミングを勉強しています。PythonやReact、Next.jsを現在勉強中です。趣味はゲームと読書です。
          </p>
        </div>
      </div>
    </div>
  );
}
