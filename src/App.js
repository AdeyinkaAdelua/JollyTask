// App.js
import React from 'react';
import {Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/about'; // Adjust the import path accordingly
import Task from './components/Task/task';
import Games from './components/Games/games';
import Profile from './components/Profile/profile';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}
         <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/task">Task</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        {/* Route content */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/task" element={<Task />} />
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add a default route, for example: */}
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
