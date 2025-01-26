import React, { useState, useEffect } from "react";
import '../CSS/body2.css';

import DoneIcon from '@mui/icons-material/Done';

function Skills() {

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
        { id: 5, name: "HTML & CSS", prof: "Advanced" },
        { id: 6, name: "CLI", prof: "Intermediate" },
        { id: 7, name: "GIT", prof: "Intermediate" },
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
                                <div className="Prefficiency"><DoneIcon className="green"/></div>
                            </div>
                        ))}
                        {header.name === "Professional" && professionalSkills.map((item) => (
                            <div className="skill-item" key={item.id}>
                                <div className="identifier"><h2>{item.name}</h2></div>
                                <div className="Prefficiency"><DoneIcon className="green"/></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills