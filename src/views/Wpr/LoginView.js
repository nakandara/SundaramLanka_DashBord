import React from 'react';
import { useNavigate } from 'react-router-dom';

import {

  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>bggggg</div>
  );
};

export default LoginView;
