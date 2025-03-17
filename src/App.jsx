import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      {/*Floating Bubbles Background */}
      <div className={styles.bubbles}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={styles.bubble}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() *3}s`,
              width: `${10 + Math.random() *20}px`,
              height: `${10 + Math.random() * 20}px`
            }}
          />
        ))}
      </div>

      {/*Main App Content */}
      <Navbar/>
      <div className={styles.wrapper}>
      <Intro />
      <About />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
