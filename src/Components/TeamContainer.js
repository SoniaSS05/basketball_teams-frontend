import React, {useEffect, useState} from 'react'
//import {BASE_URL} from '../constraints/index'
import Team from './Team.js'
import Team1 from './Team1.js'

export default function TeamContainer() {
    const BASE_URL="http://127.0.0.1:9393/"
    const [uteams, setuTeams] = useState(null)

    //Control de Modal para Create Team
    //const [unewTeam, setunewTeam] = useState({
   //     team_name:'',
    //    coach:''
   // })

    

    useEffect(()=>{
        fetch(BASE_URL + 'teams')
            .then (res => res.json())
            .then (json => setuTeams(json))
    },[])

    function allteams(){
       return uteams.map(uteam => <Team uteams={uteam} delTeam = {delTeam} addTeam={addTeam}/>)
    }
    

    function delTeam(team){
        console.log(team.id)
        const config = {
            method: "DELETE"
        };
        let urlComplete = BASE_URL + `team/${team.id}`
        console.log(urlComplete)
        fetch(urlComplete, config)
        .then(response => response.json())
        .then(()=>{
            const updTeams = uteams.filter(filuteams=>filuteams.id!==team.id);
            setuTeams(updTeams);
        })
    }

    
    function addTeam(newTeam){
        console.log(newTeam)
        let urlComplete = BASE_URL + 'team'
        const config = {
        method: "POST",
        headers: {
            "Content-type":  "application/json",
        },
        body: JSON.stringify(newTeam)
        }

        fetch(urlComplete,config)
        .then(response => response.json())
        .then(newTeam =>{
            const newTeams=[...uteams, newTeam];
            setuTeams(newTeams);
        })
    

        alert('Team was included');
    }

    return (
        <div>
            {uteams && allteams()}
        </div>
    )
}
