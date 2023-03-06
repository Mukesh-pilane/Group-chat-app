import io from 'socket.io-client';
import {useEffect} from 'react';
function App() {
  useEffect(()=>{
   const socket = io("localhost:5001/", {
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
  }, [])

  return (
    <div className="App">
    Frontend
    </div>
  );
}

export default App;
