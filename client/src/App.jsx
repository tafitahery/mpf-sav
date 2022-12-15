import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <BrowserRouter>
      <Navbar isHidden={isHidden} setIsHidden={setIsHidden} />
      <Menu isHidden={isHidden} setIsHidden={setIsHidden} />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
