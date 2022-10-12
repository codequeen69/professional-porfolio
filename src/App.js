import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

  const [currentPage, setCurrentPage] = useState('about')

  return (
    <div className="App">
      <Header 
       setCurrentPage ={setCurrentPage}
       currentPage={currentPage}
      />
      <main>
     {currentPage === 'About' ? (
        <About></About>
     ):currentPage === 'Contact' ?(
         <Contact></Contact>
     ):currentPage === 'Portfolio' ?(
       <Portfolio></Portfolio>
     ):(
       <Resume></Resume>
     )
}
</main>
<Footer>

</Footer>
     </div>
  );
}

export default App;
