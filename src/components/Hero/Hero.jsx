import React from "react";
import styles from "./Hero.module.css"
import { getImageURL } from "../../utils.js"


export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kyaa</h1>
                    <p className={styles.description}>
                    I love to develop!
                    </p>
                    <a href="mailto:kyaagoggins@gmail.com" className={styles.contactBtn}>Contact</a>
            </div>
            <img
                src={`${process.env.PUBLIC_URL}/assets/hero/PortIcon.png`}
                alt="Image"
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};