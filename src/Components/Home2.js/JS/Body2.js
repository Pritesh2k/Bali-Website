import React, { useState, useEffect } from "react";
import '../CSS/body2.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Skills from "./Skills";
import Experience from "./Experience";

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
                <div className="proj-nav proj-nav-shadow">
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
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                    transition: 'background-color 0.3s ease',
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
                        <Skills />
                    )}
                    {value === 1 && <div className='Proj-content'>
                        <Experience/>
                    </div>}
                    {value === 2 && <div className='about-content'>Content for Item Three</div>}
                    {value === 3 && <div className='about-content'>Content for Item Four</div>}
                </div>
            </div>
        </div>
    );
}

export default Body2;
