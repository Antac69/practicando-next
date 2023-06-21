import React from "react";
import styles from "@/styles/Title.module.css";

const Titles = () => {
  return (
    <section className={styles.container}>
      <article className={styles.top}>
        <div className={styles.pill}>Creativity</div>
        <div>Create the best projects</div>
      </article>
      <article>
        <h1 className={styles.h1}>
          <span>Create an</span>
          <span>abstraction</span>
        </h1>
      </article>
    </section>
  );
};

export default Titles;
