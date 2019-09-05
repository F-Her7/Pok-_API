import React, { Component } from 'react';
import Bulbasaur from './components/Bulbasaur'
import Ivysaur from './components/Ivysaur'
import Venasaur from './components/Venasaur'
import Charmander from './components/Charmander'
import Charmeleon from './components/Charmeleon'
import Charizard from './components/Charizard'
import Squirtle from './components/Squirtle'
import Wartortle from './components/Wartortle'
import Blastoise from './components/Blastoise'
import Todos from './components/Todos'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render () {
    return (
      <div className="">
        <div className="text-center ml-64 pl-20 pt-4"> 
          <h1 className="ml-64 py-2 px-2 font-bold text-purple-500 text-3xl rounded-lg border-2 border-purple-800 w-64 bg-white">Kanto Starters</h1>
        </div>

      <div className="flex">
        <div className="ml-64"> 
            <div className="mr-20 mt-4"> 
              <Bulbasaur/>
            </div> 
            <div className="mr-20 mt-4"> 
              <Ivysaur/>
            </div>
            <div className="mr-20 mt-4"> 
              <Venasaur/>
            </div>  
        </div> 

        <div className=""> 
            <div className="mr-20 mt-4"> 
              <Charmander/>
            </div>
            <div className="mr-20 mt-4"> 
              <Charmeleon/>
            </div> 
            <div className="mr-20 mt-4"> 
              <Charizard/>
            </div> 
        </div>

        <div> 
            <div className="mr-20 mt-4"> 
              <Squirtle/>
            </div>
            <div className="mr-20 mt-4"> 
              <Wartortle/>
            </div>
            <div className="mr-20 mt-4"> 
              <Blastoise/>
            </div>   
        </div>

      </div>
      </div>
      
    )
  }


}


export default App;
