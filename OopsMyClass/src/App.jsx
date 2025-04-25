import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './Components/UserContext/UserContext';
import Home from './Components/Home/Home';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
