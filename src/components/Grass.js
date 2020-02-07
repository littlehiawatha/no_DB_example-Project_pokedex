import React, {Component} from 'react'

class Grass extends Component {
   constructor(props){
      super(props)
      
      
      this.state = {
         grassClicked: false
      }
   }

   checkGrass(){}

   render(){
      console.log(this.props)

      return <div>Grass.js

      <p>{this.props.pokemon.name}</p>
      <img 
      src={this.props.pokemon.sprites.front_default}
      onclick={() => {
         this.props.catchPokemon({
            name: this.props.pokemon.name,
            image: this.props.sprites.front_default,
         })
      }} 
      />

      </div>
   }
}

export default Grass