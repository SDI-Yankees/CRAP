import {Button, Input} from '@material-ui/core';
import React, {useState} from 'react';
import '../CSS/Admin.css';



// function Admin_old (){
//     return (
//     <div className = "admin">
//         <nav className="adminButtons"> 
//             <Button variant="contained" color="primary">Modify Training</Button>
//             <Button variant="contained" color="primary">Add Training</Button>
//         </nav>
//         <form className = "newTrainingForm"  action = "http://localhost:3000/trainings" method="post" >
//             <label htmlFor="name">Training Name: &nbsp; 
//                 <input type="text" id="name" name="name"></input>
//             </label>
//             <label htmlFor="category">Training Category: &nbsp; 
//                 <input type="text" id="category" name="category"></input> {/*Make this a drop down menu where options are pulled from server*/}
//             </label>
//             <label htmlFor="days_valid">Days Valid: &nbsp; 
//                 <input type="text" id="days_valid" name="days_valid"></input>
//             </label>
//             <input type="submit"/>
//         </form>
//     </div>
//     )

// }

//const trainingURL = "http://localhost:3000/trainings";
function Admin(){

    const [adminInputs, setAdminInputs] = useState({name: '', category: '', days_valid: null});

    const createTraining = (e) => {
        e.preventDefault();
        console.log("Data passed: ", adminInputs)
    };

    const toChange = (name, value) => {
        setAdminInputs({...adminInputs, [name]: value})
    }

    const onChange = (e) => {
       toChange(e.target.name, e.target.value)
    }

    console.log(adminInputs)
    return(
        <div className="admin-container">
            <form onSubmit ={createTraining} className="admin-form">
                <Input
                    name="name"
                    placeholder="training name"
                    type="text"
                    value={adminInputs.name}
                    onChange = {onChange}
                />
                <Input
                    name="category"
                    placeholder="category"
                    type = "text"
                    value = {adminInputs.category}
                    onChange = {onChange}
                />
                <Input
                    name="days_valid"
                    placeholder='0'
                    value = {adminInputs.days_valid}
                    onChange = {onChange}
                />
                <Button variant="contained" color="primary" /*onClick={() => dispatch({type: 'submit'})}*/>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Admin;

// //{
//     "id": 1,
//     "name": "Cyber Awareness",
//     "category": "TFAT",
//     "days_valid": 365
// },