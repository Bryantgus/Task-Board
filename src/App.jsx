import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskDetails from "./components/TaskDetails";

import { useEffect, useState } from "react";

export default function App() {

  const [showDetails, setShowDetails] = useState(false);
  const [InOnAnimation, setInOnAnimation] = useState(false);
  const [taskData, setTaskData] = useState({});

  useEffect(() => {
    console.log(taskData);
  },[taskData]);

  function details(id, title, description, imgL, imgR) {  
    const isEmpty = Object.keys(taskData).length === 0;
    const data = {
      id: id,
      title: title,
      description: description,
      icon: imgL,
      status: imgR
    }
    if (InOnAnimation) {
      if (id === taskData.id) {setShowDetails(true)};
    }
    
    if (isEmpty) {
      setTaskData(data);
      setShowDetails(true);
      setInOnAnimation(false);
    } else {
      setInOnAnimation(true);
      setTimeout(() => {
        setTaskData(data);
        setInOnAnimation(false);
      }, 800);
    }
    
  }

  return (
    <div className="appContainer">
      <Header />
      <Tasks showDetails={details} />
      {showDetails && <TaskDetails isExiting={InOnAnimation} data={taskData} closeAnimation={() => setInOnAnimation(true)} />}
    </div>
  );
}