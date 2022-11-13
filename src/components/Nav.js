import React from 'react';

function Nav({ currentPage, handlePageChange }){
    return(
      <ul className="nav nav-tabs nav-overwrite">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
         

          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#services"
         

          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </a>
      </li>
    </ul>
    );
};

export default Nav