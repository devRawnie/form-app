import './App.css';
import Header from './components/HeaderComponent';
import MainComponent from "./components/MainComponent";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

function App() {
  return (
    <FirebaseDatabaseProvider>
      <div>
        <Header/>
        <MainComponent/>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;
