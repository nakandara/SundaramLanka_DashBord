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
const Hr = () => {
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
        <Button onClick={()=>{dispatch({type:'absentInform'})}}>Absent Inform</Button>
        <Button onClick={()=>{dispatch({type:'absentNonInform'})}}>Absent Non Inform</Button>
        <Button onClick={()=>{dispatch({type:'late'})}}>Late</Button>
        <Button onClick={()=>{dispatch({type:'manPower'})}}>ManPower</Button>
        <Button onClick={()=>{dispatch({type:'dot'})}}>DOT</Button>
        <Button onClick={()=>{dispatch({type:'reportableAccident'})}}>Reportable Accident</Button>
        <Button onClick={()=>{dispatch({type:'nonReportableAccident'})}}>Non Reportable Accident</Button>
        <Button onClick={()=>{dispatch({type:'nearMiss'})}}>Near Miss</Button>
        <Button onClick={()=>{dispatch({type:'kaizen'})}}>Kaizen</Button>
        <Button onClick={()=>{dispatch({type:'training'})}}>Training</Button>
        
      </ButtonGroup>
           
        </div>
    )
}

export default Hr
