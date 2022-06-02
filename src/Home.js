import React from 'react';
import { Link } from 'react-router-dom';

import htmlIMG from './assets/html.jpg';
import cssIMG from './assets/css.jpg';
import jsIMG from './assets/js.jpg';
import reactIMG from './assets/react.png';
import lintingIMG from './assets/linting.png';
import './Home.css';

export default function Home() {
  return (
    <div className="MainScreen">
      <Link to="/Htmlpage" style={{ textDecoration: 'none' }}>
        <div className="htmlContainer" style={{ backgroundImage: `url(${htmlIMG})` }} />
      </Link>

      <Link to="/Csspage">
        <div className="cssContainer" style={{ backgroundImage: `url(${cssIMG})` }} />
      </Link>

      <Link to="/Jspage">
        <div className="jsContainer" style={{ backgroundImage: `url(${jsIMG})` }} />
      </Link>

      <Link to="/Reactpage">
        <div className="reactContainer" style={{ backgroundImage: `url(${reactIMG})` }} />
      </Link>

      <Link to="/Lintingpage">
        <div className="lintingContainer" style={{ backgroundImage: `url(${lintingIMG})` }} />
      </Link>

    </div>
  );
}
