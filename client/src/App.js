import './App.css';
import Login from './components/Login.js';
import Header from './components/Header';
import Footer from './components/Footer';
import MyTraining from './components/MyTraining';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Overdue from './components/Overdue';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Login />
          <Footer />
        </Route>
        <Route exact path='/MyTraining'>
          <Header />
          <Overdue />
          <MyTraining />
          <Footer />
        </Route>
        <Route exact path='/admin'>
          <Header />
          <Admin />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;