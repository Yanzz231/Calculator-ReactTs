import React from 'react';

// ROUTES
import {Route, Routes} from "react-router-dom";

// PAGES
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Ticket from "./pages/Ticket";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/ticket" element={<Ticket/>} />
      </Routes>
  );
}

export default App;
