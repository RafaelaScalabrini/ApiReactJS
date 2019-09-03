import React, {Component} from "react";

import Routes from'./routes';
import api from './services/api';
import Main from './pages/main';

import './style.css';
import Header from "./component/Header";


const App =() => (
  <div className="App">
   <Header/>
   <Routes/>
    </div>
);





export default App;
