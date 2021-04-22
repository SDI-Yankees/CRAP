import { Button, Input} from '@material-ui/core';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function TrainingDetails({training}){
    const [newTraining, setTraining] = useState({});
    const updateURL ='http://localhost:3000/index/training'
    let history = useHistory();
    const updateTraining = () => {
        const updatedTraining = {
            training_id: newTraining.training_id,
            user_id: newTraining.user_id,
            completion_date: newTraining.completion_date
        };
        fetch(updateURL, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(updatedTraining)
         })
        .then(history.push('/MyTraining'))
    };

    return(
        <div className="trainingHub">
            <p>{training.name} Hub</p>
            <div className="updateTraining">
                <label>New Training Date: &nbsp;<Input type="date" onChange={(e)=>setTraining({...training, completion_date: e.target.value})}/></label>
                <Button variant="contained" color="primary" onClick={() => updateTraining()}>
                Update Training Date
                </Button>
            </div>
        </div>
    )
}

export default TrainingDetails