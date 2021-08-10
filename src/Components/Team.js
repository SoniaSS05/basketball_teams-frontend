import React from 'react'

export default function Team({uteams, delTeam}) {
    return (
        <div>
            <br />
                {uteams.team_name}
                {uteams.coach}
            <br />
            <button onClick={()=>delTeam(uteams)}>Delete Team</button>
        </div>
    )
}


