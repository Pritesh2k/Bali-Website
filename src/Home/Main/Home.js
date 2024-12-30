import React from 'react'
import '../CSS/home.css'
import Nav from '../../Components/Nav'

function Home() {
  return (
    <div className='home-wrapper'>
      <div className='home-intro-container'>
        <div className='Title'>Title</div>
        <Nav />
        <div className='Sub-Title'>Sub-Title</div>
      </div>
    </div>
  )
}

export default Home