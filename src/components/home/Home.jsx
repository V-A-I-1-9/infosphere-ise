import { Link } from "react-router-dom";
import logo from "../../assets/infosphere-logo.webp";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section - Keep as is */}
      <section className="hero">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="logo-wrapper">
              <div className="logo-glow"></div>
              <img src={logo} alt="Infosphere" className="hero-logo" />
            </div>

            <h1 className="hero-title">
              Where <span className="gradient-text">Innovation</span> Meets
              <br />
              <span className="gradient-text">Excellence</span>
            </h1>

            <p className="hero-description">
              Empowering students through Technology, Sports, and Culture.
            </p>

            <Link to="/events" className="btn-hero">
              <span>Explore Events</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 3l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Clubs Section - Cards are DIVs, only link at bottom */}
      <section className="clubs-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Path</h2>
            <p>Three clubs. Endless possibilities.</p>
          </div>

          <div className="clubs-grid-new">
            {/* Sports Card - DIV instead of LINK */}
            <div className="club-card-new sports-card">
              <div className="card-background">
                <div className="card-pattern"></div>
                <div className="card-gradient"></div>
              </div>

              <div className="card-content-new">
                <div className="card-icon-new">⚽</div>
                <h3>Sports</h3>
                <p className="card-tagline">Play. Compete. Win.</p>
                <p className="card-description">
                  Cricket • Football • Basketball • Athletics • Tournaments
                </p>

                <div className="card-footer">
                  <Link to="/sports" className="explore-link">
                    Explore Sports
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M6 3l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Technical Card - DIV instead of LINK */}
            <div className="club-card-new technical-card">
              <div className="card-background">
                <div className="card-pattern"></div>
                <div className="card-gradient"></div>
              </div>

              <div className="card-content-new">
                <div className="card-icon-new">💻</div>
                <h3>Technical</h3>
                <p className="card-tagline">Code. Build. Innovate.</p>
                <p className="card-description">
                  Hackathons • Workshops • AI/ML • Web Dev • Projects
                </p>

                <div className="card-footer">
                  <Link to="/technical" className="explore-link">
                    Explore Technical
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M6 3l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cultural Card - DIV instead of LINK */}
            <div className="club-card-new cultural-card">
              <div className="card-background">
                <div className="card-pattern"></div>
                <div className="card-gradient"></div>
              </div>

              <div className="card-content-new">
                <div className="card-icon-new">🎭</div>
                <h3>Cultural</h3>
                <p className="card-tagline">Express. Perform. Inspire.</p>
                <p className="card-description">
                  Dance • Music • Drama • Art • Festivals
                </p>

                <div className="card-footer">
                  <Link to="/cultural" className="explore-link">
                    Explore Cultural
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M6 3l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Join hundreds of students already making an impact.</p>
            <Link to="/events" className="btn-cta">
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
