import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const name = window.location.href.split('/')[3];
  const title = {
    '': 'Intervention',
    machine: 'Machine',
    client: 'Client',
    technician: 'Technicien',
    report: 'Rapport',
  };

  return (
    <BrowserRouter>
      <Navbar isHidden={isHidden} setIsHidden={setIsHidden} />
      <Menu isHidden={isHidden} setIsHidden={setIsHidden} />
      <Title title={title[name]} />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
