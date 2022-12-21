import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home"
import { ParkRoutes } from './ParkRoutes'
import { NotFound } from "./pages/NotFound"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpark/*" element={<ParkRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;