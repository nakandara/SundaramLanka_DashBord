import React,{useContext,useEffect} from 'react';
import api from '../../../src/api/api'
import {reportContext} from '../../context/ContextProvider'
import clsx from 'clsx';
import {
  
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  LinearProgress
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './pie.css'
import MainControler from '../reports/MainControler.js/MainControler';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    
backgroundColor:'white'
    
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));


  







const PieChartOne =({ className, ...rest })=>{



  const classes = useStyles();


  const {kpi,dateOne,dateTwo,pieChartData,setPieChartData,pieChartDataTwo,setPieChartDataTwo} =useContext(reportContext)
   
  //console.log(dateOne);
  //console.log(dateTwo);
  ////////////////////////////////
  var newd =  new Date(dateOne);
      let monthNumber = newd.getMonth() + 1;                                       
      let yearNumber = newd.getFullYear() ;
      let dateNumber = newd.getDate();
  
      var paramDateOne =yearNumber +'-'+monthNumber +'-'+ dateNumber;
      ///////////////////////////////////////////////////////
  
      var newdTwo =  new Date(dateTwo);
      let monthNumberTwo = newdTwo.getMonth() + 1;                                       
      let yearNumberTwo = newdTwo.getFullYear() ;
      let dateNumberTwo = newdTwo.getDate();
  
      var paramDateTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo;
  
  
      const fetchData = async () => {
        try {
          const response = await api.get(`/reporting/piechart/${kpi.condition}/${kpi.firstKpi}/${kpi.division}/${paramDateOne}/${paramDateTwo}`);
          //console.log(response);
          setPieChartData(response.data.data.data)
        // console.log(response.data.data.mfg);

         //const responseTwo = await apiTwo.get(`/v2/${kpi.secondKpi}/${paramDateOne}/${paramDateTwo}`);
      
         //console.log(responseTwo.data.data.mfg);

         const responseTwo = await api.get(`/reporting/piechart/${kpi.condition}/${kpi.secondKpi}/${kpi.division}/${paramDateOne}/${paramDateTwo}`);
         //console.log(response);
         setPieChartDataTwo(responseTwo.data.data.data)

        }
          catch(err){
              console.log(err);
          }
    
        }


        //////////////////
const dataOne = pieChartData
const dataTwo = pieChartDataTwo
        
        
const dataThree =(dataOne[0]?.total/dataTwo[0]?.total)
const data = dataThree && dataThree.toFixed(2)
console.log(data);
    useEffect(()=>{
        fetchData()
    },[kpi.firstKpi,paramDateOne,paramDateTwo])
  
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
              
              variant="h3"
             
            >
             {dataOne[0]?.total}
            </Typography>
            
          </Grid>
          <Box minHeight={40}
          bgcolor='grey'
          mr={8}
          >
           
            <MainControler  valueDash={data}/>
            
          </Box>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            
          </Typography>
         
        </Box>
        <Box mt={3}>
         <LinearProgress
            value={dataOne[0]?.total}
             variant="determinate"
          /> 
        </Box>
      </CardContent>
    </Card>
      
      
    );
  }

export default PieChartOne



{/* <Card
      className={clsx(classes.root)}
      
    >
      <CardHeader title={data.total}
      margin={0}/>
      <CardContent>
        <Grid
        container
        direction="row"
        alignItems="center"
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
               {data[0]?.total}
            </Typography></Grid>
            <Grid>
            
             <MainControler valueDash={data[0]?.total}/>
           
          </Grid>
          
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since {paramDateOne}
          </Typography>
        </Box>
      </CardContent>
    </Card> */}