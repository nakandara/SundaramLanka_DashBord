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
const Bead = () => {
 const classes = useStyles();
 const {dispatch} =useContext(reportContext)
    return (
        <div className={classes.root}>

        < ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button onClick={()=>{dispatch({type:'creelBead'})}}>Creel Bead</Button>
        <Button onClick={()=>{dispatch({type:'rejectBead'})}}>Reject Bead</Button>
        <Button onClick={()=>{dispatch({type:'beadEnergy'})}}>Energy</Button>
        <Button onClick={()=>{dispatch({type:'beadProductivity'})}}>Productivity</Button>
        <Button onClick={()=>{dispatch({type:'beadManPower'})}}>Man Power</Button>
        <Button onClick={()=>{dispatch({type:'beadBreakDown'})}}>Break Down</Button>
       
      </ButtonGroup>
           
        </div>
    )
}

export default Bead
