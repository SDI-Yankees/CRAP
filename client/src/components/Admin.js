import {Button, Input, Checkbox} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import '../CSS/Admin.css';


function Admin(){
    const trainingURL = "http://localhost:3000/trainings";
    const userURL = "http://localhost:3000/login/register"
    const allUsersURL="http://localhost:3000/user"
    const [adminInputs, setAdminInputs] = useState({name: '', category: '', days_valid: null});
    const [newUserInputs, setNewUserInputs] = useState({
        first_name: '', 
        last_name: '', 
        rank: '',
        is_supervisor: false,
        is_admin: false,
        supervisor_id: null,
        username: '',
        email: '',
        password: ''});

    const [allUsers, setAllUsers] = useState([]);
    useEffect(()=>{
        fetch(allUsersURL)
        .then(response=>response.json())
        .then(users => setAllUsers(users) )
    }, [])

    const [userSelected, selectUser] = useState({});

    function refreshPage() {
        window.location.reload(false);
      }
    
    const createTraining = (e) => {
        e.preventDefault();
        fetch(trainingURL, 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(adminInputs)
            })
    };

    const createUser = (e) => {
        e.preventDefault();
        console.log(newUserInputs);
        fetch(userURL,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newUserInputs)
            }
        )
    };

    const deleteUser = (e) => {
        console.log(userSelected)
        fetch(`${allUsersURL}/${userSelected.id}`,
            {
                method: 'DELETE'
            }
        )
    }

    //event listeners/handlers for users
    const userToChange = (name, value) => {
        setNewUserInputs({...newUserInputs, [name]: value})
    };

    const onChangeUser = (e) => {
        userToChange(e.target.name, e.target.value)
    };

    //event listeners/handlers for training
    const toChange = (name, value) => {
        setAdminInputs({...adminInputs, [name]: value})
    };

    const onChange = (e) => {
       toChange(e.target.name, e.target.value)
    };

    console.log(adminInputs)
    return(
        <div className="admin-container">
            <section className="userRemoval top">
                <div className="delete-user">
                    <div className="input-box">
                        <select name="users" onChange={(e) => {
                            console.log(e.target.selectedIndex)
                            console.log(allUsers)
                            selectUser(allUsers[e.target.selectedIndex])}}>
                            {allUsers.map(user => {
                            // console.log(user.id)
                            return(<option value={user.id}>{`${user.rank} ${user.first_name} ${user.last_name}`}</option>)
                            })}
                        </select>
                    </div>
                    <div className="input-button">
                        <Button className="input" variant="contained" color="primary" onClick={(e) => {
                            deleteUser(e);
                            refreshPage();
                            }}>
                            Delete User
                        </Button>
                    </div>
                </div>  
            </section>
            <br/>
            <div className="training-inputs left">
            <div className="training-form-container">
            <form onSubmit ={createTraining} className="training-form">
                <h1>Create Training</h1>
                <Input
                    className="input"
                    name="name"
                    placeholder="training name"
                    type="text"
                    value={adminInputs.name}
                    onChange = {onChange}
                /><br/>
                <Input
                    className="input"
                    name="category"
                    placeholder="category"
                    type = "text"
                    value = {adminInputs.category}
                    onChange = {onChange}
                /><br/>
                <Input
                    className="input"
                    name="days_valid"
                    placeholder='days valid'
                    value = {adminInputs.days_valid}
                    onChange = {onChange}
                /><br/>
                <br/>
                <Button className="input" variant="contained" color="primary" onClick={(e) => createTraining(e)}>
                    Create Training
                </Button>   
            </form>
            </div>
            </div>
            <div className="right">
                <div className="user-form-container">
                <form onSubmit ={createUser} className="user-form">
                    <h1>Create User</h1>
                    <Input
                        className="input"
                        name="first_name"
                        placeholder="first name"
                        type="text"
                        value={newUserInputs.first_name}
                        onChange = {onChangeUser}
                    /><br/>
                    <Input
                        className="input"
                        name="last_name"
                        placeholder="last name"
                        type="text"
                        value={newUserInputs.last_name}
                        onChange = {onChangeUser}
                    /><br/>
                    <Input
                        className="input"
                        name="rank"
                        placeholder="rank"
                        type="text"
                        value={newUserInputs.rank}
                        onChange = {onChangeUser}
                    /><br/>
                    <Input
                        className="input"
                        name="username"
                        placeholder="username"
                        type="text"
                        value={newUserInputs.username}
                        onChange = {onChangeUser}
                    /><br/>
                    <Input
                        className="input"
                        name="email"
                        placeholder="email"
                        type="email"
                        value={newUserInputs.email}
                        onChange = {onChangeUser}
                    /><br/>
                    <Input
                        className="input"
                        name="password"
                        placeholder="password"
                        type="password"
                        value={newUserInputs.password}
                        onChange = {onChangeUser}
                    /><br/>
                    <Input
                        className="input"
                        name="supervisor_id"
                        placeholder="supervisor_id"
                        type="text"
                        value={newUserInputs.supervisor_id}
                        onChange = {onChangeUser}
                    /><br/>
                    <br/>
                    <label>Supervisor<Checkbox value="is_supervisor" onChange={(e) => setNewUserInputs({...newUserInputs, is_supervisor: !newUserInputs.is_supervisor})}/></label><br/>
                    <label>Admin<Checkbox value="is_admin" onChange={(e) => setNewUserInputs({...newUserInputs, is_admin: !newUserInputs.is_admin})}/></label><br/>
                    <Button className="input" variant="contained" color="primary" onClick={(e) => {
                    createUser(e);
                    refreshPage();
                    }}>
                    Create User
                </Button>  
                </form>
                </div>
            </div>
            


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