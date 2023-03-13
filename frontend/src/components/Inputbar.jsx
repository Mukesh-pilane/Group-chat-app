import {
  AppBar,
  Toolbar,
  InputBase,
  Fab
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


const drawerWidth= 300;

const Input = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const InputIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right:0,
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

export default function InputBar(){
  const [input, setInput] = useState();
  
  function handleChange(e) {
    setInput(e.target.value)
  }

  return(
 <AppBar position="fixed"
              sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          top: 'auto', bottom: 0, 
        }}
      >
      <Toolbar
      sx={{
        display:"flex"
      }}
      >
          <Input
          sx={{
            flexGrow:1,
            display:"flex"
          }}
          >
              <InputIconWrapper>
              <InsertEmoticonIcon />
            </InputIconWrapper>
            <StyledInputBase
            sx={{
              flexGrow:1
            }}
              placeholder="Message"
              inputProps={{ 'aria-label': 'search' }}
              value={input}
              onChange={handleChange}
            />
          </Input>
            
            <Fab 
            size="small"
            >
            <SendIcon color="primary"/>
            </Fab>
      </Toolbar>
  </AppBar>
    )
}