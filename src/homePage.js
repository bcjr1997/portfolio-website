import React from 'react';
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import {makeStyles} from '@material-ui/styles';
import { pink } from '@material-ui/core/colors';

const homePageStyles = makeStyles(theme => ({
  root:{
    display: 'flexbox',
  },
  component:{
    textAlign: 'center',
    color: pink
  },
}));

function HomePage(){
  const classes = homePageStyles();
  return(
    <div className={classes.root}>
      <Navbar/> 
      <AboutMe/>
    </div>
  );
}

export default HomePage; 