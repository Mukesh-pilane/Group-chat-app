import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Fab
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';


const drawerWidth= 240;

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

export default function InputBar(){
  return(
 <AppBar position="fixed"
              sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          top: 'auto', bottom: 0
        }}
      >
      <Toolbar>
          <Input>
              <InputIconWrapper>
              <InsertEmoticonIcon />
            </InputIconWrapper>
            <StyledInputBase
              placeholder="Message"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Input>
            <IconButton
              size="large"
              edge="end"
              aria-haspopup="true"
            >
            <Fab 
            size="small"
            disableElevation
            >
            <SendIcon color="primary"/>
            </Fab>
            </IconButton>
      </Toolbar>
  </AppBar>
    )
}