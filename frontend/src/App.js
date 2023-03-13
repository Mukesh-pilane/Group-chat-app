import io from 'socket.io-client';
import {useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Main from './components/Main'
import Login from './pages/Login'
import MessageZone from './containers/Messagezone'
import { useDispatch, useSelector } from "react-redux";
import { verify, connected } from "./features/userSlice";
import { refreshTokenSetup } from './utils/refreshTokenSetup';
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.user);
  useEffect(()=>{ 
    if(localStorage.getItem('tokenId') === null){
      navigate('/login');
    }else{
      dispatch(verify(localStorage.getItem('tokenId')))
      console.log(localStorage.getItem('tokenId'));
    }
  }, [localStorage.getItem('tokenId')])
const socket = io("localhost:5001/", {
  transports: ["websocket"],
  cors: {
    origin: "http://localhost:3000/",
  },
});
  useEffect(()=>{
    if (localStorage.getItem('tokenId') !== null){
    socket.on("connect", (data) => {
        }); 

    socket.on("sid", (data)=>{
      dispatch(connected({socketId:data}))
      console.log(data, "data");
    })
  }
  },[])
  
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Main />} exact>
            <Route path="/:id" element={<MessageZone />} />
        </Route>
       <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
