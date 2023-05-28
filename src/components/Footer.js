import React from 'react';
import "../styles/common.css";
import linkedinImage from '../images/linkedin.png';
import githubImage from '../images/github.png';
import mediumImage from '../images/medium.png';

function Footer({ currentPage, handlePageChange }) {
    return (
        <footer className="footer d-flex flex-row flex-wrap justify-content-center">
            <a href="https://www.linkedin.com/in/bahareh-hosseini-86a43453">
            <p class= "media-link linkedin-img"></p>
            </a>
            <a href="https://github.com/Bhmerir">
                <p class= "media-link github-img"></p>
            </a>
            <a href="https://medium.com/@bhmer.ir">
               <p class= "media-link medium-img"></p>
            </a>
        </footer>
    );
}


export default Footer;