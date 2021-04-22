import { useState, useEffect } from 'react';
import '../CSS/MyTraining.css';
import getUserFromCookie from '../util/getUserFromCookie.js';

function MyTraining() {
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
        <h2>My Training</h2>
        {trainingState === undefined ? 'Loading...' : 
        trainingState.map(training => {
          return <li className="training-item">
                   <span><strong>Training Name: </strong> {`${training.name}`}   </span>
                   <span><strong>Category: </strong> {`${training.category}`}   </span>
                   <span><strong>Completion Date: </strong> {`${training.completion_date.slice(0,10)}`}   </span>
                 </li>
        })}
      </ul>
    </div>
  )
}

export default MyTraining;