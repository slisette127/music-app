import React from 'react'
import { Button, TextField, Paper } from '@material-ui/core';
import { useState } from 'react';


export default function LogIn(props) {
    const [userName, setUserName] = useState({userName:""})
    const [loggedIn, setLoggedIn] = useState(false)
    let user = {}
    console.log(loggedIn);
    const handleInput = (event) => {
        setUserName(event.target.value)
        console.log({userName});
    }

    const handleLogIn = (event) => {
        event.preventDefault()
        user.userName = userName
        user.loggedIn = loggedIn
        props.getInfo(user)
    }

    return (
        <div>
            <Paper elevation={3} 
            style={{
                width:"500px", 
                height:"400px", 
                margin:"40px auto auto auto",
                display: "flex",
                flexDirection:"column"
                }} >

                <h1>Log In </h1>
               <div style={{margin:"40px"}}>
                   <form onSubmit={handleLogIn} >
                    <TextField required fullWidth name="userName" onChange={handleInput} label="Username" variant="standard" />

                    <TextField required fullWidth label="Password" variant="standard" />
                   <Button variant="contained" color="primary" type="submit" onClick={() => {setLoggedIn(true)}}>Log In</Button>
                   </form>
                </div> 
            </Paper>
        </div>
    )
}
