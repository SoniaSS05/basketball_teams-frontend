import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index'
import Player from './Player.js'

export default function PlayerContainer() {

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


    return (
        <div>
            {uplayers && allplayers()}
        </div>
    )
}
