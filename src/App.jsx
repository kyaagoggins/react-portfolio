import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { About } from './components/About/About';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
