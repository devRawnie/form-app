import React from "react";
import './App.css';
import Header from './components/HeaderComponent';
import MainComponent from "./components/MainComponent";

function Main(){
  return(
    <div>
      <Header/>
      <MainComponent/>
    </div>
  )
}

function App() {
  return <Main/>;
}

export default App;
