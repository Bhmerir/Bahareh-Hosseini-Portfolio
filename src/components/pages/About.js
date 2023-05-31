import React from 'react';
import "../../assets/styles/common.css";
import myPhoto from "../../assets/images/my-photo.jpg"

function About() {
    return (
        <div className="page about-page">
            <div className="">
                <div className="col-md-4 mb-4 d-flex justify-content-start">
                    <img src={myPhoto} className="my-photo" alt="Bahareh" />
                </div>
            </div>
            <h3 className="about-header pt-3 ps-5">About Me</h3>
            <p className="about-p ps-5">
                To tell about myself, I have a bachelor of science in software engineering, and about 5 years of experience in this field, which involves designing, programming,
                and technically supporting financial software systems such as accounting, fiduciary, banking transactions, product sales,
                employee salary and benefit management, and customer relationship management (CRM).
                Also, I have a full-stack web development certificate
                from UC Berkeley extension.
            </p>
        </div>
    );
}

export default About;