import React from 'react'
import "./Team.css";


export default function Team1({uteams}) {
    console.log("en team1")
    return (
        <div>
            <table >
                <td className="namecol">
                    <tr>{uteams.team_name}</tr>
                </td>
                <td className="namecol">
                    <tr>{uteams.coach}</tr>
                </td>
                
            </table>
        </div>
    )   
}