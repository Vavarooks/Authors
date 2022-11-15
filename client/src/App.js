import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Create from './views/Create';
import NotFound from './views/NotFound';
import ShowOne from './views/ShowOne';
import EditOne from './views/Edit';
import ShowAll from './views/ShowAll';

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand">Happy Browsing</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/author`}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/author' element={<ShowAll />} />
        <Route path='/author' element={<Create />} />
        <Route path='/author/:id' element={<ShowOne />} />
        <Route path='/author/update/:id' element={<EditOne />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
