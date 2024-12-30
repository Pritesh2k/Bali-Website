import React from 'react';
import '../CSS/home.css';

import Nav from '../../Components/Nav';
import Hero from './Hero';
import Skills from './Skills';

function Home() {
  return (
    <div className='home-wrapper'>
      <Nav />
      <div className='sections-container'>
        <section className='section section-1' id='section-1'>
          <Hero/>
        </section>
        <section className='section section-2' id='section-2'>
          <Skills/>
        </section>
        <section className='section section-3' id='section-3'>
          <h1>Section 3</h1>
        </section>
        <section className='section section-4' id='section-4'>
          <h1>Section 4</h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
