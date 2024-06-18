function Todoitem(props) {
    const setActivityArr = props.setActivityArr
    const activityArr = props.activityArr
    function handleDelete(Delete) {
        var temp = activityArr.filter(function (item) {
            if (item.id === Delete) {
                return false

            } else{
                return true
            }
        })
        setActivityArr(temp)

    }
    return (
        <div className='flex justify-between'>
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className='text-red-600' onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default Todoitem;