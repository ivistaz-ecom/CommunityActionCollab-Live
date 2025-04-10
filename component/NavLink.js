"use client";
import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href;
    
    // Determine which section to scroll to based on the link text
    const section = children === 'Knowledgebase' ? 'base' : 'media';
    
    // Store the section in sessionStorage
    sessionStorage.setItem('scrollToSection', section);
  };

  return (
    <Link
      className="dropdown-item fs-6"
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default NavLink; 