import React, {useState} from 'react'
import "./Player.css";
import {Modal, TextField, Button, Box} from '@material-ui/core';
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


export default function Player({uplayers, delPlayer, addPlayer, uposition, ucomboteam, updatePlayer}) {
    const styles = useStyles();

     //Modal Control Open Close 
     const [umodalinsplay, setuModalinsplay] = useState(false);
     const openclosemodalInsplay=()=>{
         setuModalinsplay(!umodalinsplay)
     }
     const [umodaldatplayer, setuModaldatplayer] = useState(false);
     const openclosemodalDatplayer=()=>{
        setuModaldatplayer(!umodaldatplayer)
    }
    const [umodalupplay, setuModalupplay] = useState(false);
     const openclosemodalUpplay=()=>{
        setuModalupplay(!umodalupplay)
    }
    //End Modal Control  Open Close 

    //Display  Data One Player
    const [udatasingleplayer,setuDatasinglePlayer]= useState({
        name: "",
        bio: "",
        age: "",
        number: "", 
        position_id:'',
        team_id:''
    })

function handleChange(event) {
    setunewPlayer({
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
    position_id:'',
    team_id:''
 })


 //Position  and Team ComboBox
 const[uposi, setuPosi] = useState('')
 const[utm, setuTm] = useState('')

 //Position and Team RelationShip
 const[ups, setuPs] = useState('')
 const[unamet,setuNamet] = useState('')
 //


 const onChangeComboPos = (e) =>{
     const selvalueid= e.target.value;
     setuPosi(selvalueid);   
 }

 const onChangeComboTeam = (e) =>{
    const selvalueteamid= e.target.value;
    setuTm(selvalueteamid);
 }
 
 const onChangeComboTeamPos = (e) =>{
    const updatevalue={...udatasingleplayer}
    updatevalue[e.target.name] = e.target.value
    setuDatasinglePlayer({...updatevalue})
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


//Modal Update Player
//Get data to update
function handleChangeUpd(event) {
    const updatevalue={...udatasingleplayer}
    updatevalue[event.target.name] = event.target.value
    setuDatasinglePlayer({...updatevalue})
 }

function handleUpdatePlayer(event){
    event.preventDefault();
    updatePlayer(udatasingleplayer);
    openclosemodalUpplay();
}
//End Update Player


//Filter Single Data Player Show or Update
const prepDisplayDataPlayer=(uplayer, action)=>{
    setuDatasinglePlayer(uplayer)
    const teamfilter =  ucomboteam.filter((tm)=> tm.id == uplayer.team_id)
    const positionfilter = uposition.filter((ps)=> ps.id == uplayer.position_id)
    console.log('TEAMFILTER')
    console.log(teamfilter)
    setuPs(positionfilter)
    setuNamet(teamfilter)
    if (action === '0'){
        openclosemodalDatplayer()
    }
    else{
        openclosemodalUpplay()  
    }
}

let displayDataPlayer=''
if (umodaldatplayer){
    displayDataPlayer= (
        
        <div className={styles.modal}>
            <h2 class="space">{udatasingleplayer.name.toUpperCase()}</h2>
            <table>
                <tr>
                    <td className="textbold">BIO</td>
                    <td>{udatasingleplayer.bio}</td>
                </tr>
                <tr>
                    <td className="textbold">AGE</td>
                    <td>{udatasingleplayer.age}</td>
                </tr>
                <tr>
                    <td className="textbold">NUMBER</td>
                    <td>{udatasingleplayer.number}</td>
                </tr>
                <tr>
                    <td className="textbold">POSITION</td>
                    <td>{ups[0].position}</td>
                </tr>
                <tr>
                    <td className="textbold">TEAM</td>
                    <td>{unamet[0].team_name}</td>
                </tr>
            </table>
            <div align="right">  
                <Button color="Primary" onClick={()=>openclosemodalDatplayer()}>CLOSE</Button>
            </div>
        </div>
    )
}

//End Display Data One Player

//Create Player
const bodyNew = (
    <div className={styles.modal}>
        <h3>New Player</h3>
        <TextField className={styles.inputMaterial} label="Player Name" name="name" onChange={handleChange}/>
        <TextField className={styles.inputMaterial} label="Bio" name="bio" onChange={handleChange}/>
        <TextField className={styles.inputMaterial} type="number" label="Age" name="age" onChange={handleChange}/>
        <TextField className={styles.inputMaterial} type="number" label="Number" name="number" onChange={handleChange}/>
        <tr className="comboboxpos" >
            <td className="comboboxfont">Position:</td>
            <td>
                <select defaultValue='0' onChange={(e)=>{
                    onChangeComboPos(e)}} >
                        <option value='0'>--Choose Position--</option>
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
                    <option value='0'>--Choose Team--</option>
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


//Update Player
let bodyUpd=''
if (umodalupplay){
    bodyUpd = (
        <div className={styles.modal}>
            <h3>Update Player</h3>
            <TextField className={styles.inputMaterial} defaultValue={udatasingleplayer.name} label="Player Name" name="name" onChange={handleChangeUpd}/>
            <TextField className={styles.inputMaterial} defaultValue={udatasingleplayer.bio} label="Bio" name="bio" onChange={handleChangeUpd}/>
            <TextField className={styles.inputMaterial} defaultValue={udatasingleplayer.age} type="number" label="Age" name="age" onChange={handleChangeUpd}/>
            <TextField className={styles.inputMaterial} defaultValue={udatasingleplayer.number} type="number" label="Number" name="number" onChange={handleChangeUpd}/>
            <tr className="comboboxpos" >
                <td className="comboboxfont">Position:</td>
                <td>
                    <select defaultValue={udatasingleplayer.position_id} name="position_id" onChange={(e)=>{
                        onChangeComboTeamPos(e)}}>
                        {uposition.map((upos) =>
                            <option key={upos.id} value={upos.id}>{upos.position}</option>         
                        )}
                    </select>
                </td>
            
                <td className="comboboxfont">Team:</td>
                <td>
                    <select defaultValue={udatasingleplayer.team_id} name="team_id"onChange={(e)=>{
                        onChangeComboTeamPos(e)}}>
                        {ucomboteam.map((utm) =>
                            <option key={utm.id} value={utm.id}>{utm.team_name}</option>         
                        )}
                    </select>
                </td>
            </tr>
            <div align="right">
                <Button color="Primary" onClick={handleUpdatePlayer}>Update</Button>
                <Button onClick={()=>openclosemodalUpplay()}>Cancel</Button>
            </div>
        </div>
    )
}


    //End Modal Code

    return (
        <div className="playercol">
            <TableContainer className={styles.tableContainer}>
                <TableHead className={styles.tableHeaderCell} >
                    <TableRow>
                        <StyledTableCell >PLAYERS</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {uplayers.map((uplayer) =>
                        <tr>
                            <td onClick={()=>prepDisplayDataPlayer(uplayer,'0')}>{uplayer.name}</td>
                            <td><button className="textcolor" onClick={()=>prepDisplayDataPlayer(uplayer,'1')}>Update Player</button></td>
                            <td><button className="textcolor" onClick={()=>delPlayer(uplayer)} >Delete Player</button></td>
                        </tr>
                    )}
                </TableBody>
            </TableContainer >
            <button className="butn-3d" onClick={()=>openclosemodalInsplay()}>New Player</button>
            <Modal  open={umodalinsplay}  onclose={openclosemodalInsplay}>{bodyNew}</Modal>
            <Modal  open={umodaldatplayer}  onclose={openclosemodalDatplayer}>{displayDataPlayer}</Modal>
            <Modal  open={umodalupplay}  onclose={openclosemodalUpplay}>{bodyUpd}</Modal>
        </div>
    )
}
