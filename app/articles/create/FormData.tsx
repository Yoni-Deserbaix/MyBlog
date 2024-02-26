"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./formData.module.css";
type Props = {};

export default function ({}: Props) {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add a artcile
    fetch("http://localhost:4000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        title: data.title,
        content: data.content,
        author: data.author,
        date: new Date(),
      }),
    }).then(() => {
      router.refresh();
      router.push("/");
    });
  };
  return (
    <div className="container justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Ajouter un article</h2>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="Author">Author</label>
              <input type="text" name="Author" id="Author" />
            </div>
            <div className="card-actions justify-end">
              <a href="/" className="btn btn-primary">
                Retour
              </a>
              <button type="submit" className="btn btn-ghost">
                Valider
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
