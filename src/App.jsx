import './App.css';
import './style/Global.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import OtherProfile from './Pages/OtherProfile';
import NotFound from './Pages/NotFound';
import MyFooter from './Components/Footer/MyFooter';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={<Home />} 
        />
        <Route
          path='/profiles/:_id'
          element={<OtherProfile />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <MyFooter></MyFooter>
    </Router>
  );
};

export default App;
