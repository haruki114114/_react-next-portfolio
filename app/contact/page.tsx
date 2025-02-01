"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせを送信しました！");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          名前
          <input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} required />
        </label>
        <label className={styles.label}>
          メールアドレス
          <input type="email" name="email" value={form.email} onChange={handleChange} className={styles.input} required />
        </label>
        <label className={styles.label}>
          メッセージ
          <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} required />
        </label>
        <button type="submit" className={styles.button}>送信</button>
      </form>
    </div>
  );
}