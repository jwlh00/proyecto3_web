import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import './Appstart.css';
import Home from './Home';
import Htmlpage from './Html/Htmlpage.js';
import Csspage from './CSS/Csspage.js';
import Jspage from './JS/Jspage.js';
import Reactpage from './React/Reactpage.js';
import Lintingpage from './Linting/Lintingpage.js';

export default function Appstart() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route
          path="/bundle_react/index.html"
          element={(
            <div className="all-wrapper">
              <Home />
            </div>
          )}
        />

        <Route
          path="/Htmlpage"
          element={(
            <div className="all-wrapper">
              <Htmlpage />
            </div>
          )}
        />

        <Route
          path="/Csspage"
          element={(
            <div className="all-wrapper">
              <Csspage />
            </div>
          )}
        />

        <Route
          path="/Jspage"
          element={(
            <div className="all-wrapper">
              <Jspage />
            </div>
          )}
        />

        <Route
          path="/Reactpage"
          element={(
            <div className="all-wrapper">
              <Reactpage />
            </div>
          )}
        />

        <Route
          path="/LintingPage"
          element={(
            <div className="all-wrapper">
              <Lintingpage />
            </div>
          )}
        />
      </Routes>
    </Router>
  );
}
