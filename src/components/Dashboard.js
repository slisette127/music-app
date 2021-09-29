import * as React from 'react';
import { Card, CardActions, CardContent, Switch, Slider, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

function valuetext(value) {
    return `${value}`;
  }

export default function Dashboard(props) {

    const [volume, setVolume] = React.useState('');
    const handleChange = (event) => {
        setVolume(event.target.value);
      };

  return (

    <div>
        <h1>Welcome {props.user.userName}</h1>
      <div style={{
          display:"flex",
          margin: "10px",
          
        }}>
    <Card style={{ minWidth: 275,
                    maxWidth:350,
                    padding: "15px",
                    margin: "10px",
        
                    }}>
      <CardContent>
       <h1>Online Mode</h1>
        <p>Is this application connected to the internet.</p>
      </CardContent>
      <CardActions>
      <Switch
        inputProps={{ 'aria-label': 'controlled' }}/>
      </CardActions>
    </Card>

    <Card style={{ minWidth: 275,
                    maxWidth:350,
                    padding: "15px",
                    margin: "10px",
        
                }}>
      <CardContent>
       <h1>Master Volume</h1>
        <p>Overrides all other sound settings in this application.</p>
      </CardContent>
      <CardActions>
      <Slider
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

    <Card style={{ minWidth: 275,
                    maxWidth:350,
                    padding: "15px",
                    margin: "10px",
        
                }}>
      <CardContent>
       <h1>Sound Quality</h1>
        <p>Manually control the music quality in event of poor connection.</p>
      </CardContent>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={volume}
          label="Volume"
          onChange={handleChange}
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      <CardActions>
      
      </CardActions>
    </Card>

    
    
    </div>
        </div>
  );
}
            
    
