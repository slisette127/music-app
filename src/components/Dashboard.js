import * as React from 'react';
import { Card, CardActions, CardContent, Switch, Slider } from '@material-ui/core';

function valuetext(value) {
    return `${value}`;
  }

export default function Dashboard(props) {
  return (

    <div>
        <h1>{props.user.userName}</h1>
      <div style={{
          display:"flex",
          margin: "10px"
          
        }}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
       <h1>Online Mode</h1>
        <p>Is this application connected to the internet.</p>
      </CardContent>
      <CardActions>
      <Switch
        inputProps={{ 'aria-label': 'controlled' }}/>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
       <h1>Master Volume</h1>
        <p>Is this application connected to the internet.</p>
      </CardContent>
      <CardActions>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
        />
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
       <h1>Online Mode</h1>
        <p>Is this application connected to the internet.</p>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>

    
    
    </div>
        </div>
  );
}
            
    
