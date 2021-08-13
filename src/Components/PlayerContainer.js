import React, {useEffect, useState} from 'react'
//import {BASE_URL} from '../constraints/index'
import Player from './Player.js'

export default function PlayerContainer() {
    const BASE_URL="http://127.0.0.1:9393/"
    const [uplayers, setuPlayers] = useState(null)

    useEffect(()=>{
        fetch(BASE_URL + 'player')
            .then (res => res.json())
            .then (json => setuPlayers(json))
    },[])

    function allplayers(){
       return uplayers.map(uplayer => <Player uplayers={uplayer} delPlayer = {delPlayer} />)
    }
    

    function delPlayer(player){
        console.log(player.id)
        const config = {
            method: "DELETE"
        };
        let urlComplete = BASE_URL + `player/${player.id}`
        console.log(urlComplete)
        fetch(urlComplete, config)
        .then(response => response.json())
        .then(()=>{
            const updPlayers = uplayers.filter(filuplayers=>filuplayers.id!==player.id);
            setuPlayers(updPlayers);
        })
    }

    function addPlayer(newPlayer){
    
        const config = {
          method: "POST",
          headers: {
            "Content-type":  "application/json",
          },
          body: JSON.stringify(newPlayer)
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
            {uplayers && allplayers()}
        </div>
    )
}
