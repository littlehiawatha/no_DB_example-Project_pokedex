import React, {Component} from 'react';
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import './App.css';
import Axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      caughtPokemon: [],
    }

    this.catchPokemon = this.catchPokemon.bind(this)
  }

  componentDidMount(){}

  catchPokemon(pokemon) {
    Axios.post('/api/pokemon', {pokemon}).then(res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }

  catchPokemon(pokemon){
    // axios.post('/api.poke')
  }



  saveName(id, newName) {}

  releasePokemon




  render() {
    return <div className="App">
        <Header />
        <Finder catchPokemon = {this.catchPokemon} />
        <Pokedex caughtPokemon = {this.state.caughtPokemon} />
        
      </div>
  }

}




// function App() {
//   return (
   
//   );
// }

export default App;
