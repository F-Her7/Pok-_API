import React, { Component } from 'react';

class Charmeleon extends Component{
    render () {
      return (
        <div>
            <div className="w-full flex bg-white rounded-lg border-2 border-blue-700"> 
                <img className="w-32" src ={""+this.state.sprite.front_default} />
                <img className="w-32" src ={""+this.state.sprite.back_default} />
            </div>

            <div> 
              <button type="button" class="bg-white py-1 px-4 ml-20 mt-1 rounded-lg border-2 border-yellow-500 " data-toggle="collapse" data-target="#charmeleon">
                  <span class="font-bold">Info</span> 
              </button>
            </div> 

            <div className="bg-white px-2 py-2 rounded-lg border-2 border-yellow-500 collapse" id="charmeleon">  
                <p className="font-bold"><span className="text-blue-500 font-bold">N° of Pokédex: </span> {this.state.id}</p>
                <p className="font-bold"><span className="text-blue-500 font-bold">Pokémon: </span>{this.state.pokemon.name} </p>
                <p className="font-bold"><span className="text-blue-500 font-bold">Height: </span>{this.state.height} </p>
                <p className="font-bold"><span className="text-blue-500 font-bold">Weight: </span>{this.state.weight} </p>
            </div>
            
        </div>
      )
    }
  
    state = {
      id: [],
      pokemon : [],
      sprite : [],
      height: [],
      weight: [],
      types: []


    };
  
    componentDidMount() {
      fetch('https://pokeapi.co/api/v2/pokemon/charmeleon/')
        .then(res => res.json())
        .then((data) => {
          this.setState ({ 
            id: data ['id'],
            pokemon: data ['species'], 
            sprite: data ['sprites'],
            height: data ['height'],
            weight: data ['weight'],

          })
        })
        .catch(console.log)
    }
  
  }

  export default Charmeleon;