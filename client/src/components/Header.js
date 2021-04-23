import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../CSS/Header.css';
import getUserFromCookie from '../util/getUserFromCookie.js';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import CRAPLogo from '../CRAPLogo.svg';

function Header (){
  const user = getUserFromCookie();
  let history = useHistory();

  const signOut = () => {
    Cookies.remove('loggedIn');
    history.push('/');
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <img className="header-logo" src={CRAPLogo}/>
      </div>
      <div className="header-middle">
        <h1>{`Welcome ${user.rank} ${user.first_name} ${user.last_name}`}</h1>
      </div>
      <div className="header-right">
        <div><Link style={{ textDecoration: 'none' }} to='/MyTraining'><Button variant="contained" color="primary">My Training</Button></Link></div>
        <div><Link style={{ textDecoration: 'none' }} to='/admin'><Button variant="contained" color="primary">Admin</Button></Link></div>
        <div><Button className="signout-button" style={{ fontWeight: 'bold' }} variant="contained" color="primary" size="large" endIcon={<ExitToAppIcon />} onClick={()=> signOut()}>
          Sign Out
        </Button>
        </div>
      </div>
    </div>
  )


}



export default Header;