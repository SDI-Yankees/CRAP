import {useHistory} from 'react-router-dom';
import '../CSS/TrainingEntry.css';

function TrainingEntry ({training, updateTraining}){
    let history = useHistory();

    function popTraining(){
        updateTraining(training)
        history.push(`/MyTraining/details/${training.training_id}`)
    };

    return(
    <li className="training-item" onClick={() => popTraining()}>
        <span><strong>Training Name: </strong> {`${training.name}`}   </span>
        <span><strong>Category: </strong> {`${training.category}`}   </span>
        <span><strong>Completion Date: </strong> {`${training.completion_date.slice(0,10)}`}   </span>
    </li>
    )
}


export default TrainingEntry;