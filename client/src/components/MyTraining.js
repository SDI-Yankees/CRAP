import { useState, useEffect } from 'react';


function MyTraining() {
  let [ trainingState, setTrainingState ] = useState([]); 
  useEffect(() => {
    fetch('http://localhost:3000/index/1')
    .then(response => response.json())
    .then(result => setTrainingState(result))
  }, [])
  return (
    <div>
      <ul>
        <h2>My Training</h2>
        {trainingState === undefined ? 'Loading...' : 
        trainingState.map(training => {
          return <li><span><strong>Training Name: </strong> {`${training.name}`}   </span>
           <span><strong>Category: </strong> {`${training.category}`}   </span>
           <span><strong>Completion Date: </strong> {`${training.completion_date.slice(0,10)}`}   </span> </li>
        })}
      </ul>
    </div>
  )
}

export default MyTraining;