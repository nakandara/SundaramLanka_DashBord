import React from 'react'
import {  useNavigate} from 'react-router-dom';
import {
    Box,
    Button,
    
  } from '@material-ui/core';
  import '../wpr.css'

const EngA = () => {

  const navigate = useNavigate();

  const handleRccm =(e)=>{
    // console.log('ok');
    e.preventDefault();
     navigate('/analysis')
    
    }
    




    return (
        <div>
           <div className='rccftr'><Box
          display="flex"
          justifyContent=""
          mt={2}
        >
          <Button
          color="primary"
          component="a"
          onClick={handleRccm}
          variant="contained"
          >
            Eng Analysis
          </Button>
          
        </Box></div>
        </div>
    )
}

export default EngA