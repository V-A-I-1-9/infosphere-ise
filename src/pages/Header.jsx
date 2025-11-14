/* src/pages/Header.jsx */

import { NavBar } from "@/components/ui/tubelight-navbar";
import { CalendarDays, Home, Trophy, VenetianMask, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import IseLogo from "../assets/ISE.webp";
import MmitLogo from "../assets/mmit.webp";

const navItems = [
  // ... (same nav items)
  { name: "Home", url: "/", icon: Home },
  { name: "Sports", url: "/sports", icon: Trophy },
  { name: "Technical", url: "/technical", icon: Wrench },
  { name: "Cultural", url: "/cultural", icon: VenetianMask },
  { name: "Events", url: "/events", icon: CalendarDays },
];

function Header() {
  return (
    <header className="relative z-40 w-full h-20">
      <div className="absolute top-0 left-0 p-4 sm:p-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={MmitLogo} alt="MMIT Logo" className="w-auto h-10 sm:h-12" />
          {/* --- THIS IS THE CHANGE --- */}
          <div className="w-px h-8 bg-slate-300"></div> {/* Was bg-slate-700 */}
          <img
            src={IseLogo}
            alt="ISE Dept Logo"
            className="w-auto h-10 sm:h-12"
          />
        </Link>
      </div>
      <NavBar items={navItems} />
    </header>
  );
}

export default Header;
