function Card()
{
    return(
        <div className='flex justify-between my-5 gap-5 flex-wrap'>
        <div style={{ backgroundColor:"#8272DA"}} className='px-10 py-5 border rounded-md text-center flex-grow'>
          <h1 className='text-2xl font-medium'>23</h1>
          <p>Chennai</p>
        </div>
        <div style={{ backgroundColor:"#FD6663"}} className='px-10 py-5 border rounded-md text-center flex-grow'>
          <h1 className='text-2xl font-medium'>November</h1>
          <p>14:00:12</p>
        </div>
        <div style={{ backgroundColor:"#FCA201"}} className='px-10 py-5 border rounded-md text-center flex-grow'>
          <h1 className='text-2xl font-medium'>Built using </h1>
          <p>React</p>
        </div>
        </div>

    )
}
export default Card;