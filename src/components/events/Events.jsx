import React from 'react';
import { useEventsData } from '../../hooks/useEventData';
import { Timeline } from '@/components/ui/timeline';
import EventTimelineCard from './EventTimelineCard';
import Spinner from '../../pages/Spinner';
import { motion } from 'framer-motion';
import { WobbleCard } from "@/components/ui/wobble-card";

// Helper function to format the date for the timeline title
function formatEventDate(date) {
  if (!date || !(date instanceof Date)) return "Date TBD";
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// Helper function to format the time for the timeline title
function formatEventTime(date) {
  if (!date || !(date instanceof Date)) return "";
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(date);
}


function EventsPage() {
  const { isLoading, isError, error, upcoming, ongoing, completed } =
    useEventsData();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold text-red-600">Error Loading Events</h2>
        <p className="text-slate-600 mt-4">
          {error?.message || "An unexpected error occurred. Please try again later."}
        </p>
      </div>
    );
  }

  const allEvents = [...ongoing, ...upcoming, ...completed]
  .sort((a, b) => a.start.getTime() - b.start.getTime());

  const timelineData = allEvents.map(event => ({
    title: (
      <div className="flex flex-col">
        {/* We make the date bold and larger */}
        <span className="text-2xl font-bold text-slate-900">
          {formatEventDate(event.start)}
        </span>
        {/* And the time slightly smaller and lighter */}
        <span className="text-lg text-slate-600">
          {formatEventTime(event.start)}
        </span>
      </div>
    ),
    content: (
      <EventTimelineCard event={event} />
    ),
  }));

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Event{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
          Timeline
        </span>
      </motion.h1>
      <motion.p
        className="text-lg text-slate-600 mb-0 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Check out our upcoming events and join us for fun, learning, and networking!.
      </motion.p>

      <section className="my-12">
        {timelineData.length > 0 ? (
          <Timeline data={timelineData} />
        ) : (
          // If EMPTY, render this placeholder Wobble Card
          <div className="flex justify-center mt-16"> {/* Centering wrapper with margin */}
            <WobbleCard
              containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[200px] w-full max-w-lg flex items-center justify-center p-8" // Adjusted size and padding
            >
              <p className="text-xl text-slate-700 italic text-center leading-relaxed"> {/* Adjusted text style */}
                No events scheduled at the moment. Check back soon for exciting updates!
              </p>
            </WobbleCard>
          </div>
        )}
      </section>

    </div>
  );
}

export default EventsPage;