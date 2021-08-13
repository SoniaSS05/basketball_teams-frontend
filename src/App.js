
import React, { useState, useEffect } from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TeamContainer from './Components/TeamContainer'
import PlayerContainer from './Components/PlayerContainer'
import AddPlayer from './Components/AddPlayer';
import NavBar from './Components/NavBar';
import './App.css';


function App() {
  return (
    <div className="app">
     
        <BrowserRouter>
          <NavBar />
          <Switch> 
            <Route path="/TeamContainer" > 
              <TeamContainer />
            </Route>
            <Route path="/PlayerContainer" > 
              <PlayerContainer />
            </Route> 
            <Route exact path="/" > 
              
            </Route>

          </Switch> 
          </BrowserRouter>
        
    </div>






  );
}

export default App;


