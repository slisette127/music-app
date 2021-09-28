import React from 'react'
import { Toolbar, Typography, AppBar } from '@material-ui/core';

export default function NavBar() {
    return (
        <div>
            <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
          
        </Toolbar>
      </AppBar>
        </div>
    )
}
