import Cookies from 'js-cookie';
  //extract user json from cookie, place in utility file folder for use across entire application
const getUserFromCookie = () => {
    const user = Cookies.get('loggedIn');
    let userString = user.slice(2);
    const jsonUser = JSON.parse(userString);
    return jsonUser;
  }

  export default getUserFromCookie;