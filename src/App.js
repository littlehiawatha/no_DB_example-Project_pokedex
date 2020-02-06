import React, {Component} from 'react';
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      caughtPokemon: [],
    }
  }

  componentDidMount(){}

  catchPokemon(pokemon) {}

  saveName(id, newName) {}

  releasePokemon




  render() {
    return <div className="App">
      <Header />
      <Finder />
      <Pokedex />
      App.js</div>
  }

}




// function App() {
//   return (
   
//   );
// }

export default App;
