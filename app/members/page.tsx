import Image from "next/image";
import { getMemberList } from "@/app/_libs/microcms"; // API取得関数
import { MEMBER_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css"; // ギャラリー用のCSS

export default async function GalleryPage() {
  // APIからデータ取得
  const data = await getMemberList({limit: MEMBER_LIST_LIMIT});

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>ギャラリーには画像がありません。</p>
      ) : (
        <div className={styles.gallery}>
          {data.contents.map((item) => (
            <div key={item.id} className={styles.card}>
              <Image
                src={item.image.url}
                alt={item.name}
                width={item.image.width}
                height={item.image.height}
                className={styles.image}
                priority
              />
              <p className={styles.caption}>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
