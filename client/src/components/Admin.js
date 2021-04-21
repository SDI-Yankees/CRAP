import {Button} from '@material-ui/core';

//const trainingURL = "http://localhost:3000/trainings";
function Admin (){
    return (
    <div className = "admin">
        <nav className="adminButtons"> 
            <Button variant="contained" color="primary">Modify Training</Button>
            <Button variant="contained" color="primary">Add Training</Button>
        </nav>
        <form className = "newTrainingForm"  action = "http://localhost:3000/trainings" method="post" >
            <label htmlFor="name">Training Name: &nbsp; 
                <input type="text" id="name" name="name"></input>
            </label>
            <label htmlFor="category">Training Category: &nbsp; 
                <input type="text" id="category" name="category"></input> {/*Make this a drop down menu where options are pulled from server*/}
            </label>
            <label htmlFor="days_valid">Days Valid: &nbsp; 
                <input type="text" id="days_valid" name="days_valid"></input>
            </label>
            <input type="submit"/>
        </form>
    </div>
    )

}
// {/*onSubmit= {() => submitNewTraining*/}
// function submitNewTraining(e){
//     e.preventDefault();
//     fetch(trainingURL, {method: 'POST'})
// }

export default Admin;

// //{
//     "id": 1,
//     "name": "Cyber Awareness",
//     "category": "TFAT",
//     "days_valid": 365
// },