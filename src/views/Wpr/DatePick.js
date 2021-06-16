import React,{useState,useContext} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../reports/DashboardView/dash.css'
import {reportContext} from '../../context/ContextProvider'
import './wpr.css'
const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const TotalProfit = ({ className, ...rest }) => {
  const{dateOne,setDateOne,dateTwo,setDateTwo} =useContext(reportContext)
  const classes = useStyles();
  
  return (
    
      <div className='container'><DatePicker onChange={(e) => {
        setDateOne(e);
      }}
      selected={dateOne}
      className="select"
      dateFormat="dd MMM yyyy" relativeSize={true} />
      <DatePicker onChange={(e) => {
        setDateTwo(e);
      }}
      selected={dateTwo}
      className="select"
      dateFormat="dd MMM yyyy" relativeSize={true} />
      
      </div>
              
            
            
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
