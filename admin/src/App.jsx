import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';

const App = () => { // Ubah 'app' menjadi 'App' agar sesuai konvensi penamaan
  return (
    <div>
      <Navbar />
      <Admin/>  
    </div>
  );
};

export default App; // Ubah 'app' menjadi 'App' agar sesuai konvensi penamaan
