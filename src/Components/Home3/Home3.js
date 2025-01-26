import React, { useState } from 'react';
import '../Home3/home3.css';
import ImageCards from '../Home3/Componenets/ImageCards';

import reactICON from '../Home3/Images/reactIcon.png'
import JSICON from '../Home3/Images/js.png'
import PYICON from '../Home3/Images/py.png'
import JavaICON from '../Home3/Images/java.png'
import HTMLICON from '../Home3/Images/html.png'
import CssICON from '../Home3/Images/css.png'

function Home3() {
    // Double Click
    const [message, setMessage] = useState('Double-click the button!');

    const handleDoubleClick = () => {
        alert("double click");
        setMessage('Button double-clicked');
    };

    // State to track the hovered skill and its associated color
    const [hoveredSkill, setHoveredSkill] = useState('');
    const [skillColor, setSkillColor] = useState('');

    // Function to handle hover and set both skill and color
    const handleHover = (skill, color) => {
        setHoveredSkill(skill);
        setSkillColor(color);
    };

    return (
        <a className="home-wrapper-3" onDoubleClick={handleDoubleClick}>
            <section id="intro">
                <div className="small-info">
                    <h1 className="location">LONDON, UNITED KINGDOM</h1>
                    <h1 className="email">priteshparekh237@gmail.com</h1>
                    <a className='portfolio-1'>
                        <text>v1.0</text>
                    </a>
                </div>
                <div className="title name">
                    <h1>PRITESH PAREKH</h1>
                </div>
                <div className="Hero-interaction">
                    {/* Pass the hover handler to ImageCards along with skill colors */}
                    <ImageCards onHover={handleHover} />
                </div>
                <div className="title prof">
                    {/* Display the hovered skill dynamically with its color applied only to the hovered word */}
                    <h1>
                        DESIGNER, WEB DEVELOPER,
                    </h1>
                    <div>
                        {hoveredSkill && (
                            <>
                                <span style={{ color: skillColor }}>{hoveredSkill}</span>
                            </>
                        )}
                    </div>
                </div>
                <div className="small-info">
                    <ul>
                        <li><img className='icon-image' src={reactICON} /></li>
                        <li><img className='icon-image' src={JSICON} /></li>
                        <li><img className='icon-image' src={PYICON} /></li>
                        <li><img className='icon-image' src={JavaICON} /></li>
                        <li><img className='icon-image' src={HTMLICON} /></li>
                        <li><img className='icon-image' src={CssICON} /></li>
                    </ul>
                </div>
            </section>
            <section>
                <div className='main-section'>
                    <div className='main-header'>
                        <h1>JOURNEY</h1>
                    </div>
                    <div className='main-content'>
                        <div className='card-container IGB'>
                            <div className='title'>
                                IFAST Global Bank
                            </div>
                            <div className='year'>
                                2024 ~ PRESENT
                            </div>
                            <div className='role'>
                                CYBERSECURITY
                            </div>
                        </div>

                        <div className='card-container TERRA'>
                            <div className='title'>

                            </div>
                            <div className='year'>

                            </div>
                            <div className='role'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </a>
    );
}

export default Home3;
