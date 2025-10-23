import React from 'react';
import { useCulturalData } from "../../hooks/useCulturalData"; // Use the correct hook
import Spinner from '../../pages/Spinner';
import { CometCard } from "@/components/ui/comet-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Mail, Phone } from 'lucide-react'; // Icons for team cards
import { motion } from 'framer-motion';

// --- ASSET IMPORTS --- (Using the same placeholders)
import facultyImg1 from '../../assets/profiles/smithashree.jpg';
import ch from '../../assets/profiles/culhead.jpg';

// Helper function to format dates
function formatDate(dateString) {
  if (!dateString) return null;
  try {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return dateString;
  }
}

function Cultural() {
  const { isLoading, isError, error, events, team, achievements } =
    useCulturalData(); // Use the correct hook

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

  // --- Hardcoded Coordinator Data ---
  const coordinatorsData = [
    {
      id: 'faculty-coord', // Unique key
      name: 'Prof. Smithashree KP', // <-- EDIT THIS NAME
      role: 'Faculty Coordinator', // <-- EDIT THIS ROLE
      photo: facultyImg1         // <-- EDIT THIS IMAGE IMPORT VARIABLE (e.g., facultyImg1)
    },
    {
      id: 'student-coord', // Unique key
      name: 'Bhuvan HN',       // <-- EDIT THIS NAME
      role: 'Cultural Head', // <-- EDIT THIS ROLE
      photo: ch        // <-- EDIT THIS IMAGE IMPORT VARIABLE (e.g., facultyImg2)
    },
  ];

  const members = team.filter(member =>
    !(member.role || member.Role)?.toLowerCase().includes("coordinator")
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">

      {/* 1. Gradient Page Title (with animation) */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
          Cultural
        </span> Club
      </motion.h1>
      <motion.p
        className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Express • Perform • Inspire
      </motion.p>

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

      {/* 3. Events Section */}
      {events.length > 0 ? (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Performances & Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {events.map((event, index) => {
              const key = event.file_id || event.File_ID || `event-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img src={event.file_url || event.File_URL} alt={event.event_name || event.Event_Name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{event.event_name || event.Event_Name}</h3>
                    <p className="font-semibold text-brand-dark mt-1">{event.event_type || event.Event_Type}</p>
                    <p className="text-sm text-slate-700 mt-3">{formatDate(event.event_date || event.Event_Date)}</p>
                    <p className="text-sm text-slate-700">{event.venue || event.Venue}</p>
                    <p className="text-sm text-slate-800 mt-2">{event.description || event.Description}</p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Performances & Events
          </h2>
          <div className="text-center py-16 px-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-xl text-slate-500 italic">
              No performances planned right now. Keep an eye out for upcoming shows! 🎭
            </p>
          </div>
        </section>
      )}

      {/* 4. Achievements Section */}
      {achievements.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Accolades & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {achievements.map((ach, index) => {
              const key = ach.file_id || ach.File_ID || `ach-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img src={ach.file_url || ach.File_URL} alt={ach.achievement_title || ach.Achievement_Title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{ach.achievement_title || ach.Achievement_Title}</h3>
                    <p className="font-semibold text-brand-dark mt-1">Winners: {ach.winner_names || ach.Winner_Names}</p>
                    <p className="text-sm text-slate-700 mt-3">{ach.level || ach.Level} Level ({ach.achievement_type || ach.Achievement_Type})</p>
                    <p className="text-sm text-slate-700">{formatDate(ach.achievement_date || ach.Achievement_Date)}</p>
                    <p className="text-sm text-slate-800 mt-2">{ach.description || ach.Description}</p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. Team Members Section */}
      {members.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Our Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {members.map((member, index) => {
              const key = member.file_id || member.File_ID || `member-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img src={member.photo_url || member.Photo_URL} alt={member.member_name || member.Member_Name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{member.member_name || member.Member_Name}</h3>
                    <p className="font-semibold text-brand-dark mt-1">{member.category || member.Category}</p> {/* Cultural uses Category */}
                    <p className="text-sm text-slate-700 mt-2">{member.year || member.Year} Year</p>
                    <div className="flex items-center gap-4 mt-4 text-sm">
                      {(member.contact_email || member.Contact_Email) && (
                        <a href={`mailto:${member.contact_email || member.Contact_Email}`} className="flex items-center gap-1.5 text-blue-700 hover:underline">
                          <Mail size={14} /> Email
                        </a>
                      )}
                      {(member.contact_phone || member.Contact_Phone) && ( // Cultural uses Phone
                        <span className="flex items-center gap-1.5 text-slate-800">
                          <Phone size={14} /> {member.contact_phone || member.Contact_Phone}
                        </span>
                      )}
                    </div>
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

export default Cultural;