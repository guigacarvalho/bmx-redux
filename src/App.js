import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home"
import { ParkProvider } from './context/ParkContext';


import Header from './components/Header';

function App() {
  return (
    <ParkProvider>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ParkProvider>
  );
}

export default App;