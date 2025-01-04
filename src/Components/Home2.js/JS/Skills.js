import React, { useState, useEffect } from "react";
import '../CSS/body2.css';

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
    )
}

export default Skills