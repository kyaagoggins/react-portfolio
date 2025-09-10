import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          {/* <img src={ alt="Email icon" /> */}
          <a href="mailto:kyaagoggins@email.com">kyaagoggins@gmail.com</a>
        </li>
        <li className={styles.link}>
          {/* <img
            src={}
            alt="LinkedIn icon"
          /> */}
          <a href="https://www.linkedin.com/kyaa=goggins">
            linkedin.com/in/kyaa-goggins/
          </a>
        </li>
        <li className={styles.link}>
          {/* <img src={ alt="Github icon" /> */}
          <a href="https://www.github.com/kyaagoggins">
            github.com/kyaagoggins
          </a>
        </li>
      </ul>
    </footer>
  );
};
