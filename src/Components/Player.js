import React from 'react'
import "./Player.css";

export default function Player({uplayers, delPlayer}) {
    return (
        <div>
            <table >
                <td className="namecol">
                    <tr>{uplayers.name}</tr>
                </td>
                <td className="biocol">
                    <tr>{uplayers.bio}</tr>
                </td>
                <td className="numbercol">
                    <tr>{uplayers.age}</tr>
                </td>
                <td className="numbercol">
                    <tr>{uplayers.number}</tr>
                </td>
                <td className="teamcol">
                    <tr>{uplayers.team_id}</tr>
                </td>
                <td className="poscol">
                    <tr>{uplayers.position}</tr>
                </td>
                <td className="buttoncol">
                    <tr><button >Update Player</button></tr>
                </td>
                <td className="buttoncol">
                    <tr><button onClick={()=>delPlayer(uplayers)}>Delete Player</button></tr>
                </td>
              </table >
            
        </div>
    )
}

