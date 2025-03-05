import "./TaskDetails.css"
import coffe from "../assets/coffe.webp"
import manLift from "../assets/manLifting.webp"
import books from "../assets/books.webp"
import clock from "../assets/clock.webp"
import time from "../assets/time.webp"
import done from "../assets/done.webp"
import done1 from "../assets/done1.webp"
import close from "../assets/closeWhite.webp"
import { useEffect, useState } from "react"

const listOfIcons = [
 clock, coffe, manLift, books
]

function StatusItem({id, img, bg, title, check, changeCheck}) {
  return (
    <div id={id} 
         style={{border: id === check && "1px solid #3662E3"}} 
         className="statusItemContainer" 
         onClick={() => changeCheck(id)}>
      <div
        className="squareStatus"
        style={{
          backgroundColor: bg,
        }}>
          <div className="imgSquareStatus" style={{backgroundImage: `url(${img})`}}></div>
      </div>

      <span>{title}</span>
      <div className={`${check && "check"}`}></div>
    </div>
  )
}

export default function TaskDetails({ isExiting, data, closeAnimation }) {
  const [statusSelected, setStatusSelected] = useState(3);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);

    return () => {setTitle(""), setDescription("")}
  },[])

  function changeSelectedItem(id) {
    console.log(data);
    
    setStatusSelected(id)
  }
  return (
      <div className={`square ${isExiting ? "exiting" : "entrace"}`}>
        
        <div className="headerTD">
          <h3>Task details</h3>
          <div className="closeImg" onClick={closeAnimation}></div>
        </div>

        <div className="nameContainer">
          <label htmlFor="tn">Task name</label>
          <input id="tn" type="text" placeholder="Enter task name"  value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="descriptionCtn">
          <label htmlFor="dp">Description</label>
          <textarea id="dp" type="text" placeholder="Enter a short description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="iconContainer"></div>
          <span>Icon</span>
          <div className="iconsItemContainer">
            {listOfIcons.map((item, index) => (
              <div
                key={index}
                style={{backgroundImage: `url(${item})`}}
                alt={`Icon ${index}`}
                className="icon"  
              />
            ))}
        </div>

        <div className="statusContainer">
          <span>Status</span>

          <div className="itemsStatus">
            <StatusItem img={time} bg={"#E9A23B"} title={"In Progress"} check={statusSelected} id={1} changeCheck={changeSelectedItem}/>
            <StatusItem img={time} bg={"#32D657"} title={"Completed"} check={statusSelected} id={2} changeCheck={changeSelectedItem}/>
            <StatusItem img={time} bg={"#DD524C"} title={"Won't do"} check={statusSelected} id={3} changeCheck={changeSelectedItem}/>
          </div>
          
        </div>

      </div>
        
      
  );
}