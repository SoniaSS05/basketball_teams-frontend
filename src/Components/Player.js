import React, {useState} from 'react'
import "./Player.css";
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


export default function Player({uplayers, delPlayer, addPlayer, uposition, ucomboteam}) {
    const styles = useStyles();

     //Modal Control Insert Open Close 
     const [umodalinsplay, setuModalinsplay] = useState(false);
     const openclosemodalInsplay=()=>{
         setuModalinsplay(!umodalinsplay)
     }
     const [umodaldatteam, setuModaldatteam] = useState(false);
     const openclosemodalDatteam=()=>{
        setuModaldatteam(!umodaldatteam)
    }
     

    function handleChange(event) {
        setuModalinsplay({
          ...unewPlayer,
          [event.target.name]: event.target.value,
        });
    }


 //Modal Control Create Player
 const [unewPlayer, setunewPlayer] = useState({
    name:'',
    bio:'',
    age:'',
    number:'',
    position_id:''
 })

 //Position  and Team ComboBox
 const[uposi, setuPosi] = useState('')
 const[utm, setuTm] = useState('')

 //Position and Team RelationShip
 const[ups, setuPs] = useState('')
 const[unamet,setuNamet] = useState('')
 //


 function handleChange(event) {
     console.log("entre por aca ")
     setunewPlayer({
       ...unewPlayer,
       [event.target.name]: event.target.value,
     });
 }

 const onChangeComboPos = (e) =>{
     const selvalueid= e.target.value;
     setuPosi(selvalueid);
 }

 const onChangeComboTeam = (e) =>{
    const selvalueteamid= e.target.value;
    setuTm(selvalueteamid);
}
 
 function handleCreateNewTeam(event){
     event.preventDefault();
     const newAddPlayer={
         name: unewPlayer.name,
         bio: unewPlayer.bio,
         age: unewPlayer.age,
         number: unewPlayer.number,
         position_id: uposi,
         team_id: utm   
     }
     addPlayer(newAddPlayer);
     openclosemodalInsplay();
 }
//End Modal Control Create Player   

//Display  Data One Player
const [udatasingleteam,setuDatasingleTeam]= useState({
    name: "",
    bio: "",
    age: "",
    number: "", 
})

const prepDisplayDataTeam=(uplayer)=>{
    setuDatasingleTeam(uplayer)
    const teamfilter =  ucomboteam.filter((tm)=> tm.id == uplayer.team_id)
    const positionfilter = uposition.filter((ps)=> ps.id == uplayer.position_id)
    setuPs(teamfilter)
    setuNamet(positionfilter)
    openclosemodalDatteam()
}

console.log("UNAMET")
console.log(unamet)
console.log("TEAM")
console.log(ups[0].team_name)
const displayDataTeam= (
    <div className={styles.modal}>
        <h2>{udatasingleteam.name.toUpperCase()}</h2>
        <td >
            <tr>Bio: {udatasingleteam.bio}</tr>
            <tr>Age: {udatasingleteam.age}</tr>
            <tr>Position: {unamet[0].position} </tr>
            <tr>Team: {ups[0].team_name} </tr>
        </td>
        <div align="right">  
            <Button color="Primary" onClick={()=>openclosemodalDatteam()}>CLOSE</Button>
        </div>
    </div>
    
)
//End Display Data One Team

    const bodyNew = (
        <div className={styles.modal}>
            <h3>New Team</h3>
            <TextField className={styles.inputMaterial} label="Player Name" name="name" onChange={handleChange}/>
            <TextField className={styles.inputMaterial} label="Bio" name="bio" onChange={handleChange}/>
            <TextField className={styles.inputMaterial} label="Age" name="age" onChange={handleChange}/>
            <TextField className={styles.inputMaterial} label="Number" name="number" onChange={handleChange}/>
            <tr className="comboboxpos" >
                <td className="comboboxfont">Position:</td>
                <td>
                <select onChange={(e)=>{
                    onChangeComboPos(e)}} >
                    {uposition.map((upos) =>
                        <option key={upos.id} value={upos.id}>{upos.position}</option>         
                    )}
                </select>
            
                </td>
            </tr>
            <tr className="comboboxpos" >
                <td className="comboboxfont">Team:</td>
                <td>
                <select onChange={(e)=>{
                    onChangeComboTeam(e)}} >
                    {ucomboteam.map((utm) =>
                        <option key={utm.id} value={utm.id}>{utm.team_name}</option>         
                    )}
                </select>
            
                </td>
            </tr>
            <div align="right">
                <Button color="Primary" onClick={handleCreateNewTeam}>Create</Button>
                <Button onClick={()=>openclosemodalInsplay()}>Cancel</Button>
            </div>
        </div>
    )
    //End Modal Code

    return (
        <div className="playercol">
            <TableContainer className={styles.tableContainer}>
                <TableHead className={styles.tableHeaderCell} >
                    <TableRow>
                        <StyledTableCell >PLAYER</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {uplayers.map((uplayer) =>
                        <tr>
                            <td onClick={()=>prepDisplayDataTeam(uplayer)}>{uplayer.name}</td>
                            <td><button>Update Player</button></td>
                            <td><button onClick={()=>delPlayer(uplayer)} >Delete Player</button></td>
                        </tr>
                    )}
                </TableBody>
            </TableContainer >
            <button className="butn-3d" onClick={()=>openclosemodalInsplay()}>New Player</button>
            <Modal  open={umodalinsplay}  onclose={openclosemodalInsplay}>{bodyNew}</Modal>
            <Modal  open={umodaldatteam}  onclose={openclosemodalDatteam}>{displayDataTeam}</Modal>
        </div>
    )
}
