import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Technician from './page/Technician';
import Machine from './page/Machine';

function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <BrowserRouter>
      <Navbar isHidden={isHidden} setIsHidden={setIsHidden} />
      <Menu isHidden={isHidden} setIsHidden={setIsHidden} />
      <Routes>
        <Route path="/technician" element={<Technician />} />
        <Route path="/machine" element={<Machine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
