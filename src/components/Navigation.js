import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    console.log(currentPage)
    return (
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a
                    href="#About"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Potfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Navigation;