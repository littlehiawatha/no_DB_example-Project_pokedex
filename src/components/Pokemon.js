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
      return <div>Pokemon.js</div>
   }
}

export default Pokemon