import React from "react";
import styles from "./Intro.module.css"

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kyaa</h1>
                    <p className={styles.description}>
                    I am a honors undergraduate with a Bachelor's in Software Engineering and a Minor in Mathematics. I am extremely passionate about analysis in both mathematical situations and technologically. I have leadership and hands on field experience that I would love to apply and learn more from. 
                    </p>
                    <div>
                    <a href="mailto:kyaagoggins@gmail.com" className={styles.btn}>Projects</a>
                    <a href='./assets/hero/resume.pdf' download="Kyaa_Resume.pdf" className={styles.btn}>Resume</a>
                    </div>
            </div>
            <img
                src={`${process.env.PUBLIC_URL}/assets/about/sideSmileHeadshot.png`}
                alt="Image"
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};