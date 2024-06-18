
import Todoitem from "./Todoitem"
function TodoList(props)
{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
    
    return(
        <div className='bg-[#BDB3EA] border rounded-md p-2 flex-grow'>
                <h1 className='text-2xl font-medium'>Today's Activities</h1>
                {
                    activityArr.length===0? <p>You haven't added any ativity yet</p>:""
                }
                {
                    activityArr.map(function(item,index){
                        return <Todoitem id={item.id}item={item} index={index} setActivityArr={setActivityArr} activityArr={activityArr}></Todoitem>
                    })
                }
            </div>
    )
}
export default TodoList;