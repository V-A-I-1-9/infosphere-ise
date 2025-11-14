/* src/components/ui/tubelight-navbar.jsx */

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function NavBar({ items, className }) {
  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 bottom-6 sm:top-6 sm:bottom-auto w-auto h-auto",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg",
          /* --- COLOR CHANGES --- */
          "bg-white/80 border border-slate-200" /* Light background */
        )}
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.url}
              className={({ isActive }) =>
                cn(
                  "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
                  /* --- COLOR CHANGES --- */
                  "text-slate-600 hover:text-brand-dark" /* Dark text for inactive */,
                  isActive ? "text-brand-dark" : "" /* Dark text for active */
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={20} strokeWidth={2} />
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      /* --- COLOR CHANGES --- */
                      style={{
                        backgroundColor: "rgba(14, 62, 104, 0.05)",
                      }} /* Faint brand color glow */
                    >
                      <div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-t-full"
                        style={{
                          backgroundColor: "#0e3e68",
                        }} /* Brand color lamp */
                      >
                        {/* Removed the extra blur divs as they don't show well on white */}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
