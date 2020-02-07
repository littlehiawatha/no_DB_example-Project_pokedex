import React, {Component} from 'react'

class Pokemon extends Component {
   constructor (props){
      super (props)
      
      this.state = {
         isEditing: false,
         userInput: '',
      }
   }
   // // why are we not using arrow functions? Because we want you to practice binding.
   toddleEdit() {}

   handleChange(e) {}


   render(){
      return (
         <div>
            <p>{this.pokemon.name}</p>
            <img src={this.props.pokemon.image} />
            <button>Release </button>
         </div>
      )
   }
}

export default Pokemon