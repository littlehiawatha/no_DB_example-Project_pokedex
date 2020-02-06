const express = require('express')
const cors = require('cors')
const grassCtrl = require ('./controllers/grassController.js')
const pokemonCtrl = require('./controllers/pokemonController')

const app = express()
const PORT = 4050

app.use(express.json())
app.use(cors())

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)

app.get('/api/wild-pokemon', pokemonCtrl.getCaughtPokemon)
app.post('/api/wild-pokemon', pokemonCtrl.catchPokemon)
app.put('/api/wild-pokemon/:id', pokemonCtrl.editPokemonName)
app.delete('/api/wild-pokemon/:id', pokemonCtrl.releasePokemon)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
// // I guarantee 80% of you will forget but you must do it or it will not WORK!!!!! package.json 





