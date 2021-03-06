import React, {useEffect, useState} from 'react'
//import {BASE_URL} from '../constraints/index'
import Player from './Player.js'

export default function PlayerContainer() {
    const BASE_URL="http://127.0.0.1:9393/"
    const [uplayers, setuPlayers] = useState(null)
    const [uposition, setuPosition] =  useState(null)
    const [ucomboteam, setuComboTeam] = useState(null)

    useEffect(()=>{
        fetch(BASE_URL + 'player')
            .then (res => res.json())
            .then (json => setuPlayers(json))
    },[])

    useEffect(()=>{
      fetch(BASE_URL + 'position')
          .then (res => res.json())
          .then (json => setuPosition(json))
    },[])

    useEffect(()=>{
      fetch(BASE_URL + 'teams')
          .then (res => res.json())
          .then (json => setuComboTeam(json))
    },[])


    function allplayers(){
       return  (<Player uplayers={uplayers} delPlayer = {delPlayer} addPlayer={addPlayer} uposition={uposition} ucomboteam={ucomboteam} updatePlayer={updatePlayer}/>)
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
      }
    
    function updatePlayer(upplayer){
      console.log('UPPLAYERS')
      console.log(uplayers);
      const config = {
        method: "PATCH",
        headers: {
          "Accept":"application/json",
          "Content-type":  "application/json"
        },
        body: JSON.stringify(upplayer)
      }
      let urlComplete = BASE_URL +  `player/${upplayer.id}`
      fetch(urlComplete,config)
        .then(response => response.json())
        .then(updPlayer =>{
          console.log(updPlayer);
          const updPlay = uplayers.map(player => {
            if(player.id === updPlayer.id){
              return updPlayer;
            }
            return player;
          })   

          setuPlayers(updPlay);
          //setuPlayers(uplayers)
        })
      }  

    return (
        <div>
            {uplayers && uposition && ucomboteam && allplayers()}
        </div>
    )
}
