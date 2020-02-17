import React from 'react';
import { AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';

const navbar = () => {
    return(
        <React.Fragment>
            <AppBar position="fixed" style={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Typography variant="title" color="primary">BCJR</Typography>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                        <Grid item lg = {1}> 
                            <Button color="primary">About Me</Button>
                        </Grid>
                        <Grid item lg = {1}> 
                            <Button color="primary">Projects</Button>
                        </Grid>
                        <Grid item lg = {1}> 
                            <Button color="primary">Skills</Button>
                        </Grid>
                        <Grid item lg = {1}> 
                            <Button color="primary">Experience</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default navbar;


