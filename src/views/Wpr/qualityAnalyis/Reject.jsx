import React from 'react'
import {
    Box,
    Button
  } from '@material-ui/core';
  import '../wpr.css'

const Reject = () => {
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
            Reject Analysis
          </Button>
        </Box></div>
        </div>
    )
}

export default Reject
