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
    makeStyles,Paper,InputLabel,NativeSelect,
    FormControl,Select,ButtonGroup
  } from '@material-ui/core';
  import '../wpr.css'

const Ftr = () => {
    return (
        <div>
            <div className='rccftr'><Box
          display="grid"
          justifyContent=""
          mt={4}
        >
          <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
           <Button
          className='ftrbutton'
            // color="default"
            // onClick={handleRccm}
            variant="contained"
            href ='https://docs.google.com/presentation/d/15EteeIdUWkW59RKjQhEitJq-fymwSRg7J70FJxx1DAA/edit#slide=id.p1'
          >
            Thick Flash
          </Button>
          <Button
          className='ftrbutton'
            // color="default"
            // onClick={handleRccm}
            variant="contained"
            href ='https://docs.google.com/presentation/d/10YxdASGbVRRWLZUPAIzXDm2UVe78Jn4tsLT54RTQ45E/edit#slide=id.p1'
          >
            Bead Out
          </Button>
          <Button
          className='ftrbutton'
            // color="default"
            // onClick={handleRccm}
            variant="contained"
            href ='https://docs.google.com/presentation/d/1ELv-GRNjQuSSNQHZUEHE7uc2uTC78CK357_KDgHl4Oc/edit#slide=id.p1'
          >
           Lug Damage
          </Button>
          <Button
          className='ftrbutton'
            // color="default"
            // onClick={handleRccm}
            variant="contained"
            href ='https://docs.google.com/presentation/d/1IZFrSsksLjN4c1GvBXAAHBoGOGB175PsCSxf_QRIAiU/edit#slide=id.p1'
          >
            NM Dirty
          </Button>
          <Button
          className='ftrbutton'
            // color="default"
            // onClick={handleRccm}
            variant="contained"
            href ='https://docs.google.com/presentation/d/1yOZBn58f-3Cnox3of6AB_M11BokGkJGVCrq7RZgHNBg/edit#slide=id.p1'
          >
           Spew
          </Button>
          </ButtonGroup>
        </Box></div>
        </div>
    )
}

export default Ftr
