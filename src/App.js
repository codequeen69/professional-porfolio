import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  const [currentPage, setCurrentPage] = useState('abput')

  return (
    <div className="App">
      <Header>
    setCurrentPage ={setCurrentPage}
    currentPage={currentPage}
      </Header>
      <main>
     {currentPage === 'about' ? (
        <About></About>
     ): currentPage === 'contact' ? (
         <Contact></Contact>
     ):
}
</main>
     </div>
  );
}

export default App;
