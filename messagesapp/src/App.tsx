import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
