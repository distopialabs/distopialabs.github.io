import React from 'react';
import { NavLink } from 'react-router-dom';
import { MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Distopia Lab</h3>
            <p className="text-sm">
              Advancing distributed systems research through federated learning,
              blockchain consensus mechanisms, and decentralized technologies at
              the University of Oregon School of Computer and Data Sciences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-secondary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/people" className="hover:text-secondary transition-colors">
                  People
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-secondary transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/publications" className="hover:text-secondary transition-colors">
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="hover:text-secondary transition-colors">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <div className="flex items-center gap-2 mb-2">
                <MailIcon size={18} />
                <a href="mailto:distopia@uoregon.edu" className="hover:text-secondary transition-colors">
                  suyash@uoregon.edu
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Distopia Lab, University of
            Oregon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}