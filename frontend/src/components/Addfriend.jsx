import React from 'react'
import {
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  IconButton,
  TextField,
  InputBase
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import axios from 'axios';

//icons import
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';



const Input = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(0, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const InputIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  left:-10,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

const Addfriend = ({handleChecked}) => {
  const [input, setInput] = React.useState();
  
  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    if(e.charCode === 13){
      axios.post('http://localhost:5001/users/addfriend',{
        userId: input
      },{headers:{
        "Authorization": localStorage.getItem('tokenId').trim(' ')
    }
    }).then((response) => { 
       console.log(response);
    })
    .catch((error) => { console.log(error); });
    }
  }


  const SearchBar = (
    <Input
            sx={{
              display:"flex"
            }}
            >
                <InputIconWrapper>
                <SearchIcon />
              </InputIconWrapper>
              <StyledInputBase
              sx={{
                flexGrow:1
              }}
                placeholder="Message"
                inputProps={{ 'aria-label': 'Find friend' }}
                value={input}
                onChange={handleChange}
                onKeyPress={handleSubmit}
              />
            </Input>
  )
  
  return (
    <>
    <Toolbar
          variant="dense"
          sx={{
            minHeight: 64,
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
             <Box 
             sx={{
              position: "absolute",
              left:5
             }}>
  
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleChecked}
              >
        <ArrowBackIcon
        sx={{
          height:"35px",
          width:"35px"
        }}
        />
              </IconButton>
             </Box>
  
             <Box
             sx={{
              marginLeft:"40px",
             }}
             >
              Add friends
             </Box>
             
        </Toolbar>
        <Divider />
        <Box
        sx={{
          padding:'5px'
        }}>
        {SearchBar}
        </Box>
        <List>
          <ListItem>
          <ListItemIcon>{<Avatar >{'x'}</Avatar>}</ListItemIcon>
          <ListItemText
            primary={<Typography >logout</Typography>}
          />
          </ListItem>
        </List>
      </>
  )
}

export default Addfriend