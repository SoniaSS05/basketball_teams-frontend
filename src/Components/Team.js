import React, {useState} from 'react'
import {Modal, TextField, Button} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
       Table,
       TableBody, 
       TableCell, 
       TableContainer, 
       TableHead, 
       TableRow, 
       Paper
} from '@material-ui/core';
import "./Team.css";


//Table style
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
    },
    table:{
        marginLeft: '200',
     
    },
    tableContainer:{
        borderRadius: 30    
    },
    tableHeaderCell:{
        fontWeight: 'bold',
        width: '500px'  
    }

}))


const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#f85103',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      width: 300
    },
    body: {
     
    },
}))(TableCell);

//End Table Style



export default function Team({uteams, addTeam, utplayers}) {

    const styles = useStyles();
     //Modal Control Insert Open Close 
    const [umodalins, setuModalins] = useState(false);
    const openclosemodalIns=()=>{
        setuModalins(!umodalins)
    }

    //Players own team
    const [uteamplayers, setuteamPlayers] = useState({
        name:'',
        team_id:''
    })

    const [umodaldat, setuModaldat] = useState(false);
    const [uDatasingle, setuDatasingle] = useState({
        team_name: "",
        coach: "",
    });

    const openclosemodalDat=()=>{
        setuModaldat(!umodaldat)
    }
    
    //Display  Data One Team
    const prepDisplayData=(uteam)=>{
        setuDatasingle(uteam)
        const teamplayerfilter =  utplayers.filter((tm)=> tm.team_id == uteam.id)
        setuteamPlayers(teamplayerfilter)
        openclosemodalDat()
    }

    let displayData=''
  
    if(umodaldat){
        displayData= (
            <div className={styles.modal}>
                <h2 className="h2margin">{uDatasingle.team_name.toUpperCase()}</h2>
                <tr>
                <td className="labeldata">
                    <tr>Coach: {uDatasingle.coach}</tr>
                </td>
                </tr>
                        <td className="colmargin" >{uteamplayers.map((tp) =><tr className="rowheight" >{tp.name}</tr>)}</td>
                <div align="right">  
                    <Button color="Primary" onClick={()=>openclosemodalDat()}>CLOSE</Button>
                </div>
            </div>
        )
    }
    //End Display Data One Team


 //Modal Control Create Team
    const [unewTeam, setunewTeam] = useState({
       team_name:'',
       coach:''
    })
    
    function handleChange(event) {
        setunewTeam({
          ...unewTeam,
          [event.target.name]: event.target.value,
        });
    }

    function handleCreateNewTeam(event){
        event.preventDefault();
        const newAddTeam={
            team_name: unewTeam.team_name,
            coach: unewTeam.coach
        }
        console.log(newAddTeam)
        addTeam(newAddTeam);
        openclosemodalIns();
    }
  //End Modal Control Create Team       

    const bodyNew = (
        <div className={styles.modal}>
            <h3>New Team</h3>
            <TextField className={styles.inputMaterial} label="Team Name" name="team_name" onChange={handleChange}/>
            <TextField className={styles.inputMaterial} label="Coach" name="coach" onChange={handleChange}/>
            <div align="right">
                <Button color="Primary" onClick={handleCreateNewTeam}>Create</Button>
                <Button onClick={()=>openclosemodalIns()}>Cancel</Button>
            </div>
        </div>
    )
    //End Modal Code

    return (
        <div className="namecol">
                <TableContainer className={styles.tableContainer}>
                    <TableHead className={styles.tableHeaderCell} >
                        <TableRow>
                            <StyledTableCell >TEAMS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <td>
                            {uteams.map((uteam) =>
                                <tr onClick={()=>prepDisplayData(uteam)} width='600px' height='50px'>{uteam.team_name}</tr>
                            )}
                        </td>
                    </TableBody>
                </TableContainer>
         
            <button className="btn-3d" onClick={()=>openclosemodalIns()}>New Team</button>

            <Modal  open={umodalins}  onclose={openclosemodalIns}>{bodyNew}</Modal>
            <Modal  open={umodaldat}  onclose={openclosemodalDat}>{displayData}</Modal>
        </div>
    )   
}
