import React,{useContext} from 'react'
import {reportContext} from '../../context/ContextProvider'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Mixing = () => {
    const classes = useStyles();


    const {dispatch} =useContext(reportContext)
    return (
        <div className={classes.root}>

<ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button onClick={()=>{dispatch({type:'compoundWeight'})}}>Compound Weight</Button>
        <Button onClick={()=>{dispatch({type:'mixingBreakDown'})}}>Break down</Button>
        <Button onClick={()=>{dispatch({type:'mixingProductivity'})}}>Productivity</Button>
        <Button onClick={()=>{dispatch({type:'mixingManPower'})}}>ManPower</Button>
        <Button onClick={()=>{dispatch({type:'mixingEnergy'})}}>Energy</Button>
      </ButtonGroup>
           
        </div>
    )
}

export default Mixing
