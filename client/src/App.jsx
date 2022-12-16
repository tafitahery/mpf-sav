import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Technician from './page/Technician';

function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <BrowserRouter>
      <Navbar isHidden={isHidden} setIsHidden={setIsHidden} />
      <Menu isHidden={isHidden} setIsHidden={setIsHidden} />
      <Routes>
        <Route path="/technician" element={<Technician />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
