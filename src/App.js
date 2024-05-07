import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './TelaInicial';
import ListarTarefa from './ListarTarefa';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TelaInicial />} />
        <Route exact path="/listarTarefa" element={<ListarTarefa />} />
      </Routes>
    </Router>
  );
}

export default App;
