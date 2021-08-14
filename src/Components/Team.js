import React, {useEffect, useState} from 'react'

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
      fontSize: 20,
      width: 300,
      height:50
    },
}))(TableCell);

//End Table Style




export default function Team({uteams, addTeam}) {
    //Modal code
    const styles = useStyles();
     //Modal Control Open Close 
    const [umodalins, setuModalins] = useState(false);
    const openclosemodalIns=()=>{
        setuModalins(!umodalins)
    }

    const [umodaldat, setuModaldat] = useState(false);
    const openclosemodalDat=()=>{
        setuModaldat(!umodaldat)
    }

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
        console.log(unewTeam)
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

    function dataTeam(uteam){
        <p>holaaaaaaa</p>
    }
    
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
                        <StyledTableCell width='300px'>
                            {uteams.map((uteam) =>
                                <StyledTableRow onClick={dataTeam(uteam)} width='600px' height='50px'>{uteam.team_name}</StyledTableRow>
                            )}
                        </StyledTableCell>
                    </TableBody>
                </TableContainer>
         
            <button className="btn-3d" onClick={()=>openclosemodalIns()}>New Team</button>

            <Modal  open={umodalins}  onclose={openclosemodalIns}>{bodyNew}</Modal>
            <Modal  open={umodaldat}  onclose={openclosemodalDat} ></Modal>
        </div>
    )   
}


    

 {/*{uteams.coach}*/}