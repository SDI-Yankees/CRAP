import { useState, useEffect } from 'react';
import '../CSS/MyTraining.css';
import getUserFromCookie from '../util/getUserFromCookie.js';
import TrainingEntry from './TrainingEntry.js'

function MyTraining({setTraining}) {
  let [ trainingState, setTrainingState ] = useState([]);


  const user = getUserFromCookie();

  useEffect(() => {
    fetch(`http://localhost:3000/index/${user.id}`)
    .then(response => response.json())
    .then(result => setTrainingState(result))
  }, [])
  return (
    <div className="training-container">
      <ul className="list">
        <h2 className="Training-Header">My Training</h2>
        <div className="training-item">
        {trainingState === undefined ? 'Loading...' : 
        trainingState.map(training => {
          return <TrainingEntry training={training} updateTraining={setTraining}/>
        })}
        </div>
      </ul>
    </div>
  )
}

export default MyTraining;