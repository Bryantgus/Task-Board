import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskDetails from "./components/TaskDetails";
import UserIdComponent from './hooks/UserIdComponent';
import { useState } from "react";

export default function App() {
  const userId = UserIdComponent(); 
  const [showDetails, setShowDetails] = useState(false);
  const [InOnAnimation, setInOnAnimation] = useState(false);
  const [taskData, setTaskData] = useState({});

  function details(id, title, description, imgL, imgR) {  
    console.log(description)
    const isEmpty = Object.keys(taskData).length === 0;
    if (id === taskData.id) return;
    if (isEmpty) {
      setTaskData({
        id: id,
        title: title,
        description: description,
        icon: imgL,
        stauts: imgR});
      setShowDetails(true);
      setInOnAnimation(false);
    } else {
      setInOnAnimation(true);
      setTimeout(() => {
        setTaskData({id: id});
        setInOnAnimation(false);
      }, 1000);
    }
  }

  function closeAnimation() {
    setInOnAnimation(true);
    setTimeout(() => {
      setTaskData({});
      setShowDetails(false);
      setInOnAnimation(false);
      setTaskData({});
    }, 1000);
  }

  return (
    <div className="appContainer">
      <Header />
      <Tasks showDetails={details} />
      {showDetails && <TaskDetails isExiting={InOnAnimation} data={taskData} closeAnimation={closeAnimation} />}
    </div>
  );
}