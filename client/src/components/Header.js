import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../CSS/Header.css';

function Header (){
  return (
    <div className="header">
      <h1>User's Name and Rank</h1>
      <Button variant="contained" color="primary" endIcon={<ExitToAppIcon />}>
        Sign Out
      </Button>
    </div>
  )
}

export default Header;