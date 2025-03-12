import React from "react";
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import styles from "./Experience.module.css";
import fontAwesomeIcon, { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faHtml5, faPhp, faCss3, faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faCopyright, faP } from "@fortawesome/free-solid-svg-icons"

export const Experience = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
            <div className={styles.skills}>
          {skills.map((skill, id) => {
            let Icon;
            switch(skill.title.toLowerCase()) {
              case 'html':
                Icon = faHtml5;
                break;
                case 'c#':
                Icon = faCopyright;
                break;
              case 'java':
                Icon = faJava;
                break;
              case 'javascript':
                Icon = faJsSquare;
                break;
              case 'php':
                Icon = faPhp;
                break;
              case 'css':
                Icon = faCss3;
                break;
                case 'react':
                Icon = faReact;
                break;
              default:
                Icon = null;
            }
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <FontAwesomeIcon icon={Icon} size="3x" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={`${process.env.PUBLIC_URL}${historyItem.imageSrc}`}
                  alt={`${historyItem.organization} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.position}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
            </div>
        </section>
    )
}