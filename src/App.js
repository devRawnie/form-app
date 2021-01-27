import React from "react";
import './App.css';
import Header from './components/HeaderComponent';
import MainComponent from "./components/MainComponent";
import { FaArrowAltCircleUp } from "react-icons/fa";
function Main(){

  return(
    <div>
      <Header/>
      <MainComponent/>
      <button
        className="scrollTop"
        onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'});}}
        >
          <FaArrowAltCircleUp/>
        </button>
    </div>
  )
}

function App() {
  return <Main/>;
}

export default App;
