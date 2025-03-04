import "./App.css"
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskDetails from "./components/TaskDetails";
import UserIdComponent from './hooks/UserIdComponent';
import Square from "./components/Square"

export default function App() {
  const userId = UserIdComponent(); 

  return (
    <div className="appContainer">
      {/* <Header />
      <Tasks/>
      <TaskDetails/> */}
      <Square />
    </div>
  );
}