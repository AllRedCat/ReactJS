import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header>
        <div className="logo-space">
          <a href="#">
            LogoX
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="/pipelines">GitHub</a></li>
            <li><a href="/monitoring"> Services</a></li>
            <li><a href="/settings">About</a></li>
          </ul>
        </nav>
      </header> */}

      <main>
        <aside className="navigation">
          <nav>
            <ul className="navigation-links">
              <li>
                <button>
                  <span class="material-symbols-outlined">
                    dashboard
                  </span>
                  <p>Dahsboard</p>
                </button>
              </li>
              <li>
                <button>
                  <span class="material-symbols-outlined">
                    dns
                  </span>
                  <p>Servers</p>
                </button>
              </li>
              <li>
                <button>
                  <span class="material-symbols-outlined">
                    lan
                  </span>
                  <p>Services</p>
                </button>
              </li>
              <li>
                <button>
                  <i class="bi bi-github"></i>
                  <p>GitHub</p>
                </button>
              </li>
              <li>
                <button>
                  <span class="material-symbols-outlined">
                    account_circle
                  </span>
                  <p>About</p>
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

          <section className="Servers">
            <h2>Serves</h2>
            {/* Add deployments content here */}
          </section>

          <section className="Services">
            <h2>Services</h2>
            {/* Add pipelines content here */}
          </section>

          <section className="Github">
            <h2>GitHub</h2>
            {/* Add monitoring content here */}
          </section>

          <section className="About">
            <h2>About</h2>
            {/* Add settings content here */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
