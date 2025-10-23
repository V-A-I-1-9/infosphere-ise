import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import InfoLogo from '../assets/InfoSphereLogo.png'; // Using your existing logo

function Footer() {
  return (
    // This is the glass effect container:
    // 1. border-t: A subtle top line for separation.
    // 2. bg-white/70: A semi-transparent white background.
    // 3. backdrop-blur-sm: The "frosted glass" effect that blurs the gradient behind it.
    <footer className="w-full border-t border-slate-300/50 bg-white/70 backdrop-blur-sm mt-24">
      
      {/* Main content grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12">
        
        {/* Column 1: Identity */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-3">
            <img src={InfoLogo} alt="ISE Dept Logo" className="h-10 w-auto" />
            <span className="font-bold text-lg text-brand-dark">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
              Infosphere
            </span>
            </span>
          </div>
          <p className="text-sm text-slate-600 text-center md:text-left">
            Information Science & Engineering
            <br />
            Maharaja Institute of Technology, Mysuru
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3 text-center md:text-left">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-600 flex flex-col items-center md:items-start">
            <li><Link to="/" className="hover:text-brand-dark transition-colors">Home</Link></li>
            <li><Link to="/sports" className="hover:text-brand-dark transition-colors">Sports</Link></li>
            <li><Link to="/technical" className="hover:text-brand-dark transition-colors">Technical</Link></li>
            <li><Link to="/cultural" className="hover:text-brand-dark transition-colors">Cultural</Link></li>
            <li><Link to="/events" className="hover:text-brand-dark transition-colors">Events</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3 text-center md:text-left">Contact Us</h4>
          <ul className="space-y-2 text-sm text-slate-600 flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:infosphere@mmit.edu.in" className="hover:text-brand-dark transition-colors">
                infosphereISE@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>MIT Mysore, Srirangapatna - 570028</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3 text-center md:text-left">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-brand-dark transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-brand-dark transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-300/50 py-4">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Infosphere ISE Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;