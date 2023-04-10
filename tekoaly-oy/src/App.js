import React from 'react';
import { animated, useSpring } from 'react-spring';
import './App.css';
import image1 from './images/image1.jpg';
import { animateScroll as scroll } from 'react-scroll';

function App() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <header className="App-header">
        <animated.h1 style={fadeIn}>Tekoäly Oy</animated.h1>
        <animated.p style={fadeIn} className="blinking">
          Artificial Intelligence solutions
        </animated.p>
      </header>
      <main>
        <Section image={image1} />
      </main>
      <footer className="App-footer">
        <p>
          Company ID: 3339591-8<br />
          Tekoäly Oy, Helsinki, Finland<br />
          Contact: TekoalyOy@proton.me
        </p>
        <button onClick={scrollToTop} className="scroll-top">
          Back to top
        </button>
      </footer>
    </div>
  );
}

const Section = ({ image }) => {
  return (
    <section className="section">
      <img src={image} alt="placeholder" className="section-image" />
      <div className="section-text">
        <h2>The Disruptive Power of Artificial Intelligence: AI Will Transform Industries in the Next Decade</h2>
        <p>
        Artificial intelligence (AI) is poised to become the most disruptive form of technology in the next decade, 
        with the potential to revolutionize industries and transform the way we live and work. Tekoäly Oy will pave the way
        for these disruptive solutions.
        </p>
      </div>
    </section>
  );
};

export default App;
