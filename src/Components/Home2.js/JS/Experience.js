import React from 'react';
import '../CSS/experience.css';

function Experience() {
    return (
        <div>
            <ul>
                <li style={{ '--accent-color': '#41516C' }}>
                    <div className="date">2024 ~ Present</div>
                    <div className="title">iFAST Global Bank</div>
                    <div className="sub-title">Cybersecurity Associate</div>
                    <div className="descr">
                        <h5 style={{fontWeight: '400', marginTop: '0rem'}}>leading private teaching organisation based in the UK, specialising in various programming languages, AI, game design, and engineering. Featured by the BBC, the company emphasises the importance of programming for young people.</h5>
                        <h6 style={{fontWeight: '400', fontSize: '0.75rem'}}>1) Actively and effectively investigate client fraud cases to determine if a cyber breach is present by analysing client log activities and IP tracing establishing account misuse and geographical presence.</h6>
                        <div className='achieved-skills'>2) Effectively led and managed, annual risk and vulnerability assessments for UK premise.</div>
                        <div className='achieved-skills'>3) Liaise with the SecOps team to mitigate 140 critical vulnerabilities within my first month.</div>
                        <div className='achieved-skills'>4) Actively engaged in the change management process; conducted risk assessments for change.</div>
                        <div className='achieved-skills'>5) Actively involved with product development to ensure best practises are upheld, </div>
                    </div>
                </li>
                <li style={{ '--accent-color': '#FBCA3E' }}>
                    <div className="date">2007</div>
                    <div className="title">Title 2</div>
                    <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
                </li>
                <li style={{ '--accent-color': '#E24A68' }}>
                    <div className="date">2012</div>
                    <div className="title">Title 3</div>
                    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
                </li>
                <li style={{ '--accent-color': '#1B5F8C' }}>
                    <div className="date">2017</div>
                    <div className="title">Title 4</div>
                    <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
                </li>
                <li style={{ '--accent-color': '#4CADAD' }}>
                    <div className="date">2022</div>
                    <div className="title">Title 5</div>
                    <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                </li>
            </ul>
        </div>
    );
}

export default Experience;
