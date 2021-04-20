import { TextField, Button, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

function Login() {
  return (
    <div>
      <header>
        <h1>
          CRAP
        </h1>
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
            }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" type="password" label="Password" variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon/>
                </InputAdornment>
              ),
            }}/>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </main>
    </div>

  )
}

export default Login;