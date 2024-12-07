import React from 'react';
import '../CSS/home.css';

function openLink() {
    window.open('https://google.com', '_blank');
  }

function Home() {
  return (
    <div className='home-wrapper'>
        <div className='triangle-wrapper'>
            {/* Custom Button */}
            <button className='custom-button' onClick={()=>{openLink()}}>
            <div className='line one'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            <div className='line two'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            <div className='line three'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            <div className='line four'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            <div className='line five'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            <div className='line six'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            <div className='line seven'>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
                <div className='round'></div>
            </div>
            </button>
            <div class="hover-text"><i>Back to Portfolio 1.0?</i></div>
        </div>

        <div className='title'>
            <h1>Portfolio</h1>
        </div>
        <div className='main-line'></div>
        <div className='version'>
            <h1>2.0</h1>
        </div>
    </div>
  );
}

export default Home;
