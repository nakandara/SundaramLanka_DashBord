import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Line from './Line';
import './Line.css'



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
   


      <Container maxWidth="lg" margin={0}>
        <div className='head'><h1> LINE PRODUCTION SUMMARY </h1></div>
        <Grid
          container
          spacing={3}
        >
         
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
           <Line/>
          </Grid>
        </Grid>
      </Container>
    
  );
};

export default Account;
