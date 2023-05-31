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
            A well experienced software engineer with developed skills in Full-Stack Development, SQL Server, 
            C++ builder, Delphi, and Python, seasoned in the field of accounting and banking financial systems, 
            excellent team worker who helps to bring the maximum synergy, and self-starter with ability to work 
            in fast-paced environments I am authorized to work in the United States. Physically located in the Silicon Valley, 
            and open to positions in the Bay area and remotely all over the United States.
            </p>
        </div>
    );
}

export default About;