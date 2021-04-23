import { useState, useEffect } from 'react';
import '../CSS/MyTraining.css';
import getUserFromCookie from '../util/getUserFromCookie.js';
import TrainingEntry from './TrainingEntry.js';
import {Button} from '@material-ui/core';

function MyTraining({setTraining}) {
  let [ trainingState, setTrainingState ] = useState([]);
  let [allTraining, setAllTrainings] = useState([]);
  const [trainingSelected, selectTraining] = useState({});


  const user = getUserFromCookie();

  useEffect(() => {
    fetch(`http://localhost:3000/index/${user.id}`)
    .then(response => response.json())
    .then(result => setTrainingState(result))
  }, [])

  useEffect(()=>{
    fetch('http://localhost:3000/trainings')
    .then(response => response.json())
    .then(data => setAllTrainings(data))
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  function completeTraining(e){
    fetch('http://localhost:3000/trainings/complete', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        training_id: trainingSelected.id,
        user_id: user.id,
        completion_date: new Date(),
      })
    })
  }

  return (
    <div className="training-container">
      <ul className="list">
        <h2 className="Training-Header">My Training</h2>
        {trainingState === undefined ? 'Loading...' : 
        trainingState.map(training => {
          return <TrainingEntry training={training} updateTraining={setTraining}/>
        })}
      </ul>
      <div className="completeTraining">
        <select onChange={(e) => {
          console.log(e.target.selectedIndex);
          console.log(allTraining[e.target.selectedIndex])
            selectTraining(allTraining[e.target.selectedIndex])
        }}>
          {allTraining.map(item => {
            return (
              <option value={item.training_id}>{item.name}</option>
            )
          })}
        </select>
        <Button variant="contained" color="primary" onClick={e => {
          completeTraining(e);
          refreshPage();
          }}>Add Training Completion</Button>
      </div>
    </div>
  )
}

export default MyTraining;