import React, { useState } from 'react';
import '../CSS/home.css';

function openLink() {
    window.open('https://master.d1miri9ffluv3o.amplifyapp.com/', '_blank');
  }

function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu visibility
    const [menuAnimation, setMenuAnimation] = useState(''); // Animation class
  
    // Handle toggle with smooth animation
    const toggleMenu = () => {
      if (isMenuOpen) {
        setMenuAnimation('fadeOutDown'); // Start closing animation
      } else {
        setMenuAnimation('fadeInUp'); // Start opening animation
        setIsMenuOpen(true); // Allow menu to render
      }
    };
  
    // Handle animation end to finalize menu visibility
    const handleAnimationEnd = (e) => {
      if (e.animationName === 'fadeOutDown') {
        // When animation ends after closing, hide the menu
        setIsMenuOpen(false);
      }
    };

  return (
    <div className='home-wrapper'>
        {/* Back To Portfolio 1.0 */}
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

        {/* Menu */}
        <a className='menu' onClick={toggleMenu}>
            <div className='ham-line top'></div>
            <div className='ham-line mid'></div>
            <div className='ham-line bottom'></div>
        </a>

        {/* Title */}
        <div className='title'>
            <h1>Portfolio</h1>
        </div>
        <div className='main-line'></div>
        <div className='version'>
            <h1>2.0</h1>
        </div>

      {/* Menu Overlay with animations */}
      {isMenuOpen && (
        <div
          className={`frosted-overlay ${menuAnimation}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <p>Menu Opened - Example Frosted Effect</p>
        </div>
      )}
    </div>
  );
}

export default Home;
