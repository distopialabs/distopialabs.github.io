import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'People',
    path: '/people'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Publications',
    path: '/publications'
  }, {
    name: 'News',
    path: '/news'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/distopialogo.png" alt="Distopia Lab Logo" className="h-12" />
          <div>
            <h1 className="text-xl font-bold text-primary">Distopia Lab</h1>
            <p className="text-xs text-gray-600">University of Oregon</p>
          </div>
        </NavLink>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
          isActive
        }) => `font-medium hover:text-primary transition-colors ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700'}`}>
              {link.name}
            </NavLink>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white border-t py-3 px-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => <li key={link.path}>
                <NavLink to={link.path} onClick={toggleMenu} className={({
            isActive
          }) => `block py-2 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}>
                  {link.name}
                </NavLink>
              </li>)}
          </ul>
        </nav>}
    </header>;
}