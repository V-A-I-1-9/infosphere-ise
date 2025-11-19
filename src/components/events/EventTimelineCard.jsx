import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const DEFAULT_POSTER =
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function EventTimelineCard({ event }) {
  return (
    // 'group' enables hover effects on children
    // 'overflow-hidden' is crucial for rounded corners and animations
    <div className="relative w-full overflow-hidden transition-all duration-500 ease-in-out shadow-xl group rounded-2xl">
      {/* 1. Event Image (Background) */}
      <img
        src={event.poster_url || DEFAULT_POSTER}
        alt={event.title}
        className="object-cover w-full transition-transform duration-500 ease-in-out h-80 group-hover:scale-110" // Subtle zoom on hover
      />

      {/* 2. Content Container (This holds BOTH title and details) */}
      {/* It's positioned at the bottom and contains two stacked divs */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* 2a. Title Overlay (Always visible) */}
        {/* This div provides the non-glass background for the title */}
        <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-3xl font-bold text-white">{event.title}</h3>
          {event.sub_category && (
            <p className="text-lg font-medium text-white/90">
              {event.sub_category}
            </p>
          )}
        </div>

        {/* 2b. Revealed Details (Glassmorphism) */}
        {/* This div is hidden (max-h-0) and slides up on hover */}
        {/* It has the backdrop-blur for the glass effect */}
        <div className="space-y-4 transition-all duration-500 ease-in-out border-t opacity-0 max-h-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:p-6 bg-white/20 backdrop-blur-lg border-white/30">
          {/* Venue (with icon) */}
          {event.venue && (
            <p className="flex items-center gap-2 font-medium text-white text-md">
              <MapPin size={16} className="flex-shrink-0 text-white" />
              <span>{event.venue}</span>
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-white/90">{event.description}</p>

          {/* Registration Button (Conditional) */}
          {event.registration_link && (
            <a
              href={event.registration_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-2"
            >
              {/* The new "Top-Tier" button */}
              <Button className="w-full py-5 text-base font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-brand-primary to-brand-light hover:from-brand-light hover:to-brand-primary hover:shadow-brand-primary/40">
                Register Now
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventTimelineCard;
