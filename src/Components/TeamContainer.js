import React, {useEffect, useState} from 'react'
import Team from './Team.js'


export default function TeamContainer() {
    const BASE_URL="http://127.0.0.1:9393/"
    const [uteams, setuTeams] = useState(null)


    useEffect(()=>{
        fetch(BASE_URL + 'teams')
            .then (res => res.json())
            .then (json => setuTeams(json))
    },[])


    function allteams(){
       return (<Team uteams={uteams}  addTeam={addTeam}/>)
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
    }

    return (
        <div>
            {uteams && allteams()}
        </div>
    )
}
