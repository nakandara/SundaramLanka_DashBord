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
const Quality = () => {
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
        <Button onClick={()=>{dispatch({type:'flash'})}}>Flash</Button>
        <Button onClick={()=>{dispatch({type:'berlc'})}}>BER</Button>
        <Button onClick={()=>{dispatch({type:'ftr'})}}>FTR</Button>
        <Button onClick={()=>{dispatch({type:'holdCompound'})}}>Hold</Button>
        <Button onClick={()=>{dispatch({type:'rejectCompound'})}}>Reject</Button>
        <Button onClick={()=>{dispatch({type:'nmDirty'})}}>NM Dirty</Button>
      </ButtonGroup>
           
        </div>
    )
}

export default Quality
