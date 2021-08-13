import React, { useState } from "react";



function AddPlayer({addPlayer}) {
    const [uformPlayer, usetFormPlayer] = useState(null);
    


    function handleChange(event) {
        usetFormPlayer({
          ...uformPlayer,
          [event.target.name]: event.target.value,
        });
    }

    function handleSubmitNewPlayer(event){
        event.preventDefault();
        const newAddPlayer={
            name:"hola"


        }
        addPlayer(newAddPlayer);
    }

    
    return(
      <div className="widinput">
        <h1>New Player:</h1>
        <section>
          <form onSubmit={handleSubmitNewPlayer}>
            <div  className="secclas">
              <label >
                Name: 
                <input    
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="forminpadd"
                  placeholder="Name"
                />
                </label>
            </div>
            <div  className="secclas">
              <label>
                Bio: 
                <input  
                  type="text"
                  name="bio"
                  onChange={handleChange}   
                  className="forminpadd"
                  placeholder="Bio"
                />
              </label>
           </div>
           <div  className="secclas">
              <label >
                Age:  
                <input  
                  type="text"
                  name="age"
                  onChange={handleChange}  
                  className="forminpadd" 
                  placeholder="Age"
                />
              </label>
            </div>
            <div  className="secclas">
              <label >
                Number: 
                <input  
                  type="text"
                  name="number"
                  onChange={handleChange}
                  className="forminpadd" 
                  placeholder="Number"  
                />
              </label>
            </div>
            <div  className="secclas"> 
              <label >
                Team:
                <input  
                  type="text"
                  name="team"
                  onChange={handleChange}  
                  className="forminpadd" 
                  placeholder="Team"
                />
              </label>
            </div>
            <div  className="secclas"> 
              <label >
               Position:
                <input  
                  type="text"
                  name="position"
                  onChange={handleChange}  
                  className="forminpadd" 
                  placeholder="Position"
                />
              </label>
            </div>

        
            <button className="btn-3d"  type="submit">Add New Player</button>
          
          </form>
      </section>
    </div>
  )
}

export default AddPlayer;
