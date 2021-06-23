import React,{useContext} from 'react';

import {reportContext} from '../context/ContextProvider'
import {
 
  Grid,
  makeStyles,Card
} from '@material-ui/core';

import "react-datepicker/dist/react-datepicker.css";
import './wpr.css'
//import { Navigate } from 'react-router-dom';
//import{useHistory} from 'react-router-dom';
import './wpr.css'

import { green } from '@material-ui/core/colors'; 
import TopBarA from './TopBarA'
import HrAnalaysis from './HrAnalaysis';

const useStyles = makeStyles((theme) => ({
  rootx: {
  backgroundColor:'blue'
   
   
  },card: {
   padding: theme.spacing(1),
    textAlign: 'center',
    color:theme.palette.text.secondary,
    alignItems:"center",
    justify:'center',
    marginTop: theme.spacing(4),
    height:'100%',
    marginLeft: theme.spacing(12)
  },
  selectEmpty: {
    margin: theme.spacing(2),
  },avatar: {
    backgroundColor: green[500],
  },header:{
    height:1,
    margin:3,
    backgroundColor:''
  },headertable:{
    height:0,
    margin:0
  },cardtable: {
    padding: 0,
     textAlign: 'center',
     color:theme.palette.text.secondary,
     alignItems:"center",
     justify:'center',
     marginTop:0,
     marginRight: theme.spacing(4)
   },cardlinechart: {
    padding: theme.spacing(1),
     textAlign: 'center',
     color:theme.palette.text.secondary,
     alignItems:"center",
     justify:'center',
     marginTop: theme.spacing(4),
     backgroundColor:'rgb(255,255,255)', 
     
   },
   cardD: {
   
     textAlign: 'center',
     color:theme.palette.text.secondary,
     alignItems:"center",
     justify:'center',
     height:'100%',
   

     marginBottom:theme.spacing(25)
    
   }
}));

// const initialState = 'sandun'


// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return 'tharuka'

//       case 'decrement':
//       return 'senanyaka'
//       case 'reset':
//       return initialState
//     default:
//       return state;
//   }
// };



const Analaysis= () => {
  const {kpi} =useContext(reportContext)

let z =kpi.firstKpi
  const classes = useStyles();

 
  return (
<div>
   <TopBarA />
<Grid container  spacing={2} 
direction="row"
  justify="center"
  alignItems="center">




<Grid item  item xs={12} md={8}>
   
   
   <Card className={classes.card}>
      
      <HrAnalaysis/>
      
      
      </Card></Grid>

</Grid>
    
</div>
    
  );
};

export default Analaysis;
