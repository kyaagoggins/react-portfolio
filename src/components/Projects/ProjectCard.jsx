import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/hero/PortIcon.png`}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};