import React from 'react';
import "../assets/styles/common.css";

function Footer({ currentPage, handlePageChange }) {
    return (
        <footer className="footer d-flex flex-row flex-wrap justify-content-center">
            <a href="https://www.linkedin.com/in/bahareh-hosseini-86a43453">
                <p className= "media-link linkedin-img"></p>
            </a>
            <a href="https://github.com/Bhmerir">
                <p className= "media-link github-img"></p>
            </a>
            <a href="https://medium.com/@bhmer.ir">
               <p className= "media-link medium-img"></p>
            </a>
        </footer>
    );
}


export default Footer;