import React  from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/ListOfPokemons'
import Single from './components/SinglePokemon'

function App() {
 
  return (
   <>
  <Router>
    <Routes>
      <Route index element={<List/>}/>
      <Route exact path='singlePokemon/:id/' element={<Single/>}/>
    </Routes>
  </Router>
   </>
  );
}

export default App;
