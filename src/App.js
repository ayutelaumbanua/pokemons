import HomePage from './page/HomePage';
import Location from './page/Location';
import Pokemons from './page/Pokemons';
import './App.css';
import {Routes,Route}from "react-router-dom"
import Login from './page/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='/location' element={<Location />} />
        <Route path='/location/:id' element={<Pokemons />} />
      </Routes>
    </>
  );
}

export default App;
