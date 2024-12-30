import React from 'react'
import '../CSS/home.css'

import Nav from '../../Components/Nav'

function Home() {
  return (
    <div className='home-wrapper'>
      <Nav />
      <div className='sections-container'>
        <section className='section section-1'>
          <h1>Section 1</h1>
        </section>
        <section className='section section-2'>
          <h1>Section 2</h1>
        </section>
        <section className='section section-3'>
          <h1>Section 3</h1>
        </section>
        <section className='section section-4'>
          <h1>Section 4</h1>
        </section>
      </div>
    </div>
  )
}

export default Home
