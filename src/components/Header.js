import React from 'react';
import Navigation from './Navigation';

import "../assets/styles/common.css";


function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header d-flex flex-column flex-wrap justify-content-center">
      <div className="row d-flex align-items-start">
        <div className="col-4">      
        </div>
        <div className="col-4">
          <h1 >Bahareh Hosseini</h1>
        </div>
        <div className="col-4">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
      
    </header>
  );
}


export default Header;
