import { TextField, Button, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import CRAPLogo from '../CRAPLogo.svg';
import { useReducer, useEffect, useRef } from 'react';



function reducer(state, action){
  switch(action.type){
    case 'updateUserName':
      return {...state, username: action.username};
    case 'updatePassword' :
      return {...state, password: action.password};
    case 'submit':
      console.log(state);
      return {...state, attempt: !state.attempt}
      
    default :
      return state;
  }
}

function Login() {
const [ state, dispatch ] = useReducer(reducer, {username: "", password: "", loginSuccess: false, attempt: false});
const loaded = useRef(false);


useEffect(() => {
  if (!loaded.current){
    loaded.current = true; 
  } else {
    console.log('gonna fetch')
    fetch('http://localhost:3000/login', {method: 'POST', credentials: 'include', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(state)})
    .then(response => response.json())
    .then(results => console.log(results))
    .catch(err => console.log(err));
    }
  },
  [state.attempt]
)

  return (
    <div>
      <header>
        <img src={CRAPLogo} alt="logo" style={{'width': 300, 'height': 300, 'display': 'inline'}}/>
      </header>
      <main>
        <Grid 
        container 
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        >
          <Grid item xs={12}>
            <TextField id="username" type="text" label="Username" variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              }}
              onChange={e => dispatch({type: 'updateUserName', username: e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" type="password" label="Password" variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon/>
                </InputAdornment>
              ),
              }}
              onChange={e => dispatch({type: 'updatePassword', password: e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={() => dispatch({type: 'submit'})}>
              Login
            </Button>
          </Grid>
        </Grid>
      </main>
    </div>

  )
}

export default Login;