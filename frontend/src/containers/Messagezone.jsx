import io from 'socket.io-client';
import InputBar from "../components/Inputbar"
import {makeStyles} from '@mui/styles'
import { styled, alpha } from '@mui/material/styles';
import { 
  Box,
  Typography, 
  
} from "@mui/material"
import Navbar from '../components/Navbar'

import { useState } from "react";
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

const socket = io("localhost:5001/", {
  transports: ["websocket"],
  cors: {
    origin: "http://localhost:3000/",
  },
});



const Messages = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 1),
  borderRadius:"5px",
  position: "relative",
  bottom: "0",
  right: "0",
}));

export default function MessageZone(){
  const [handleDrawerToggle] = useOutletContext()
  const {socketId} = useSelector((state) => state.user)
  const [message, setMessage] = useState()
  return(
<>
    <Box 
    sx={{
      height:`calc(100% - 120px)`,
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-end",
    }}
    >
      <Navbar 
      handleDrawerToggle={handleDrawerToggle}
      />
      <Messages>
        <Typography>
          ms1
        </Typography>
        <Typography>
          ms2
        </Typography>
        <Typography>
          ms3
        </Typography>
        <Typography>
          ms4
        </Typography>
      </Messages>
      <InputBar />
    </Box>
    </>
    )
}