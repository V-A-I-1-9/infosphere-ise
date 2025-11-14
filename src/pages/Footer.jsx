import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import InfoLogo from "../assets/InfoSphereLogo.webp"; // Using your existing logo

function Footer() {
  return (
    // This is the glass effect container:
    // 1. border-t: A subtle top line for separation.
    // 2. bg-white/70: A semi-transparent white background.
    // 3. backdrop-blur-sm: The "frosted glass" effect that blurs the gradient behind it.
    <footer className="w-full mt-24 border-t border-slate-300/50 bg-white/70 backdrop-blur-sm">
      {/* Main content grid */}
      <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto md:grid-cols-4">
        {/* Column 1: Identity */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-3">
            <img src={InfoLogo} alt="ISE Dept Logo" className="w-auto h-10" />
            <span className="text-lg font-bold text-brand-dark">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
                Infosphere
              </span>
            </span>
          </div>
          <p className="text-sm text-center text-slate-600 md:text-left">
            Information Science & Engineering
            <br />
            Maharaja Institute of Technology, Mysuru
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="mb-3 font-semibold text-center text-slate-800 md:text-left">
            Quick Links
          </h4>
          <ul className="flex flex-col items-center space-y-2 text-sm text-slate-600 md:items-start">
            <li>
              <Link to="/" className="transition-colors hover:text-brand-dark">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sports"
                className="transition-colors hover:text-brand-dark"
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                to="/technical"
                className="transition-colors hover:text-brand-dark"
              >
                Technical
              </Link>
            </li>
            <li>
              <Link
                to="/cultural"
                className="transition-colors hover:text-brand-dark"
              >
                Cultural
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="transition-colors hover:text-brand-dark"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="mb-3 font-semibold text-center text-slate-800 md:text-left">
            Contact Us
          </h4>
          <ul className="flex flex-col items-center space-y-2 text-sm text-slate-600 md:items-start">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:infosphereise@gmail.com"
                className="transition-colors hover:text-brand-dark"
              >
                infosphereise@gmail.com
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
          <h4 className="mb-3 font-semibold text-center text-slate-800 md:text-left">
            Follow Us
          </h4>
          <div className="flex justify-center space-x-5 md:justify-start">
            <a
              href="https://www.instagram.com/__infoenix__?igsh=MW94bzB5a3d2MjFrZA=="
              aria-label="Instagram"
              className="transition-colors text-slate-500 hover:text-brand-dark"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/groups/13095143"
              aria-label="LinkedIn"
              className="transition-colors text-slate-500 hover:text-brand-dark"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="py-4 border-t border-slate-300/50">
        <p className="text-xs text-center text-slate-500">
          © {new Date().getFullYear()} Infosphere ISE Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
