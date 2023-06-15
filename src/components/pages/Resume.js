import React from 'react';
import "../../assets/styles/common.css";
import resume from "../../assets/document/Bahareh Hosseini Resume-2023.pdf"

function Resume() {
    return (
        <div className="resume-page">
            <h6 className="pt-3 ps-5 resume">Download my <a href={resume} download target='_blank' rel='noreferrer'>Resume</a></h6>
            <h6 className="ps-5 email">My Email Address: <span>mer_ir@yahoo.com</span></h6>
            <br/>
            <h4 className="ps-5 resume-section">Employment Eligibility</h4>
            <p className="ps-5 resume">
                Permanent Resident of the United States
            </p>
            <br/>
            <h4 className="ps-5 resume-section">Work Experience</h4>
            <br/>
            <h5 className="ps-5">Retail Sales Associate, TJ Maxx., Santa Clara, California (April 2022 - March 2023)</h5>
            <ul className="ps-5">
                <li className="ms-5 resume">
                    Achieved more than 20 customer credit lines. 
                </li>
                <li className="ms-5 resume">
                    Performed tasks of cashier and organized women’s clothing sections.
                </li>
            </ul>
            <h5 className="ps-5">General Practitioner, Iran, (October 2012 - July 2020)</h5>
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
            <h5 className="ps-5">Software Engineer, Tehran, Iran (Intermittently from 2004 to 2010 for 4 years)</h5>
            <ul className="ps-5">
                <li className="ms-5 resume">
                    Designed, programmed, and technically supported financial software systems such as accounting, 
                    fiduciary, banking transactions, product sales, and employee salary, benefit managements, 
                    and customer relationship management (CRM)
                </li>
            </ul>
            <br/>
            <h4 className="ps-5 resume-section">Education</h4>
            <br/>
            <h5 className="ps-5">Certificate, Full Stack Web Development</h5>
            <p className="ms-5 resume">
                UC Berkeley Extension, Berkeley, California, June 2023.  
                <br/>
                GPA: 3.97 / 4
                </p>
            <h5 className="ps-5">Doctor of Philosophy, Medicine</h5>
            <p className="ms-5 resume">
                Tehran University of Medical Sciences, Tehran, Iran, August 2012.  
            </p>
            <h6 className="ps-5 italic-text">Dissertation</h6>
            <p className="ms-5 resume"> 
                Reliability and stability of Borderline Personality Disorder Checklist (BPD Checklist) in Borderline 
                Personality patients.
                <br/>
                GPA: 3.18 / 4
            </p>
            <h5 className="ps-5">Bachelor of Science, Computer Software Engineering</h5>
            <p className="ms-5 resume">
                Islamic Azad University, Tehran, Iran, August 2000.
            </p>
            <h6 className="ps-5 italic-text">B.Sc. Thesis</h6>
            <p className="ms-5 resume"> 
                An accounting software for an internet service provider (ISP).
                <br/>
                GPA: 3.24 / 4
            </p>
            <br/>
            <h4 className="ps-5 resume-section">Technical Skills</h4>
            <br/>
            <h5 className="ps-5 italic-text">Computer Literacy</h5>
            <p className="ms-5 resume">
            Proficient in Microsoft SQL Server, MySQL, MongoDB, IndexedDB, C++, C++ builder, Delphi, Python, GitHub, 
            Git, HTML5, ES6, CSS, Bootstrap, Bulma, JavaScript, JQuery, Node.js, Express.js, React, React hooks, JSX, 
            State, MERN, Apollo GraphQL, Redux, Heroku, Unit Testing w/ JEST, JSON, Fetch, AJAX, Insomnia/Postman, 
            REST APIs, Third-party API, Server-side API, Web Service API, Stripe API, Context API, Anime.js, Day.js, 
            Handlebars.js, Sequelize ORM, Mongoose ODM, Session Module, Bcrypt, Express-handlebars Module, 
            Express-session Module, Dotenv Module, JWT (JavaScript Web Token), Webpack, PWA, Pseudocode, 
            Analytical Skill, Problem Solving, Imperative Programming, Declarative Programming, 
            Data Structures and Algorithms, Object-Oriented Programming(OOP), Front-End Development, Back-End Development, 
            and Full-stack Development.
            </p>
            <br/>
            <h5 className="ps-5 italic-text">Medical Skills</h5>
            <p className="ms-5 resume">
                Patient examinations, treatment planning, follow-up and referral, active interaction with patients and staff, 
                medical documentation, proactive team member within the hospital work force, lab test and radiology procedural ordering.  
            </p>
        </div>
    );
}

export default Resume;