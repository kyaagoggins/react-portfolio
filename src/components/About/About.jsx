import React from "react";

import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/about/AboutMe.png`}
                    className={styles.aboutImage}
                
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I like to design. 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}