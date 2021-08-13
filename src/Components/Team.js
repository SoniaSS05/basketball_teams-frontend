import React, {useEffect, useState} from 'react'
import "./Team.css";
import {Modal, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal:{
        position: 'relative',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxshadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos:{
        cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    }
   
}))



export default function Team({uteams, delTeam}) {
    const styles = useStyles();
    const [umodalins, setuModalins] = useState(false);
    
    const openclosemodalIns=()=>{
        setuModalins(!umodalins)
    }

   
    const bodyNew = (
        <div className={styles.modal}>
            <h3>New Team</h3>
            <TextField className={styles.inputMaterial} label="Team Name"/>
            <TextField className={styles.inputMaterial} label="Coach"/>
            <div align="right">
                <Button color="Primary">Create</Button>
                <Button onClick={()=>openclosemodalIns()}>Cancel</Button>
            </div>
        </div>
    )
    function handleClick(uteams){
        const data = uteams;
        console.log('Details for ', data);
       return(<div>
            <table>
            <td>data.coach</td>
        </table>
        </div>)
    }

    return (
        <div>
            <div>
                <table>
                    <td className="namecol">
                        <tr onClick={()=>handleClick(uteams)}>{uteams.team_name}</tr>
                    </td>
                    <td className="buttoncol">
                        <tr ><button onClick={()=>delTeam(uteams)}>Delete Team</button></tr>
                    </td>
                </table>
            </div>
            <button onClick={()=>openclosemodalIns()}>New Team</button>
            <Modal  open={umodalins}  onclose={openclosemodalIns}>{bodyNew}</Modal>
          
        </div>
    )   
}


    

 {/*{uteams.coach}*/}
