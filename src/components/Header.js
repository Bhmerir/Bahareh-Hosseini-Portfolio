import React from 'react';
import Navigation from './Navigation';

import "../styles/common.css";


function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header d-flex flex-column flex-wrap justify-content-center">
      <div class="row align-items-start">
        <div class="col">      
        </div>
        <div class="col">
          <h1 >Bahareh Hosseini</h1>
        </div>
        <div class="col">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
      
    </header>
  );
}


export default Header;
