import {useHistory} from 'react-router-dom';
import '../CSS/TrainingEntry.css';

function TrainingEntry ({training, updateTraining}){
    let history = useHistory();
    const userCompletion = new Date(Date.parse(training.completion_date));
    const dueIn = parseInt(training.days_valid);

    function popTraining(){
        updateTraining(training)
        history.push(`/MyTraining/details/${training.training_id}`)
    };

    function checkCompliance(completion){
        const today = new Date();
        const msToDays = 1000*60*60*24;
        const difference = Math.floor((today.getTime() - completion.getTime())/msToDays);
        return difference;
    };

    if(checkCompliance(userCompletion) > dueIn){
        return(
            <li className="training-item" onClick={() => popTraining()}>
            <span><strong>Training Name: </strong> {`${training.name}`}   </span>
            <span><strong>Category: </strong> {`${training.category}`}   </span>
            <span><strong>Completion Date: </strong> {`${training.completion_date.slice(0,10)}`}</span>
            <span><strong>&nbsp;&nbsp;PAST DUE: </strong>{`Days overdue: ${checkCompliance(userCompletion)-dueIn}`}</span>
            </li>
        )
    }
    else if(checkCompliance(userCompletion)+30 > dueIn){
        return(
            <li className="training-item" onClick={() => popTraining()}>
            <span><strong>Training Name: </strong> {`${training.name}`}   </span>
            <span><strong>Category: </strong> {`${training.category}`}   </span>
            <span><strong>Completion Date: </strong> {`${training.completion_date.slice(0,10)}`}</span>
            <span><strong>&nbsp;&nbsp;DUE SOON: &nbsp;</strong>{` Due in: ${dueIn - checkCompliance(userCompletion)} days`}</span>
            </li>
        )
    }
    return(
    <li className="training-item" onClick={() => popTraining()}>
        <span><strong>Training Name: </strong> {`${training.name}`}   </span>
        <span><strong>Category: </strong> {`${training.category}`}   </span>
        <span><strong>Completion Date: </strong> {`${training.completion_date.slice(0,10)}`}</span>
    </li>
    )
}


export default TrainingEntry;