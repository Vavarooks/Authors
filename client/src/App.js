import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Create from './veiws/Create';
import NotFound from './veiws/NotFound';
import ShowOne from './veiws/ShowOne';
import ShowAll from './veiws/ShowAll';
import EditOne from './veiws/Edit';

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
                <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/author`}>Authors</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='/author/:id' element={<ShowOne/>} />
        {/* <Route path='/author/update/:id' element={<EditOne />} />
        <Route path='/author' element={<ShowAll />} />
        <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </>

  );
}

export default App;
