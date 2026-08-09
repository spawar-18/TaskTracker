import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✓</span>
          TaskTracker
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="login-btn">Log in</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="badge">✨ Simple. Powerful. Productive.</span>

            <h1>
              Get things done.
              <br />
              <span>Stay on track.</span>
            </h1>

            <p>
              TaskTracker helps you organize your tasks, manage projects,
              and stay focused on what matters most.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Get Started →</button>
              <button className="secondary-btn">View Demo</button>
            </div>
          </div>

          <div className="dashboard-preview">
            <div className="preview-header">
              <div>
                <p className="preview-label">MY TASKS</p>
                <h2>Today's Tasks</h2>
              </div>

              <span className="task-count">8 tasks</span>
            </div>

            <div className="task-list">
              <div className="task completed">
                <span className="check">✓</span>
                <div>
                  <strong>Complete project UI</strong>
                  <small>Design • High Priority</small>
                </div>
              </div>

              <div className="task">
                <span className="circle"></span>
                <div>
                  <strong>Build authentication</strong>
                  <small>Development • Today</small>
                </div>
              </div>

              <div className="task">
                <span className="circle"></span>
                <div>
                  <strong>Review documentation</strong>
                  <small>Documentation • Tomorrow</small>
                </div>
              </div>

              <div className="task">
                <span className="circle"></span>
                <div>
                  <strong>Deploy application</strong>
                  <small>Development • Friday</small>
                </div>
              </div>
            </div>

            <div className="preview-footer">
              <div>
                <strong>5</strong>
                <span>Completed</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Remaining</span>
              </div>

              <div>
                <strong>63%</strong>
                <span>Progress</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <span>BUILT FOR PRODUCTIVITY</span>
            <h2>Everything you need to stay organized.</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Manage Tasks</h3>
              <p>
                Create, organize, prioritize, and track your tasks
                effortlessly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">◈</div>
              <h3>Track Progress</h3>
              <p>
                Visualize your productivity and understand where your
                time goes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↗</div>
              <h3>Stay Focused</h3>
              <p>
                Keep your priorities clear and focus on completing what
                matters.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-icon">✓</span>
          TaskTracker
        </div>

        <p>Built with the MERN stack.</p>
      </footer>
    </div>
  );
}

export default App;