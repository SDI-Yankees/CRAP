import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../CSS/Header.css';
import getUserFromCookie from '../util/getUserFromCookie.js';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header (){
  const user = getUserFromCookie();
  let history = useHistory();

  const signOut = () => {
    Cookies.remove('loggedIn');
    history.push('/');
  };

  return (
    <div className="header">
      <h1>{`Welcome ${user.rank} ${user.first_name} ${user.last_name}`}</h1>
      <Button variant="contained" color="primary" endIcon={<ExitToAppIcon />} onClick={()=> signOut()}>
        Sign Out
      </Button>
    </div>
  )


}



export default Header;