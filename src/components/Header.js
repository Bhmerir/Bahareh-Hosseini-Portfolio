import React from 'react';
import Navigation from './Navigation';

import "../assets/styles/common.css";


function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header d-flex flex-column flex-wrap justify-content-center">
    
        <div className="d-flex justify-content-center">
          <h1 >Bahareh Hosseini</h1>
        </div>
        <div className="d-flex justify-content-end">
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>

      
    </header>
  );
}


export default Header;
