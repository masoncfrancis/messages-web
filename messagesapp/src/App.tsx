import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MessagePage from './pages/MessagePage';
import AuthenticatedTest from './pages/AuthenticatedTest';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/message' element={<MessagePage/>}/>
	      <Route path='/authtest' element={<AuthenticatedTest/>}/>
      </Routes>
      <h3> Yee </h3>
    </div>
  );
}

export default App;
