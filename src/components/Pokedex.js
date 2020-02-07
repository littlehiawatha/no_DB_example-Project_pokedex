import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props){

   const pokemonList = props.caughtPokemon.map(element =>{
      return <Pokemon pokemon={element} key={element} />
   })

   return <div>
      {pokemonList}
      </div>
}

export default Pokedex
