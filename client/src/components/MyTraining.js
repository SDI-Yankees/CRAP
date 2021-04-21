import { useState, useEffect } from 'react';


function MyTraining() {
  let [ trainingState, setTrainingState ] = useState([]); 
  useEffect(() => {
    fetch('http://localhost:3000/1')
    .then(response => response.json())
    .then(result => setTrainingState(result))
  }, [])
  return (
    <div>
      <ul>
        <h2>My Training</h2>
        {trainingState === undefined ? 'Loading...' : 
        trainingState.map(training => {
          return <li>{JSON.stringify(training)}</li>
        })}
      </ul>
    </div>
  )
}

export default MyTraining;