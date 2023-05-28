import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  console.log(currentPage);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="d-flex flex-column flex-wrap justify-content-center">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}
