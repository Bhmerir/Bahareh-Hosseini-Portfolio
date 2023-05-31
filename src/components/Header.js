import React from 'react';
import Navigation from './Navigation';

import "../assets/styles/common.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header d-flex flex-column flex-wrap justify-content-center">
      <h1 className="d-flex justify-content-center">Bahareh Hosseini</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}


export default Header;
