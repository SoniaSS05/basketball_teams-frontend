import React from 'react'

export default function Player({uplayers, delPlayer}) {
    return (
        <div>
            <br />
              <p>{uplayers.name}</p>
              <p>  {uplayers.bio}</p>
              <p> {uplayers.age}</p>
              <p> {uplayers.number}</p>
              <p>   {uplayers.team_id}</p>
              <p>  {uplayers.position}</p>
            <br />
            <button onClick={()=>delPlayer(uplayers)}>Delete Player</button>
        </div>
    )
}

