import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Card from './components/card.js';
import Card2 from './components/card2.js';
import Comments from'./components/comments.js';
import Footer from './components/footer.js';
function App() {
  return (
      <div>
           <Navbar/>
      </div>
       
      <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
      
       
        <div>
  <h1> Recent Articles (3)</h1>
       <Card2/>
       <Card2/>
       <Card2/>
         
        </div>
      
        <div>
<h1> Recent Comments (5)</h1>
     
     <Comments/>
     <Comments/>
     <Comments/>
     <Comments/>
     <Comments/>
    
        </div>
        
    
       <Footer/>

   
  );
}

export default App;
