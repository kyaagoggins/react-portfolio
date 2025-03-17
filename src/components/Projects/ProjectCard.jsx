import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, site },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={`${process.env.PUBLIC_URL}${imageSrc}`}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.description}>
        {description.map((description, id) => {
          return (
            <li key={id} className={styles.bullet}>
              {description}
            </li>
          );
        })}

      </ul>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={site} className={styles.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
};