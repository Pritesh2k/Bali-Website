import React, { useState } from 'react';
import '../CSS/skills.css';

const skills = [
    { name: 'Front-End', description: 'React JS' },
    { name: 'React', description: 'Building dynamic UIs with React' },
    { name: 'Node.js', description: 'Backend development with Node.js' },
    { name: 'CSS', description: 'Styling with modern CSS techniques' },
    { name: 'Python', description: 'Data analysis and automation with Python' },
    { name: 'Git', description: 'Version control with Git and GitHub' },
];

export default function Skills() {
    return (
        <div className='skills-container'>
            <div className='banner'>
                <h1>Skills</h1>
                <div className='left-skill'>Technical</div>
                <div className='up-skill'>Management</div>
                <div className='right-skill'>Work-Place</div>
                <div className='down-skill'>Extra</div>
            </div>

            <div className='carousel-container'>
                <div className='carousel'>
                    {skills.map((skill, index) => (
                        <div key={index} className='carousel-item'>
                            <h2>{skill.name}</h2>
                        </div>
                    ))}
                    {/* Duplicate items for seamless looping */}
                    {skills.map((skill, index) => (
                        <div key={`duplicate-${index}`} className='carousel-item'>
                            <h2>{skill.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
