import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {}
}));





const LineWiseControl = ({ className,division,foot,onClick,endIcon, ...rest}) => {

const classes =  useStyles()


    return (
        <Card
        className={clsx(classes.root, className)} 
        {...rest}
      >
        <CardHeader
          title={division}
          action ={(<Button   endIcon ={endIcon}  size='small' 
          variant='text'
          onClick= {onClick}
          ></Button>
            
          )}

        />
        <Divider />
        <CardContent>
          <Box
            height={100}
            width={250}
            position="relative"
          >
            
          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        {foot} 
        </Box>
      </Card>
    )
}

LineWiseControl.propTypes = {
    className: PropTypes.string
  };

export default LineWiseControl
