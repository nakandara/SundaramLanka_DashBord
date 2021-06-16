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
const Production = () => {

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
        <Button onClick={()=>{dispatch({type:'plant_utilization'})}}>Plant Utilization</Button>
        <Button onClick={()=>{dispatch({type:'plan_adherence'})}}>Plan Adherence</Button>
        <Button onClick={()=>{dispatch({type:'plan_vs_actual'})}}>plan vs actual</Button>
        <Button onClick={()=>{dispatch({type:'productivity'})}}>Productivity</Button>
      </ButtonGroup>
           
        </div>
    )
}

export default Production
