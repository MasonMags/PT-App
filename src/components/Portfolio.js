import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import "../css/styles.css"

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />
        };
        if (currentPage === 'About'){
            return <About />
        };
        if (currentPage === 'Services'){
            return <Services />
        };
        if (currentPage === 'Contact')
            return <Contact />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
        </div>
      );
};