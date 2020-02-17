import React from 'react';
import {IconButton, Grid, Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const aboutMe = () => {
    return(
        <React.Fragment>
            <Grid container spacing={0} direction = "column" alignItems="center" justify="center" style={{minHeight: '100vh'}}>
                <Grid item>
                    <Typography variant="h2">
                        Brian Chong Jun Rong
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Aspiring Software Engineer | Computer Science Graduate  
                    </Typography>
                </Grid>
                <Grid container spacing={0} direction = "row" alignItems="center" justify="center">
                    <Grid item>
                        <IconButton iconStyle={{width: '108px', height: '108px'}}
                        style={{width: '96px', height: '96px', padding: '10px'}}
                        touch = {true} color="primary">
                            <LinkedInIcon style={{fontSize: 48}}/>
                        </IconButton>
                    </Grid> 
                    <Grid item>
                        <IconButton iconStyle={{width: '108px', height: '108px'}}
                        style={{width: '96px', height: '96px', padding: '10px'}}
                        touch = {true} color="primary">
                            <GitHubIcon style={{fontSize: 48}}/>
                        </IconButton>
                    </Grid> 
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default aboutMe;