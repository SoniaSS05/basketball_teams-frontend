
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { BrowserRouter as Router } from "react-router-dom";
//export const BASE_URL="http://127.0.0.1:9393/";

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
);