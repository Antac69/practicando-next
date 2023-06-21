import React from "react";
import styles from "@/styles/Tags.module.css";
const Tags = () => {
  const tags = ["Digital artworks", "3D Modeling", "Branding"];
  return (
    <div className={styles.container}>
      <ul className={styles.containerTags}>
        {tags.map((item, index) => (
          <li className={styles.tag} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
