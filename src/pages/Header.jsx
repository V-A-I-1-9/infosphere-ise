/* src/pages/Header.jsx */

import { Link } from 'react-router-dom';
import { NavBar } from "@/components/ui/tubelight-navbar";
import IseLogo from '../assets/ISE.png';
import MmitLogo from '../assets/mmit.png';
import {
  Home,
  Trophy,
  Wrench,
  VenetianMask,
  CalendarDays,
} from 'lucide-react';

const navItems = [
  // ... (same nav items)
  { name: 'Home', url: '/', icon: Home },
  { name: 'Sports', url: '/sports', icon: Trophy },
  { name: 'Technical', url: '/technical', icon: Wrench },
  { name: 'Cultural', url: '/cultural', icon: VenetianMask },
  { name: 'Events', url: '/events', icon: CalendarDays },
];

function Header() {
  return (
    <header className="relative z-40 h-20 w-full">
      <div className="absolute top-0 left-0 p-4 sm:p-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={MmitLogo} alt="MMIT Logo" className="h-10 w-auto sm:h-12" />
          {/* --- THIS IS THE CHANGE --- */}
          <div className="h-8 w-px bg-slate-300"></div> {/* Was bg-slate-700 */}
          <img src={IseLogo} alt="ISE Dept Logo" className="h-10 w-auto sm:h-12" />
        </Link>
      </div>
      <NavBar items={navItems} />
    </header>
  );
}

export default Header;