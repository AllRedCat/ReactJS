import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-space">
          LogoX
        </div>
        <nav>
          <ul>
            <li><a href="/pipelines">GitHub</a></li>
            <li><a href="/monitoring">Services</a></li>
            <li><a href="/settings">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <aside className="navigation">
          <nav>
            <ul className="navigation-links">
              <li>
                <button>
                  Dahsboard
                </button>
              </li>
              <li>
                <button>
                  Deployments
                </button>
              </li>
              <li>
                <button>
                  Pipelines
                </button>
              </li>
              <li>
                <button>
                  Monitoring
                </button>
              </li>
              <li>
                <button>
                  Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="visor">
          <section className="dashboard">
            <h2>Dashboard</h2>
            {/* Add dashboard content here */}
          </section>

          <section className="deployments">
            <h2>Deployments</h2>
            {/* Add deployments content here */}
          </section>

          <section className="pipelines">
            <h2>Pipelines</h2>
            {/* Add pipelines content here */}
          </section>

          <section className="monitoring">
            <h2>Monitoring</h2>
            {/* Add monitoring content here */}
          </section>

          <section className="settings">
            <h2>Settings</h2>
            {/* Add settings content here */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
