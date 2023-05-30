import React from 'react';
import "../../assets/styles/common.css";

function Resume() {
    return (
        <div className="page resume-page">
            <h5 className="pt-3 ps-5 resume">Download my <a href='https://drive.google.com/file/d/14YyPp3O4kiJ07KBx4AhHj78Cw9f-rH-F/view?usp=sharing' download>Resume</a></h5>
            <h5 className="ps-5 email">My Email Address: <span>mer_ir@yahoo.com</span></h5>
            <br/>
            <h3 className="ps-5">Employment Eligibility</h3>
            <p className="ps-5 resume">
                Permanent Resident of the United States
            </p>
            <br/>
            <h3 className="ps-5">Work Experience</h3>
            <h4 className="ps-5">Retail Sales Associate, TJ Maxx., Santa Clara, California (April 2022-March 2023)</h4>
            <ul className="ps-5">
                <li className="ms-5 resume">
                    Achieved more than 20 customer credit lines. 
                </li>
                <li className="ms-5 resume">
                    Performed tasks of cashier and organized women’s clothing sections.
                </li>
            </ul>
            <h4 className="ps-5">General Practitioner, Iran, (October 2012-July 2020)</h4>
            <ul className="ps-5">
                <li className="ms-5 resume">
                    Performed Emergency room tasks both in night and day shifts in various hospitals.
                </li>
                <li className="ms-5 resume">
                    Led the daily routine in many urgent care clinics as the main physician.
                </li>
                <li className="ms-5 resume">
                    Supported the medical aid relief in an earthquake disaster zone in 2013.
                </li>
            </ul>
            <h4 className="ps-5">Software Engineer, Tehran, Iran (Intermittently from 2004 to 2010 for 4 years)</h4>
            <ul className="ps-5">
                <li className="ms-5 resume">
                    Designed, programmed, and technically supported financial software systems such as accounting, 
                    fiduciary, banking transactions, product sales, and employee salary, benefit managements, 
                    and customer relationship management (CRM)
                </li>
            </ul>
            <br/>
            <h3 className="ps-5">Education</h3>
            <h4 className="ps-5">Certificate, Full Stack Web Development</h4>
            <p className="ms-5 resume">
                UC Berkeley Extension, June 2023.  
                <br/>
                GPA: 3.94 / 4
                </p>
            <h4 className="ps-5">Doctor of Philosophy, Medicine</h4>
            <p className="ms-5 resume">
                Tehran University of Medical Sciences, Tehran, Iran, August 2012.  
            </p>
            <h5 className="ps-5 italic-text">Dissertation</h5>
            <p className="ms-5 resume"> 
                Reliability and stability of Borderline Personality Disorder Checklist (BPD Checklist) in Borderline 
                Personality patients.
                <br/>
                GPA: 3.18 / 4
            </p>
            <h4 className="ps-5">Bachelor of Science, Computer Software Engineering</h4>
            <p className="ms-5 resume">
                Islamic Azad University, Tehran, Iran, August 2000.
            </p>
            <h5 className="ps-5 italic-text">B.Sc. Thesis</h5>
            <p className="ms-5 resume"> 
                An accounting software for an internet service provider (ISP).
                <br/>
                GPA: 3.24 / 4
            </p>
            <br/>
            <h3 className="ps-5">Technical Skills</h3>
            <h4 className="ps-5 italic-text">Computer Literacy</h4>
            <p className="ms-5 resume">
                Proficient in Microsoft SQL Server, MySQL, MongoDB, IndexedDB, C++, C++ builder, Delphi, Python, GitHub, 
                Git, HTML5, ES6, CSS, Bootstrap, Bulma, JavaScript, JQuery, Node.js, Express.js, React, State, MERN, 
                Heroku, Unit Testing w/ JEST, JSON, Fetch, AJAX, Insomnia/Postman, REST APIs, Third-party API, 
                Server-side API, Web Service API, Anime.js, Day.js, Handlebars, Sequalize, Mongoose, Session Module, 
                Bcrypt, Express-handlebars Module, Express-session Module, Dotenv Module, Pseudocode, Analytical Skill, 
                Problem Solving, Object-Oriented Programming(OOP), Front-End Development, Back-End Development, 
                and Full-stack Development.
            </p>
            <br/>
            <h4 className="ps-5 italic-text">Medical Skills</h4>
            <p className="ms-5 resume">
                Patient examinations, treatment planning, follow-up and referral, active interaction with patients and staff, 
                medical documentation, proactive team member within the hospital work force, lab test and radiology procedural ordering.  
            </p>
        </div>
    );
}

export default Resume;