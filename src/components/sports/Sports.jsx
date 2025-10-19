import { useSportsData } from "../../hooks/useSportsData";
import "./Sports.css";

function Sports() {
  const { isLoading, isError, error, events, team, achievements } =
    useSportsData();

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading Sports Club data...</p>
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
    <div className="sports-page">
      <h1>Sports Club</h1>

      {/* Events Section */}
      <section className="events-section">
        <h2>Events ({events.length})</h2>
        <div className="cards-grid">
          {events.map(function renderEventCard(event, index) {
            // Use file_id or File_ID or fallback to index
            const key = event.file_id || event.File_ID || `event-${index}`;

            return (
              <div key={key} className="card">
                <img
                  src={event.file_url || event.File_URL}
                  alt={event.event_name || event.Event_Name}
                  loading="lazy"
                />
                <h3>{event.event_name || event.Event_Name}</h3>
                <p className="sport-type">
                  {event.sport_type || event.Sport_Type}
                </p>
                <p className="event-date">
                  {event.event_date || event.Event_Date}
                </p>
                <p className="venue">{event.venue || event.Venue}</p>
                <p className="match-result">
                  {event.match_result || event.Match_Result}
                </p>
                <p className="description">
                  {event.description || event.Description}
                </p>
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
                <p className="sport-type">
                  {member.sport_type || member.Sport_Type}
                </p>
                {(member.jersey_number || member.Jersey_Number) && (
                  <p className="jersey-number">
                    #{member.jersey_number || member.Jersey_Number}
                  </p>
                )}
                <p className="year">{member.year || member.Year}</p>
                <p className="bio">{member.bio || member.Bio}</p>
                {(member.contact_email || member.Contact_Email) && (
                  <a
                    href={`mailto:${
                      member.contact_email || member.Contact_Email
                    }`}
                  >
                    Contact
                  </a>
                )}
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
                    achievement.achievement_title ||
                    achievement.Achievement_Title
                  }
                  loading="lazy"
                />
                <h3>
                  {achievement.achievement_title ||
                    achievement.Achievement_Title}
                </h3>
                <p className="sport-type">
                  {achievement.sport_type || achievement.Sport_Type}
                </p>
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
                <p className="description">
                  {achievement.description || achievement.Description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Sports;
