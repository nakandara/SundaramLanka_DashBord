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

const Flash = () => {
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
            // onClick={handleRccm}
            variant="contained"
            href ='https://docs.google.com/spreadsheets/d/18sp1A169OvJDYSt1g7LOZeVLE0d1-252NF-icuNtjxA/edit#gid=342744848'
          >
            Flash Analysis
          </Button>
          
        </Box></div>
        </div>
    )
}

export default Flash
