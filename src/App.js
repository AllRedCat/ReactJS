import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">

      <main>
        <aside className="navigation">
          <nav>
            <ul className="navigation-links">
              <li>
                <button>
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
            <div>
              <button onClick={handleButtonClick}>Change Color</button>
              <div style={{ backgroundColor }}>This is a div with dynamic background color.</div>
            </div>
          </nav>
        </aside>

        <div className="visor">
          <section id="dashboard" className="dashboard" data-visible="false">
            <h2>Dashboard</h2>
          </section>

          <section className="Servers">
            <h2>Serves</h2>
          </section>

          <section className="Services">
            <h2>Services</h2>
          </section>

          <section className="Github">
            <h2>GitHub</h2>
          </section>

          <section className="About">
            <h2>About</h2>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
