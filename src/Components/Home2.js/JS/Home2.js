import React from 'react'
import '../CSS/home2.css'

import backgroundIMG from '../Images/tree.jpg'
import Nav2 from './Nav2'
import Body2 from './Body2'

function Home2() {
  return (
    <div className='home2-container'>
        {/* Background */}
        <div className='background-layer'/>
        <img className='background-img' src={backgroundIMG}/>

        {/* Nav */}
        <div className='home-2-nav-container'>
            <Nav2/>
        </div>

        <div className='home-2-content-containter'>
            <Body2/>
        </div>
    </div>
  )
}

export default Home2