import React from 'react';
import { useSportsData } from "../../hooks/useSportsData";
import Spinner from '../../pages/Spinner';
import { CometCard } from "@/components/ui/comet-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Mail } from 'lucide-react'; // Icons for team cards

// --- ASSET IMPORTS --- (Ensure these are correct)
import facultyImg1 from '../../assets/profiles/faculty-1.png';
import facultyImg2 from '../../assets/profiles/faculty-2.png';
// ... Add other profile/club images if needed ...

// Helper function to format dates, if they exist
function formatDate(dateString) {
  if (!dateString) return null;
  try {
    // Basic formatting, assumes YYYY-MM-DD or similar parsable format
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    console.error("Error formatting date:", dateString, e);
    return dateString; // Fallback to original string
  }
}

function Sports() {
  const { isLoading, isError, error, events, team, achievements } =
    useSportsData();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold text-red-600">Error Loading Data</h2>
        <p className="text-slate-600 mt-4">
          {error?.message || "An unexpected error occurred"}
        </p>
      </div>
    );
  }

  const coordinatorsData = [
    {
      id: 'faculty-coord-sports', // Unique key
      name: 'Prof. Sports Faculty', // <-- EDIT THIS
      role: 'Faculty Coordinator', // <-- EDIT THIS
      photo: facultyImg1         // <-- EDIT THIS (make sure facultyImg1 is imported)
    },
    {
      id: 'student-coord-sports', // Unique key
      name: 'Sports Student Lead',// <-- EDIT THIS
      role: 'Student Coordinator', // <-- EDIT THIS
      photo: facultyImg2        // <-- EDIT THIS (make sure facultyImg2 is imported)
    },
  ];
  const players = team.filter(member =>
    !(member.role || member.Role)?.toLowerCase().includes("coordinator")
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">

      {/* 1. Gradient Page Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-16 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
          Sports
        </span> Club
      </h1>

      {/* 2. Coordinators Section (Comet Cards) */}
      <section className="my-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
          Our Coordinators
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* CHANGE THIS LINE: */}
          {coordinatorsData.map((member) => { // <-- Use coordinatorsData instead of displayCoordinators
            const key = member.id; // Use the hardcoded id
            const name = member.name;
            const role = member.role;
            const photo = member.photo;

            return (
              <CometCard key={key}>
                <div className="w-72 h-96 rounded-2xl overflow-hidden bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-700">
                  <img
                    src={photo} // Use the hardcoded photo
                    alt={name}
                    className="w-full h-3/4 object-cover object-center"
                  />
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold truncate">{name}</h3>
                    <p className="text-sm text-slate-300">{role}</p>
                  </div>
                </div>
              </CometCard>
            );
          })}
        </div>
      </section>

      {/* 3. Events Section (Wobble Cards with Glassmorphism) */}
      {events.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Recent Events
          </h2>
          {/* Added justify-items-center */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {events.map((event, index) => {
              const key = event.file_id || event.File_ID || `event-${index}`;
              return (
                <WobbleCard
                  key={key}
                  // --- GLASSMORPHISM ADDED ---
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  {/* Image container needed to enforce rounded corners */}
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={event.file_url || event.File_URL}
                      alt={event.event_name || event.Event_Name}
                      className="w-full h-full object-cover" // Removed rounded here
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {event.event_name || event.Event_Name}
                    </h3>
                    <p className="font-semibold text-brand-dark mt-1">
                      {event.sport_type || event.Sport_Type}
                    </p>
                    <p className="text-sm text-slate-700 mt-3"> {/* Darker text for readability */}
                      {formatDate(event.event_date || event.Event_Date)}
                    </p>
                    <p className="text-sm text-slate-700"> {/* Darker text */}
                      {event.venue || event.Venue}
                    </p>
                    <p className="font-semibold text-slate-800 mt-2">
                      {event.match_result || event.Match_Result}
                    </p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Achievements Section (Wobble Cards with Glassmorphism) */}
      {achievements.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Our Achievements
          </h2>
          {/* Added justify-items-center */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {achievements.map((ach, index) => {
              const key = ach.file_id || ach.File_ID || `ach-${index}`;
              return (
                <WobbleCard
                  key={key}
                  // --- GLASSMORPHISM ADDED ---
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  {/* Image container */}
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={ach.file_url || ach.File_URL}
                      alt={ach.achievement_title || ach.Achievement_Title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {ach.achievement_title || ach.Achievement_Title}
                    </h3>
                    <p className="font-semibold text-brand-dark mt-1">
                      Winners: {ach.winner_names || ach.Winner_Names}
                    </p>
                    <p className="text-sm text-slate-700 mt-3"> {/* Darker text */}
                      {ach.level || ach.Level} Level ({ach.achievement_type || ach.Achievement_Type})
                    </p>
                    <p className="text-sm text-slate-700"> {/* Darker text */}
                      {formatDate(ach.achievement_date || ach.Achievement_Date)}
                    </p>
                    <p className="text-sm text-slate-800 mt-2"> {/* Darker text */}
                      {ach.description || ach.Description}
                    </p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. Players Section (Wobble Cards with Glassmorphism) */}
      {players.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Our Players
          </h2>
          {/* Added justify-items-center */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {players.map((member, index) => {
              const key = member.file_id || member.File_ID || `player-${index}`;
              return (
                <WobbleCard
                  key={key}
                  // --- GLASSMORPHISM ADDED ---
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  {/* Image container */}
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={member.photo_url || member.Photo_URL}
                      alt={member.member_name || member.Member_Name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {member.member_name || member.Member_Name}
                    </h3>
                    <p className="font-semibold text-brand-dark mt-1">
                      {member.sport_type || member.Sport_Type}
                    </p>
                    {(member.jersey_number || member.Jersey_Number) && (
                      <span className="font-bold text-xl text-slate-600"> {/* Darker text */}
                        #{member.jersey_number || member.Jersey_Number}
                      </span>
                    )}
                    <p className="text-sm text-slate-700 mt-2"> {/* Darker text */}
                      {member.year || member.Year} Year
                    </p>
                    {(member.contact_email || member.Contact_Email) && (
                      <a href={`mailto:${member.contact_email || member.Contact_Email}`} className="flex items-center gap-2 text-sm text-blue-700 hover:underline mt-1"> {/* Darker text */}
                        <Mail size={14} /> Contact
                      </a>
                    )}
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}

export default Sports;