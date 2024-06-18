import TodoList from "./TodoList";
import Addtodoform from "./Addtodoform";
import { useState } from "react";
function Todocontainer()
{
    const[activityArr,setActivityArr]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])
    return(
        <div>
            <div className='flex gap-5 flex-wrap'>
            <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}></Addtodoform>
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList> 
        </div>
        </div>
    )
}

export default Todocontainer;