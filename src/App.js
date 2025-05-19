import React from "react";
import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import "./App.css"; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          {/* Default route: redirect / to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
