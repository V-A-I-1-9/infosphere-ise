import { useTechnicalData } from "../../hooks/useTechnicalData";
import "./Technical.css";

function Technical() {
  const { isLoading, isError, error, events, team, achievements, projects } =
    useTechnicalData();

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading Technical Club data...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <h2>Error Loading Data</h2>
        <p>{error?.message || "An unexpected error occurred"}</p>
      </div>
    );
  }

  return (
    <div className="technical-page">
      <h1>Technical Club</h1>

      {/* Events Section */}
      <section className="events-section">
        <h2>Events ({events.length})</h2>
        <div className="cards-grid">
          {events.map(function renderEventCard(event, index) {
            const key = event.file_id || event.File_ID || `event-${index}`;

            return (
              <div key={key} className="card">
                <img
                  src={event.file_url || event.File_URL}
                  alt={event.event_name || event.Event_Name}
                  loading="lazy"
                />
                <h3>{event.event_name || event.Event_Name}</h3>
                <p className="event-type">
                  {event.event_type || event.Event_Type}
                </p>
                <p className="event-date">
                  {event.event_date || event.Event_Date}
                </p>
                <p className="topic">
                  {event.topic_technology || event.Topic_Technology}
                </p>
                <p className="speaker">
                  {event.speaker_instructor || event.Speaker_Instructor}
                </p>
                <p className="venue">{event.venue || event.Venue}</p>
                <p className="description">
                  {event.description || event.Description}
                </p>
                {(event.registration_link || event.Registration_Link) && (
                  <a
                    href={event.registration_link || event.Registration_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team ({team.length})</h2>
        <div className="cards-grid">
          {team.map(function renderTeamCard(member, index) {
            const key = member.file_id || member.File_ID || `team-${index}`;

            return (
              <div key={key} className="card">
                <img
                  src={member.photo_url || member.Photo_URL}
                  alt={member.member_name || member.Member_Name}
                  loading="lazy"
                />
                <h3>{member.member_name || member.Member_Name}</h3>
                <p className="role">{member.role || member.Role}</p>
                <p className="specialization">
                  {member.specialization || member.Specialization}
                </p>
                <p className="year">{member.year || member.Year}</p>
                <p className="bio">{member.bio || member.Bio}</p>

                <div className="contact-links">
                  {(member.contact_email || member.Contact_Email) && (
                    <a
                      href={`mailto:${
                        member.contact_email || member.Contact_Email
                      }`}
                    >
                      ✉️ Email
                    </a>
                  )}
                  {(member.github_profile || member.GitHub_Profile) && (
                    <a
                      href={member.github_profile || member.GitHub_Profile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 GitHub
                    </a>
                  )}
                  {(member.linkedin_profile || member.LinkedIn_Profile) && (
                    <a
                      href={member.linkedin_profile || member.LinkedIn_Profile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💼 LinkedIn
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Achievements ({achievements.length})</h2>
        <div className="cards-grid">
          {achievements.map(function renderAchievementCard(achievement, index) {
            const key =
              achievement.file_id ||
              achievement.File_ID ||
              `achievement-${index}`;

            return (
              <div key={key} className="card">
                <img
                  src={achievement.file_url || achievement.File_URL}
                  alt={
                    achievement.competition_name || achievement.Competition_Name
                  }
                  loading="lazy"
                />
                <h3>
                  {achievement.competition_name || achievement.Competition_Name}
                </h3>
                <p className="achievement-type">
                  {achievement.achievement_type || achievement.Achievement_Type}
                </p>
                <p className="level">
                  {achievement.level || achievement.Level}
                </p>
                <p className="date">
                  {achievement.achievement_date || achievement.Achievement_Date}
                </p>
                <p className="winners">
                  {achievement.winner_names || achievement.Winner_Names}
                </p>
                <p className="project">
                  {achievement.project_name || achievement.Project_Name}
                </p>
                <p className="description">
                  {achievement.description || achievement.Description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section (Unique to Technical) */}
      <section className="projects-section">
        <h2>Projects ({projects.length})</h2>
        <div className="cards-grid">
          {projects.map(function renderProjectCard(project, index) {
            const key =
              project.file_id || project.File_ID || `project-${index}`;

            return (
              <div key={key} className="card">
                <img
                  src={project.file_url || project.File_URL}
                  alt={project.project_name || project.Project_Name}
                  loading="lazy"
                />
                <h3>{project.project_name || project.Project_Name}</h3>
                <p className="year">{project.year || project.Year}</p>
                <p className="category">
                  {project.category || project.Category}
                </p>
                <p className="team">
                  {project.team_members || project.Team_Members}
                </p>
                <p className="tech-stack">
                  {project.technology_stack || project.Technology_Stack}
                </p>
                <p className="abstract">
                  {project.project_abstract || project.Project_Abstract}
                </p>
                <p className="status">{project.status || project.Status}</p>

                <div className="project-links">
                  {(project.github_url || project.GitHub_URL) && (
                    <a
                      href={project.github_url || project.GitHub_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 GitHub
                    </a>
                  )}
                  {(project.demo_url || project.Demo_URL) && (
                    <a
                      href={project.demo_url || project.Demo_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Technical;
