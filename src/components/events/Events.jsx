import { useEventsData } from "../../hooks/useEventData";
import "./Event.css";

function EventsPage() {
  const { isLoading, isError, error, upcoming, ongoing, completed, featured } =
    useEventsData();

  // Loading state
  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading events...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="error-container">
        <h2>Error Loading Events</h2>
        <p>{error?.message || "An unexpected error occurred"}</p>
      </div>
    );
  }

  return (
    <div className="events-page">
      <h1>Events Calendar</h1>

      {/* Featured Events */}
      {featured.length > 0 && (
        <section className="featured-section">
          <h2>Featured Events</h2>
          <div className="featured-grid">
            {featured.map(function renderFeaturedEvent(event) {
              return (
                <div key={event.event_id} className="featured-card">
                  {event.poster_url && (
                    <img
                      src={event.poster_url}
                      alt={event.title}
                      loading="lazy"
                    />
                  )}
                  <div className="card-content">
                    <span className="category-badge">{event.category}</span>
                    <h3>{event.title}</h3>
                    {event.sub_category && (
                      <p className="sub-category">{event.sub_category}</p>
                    )}
                    <p className="event-date">
                      {event.start &&
                        event.start.toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                    </p>
                    <p className="venue">📍 {event.venue}</p>
                    <p className="description">{event.description}</p>
                    {event.registration_link && (
                      <a
                        href={event.registration_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-btn"
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="upcoming-section">
        <h2>Upcoming Events ({upcoming.length})</h2>
        <div className="events-grid">
          {upcoming.map(function renderUpcomingEvent(event) {
            return (
              <div key={event.event_id} className="event-card">
                {event.poster_url && (
                  <img
                    src={event.poster_url}
                    alt={event.title}
                    loading="lazy"
                  />
                )}
                <div className="card-content">
                  <div className="card-header">
                    <span
                      className={`category-badge ${event.category.toLowerCase()}`}
                    >
                      {event.category}
                    </span>
                    <span className="status-badge upcoming">Upcoming</span>
                  </div>
                  <h3>{event.title}</h3>
                  {event.sub_category && (
                    <p className="sub-category">{event.sub_category}</p>
                  )}
                  <div className="event-meta">
                    <p className="event-date">
                      🗓️{" "}
                      {event.start &&
                        event.start.toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                    </p>
                    <p className="event-time">
                      ⏰{" "}
                      {event.start &&
                        event.start.toLocaleTimeString("en-IN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                    </p>
                    <p className="venue">📍 {event.venue}</p>
                  </div>
                  <p className="description">{event.description}</p>
                  {event.registration_link && (
                    <a
                      href={event.registration_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-btn"
                    >
                      Register
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ongoing Events */}
      {ongoing.length > 0 && (
        <section className="ongoing-section">
          <h2>Ongoing Events ({ongoing.length})</h2>
          <div className="events-grid">
            {ongoing.map(function renderOngoingEvent(event) {
              return (
                <div key={event.event_id} className="event-card">
                  {event.poster_url && (
                    <img
                      src={event.poster_url}
                      alt={event.title}
                      loading="lazy"
                    />
                  )}
                  <div className="card-content">
                    <div className="card-header">
                      <span
                        className={`category-badge ${event.category.toLowerCase()}`}
                      >
                        {event.category}
                      </span>
                      <span className="status-badge ongoing">Live Now</span>
                    </div>
                    <h3>{event.title}</h3>
                    <p className="venue">📍 {event.venue}</p>
                    <p className="description">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Completed Events */}
      {completed.length > 0 && (
        <section className="completed-section">
          <h2>Past Events ({completed.length})</h2>
          <div className="events-grid compact">
            {completed.slice(0, 6).map(function renderCompletedEvent(event) {
              return (
                <div key={event.event_id} className="event-card compact">
                  <h4>{event.title}</h4>
                  <p className="category">{event.category}</p>
                  <p className="date">
                    {event.start &&
                      event.start.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default EventsPage;
