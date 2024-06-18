
import './App.css';
import Header from "./components/Header"
import Card from "./components/card"
import Todocontainer from "./components/todocontainer"

function App() {
  return (
    <div className='bg-black p-10'>
      <div className='bg-white border rounded-md p-10'>
        <Header />
        <Card></Card>
        <Todocontainer></Todocontainer>
      </div>
    </div>
  );
}

export default App;
