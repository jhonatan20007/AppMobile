import React from 'react';
import Login from './components/Loguin';
import DashBoard from './components/Dashboard';
import SolicitudP from './components/SolicitudP';
import SimulacionP from './components/SimulacionP';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/solicitud" element={<SolicitudP />} />  {/* Ejemplo */}
          <Route path="/SimulacionP" element={<SimulacionP />} />
          {/* ... otras rutas ... */}
        </Routes>
      </NativeRouter>
    </ThemeProvider>
);

};

export default App;
