import React, { useState, useEffect } from "react";
import '../CSS/body2.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';

import Skills from "./Skills";
import Experience from "./Experience";
import ScienceIcon from '@mui/icons-material/Science';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import SsidChartIcon from '@mui/icons-material/SsidChart';

function Body2() {
    const [dateTime, setDateTime] = useState(new Date());
    const [isOnline, setIsOnline] = useState(false);

    // Add state to manage tab selection
    const [value, setValue] = useState(0);
    const [activeSection, setActiveSection] = useState("skill"); // Track active section
    const [activeTab, setActiveTab] = useState("skill"); // Track active tab

    // Function to handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Function to handle section change based on clicked item
    const handleSectionChange = (section) => {
        setActiveSection(section);
        setActiveTab(section); // Set active tab
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());

            // Check online status
            const now = new Date();
            const day = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
            const hour = now.getHours(); // 0-23

            // Online status: Monday-Friday, 9 AM - 5 PM
            if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
                setIsOnline(true);
            } else {
                setIsOnline(false);
            }
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []); 

    // Skill category titles
    const skillHeader = [
        { id: 1, name: "Technical" },
        { id: 2, name: "Professional" },
    ];

    // Skill items for Technical category
    const technicalSkills = [
        { id: 1, name: "Java", prof: "Advanced" },
        { id: 2, name: "Python", prof: "Advanced" },
        { id: 3, name: "JavaScript", prof: "Intermediate" },
        { id: 4, name: "React.JS", prof: "Intermediate" },
        { id: 5, name: "Node.JS", prof: "Intermediate" },
        { id: 6, name: "HTML & CSS", prof: "Advanced" },
        { id: 7, name: "CLI", prof: "Intermediate" },
        { id: 8, name: "GIT", prof: "Intermediate" },
    ];

    // Skill items for Professional category
    const professionalSkills = [
        { id: 1, name: "Project Management", prof: "Intermediate" },
        { id: 2, name: "Team Leadership", prof: "Advanced" },
        { id: 3, name: "Cybersecurity", prof: "Advanced" },
        { id: 4, name: "Opperational Resiliency", prof: "Intermediate" },
        { id: 5, name: "Fraud Investigation", prof: "Intermediate" },
        { id: 6, name: "Risk Management", prof: "Intermediate" },
        { id: 7, name: "Vulnerability Management", prof: "Intermediate" },
        { id: 8, name: "Change Management", prof: "Intermediate" },
        { id: 9, name: "Impact Management", prof: "Intermediate" },
        { id: 10, name: "ISO27001: 2022", prof: "Intermediate" },
    ];

    return (
        <div className='body2-container'>
            <div className='top-section'>
                <div className='intro-top'>
                    <div className='intro-txt'>
                        <h1 className='reveal-h1'>Welcome To My Portfolio</h1>
                        <h3 className='reveal-h3'>
                            I enjoy learning how to make functional, aesthetic, and fun web applications!
                        </h3>
                        <Button className='contact-me reveal-button' variant="contained" sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 20px',
                            backgroundColor: isOnline ? 'green' : 'red',
                            color: 'white',
                        }}>
                            Contact Me via Email
                            {isOnline ? (
                                <WbSunnyIcon sx={{ marginLeft: '15px', marginTop: '-2px', color: 'green' }} />
                            ) : (
                                <DarkModeIcon sx={{ marginLeft: '15px', marginTop: '-2px', color: 'purple' }} />
                            )}
                        </Button>
                    </div>

                    <div className='intro-api'>
                        <div style={{ textAlign: "right" }}>
                            <h1 className='reveal-op-h1'>
                                <span className="check-green">Available</span> Monday to Friday | 9am ~ 5pm (GMT)
                            </h1>
                            <h2 className='reveal-op-h2'>{dateTime.toLocaleDateString()}</h2>
                            <h2 className='reveal-op-h2'>{dateTime.toLocaleTimeString()}</h2>
                            <h2 className="reveal-oof" style={{ color: isOnline ? "green" : "red" }}>
                                {isOnline ? "Available" : "Out Of Office"}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <ul>
                    <li 
                        id="skill" 
                        className={`li-1 ${activeTab === 'skill' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange("skill")}
                    >
                        <ScienceIcon className="orange" />
                    </li>
                    <li 
                        id="experience" 
                        className={`li-2 ${activeTab === 'experience' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange("experience")}
                    >
                        <SsidChartIcon className="green2" />
                    </li>
                    <li 
                        id="projects" 
                        className={`li-3 ${activeTab === 'projects' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange("projects")}
                    >
                        <AccountTreeIcon className="purple" />
                    </li>
                    <li 
                        id="about" 
                        className={`li-4 ${activeTab === 'about' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange("about")}
                    >
                        <InfoIcon className="blue" />
                    </li>
                </ul>

                <div className="bottom-header">
                    <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2> {/* Dynamically changes the header */}
                </div>

                {activeSection === "skill" && (
                    <div className="bottom-content">
                        {/* Technical Skills Section */}
                        <div className="sub-header">
                            <h2>Technical Skills</h2>
                        </div>
                        <div className="sub-content">
                            <div className="skills-grid">
                                {technicalSkills.map(skill => (
                                    <div key={skill.id} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-prof">{skill.prof}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Professional Skills Section */}
                        <div className="sub-header">
                            <h2>Professional Skills</h2>
                        </div>
                        <div className="sub-content">
                            <div className="skills-grid">
                                {professionalSkills.map(skill => (
                                    <div key={skill.id} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-prof">{skill.prof}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Body2;
