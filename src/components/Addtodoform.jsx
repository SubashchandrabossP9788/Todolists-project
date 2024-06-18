import { useState } from "react";

function Addtodoform(props)
{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr

    const [newactivity,setNewactivity]=useState("")
    function handleChange(evt)
    {
        setNewactivity(evt.target.value)

    }
    function AddActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }
    return(
        <div className='gap-3'>
                <h1 className='text-2xl font-medium'>Manage Activities</h1>
                <input value={newactivity} onChange={handleChange} type="text" placeholder="Enter your  Activities?" className='border border-black p-2'/>
                <button onClick={AddActivity} className="bg-black text-white p-2 border border-black">Add</button>
            </div>
    )
}
export default Addtodoform;