import React from "react";
import styles from "@/styles/Info.module.css";
import InfoTop from "./info/InfoTop";
import InfoCards from "./info/InfoCards";
const Info = () => {
  return (
    <section className={styles.container}>
      <InfoTop></InfoTop>
      <InfoCards></InfoCards>
      <section className={styles.bottom}>Theme:</section>
    </section>
  );
};

export default Info;
