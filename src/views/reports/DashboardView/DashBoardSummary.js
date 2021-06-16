import React,{useState,useContext,useEffect} from 'react';
import {
  Container,
  Grid,Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';
import ProductionDash from 'src/views/Production/ProductionDash';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MainControler from '../MainControler.js/MainControler';
import api from '../../../api/apiThree'
import {reportContext} from '../../../context/ContextProvider'
import apiThree from '../../../api/apiThree';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom'
import './prs.css'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = ({className,...rest}) => {
  const classes = useStyles();
 // let history = useHistory();
//console.log({useHistory});

const productionClick =()=>{

 // history.push(`/home`)

}


///////////////////////////////////

const {productionDashData,setProductionDashData,ddate,setMfgData,qualityDashData,setQualityDashData} =useContext(reportContext)

var newd =  new Date(ddate);
let monthNumber = newd.getMonth() + 1;                                       
let yearNumber = newd.getFullYear() ;
let dateNumber = newd.getDate();

var parmDate =yearNumber +'-'+monthNumber +'-'+ dateNumber



// Add a day


// const a =[{total:'0'},{value:'7'}]


// console.log(a[1].value);

const pa ='plan_adherence'

const pb ='production_data'
//////////////////////////////
const qa ='berlc'

const qb ='quality_data'

const fetchData = async () => {

  try {
    const response = await apiThree.get(`/dashboard/${pa}/${pb}/${parmDate}`);

    setProductionDashData(response.data.data.data.plan_adherence);



    const responseTwo = await apiThree.get(`/dashboard/${qa}/${qb}/${parmDate}`);

    setQualityDashData(responseTwo.data.data.data.berlc);
 
      
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  fetchData();
}, [parmDate,productionDashData,qualityDashData]);

//console.log(productionDashData);


////////////////////////////////////////


let one = productionDashData >= 90

let two =qualityDashData <=0.03








console.log(qualityDashData);

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}
              direction="row"
           justify="space-around"
           alignItems="center">
        <Grid
          container
          spacing={3}
          
        >
         
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
            {/* <ProductionDash foot=''  division='Production' onClick={productionClick} endIcon={<Link to='/app/productiondashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData} kpid={'Adehernce'} kpidt={'Target'} />  */}
            <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Production'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/productiondashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5> Adherence<span class="badge badge-secondary align-text-center ml-3"  style={one?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}} >{productionDashData}%</span></h5>
             <h5> Plan<span class="badge badge-secondary mt-3 bg-primary"  style={{marginLeft:'75px'}}>90%</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
  
          </Grid>
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
             
             <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Quality'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/qualitydashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5> BER<span class="badge badge-secondary align-text-center "  style={two?{backgroundColor:"green",fontWeight:900,color:'white',marginLeft:'55px'}:{backgroundColor:"red",fontWeight:900,color:'white',marginLeft:'55px'}} >{qualityDashData}%</span></h5>
             <h5> Plan<span class="badge badge-secondary mt-3 ml-5 bg-primary">0.03%</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
          </Grid>
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
           



           <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Mixing'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/mixingdashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5>  Adherence<span class="badge badge-secondary align-text-center ml-2">New</span></h5>
             <h5> Target<span class="badge badge-secondary mt-3 ml-5 bg-primary">90%</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
          </Grid>
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
            {/* <ProductionDash  foot=''  division='Engineering' endIcon={<Link to='/app/engdashboard'><ArrowRightIcon/></Link>}/> */}



             <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Engineering'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/engdashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5>BreakDown <span class="badge badge-secondary align-text-center ml-2">New</span></h5>
             <h5> Target <span class="badge badge-secondary mt-3 bg-primary" style={{marginLeft:'55px'}}>6.6</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card> 
          </Grid>
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
           


           <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Bead'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/beaddashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5>Adherence<span class="badge badge-secondary align-text-center "  style={{marginLeft:'12px'}}>New</span></h5>
             <h5> Target <span class="badge badge-secondary mt-3 ml-5 bg-primary">90%</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
          </Grid> 
           <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
            {/* <ProductionDash  foot=''  division='HR'  endIcon={<Link to='/app/hrdashboard'><ArrowRightIcon/></Link>}/>  */}


            <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='HR'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/hrdashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5> Absent<span class="badge badge-secondary align-text-center "  style={{marginLeft:'42px'}}>New</span></h5>
             <h5> Target<span class="badge badge-secondary mt-3 ml-5 bg-primary">0</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
          </Grid>
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
            >
          
          {/* <ProductionDash  foot=''  division='Safety'  endIcon={<Link to='/app/safetydashboard'><ArrowRightIcon/></Link>}/>  */}


<Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Safety'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/safetydashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5> Accident<span class="badge badge-secondary align-text-center ml-4" style={{marginLeft:'42px'}}>New</span></h5>
             <h5> Target<span class="badge badge-secondary mt-3 ml-5 bg-primary">0</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
            
          </Grid>
          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
            


            <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Mold'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/molddashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5> Breakdown <span class="badge badge-secondary align-text-center ml-2">New</span></h5>
             <h5> Target<span class="badge badge-secondary mt-3 bg-primary"  style={{marginLeft:'60px'}}>6.6</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card>
            
          </Grid>

          <Grid
            item
            lg={3}
            sm={4}
            md={3}
            xl={3}
            xs={12}
          >
           {/* <ProductionDash  foot=''  division='Planning' endIcon={<Link to='/app/planningdashboard'><ArrowRightIcon/></Link>}/>  */}


            <Card
        className={clsx( className)} 
        {...rest}
      >
        <CardHeader
          title='Planning'
          action ={(<Button   endIcon ={<ArrowRightIcon/>}  size='small' 
          variant='text'
          onClick={productionClick} endIcon={<Link to='/app/planningdashboard'><ArrowRightIcon/></Link>} valueDash={productionDashData}
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
            
             {/* <MainControler valueDash={valueDash}/> */}

             <h5> <span class="badge badge-secondary align-text-center ml-5 bg-primary">New</span></h5>
             <h5> <span class="badge badge-secondary mt-3 ml-5 bg-primary">New</span></h5>



          </Box>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          p={2}
        >
        
        </Box>
      </Card> 
          </Grid> 
           {/* <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <ProductionDash/> 
          </Grid> */}
          {/* <Grid
            item
            lg={3}
            md={12}
            xl={9}
            xs={12}
          ><ProductionDash/> 
            
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <ProductionDash/> 
            
          </Grid>
           */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
