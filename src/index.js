import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import "./index.css";
import Landing from './components/landing';
import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  const [user,setuser] = useState([{
    username: "Subash",
    password: "123"
  }])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login user={user} setuser={setuser}></Login>}></Route>
          <Route path='/signup' element={<Signup user={user} setuser={setuser}></Signup>}></Route>
          <Route path='/landing' element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
root.render(<App />);
