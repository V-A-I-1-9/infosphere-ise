import React from 'react';
import { useTechnicalData } from "../../hooks/useTechnicalData";
import Spinner from '../../pages/Spinner';
import { CometCard } from "@/components/ui/comet-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Mail, Linkedin, Github, Globe } from 'lucide-react'; // Added more icons
import { motion } from 'framer-motion';

// --- ASSET IMPORTS --- (Using the same placeholders)
import facultyImg1 from '../../assets/profiles/sangeetha.jpg';
import facultyImg2 from '../../assets/profiles/thalivar.jpg';
import th from '../../assets/profiles/techhead.jpg';

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

function Technical() {
  const { isLoading, isError, error, events, team, achievements, projects } =
    useTechnicalData();

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
      name: 'Prof. Sangeetha', // <-- EDIT THIS NAME
      role: 'Faculty Coordinator', // <-- EDIT THIS ROLE
      photo: facultyImg1         // <-- EDIT THIS IMAGE IMPORT VARIABLE (e.g., facultyImg1)
    },
    {
      id: 'faculty2-coord', // Unique key
      name: 'Prof. Vijaykumar',       // <-- EDIT THIS NAME
      role: 'Faculty Coordinator', // <-- EDIT THIS ROLE
      photo: facultyImg2        // <-- EDIT THIS IMAGE IMPORT VARIABLE (e.g., facultyImg2)
    },
    {
      id: 'student-coord', // Unique key
      name: 'Sonashree MS',       // <-- EDIT THIS NAME
      role: 'Technical Head', // <-- EDIT THIS ROLE
      photo: th        // <-- EDIT THIS IMAGE IMPORT VARIABLE (e.g., studentImg2)
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
          Technical
        </span> Club
      </motion.h1>
      <motion.p
        className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Innovate • Build • Code
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

      {/* 3. Projects Section (Unique to Technical) */}
      {projects.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => {
              const key = project.file_id || project.File_ID || `project-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[450px] w-full max-w-sm"
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={project.file_url || project.File_URL}
                      alt={project.project_name || project.Project_Name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {project.project_name || project.Project_Name}
                    </h3>
                    <p className="font-semibold text-brand-dark mt-1">
                      {project.category || project.Category}
                    </p>
                    <p className="text-sm text-slate-700 mt-2 flex-grow">
                      <span className="font-semibold">Tech Stack:</span> {project.technology_stack || project.Technology_Stack}
                    </p>
                    {/* Links at the bottom */}
                    <div className="flex items-center gap-4 mt-4">
                      {(project.github_url || project.GitHub_URL) && (
                        <a href={project.github_url || project.GitHub_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-700 hover:underline">
                          <Github size={16} /> GitHub
                        </a>
                      )}
                      {(project.demo_url || project.Demo_URL) && (
                        <a href={project.demo_url || project.Demo_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-green-700 hover:underline">
                          <Globe size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Events Section */}
      {events.length > 0 && (
        <section className="my-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Workshops & Events
          </h2>

          {events.length > 0 ? (
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
                      <p className="text-sm text-slate-700"><span className="font-semibold">Topic:</span> {event.topic_technology || event.Topic_Technology}</p>
                      <p className="text-sm text-slate-700"><span className="font-semibold">By:</span> {event.speaker_instructor || event.Speaker_Instructor}</p>
                    </div>
                  </WobbleCard>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-xl text-slate-500 italic">
                No technical events available right now. Stay tuned for updates! 💡
              </p>
            </div>
          )}
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
                    <p className="font-semibold text-brand-dark mt-1">{member.specialization || member.Specialization}</p>
                    <p className="text-sm text-slate-700 mt-2">{member.year || member.Year} Year</p>
                    <div className="flex items-center gap-4 mt-4 text-sm">
                      {(member.contact_email || member.Contact_Email) && (
                        <a href={`mailto:${member.contact_email || member.Contact_Email}`} className="flex items-center gap-1.5 text-blue-700 hover:underline">
                          <Mail size={14} /> Email
                        </a>
                      )}
                      {(member.github_profile || member.GitHub_Profile) && (
                        <a href={member.github_profile || member.GitHub_Profile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-800 hover:underline">
                          <Github size={14} /> GitHub
                        </a>
                      )}
                      {(member.linkedin_profile || member.LinkedIn_Profile) && (
                        <a href={member.linkedin_profile || member.LinkedIn_Profile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-800 hover:underline">
                          <Linkedin size={14} /> LinkedIn
                        </a>
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

export default Technical;