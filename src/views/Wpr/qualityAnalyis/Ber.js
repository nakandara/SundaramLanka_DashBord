import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    Grid,
    makeStyles,Paper,InputLabel,NativeSelect,FormControl,Select
  } from '@material-ui/core';
  import '../wpr.css'

const Ber = () => {
    return (
        <div>
          <div className='rccftr'><Box
          display="flex"
          justifyContent=""
          mt={2}
        >
          <Button
          className='ftrbutton'
            // color="default"
            component="a"
            // onClick={handleRccm}
            variant="contained"
          >
            BERLC Analysis
          </Button>
        </Box></div> 
        </div>
    )
}

export default Ber
