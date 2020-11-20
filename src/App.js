import React from 'react'
import {Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import { useSelector } from 'react-redux';
import './App.css';


// En este componente deberias cargar tus rutas.
export function App() {
  const tarjetas = useSelector(store=>store)

  return (
    <div className="App">
      <Route path='/' render={()=><Nav/>}/>
      <Route exact path='/' render={()=><Home/>}/>
      <Route exact path='/edit/:id' render={({ match })=><Todo id={match.params.id}/>}/>
    </div>
  );
}

export default App;
