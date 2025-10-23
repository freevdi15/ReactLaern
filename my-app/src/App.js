import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Text Utils</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container mt-4">
        <section id="home">
          <h2>Home</h2>
          <p>Welcome to the home page! Here you can find the latest updates and news.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This website is a simple React application created to demonstrate basic concepts.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>If you have any questions, feel free to reach out to us at contact@example.com.</p>
        </section>
      </main>
    </>
  );
}

export default App;
