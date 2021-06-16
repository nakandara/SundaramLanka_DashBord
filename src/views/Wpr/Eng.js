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
const Eng = () => {
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
        <Button onClick={()=>{dispatch({type:'energyCost'})}}>Energy Cost</Button>
        <Button onClick={()=>{dispatch({type:'energyConsumed'})}}>Energy Consumed</Button>
        <Button onClick={()=>{dispatch({type:'breakdown'})}}>Break Down</Button>
        <Button onClick={()=>{dispatch({type:'fireWoodCostRate'})}}>FireWood Cost Rate</Button>
        <Button onClick={()=>{dispatch({type:'oil'})}}>Oil</Button>
        <Button onClick={()=>{dispatch({type:'pm'})}}>PM Plan</Button>
      </ButtonGroup>
           
        </div>
    )
}
export default Eng
