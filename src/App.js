import logo from './logo.svg';
import './App.css';

function DashboardShow() { 
  console.log('ok');
  const Dashboard = document.querySelector("#dashboard");
  const DashboardOn = Dashboard.getAttribute("data-visible");

  if (DashboardOn === "false"){
    Dashboard.setAttribute("data-visble", true);
  }
  else if (DashboardOn === "true"){
    Dashboard.setAttribute("data-visible", false);
  }
}

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
                <button onClick={DashboardShow}>
                  <span className="material-symbols-outlined">
                    dashboard
                  </span>
                  <p>Dahsboard</p>
                </button>
              </li>
              <li>
                <button>
                  <span className="material-symbols-outlined">
                    dns
                  </span>
                  <p>Servers</p>
                </button>
              </li>
              <li>
                <button>
                  <span className="material-symbols-outlined">
                    lan
                  </span>
                  <p>Services</p>
                </button>
              </li>
              <li>
                <button>
                  <i className="bi bi-github"></i>
                  <p>GitHub</p>
                </button>
              </li>
              <li>
                <button>
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  <p>About</p>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="visor">
          <section id="dashboard" className="dashboard" data-visible="false">
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
