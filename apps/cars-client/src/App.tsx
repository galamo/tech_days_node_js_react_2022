import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarsPage } from './components/pages/cars';
import { LoginPage } from './components/pages/login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/cars">cars</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cars" element={<CarsPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
