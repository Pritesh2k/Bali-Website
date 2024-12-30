import React, { useState } from 'react';
import '../Components/CSS/nav.css';

function Nav() {
  const [isNavVisible, setIsNavVisible] = useState(false); // Manage visibility state

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible); // Toggle nav visibility
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={`Nav-Container ${isNavVisible ? 'visible' : 'hidden'}`}>
      <ul className='Nav-List'>
        <li onClick={() => scrollToSection('section-1')}>Home</li>
        <li onClick={() => scrollToSection('section-2')}>Skills</li>
        <li onClick={() => scrollToSection('section-3')}>Projects</li>
        <li onClick={() => scrollToSection('section-4')}>Contact</li>
      </ul>
      <a onClick={handleNavToggle} className={isNavVisible ? '' : 'rotated'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
        </svg>
      </a>
    </div>
  );
}

export default Nav;
