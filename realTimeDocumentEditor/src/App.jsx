import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Document from './pages/Document';
import {v4 as uuid} from 'uuid'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/document/:id" element={<Document />} />
      </Routes>
    </Router>
  );
};

export default App;