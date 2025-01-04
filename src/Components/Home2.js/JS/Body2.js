import React, { useState, useEffect } from "react";
import '../CSS/body2.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Body2() {
    const [dateTime, setDateTime] = useState(new Date());
    const [isOnline, setIsOnline] = useState(false);

    // Add state to manage tab selection
    const [value, setValue] = useState(0);

    // Function to handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
        { id: 4, name: "C++", prof: "Beginner" },
        { id: 5, name: "Ruby", prof: "Beginner" },
        { id: 5, name: "Java", prof: "Advanced" },
        { id: 6, name: "Python", prof: "Advanced" },
        { id: 7, name: "JavaScript", prof: "Intermediate" },
        { id: 8, name: "C++", prof: "Beginner" },
        { id: 9, name: "Ruby", prof: "Beginner" }
    ];

    // Skill items for Professional category
    const professionalSkills = [
        { id: 1, name: "Project Management", prof: "Advanced" },
        { id: 2, name: "Team Leadership", prof: "Advanced" },
        { id: 3, name: "Communication", prof: "Intermediate" },
        { id: 4, name: "Problem Solving", prof: "Intermediate" },
        { id: 5, name: "Time Management", prof: "Beginner" }
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
                        <Button className='contact-me reveal-button' variant="contained">
                            Contact Me via Email
                            <span
                                className="online-checker"
                                style={{
                                    marginLeft: "10px",
                                    width: "15px",
                                    height: "15px",
                                    borderRadius: "50%",
                                    backgroundColor: isOnline ? "green" : "red",
                                    display: "inline-block",
                                }}
                            ></span>
                        </Button>
                    </div>

                    <div className='intro-api'>
                        <div style={{ textAlign: "right" }}>
                            <h1 className='reveal-op-h1'> <span className="check-green">Available:</span> Moday to Friday | 9am ~ 5pm</h1>
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
                <div className="proj-nav">
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        bgcolor: 'background.paper',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                            sx={{
                                '& .MuiTab-root': {
                                    fontSize: '1rem', // Optional: Adjust text size
                                    textTransform: 'none', // Disable uppercase text transformation
                                    backgroundColor: 'white', // Default background color for all tabs
                                    borderRadius: '10px', // Round corners for the tabs
                                    transition: 'background-color 0.3s ease', // Smooth transition
                                },
                            }}
                        >
                            <Tab label="Skills" />
                            <Tab label="Experience" />
                            <Tab label="Projects" />
                            <Tab label="About" />
                        </Tabs>
                    </Box>

                </div>
                <div className="proj-display">
                    {value === 0 && (
                        <div className="Skills-content">
                            <div className="skill-container">
                                {/* Dynamically create skill categories with items */}
                                {skillHeader.map((header) => (
                                    <div className="skill-1" key={header.id}>
                                        <h2 className="header-title">{header.name}</h2>
                                        {/* Conditionally map skills based on category */}
                                        {header.name === "Technical" && technicalSkills.map((item) => (
                                            <div className="skill-item" key={item.id}>
                                                <div className="identifier"><h2>{item.name}</h2></div>
                                                <div className="Prefficiency"><h4>{item.prof}</h4></div>
                                            </div>
                                        ))}
                                        {header.name === "Professional" && professionalSkills.map((item) => (
                                            <div className="skill-item" key={item.id}>
                                                <div className="identifier"><h2>{item.name}</h2></div>
                                                <div className="Prefficiency"><h4>{item.prof}</h4></div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {value === 1 && <div className='Proj-content'>Content for Item Two</div>}
                    {value === 2 && <div className='about-content'>Content for Item Three</div>}
                    {value === 3 && <div className='about-content'>Content for Item Four</div>}
                </div>
            </div>
        </div>
    );
}

export default Body2;
