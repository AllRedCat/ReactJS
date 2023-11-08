import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/deployments">Deployments</a></li>
            <li><a href="/pipelines">Pipelines</a></li>
            <li><a href="/monitoring">Monitoring</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </header>

      <main>
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
      </main>
    </div>
  );
}

export default App;
