import React from "react";
import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kyaa</h1>
        <p className={styles.description}>
          Honors undergraduate with a Bachelor's in Software Engineering and a
          Minor in Mathematics. Passionate about building scalable,
          user-friendly applications and solving complex problems through
          technology. Experience in frontend development, backend systems, and
          strong foundation in software development. Proven leadership in
          project management and system design, delivering impactful solutions
          for real-world applications. Always eager to learn, innovate, and
          drive efficiency in software development.
        </p>
        <div>
          <a href="#projects" className={styles.btn}>
            Projects
          </a>
          <a
            href="./assets/intro/resume.pdf"
            download="Kyaa_Goggins_Resume.pdf"
            className={styles.btn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/about/sideSmileHeadshot.png`}
        alt="Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
