import {
  Button,
  Container,
  Box,
  Typography
} from '@mui/material'
import {gapi} from "gapi-script"
import { useGoogleLogin} from "react-google-login"
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import GoogleImg from "../assets/img/google-logo-9827.png"
import logo from "../assets/img/logo.png"
import {useSelector, useDispatch} from "react-redux"
import { refreshTokenSetup } from '../utils/refreshTokenSetup';
const clientId = process.env.REACT_APP_CLIENT_ID


export default function Login(){
  const navigate = useNavigate()
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId });
    });
    localStorage.getItem('tokenId')&&navigate('/')
  }, []);

  
  const onSuccess = (res) => { 
  localStorage.setItem('tokenId', res.tokenId.trim(' '))
  refreshTokenSetup(res)
  navigate('/')
};

const onFailure = (res) => {
  console.log('Login failed: res:', res); 
};



const { signIn } = useGoogleLogin({
onSuccess,
onFailure,
clientId,
issignedIn: true, accessType: 'offline',
});
const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit aliquet leo, eget eleifend nibh commodo sit amet."
let text = [...text1]
  return(
    <Container componet="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
            borderRadius: "5px",
            textAlign:"justify",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
          }}
        >
    <img src={logo}
    width='60px'
    height='60px'
    style={{
      marginRight:'10px'
    }}
    />   
    <Typography 
    color="primary"
    >{
      text.map(function (item,i){
        return(
        item
        )
      })
    }
    </Typography>
    <Button 
    onClick={signIn}
    variant="outlined"
    disableElevation
    fullWidth
    >
    <img src={GoogleImg}
    width='30px'
    height='30px'
    style={{
      marginRight:'10px'
    }}
    />
    <Typography>Sigin with google</Typography>
    </Button>
    </Box>
    </Container>
    )
}