import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home"
import { ParkRoutes } from './ParkRoutes'
import { NotFound } from "./pages/NotFound"
import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parks/*" element={<ParkRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/parks">Parks</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
    </>
  );
}

export default App;