import React, { Component } from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';


const history = useHistory();

const routeChange = () =>{ 
  let path = `newPath`; 
  history.push(path);
}

class App extends Component {
    constructor(props){
      super(props)

      this.state = {
        isClicked: true,
        inputValue: ""
      }
    }

    handleClick = () => {
      this.state.isClicked ? 
        this.setState({isClicked : false }) : 
          this.setState({isClicked : true })
    
    }

  render() {

  return (
    <div className="App">
    <TextField
          id="standard-username-input"
          label="username"
          type="username"
          variant="standard"
        />
    <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
        />
      <button type="submit" onClick={routeChange}>Log In</button>
    </div>
  )
};
}

export default App;
