import "./Tasks.css";
import add from "../assets/add.webp";
import clock from "../assets/clock.webp";
import manLift from "../assets/manLifting.webp";
import coffe from "../assets/coffe.webp";
import books from "../assets/books.webp";
import time from "../assets/time.webp";
import closeW from "../assets/closeWhite.webp"

const defaultItems = [
    {
        imgL: clock,
        title: "Task in Progress",
        imgR: time,
        bg: "#F5D565",
        bgSquare: "#E9A23B",
        description: ""
    },
    
    {
        imgL: manLift,
        title: "Task Completed",
        imgR: add,
        bg: "#A0ECB1",
        bgSquare: "#32D657",
        description: ""
    },

    {
        imgL: coffe,
        title: "Task Won't Do",
        imgR: closeW,
        bg: "#F7D4D3",
        bgSquare: "#DD524C",
        description: ""
    },

    {
        imgL: books,
        title: "Task To Do",
        imgR: "",
        bg: "#E3E8EF",
        bgSquare: "#E3E8EF",
        description: "wadadwadadwadadwadadwadadwadadwadadwadadwadad"
    },

]

function TaskItem({id, bg, title, description, bgSquare, imgL, imgR, showDetails}) {
    return (
        <div id={id} className="taskItem" style={{backgroundColor: bg}} 
            onClick={() => showDetails(
                id, title, description, imgL, imgR
            )}>

            <div className="headerItem">
                <div className="imgContainer img1">
                    <div className="imgL" 
                        style={{backgroundImage: `url(${imgL})`}}>
                    </div>
                </div>

                <h2>{title}</h2>
            
                <div className="imgContainer img2" 
                    style={{backgroundColor: bgSquare}}>
                    <div className="imgR" 
                        style={{backgroundImage: `url(${imgR})`}}>
                    </div>

                </div>
            </div>
            <div className="descriptionContainer">
                <p className="description">{description}</p>
            </div>
            

        </div>
    )
}

function AddItem() {
    return (
        <div className="taskItem addItem">
            <div className="imgContainer img1 addItemSquare">
                    <div className="imgL" 
                        style={{backgroundImage: `url(${add})`}}>
                    </div>
            </div>
            <h2>Add new task</h2>
        </div>
    )
}

export default function Tasks({showDetails}) {

    
    return (
        <div className="tasksContainer">
            {defaultItems.map((item, index) => 
                <TaskItem
                    key={index}
                    id={index}
                    bg={item.bg}
                    title={item.title}
                    description={item.description}
                    bgSquare={item.bgSquare}
                    imgL={item.imgL}
                    imgR={item.imgR}
                    showDetails={showDetails}
                    />)}
                
                <AddItem />
        </div>
        
    )
}