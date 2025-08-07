

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={logo} alt="OctoFit Logo" className="octofit-logo me-2" />
            OctoFit
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title display-4 mb-3">Welcome to OctoFit!</h1>
                <p className="card-text lead">Track your fitness, join teams, and climb the leaderboard at Mergington High School.</p>
                <Link to="/activities" className="btn btn-primary m-2">View Activities</Link>
                <Link to="/leaderboard" className="btn btn-success m-2">Leaderboard</Link>
                <Link to="/teams" className="btn btn-info m-2">Teams</Link>
                <Link to="/users" className="btn btn-secondary m-2">Users</Link>
                <Link to="/workouts" className="btn btn-warning m-2">Workouts</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

import logo from '../public/octofitapp-small.png';
export default App;
