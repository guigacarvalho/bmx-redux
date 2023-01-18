import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home"
import { ParkRoutes } from './ParkRoutes'
import { NotFound } from "./pages/NotFound"

import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;