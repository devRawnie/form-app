import React from "react";
import './App.css';
import Header from './components/HeaderComponent';
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Result from "./components/ResultComponent";

function Main(){
  return(
    <div>
      <Header/>
      <MainComponent/>
    </div>
  )
}

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main}/>
        <Route exact path="/result" component={Result}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
