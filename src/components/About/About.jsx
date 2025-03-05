import React from "react";

import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <br></br>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Passionate about building intuitive and responsive user interfaces using HTML/CSS tools and modern frameworks suchg as react. Experienced in designing and optimizing UI components from efficient user experience.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                Skilled in devloping scalable and efficient backend systems with a focus on API endpoints and database management. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Software Development Lifecycle</h3>
                            <p>
                                Strong understanding of SDLC principles, from requirements gathering to deployment and maintenance. Experienced in Agile methodoligies, testing strategies, and ensuring software quality.  
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}