import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landing";

function App() {
  // Verifica si estás en producción (GitHub Pages) o en desarrollo
  const isProduction = window.location.hostname !== 'localhost';

  return (
    <Router basename={isProduction ? "/papy-villafa-ee.io" : "/"}>
      <Routes>
        {/* Define la ruta para el componente LandingPage */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
