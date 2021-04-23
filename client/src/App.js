import './App.css';
import Login from './components/Login.js';
import Header from './components/Header';
import Footer from './components/Footer';
import MyTraining from './components/MyTraining';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Overdue from './components/Overdue';
import Admin from './components/Admin';
import TrainingDetails from './components/TrainingDetails'
import {useState} from 'react';


function App() {
  const [currentTraining, updateTraining] =useState({})
  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Login />
          <Footer className="login-footer"/>
        </Route>
        <Route exact path='/MyTraining'>
          <Header />
          <Overdue />
          <MyTraining setTraining={updateTraining}/>
          <Footer />
        </Route>
        <Route path='/MyTraining/details/'>
          <Header />
          <TrainingDetails training={currentTraining}/>
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