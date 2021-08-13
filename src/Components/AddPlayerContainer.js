import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index'


export default function AddPlayerContainer() {

    const [uplayers, setuPlayers] = useState(null)
   
    function addPlayer(player){
        const config = {
            method: "POST",
            headers: {
              "Content-type":  "application/json",
            },
            body: JSON.stringify(player)
        }
        let urlComplete = BASE_URL + 'player'
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(newPlayer =>{
              const newPlayers =[...uplayers, newPlayer];
              setuPlayers(newPlayers);
            })
         
      
            alert('Player was added');
    }

    return (
        <div>
          
        </div>
    )
}
