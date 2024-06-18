import { useLocation } from "react-router-dom";
import Header from "../components/Header"
import Card from "..//components/card"
import Todocontainer from "../components/todocontainer"
function Landing()
{
    const data = useLocation()

    return(<div className='bg-black p-10'>
        <div className='bg-white border rounded-md p-10'>
          <Header name={data.state.user} />
          <Card></Card>
          <Todocontainer></Todocontainer>
        </div>
      </div>)
}
export default Landing;