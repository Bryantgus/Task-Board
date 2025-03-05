import "./App.css"
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskDetails from "./components/TaskDetails";
import UserIdComponent from './hooks/UserIdComponent';
import { useState } from "react";

export default function App() {
  const userId = UserIdComponent(); 
  const [showDetails, setShowDetails] = useState(true);
  const [inOnDetailsAnimation, setInOnDetailsAnimation] = useState(true);

  function details(title, description, imgR, imgL) {
    console.log(title, description, imgR, imgL);
  }
  return (
    <div className="appContainer">
      <Header />
      <Tasks showDetails={details}/>
      { showDetails && <TaskDetails isExiting={inOnDetailsAnimation}/>}
      <button onClick={() => setInOnDetailsAnimation(prev => !prev)}>animate</button>
    </div>
  );
}