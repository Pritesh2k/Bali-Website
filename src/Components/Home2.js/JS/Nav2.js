import React from 'react'
import '../CSS/nav2.css'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import profilePic from '../Images/Profile-pic.jpg'

function Nav2() {
    return (
        <div className='nav-container-nav'>
            <div className='nav-left'>
                <div className='account-pp item-3'> {/* Animates last */}
                    <img src={profilePic} alt="Profile" />
                </div>
                <h1 className='item-2'>Pritesh's <span className='item-1'>Portfolio</span></h1> {/* Animates second (h1) and first (span) */}
            </div>

            <div className='nav-right'>
                <Stack spacing={2} direction="row">
                    <Button className='button-1 social-icon2' variant="contained"><LinkedInIcon /></Button>
                    <Button className='button-2 social-icon' variant="contained"><GitHubIcon /></Button>
                    <Button className='button-3 red-outline' variant="outlined">Portfolio 1.0</Button>
                </Stack>
            </div>

        </div>
    )
}

export default Nav2