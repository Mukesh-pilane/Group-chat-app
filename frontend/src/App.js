import io from 'socket.io-client';
import {useEffect} from 'react';
import {Routes, Route, Outlet, useLocation} from 'react-router-dom'
import Main from './components/Main'
import Login from './pages/Login'
import MessageZone from './containers/Messagezone'
import { useDispatch, useSelector } from "react-redux";
import { verify } from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(()=>{
  /* const socket = io("localhost:5001/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:3000/",
        },
      });
 socket.on("connect", (data) => {
        console.log(data, "data");
      }); 
 socket.on("res", (data)=>{
   console.log(data)
 })
 return function cleanup() {
        socket.disconnect();
      };*/
if (location.pathname!='/login'){
    dispatch(verify(localStorage.getItem('tokenId')));
   }
}, [location])

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main />}>
            <Route path="/:id" element={<MessageZone />} />
        </Route>
       <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
