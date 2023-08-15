import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd';
import { DataStore } from '@aws-amplify/datastore'
import { Player, Character } from './models'
import './App.css';

const initialStatePlay = {
  mail: 'some@mail',
  premium: false,
}

const initialStateChar = {
  name: 'their name',
  body: 4,
  heart: 4,
  mind: 4,
}

function App() {
  const [players, updatePlayers] = useState([])

  useEffect(() => {
    fetchPlayers()
    const subscription = DataStore.observe(Player).subscribe(() => fetchPlayers())
    return () => subscription.unsubscribe()
  })

  async function fetchPlayers() {
    const players = await DataStore.query(Player)
    updatePlayers(players)
  }
  async function addPlayerToDB() {
    await DataStore.save(new Player({...initialStatePlay}))
  }

  return (
    <div className="App">
      <Button type='primary' onClick={addPlayerToDB}>Add player</Button>
      {
        players.map(player => (
          <div key={player.id}>
            <div>
              <p>{player.mail}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
