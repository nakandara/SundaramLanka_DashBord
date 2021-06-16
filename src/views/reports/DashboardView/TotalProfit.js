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
import './dash.css'
import {reportContext} from '../../../context/ContextProvider'

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
  const{ddate,setDdate} =useContext(reportContext)
  const classes = useStyles();
console.log(ddate);
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
             CALENDER
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              <DatePicker onChange={(e) => {
            setDdate(e);
          }}
          selected={ddate}
          className="select"
          dateFormat="dd MMM yyyy" relativeSize={true} />
            
            </Typography>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
