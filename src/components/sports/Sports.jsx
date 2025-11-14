import { CometCard } from "@/components/ui/comet-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react"; // Icons for team cards
import { useSportsData } from "../../hooks/useSportsData";
import Spinner from "../../pages/Spinner";

// --- ASSET IMPORTS --- (Ensure these are correct)
import facultyImg1 from "../../assets/profiles/amruth.webp";
import sh from "../../assets/profiles/sportshead.webp";
import ss from "../../assets/profiles/sportssec.webp";
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
  const {
    isLoading,
    isError,
    error,
    events = [],
    team = [],
    achievements = [],
  } = useSportsData();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="container px-4 py-12 mx-auto text-center md:py-24">
        <h2 className="text-3xl font-bold text-red-600">Error Loading Data</h2>
        <p className="mt-4 text-slate-600">
          {error?.message || "An unexpected error occurred"}
        </p>
      </div>
    );
  }

  const coordinatorsData = [
    {
      id: "faculty-coord-sports",
      type: "faculty", // Added type
      name: "Prof. Amruth V",
      role: "Faculty Coordinator",
      photo: facultyImg1,
    },
    {
      id: "student-coord-sports",
      type: "student", // Added type
      name: "Nagesh N",
      role: "Student Head",
      photo: sh,
    },
    {
      id: "student2-coord-sports",
      type: "student", // Added type
      name: "Kushal R Gowda",
      role: "Student Secretary",
      photo: ss,
    },
    // Add more coordinators here if needed, specifying their type
  ];
  const players = (team || []).filter(
    (member) =>
      !(member.role || member.Role)?.toLowerCase().includes("coordinator")
  );

  // Filter coordinators into separate arrays
  const facultyCoordinators = coordinatorsData.filter(
    (c) => c.type === "faculty"
  );
  const studentCoordinators = coordinatorsData.filter(
    (c) => c.type === "student"
  );

  return (
    <div className="container px-4 py-12 mx-auto md:py-24">
      {/* 1. Gradient Page Title (with animation) */}
      <motion.h1
        className="mb-4 text-5xl font-bold text-center sm:text-6xl md:text-7xl text-slate-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
          Sports
        </span>{" "}
        Club
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto mb-12 text-lg text-center text-slate-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Compete • Achieve • Excel
      </motion.p>

      {/* --- SECTION 2a: Faculty Coordinators --- */}
      {facultyCoordinators.length > 0 && (
        <section className="my-16">
          <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-slate-900">
            Faculty Coordinator(s)
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {facultyCoordinators.map((member) => {
              // Map over filtered faculty
              const key = member.id;
              const name = member.name;
              const role = member.role;
              const photo = member.photo;

              return (
                <CometCard key={key}>
                  <div className="overflow-hidden border shadow-lg w-72 h-96 rounded-2xl bg-slate-900/80 backdrop-blur-sm border-slate-700">
                    <img
                      src={photo}
                      alt={name}
                      className="object-cover object-center w-full h-3/4"
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
      )}

      {/* --- SECTION 2b: Student Coordinators --- */}
      {studentCoordinators.length > 0 && (
        <section className="my-16">
          <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-slate-900">
            Student Coordinator(s)
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {studentCoordinators.map((member) => {
              // Map over filtered students
              const key = member.id;
              const name = member.name;
              const role = member.role;
              const photo = member.photo;

              return (
                <CometCard key={key}>
                  <div className="overflow-hidden border shadow-lg w-72 h-96 rounded-2xl bg-slate-900/80 backdrop-blur-sm border-slate-700">
                    <img
                      src={photo}
                      alt={name}
                      className="object-cover object-center w-full h-3/4"
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
      )}

      {/* 3. Events Section (Wobble Cards with Glassmorphism) */}
      <section className="my-24">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-slate-900">
          Recent Events
        </h2>

        {events && events.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {events.map((event, index) => {
              const key = event.file_id || event.File_ID || `event-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  {/* Image container needed to enforce rounded corners */}
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={event.file_url || event.File_URL}
                      alt={event.event_name || event.Event_Name}
                      className="object-cover w-full h-full" // Removed rounded here
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold leading-tight text-slate-900">
                      {event.event_name || event.Event_Name}
                    </h3>
                    <p className="mt-1 font-semibold text-brand-dark">
                      {event.sport_type || event.Sport_Type}
                    </p>
                    <p className="mt-3 text-sm text-slate-700">
                      {" "}
                      {/* Darker text for readability */}
                      {formatDate(event.event_date || event.Event_Date)}
                    </p>
                    <p className="text-sm text-slate-700">
                      {" "}
                      {/* Darker text */}
                      {event.venue || event.Venue}
                    </p>
                    <p className="mt-2 font-semibold text-slate-800">
                      {event.match_result || event.Match_Result}
                    </p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <WobbleCard containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[200px] w-full max-w-sm flex items-center justify-center p-6">
              <p className="text-lg italic text-center text-slate-600">
                No recent sports events to show right now. Please check back
                later!
              </p>
            </WobbleCard>
          </div>
        )}
      </section>

      {/* 4. Achievements Section (Wobble Cards with Glassmorphism) */}
      <section className="my-24">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-slate-900">
          Our Achievements
        </h2>

        {achievements && achievements.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {achievements.map((ach, index) => {
              const key = ach.file_id || ach.File_ID || `ach-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  {/* Image container */}
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={ach.file_url || ach.File_URL}
                      alt={ach.achievement_title || ach.Achievement_Title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold leading-tight text-slate-900">
                      {ach.achievement_title || ach.Achievement_Title}
                    </h3>
                    <p className="mt-1 font-semibold text-brand-dark">
                      Winners: {ach.winner_names || ach.Winner_Names}
                    </p>
                    <p className="mt-3 text-sm text-slate-700">
                      {ach.level || ach.Level} Level (
                      {ach.achievement_type || ach.Achievement_Type})
                    </p>
                    <p className="text-sm text-slate-700">
                      {formatDate(ach.achievement_date || ach.Achievement_Date)}
                    </p>
                    <p className="mt-2 text-sm text-slate-800">
                      {ach.description || ach.Description}
                    </p>
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <WobbleCard containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[200px] w-full max-w-sm flex items-center justify-center p-6">
              <p className="text-lg italic text-center text-slate-600">
                No achievements recorded yet. Let's make some history!
              </p>
            </WobbleCard>
          </div>
        )}
      </section>

      {/* 5. Players Section (Wobble Cards with Glassmorphism) */}
      <section className="my-24">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-slate-900">
          Our Players
        </h2>

        {players && players.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {players.map((member, index) => {
              const key = member.file_id || member.File_ID || `player-${index}`;
              return (
                <WobbleCard
                  key={key}
                  containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[420px] w-full max-w-sm"
                >
                  {/* Image container */}
                  <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={member.photo_url || member.Photo_URL || member.photo}
                      alt={
                        member.member_name || member.Member_Name || member.name
                      }
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold leading-tight text-slate-900">
                      {member.member_name || member.Member_Name || member.name}
                    </h3>
                    <p className="mt-1 font-semibold text-brand-dark">
                      {member.sport_type || member.Sport_Type}
                    </p>
                    {(member.jersey_number || member.Jersey_Number) && (
                      <span className="text-xl font-bold text-slate-600">
                        #{member.jersey_number || member.Jersey_Number}
                      </span>
                    )}
                    <p className="mt-2 text-sm text-slate-700">
                      {member.year || member.Year} Year
                    </p>
                    {(member.contact_email || member.Contact_Email) && (
                      <a
                        href={`mailto:${
                          member.contact_email || member.Contact_Email
                        }`}
                        className="flex items-center gap-2 mt-1 text-sm text-blue-700 hover:underline"
                      >
                        <Mail size={14} /> Contact
                      </a>
                    )}
                  </div>
                </WobbleCard>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <WobbleCard containerClassName="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-3xl overflow-hidden min-h-[200px] w-full max-w-sm flex items-center justify-center p-6">
              <p className="text-lg italic text-center text-slate-600">
                Team roster is being updated. Stay tuned!
              </p>
            </WobbleCard>
          </div>
        )}
      </section>
    </div>
  );
}

export default Sports;
