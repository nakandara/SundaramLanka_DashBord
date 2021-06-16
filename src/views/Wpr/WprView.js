import React,{useEffect, useReducer,useState,useContext} from 'react';
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {reportContext} from '../../context/ContextProvider'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Grid,CardHeader,IconButton,
  makeStyles,Paper,Card,InputLabel,NativeSelect,FormControl,Select
} from '@material-ui/core';
import Page from 'src/components/Page';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import './wpr.css'
import LineChart from './LineChart';
import Production from './Production'
import Quality from './Quality'
import Mixing from './Mixing';
import Eng from './Eng';
import Hr from './Hr';
import Bead from './Bead';
import { Line } from 'react-chartjs-2';
import LineChartOne from './LineChart';
import data from '../product/ProductListView/data';
import BarChart from './BarChart';
import moment from 'moment'
//import { Navigate } from 'react-router-dom';
//import{useHistory} from 'react-router-dom';
import './wpr.css'
import Ftr from './qualityAnalyis/Ftr';
import Flash from './qualityAnalyis/Flash';
import Ber from './qualityAnalyis/Ber';
import Hold from './qualityAnalyis/Hold';
import Reject from './qualityAnalyis/Reject';
import PieChartOne from './PieChartOne';
import Avatar from '@material-ui/core/Avatar';
import { green, red } from '@material-ui/core/colors'; 
import './backg.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    justify:'center',
    alignItems:"flex-start",
    marginLeft:0,
    minHeight:'100%',
   
   
  },card: {
   padding: theme.spacing(1),
    textAlign: 'center',
    color:theme.palette.text.secondary,
    alignItems:"center",
    justify:'center',
    marginTop: theme.spacing(4),
    height:'100%',
    marginRight: theme.spacing(4)
  },
  selectEmpty: {
    margin: theme.spacing(2),
  },avatar: {
    backgroundColor: green[500],
  },header:{
    height:1,
    margin:3,
    backgroundColor:''
  },headertable:{
    height:0,
    margin:0
  },cardtable: {
    padding: 0,
     textAlign: 'center',
     color:theme.palette.text.secondary,
     alignItems:"center",
     justify:'center',
     marginTop:0,
     marginRight: theme.spacing(4)
   },cardlinechart: {
    padding: theme.spacing(1),
     textAlign: 'center',
     color:theme.palette.text.secondary,
     alignItems:"center",
     justify:'center',
     marginTop: theme.spacing(4),
     backgroundColor:'rgb(255,255,255)', 
     
   },
   cardD: {
   
     textAlign: 'center',
     color:theme.palette.text.secondary,
     alignItems:"center",
     justify:'center',
     height:'100%',
   

     marginBottom:theme.spacing(25)
    
   }
}));

// const initialState = 'sandun'


// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return 'tharuka'

//       case 'decrement':
//       return 'senanyaka'
//       case 'reset':
//       return initialState
//     default:
//       return state;
//   }
// };



const RegisterView = () => {
  const {kpi,dispatch,dateOne,dateTwo,lineChartData,setLineChartData} =useContext(reportContext)

let z =kpi.firstKpi
  const classes = useStyles();

 
  return (
<div className='back'   
      style={{ backgroundImage: `url(./image/he.jpg)` }} 
    >
<Grid container  spacing={2} className={classes.root}>
<Grid item xs={12} md={4} >
  <Card className={classes.cardlinechart}>
  <CardHeader className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        
        title=""
        subheader="Last 3 Month Summary"
      />
    
    
    <BarChart/>  </Card> 
</Grid>




<Grid item  item xs={12} md={8}><Card className={classes.card}><CardHeader className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           L
          </Avatar>
        }
        
        title=""
        subheader={kpi.titleOne}
      /><LineChart/></Card></Grid>
















{/* <Grid item  item xs={12} md={4} >
  <Card className={classes.cardD}  style={{justifyItems:'center',alignItems:'center'}}>
    <CardHeader className={classes.header}
 
        title=""
        subheader={kpi.titleOne}/>
        
        
        <PieChartOne/></Card></Grid> */}


















<Grid item  item xs={12} md={12}><Card className={classes.cardtable}><CardHeader className={classes.headertable}
        title=""
        subheader=""
        style={{fontWeight:'900'}}
      />
      
      
      <div className="table-responsive">
    <table className="table">
  <tbody><tr>
  <th  >Date</th>
      {lineChartData.map((d)=>{ 
     return (<td >{
      moment(d.date).format('MMM D')
     }</td>)})}
      
    </tr>
    <tr>
      <th>Actual</th>
      {lineChartData.map((d)=>{ 
        if(z== 'flash'){return (<td>{d.flash}</td>)}
        if (z=='berlc'){return (<td>{d.berlc}</td>)}
        if(z== 'actual_weight'){ return (<td>{d.actual_weight}</td>)}
        if(z== 'plant_utilization'){ return (<td>{d.plant_utilization}</td>)}
        if(z== 'plan_adherence'){ return (<td>{d.plan_adherence}</td>)}
        if(z== 'productivity'){ return (<td>{d.productivity}</td>)}
        if(z== 'hold_compound'){ return (<td>{d.hold_compound}</td>)}
        if (z=='reject_compound'){return (<td>{d.reject_compound}</td>)}
        if(z== 'nm_dirty_tires'){ return (<td>{d.nm_dirty_tires}</td>)}
        
        if(z== 'compound_weight_actual'){ return (<td>{d.compound_weight_actual}</td>)}
        if (z=='mixing_break_down'){return (<td>{d.mixing_break_down}</td>)}
        if(z== 'mixing_productivity'){ return (<td>{d.mixing_productivity}</td>)}
        if(z== 'mixing_man_power'){ return (<td>{d.mixing_man_power}</td>)}
        if(z== 'mixing_energy'){ return (<td>{d.mixing_energy}</td>)}
        if(z== 'energy_cost_kg'){ return (<td>{d.energy_cost_kg}</td>)}
        if(z== 'energy_consumed'){ return (<td>{d.energy_consumed}</td>)}
        if (z=='break_down'){return (<td>{d.break_down}</td>)}
        if(z== 'firewood_cost_rate'){ return (<td>{d.firewood_cost_rate}</td>)}
        if (z=='oil'){return (<td>{d.oil}</td>)}
    
        if(z== 'pm_actual'){ return (<td>{d.pm_actual}</td>)}
        if (z=='absent_inform'){return (<td>{d.absent_inform}</td>)}
        if(z== 'absent_non_inform'){ return (<td>{d.absent_non_inform}</td>)}
        if(z== 'man_power'){ return (<td>{d.man_power}</td>)}
        if(z== 'late'){ return (<td>{d.late}</td>)}
        if(z== 'dot'){ return (<td>{d.dot}</td>)}
        if(z== 'reportable_accident'){ return (<td>{d.reportable_accident}</td>)}
        if (z=='near_miss'){return (<td>{d.near_miss}</td>)}
        if(z== 'kaizen'){ return (<td>{d.kaizen}</td>)}
        if (z=='training'){return (<td>{d.training}</td>)}
        if (z=='ftr'){return (<td>{d.ftr}</td>)}
    
        if(z== 'creel_bead_actual'){ return (<td>{d.creel_bead_actual}</td>)}
        if (z=='reject_bead'){return (<td>{d.reject_bead}</td>)}
        if(z== 'non_reportable_accident'){ return (<td>{d.non_reportable_accident}</td>)}
        if(z== 'bead_energy'){ return (<td>{d.bead_energy}</td>)}
        if(z== 'bead_breakdown'){ return (<td>{d.bead_breakdown}</td>)}
        if(z== 'bead_productivity_actual'){ return (<td>{d.bead_productivity_actual}</td>)}
        if(z== 'bead_manpower_actual'){ return (<td>{d.bead_manpower_actual}</td>)}
      })}
      
    </tr>
    <tr>
      <th>Plan</th>
     
      {lineChartData.map((d)=>{ 
        if(z== 'flash'){return (<td>{d.flash_plan}</td>)}
        if (z=='berlc'){return (<td>{d.berlc_plan}</td>)}
        if(z== 'actual_weight'){ return (<td>{d.plan_weight}</td>)}
        if(z== 'plant_utilization'){ return (<td>{d.plant_utilization_plan}</td>)}
        if(z== 'plan_adherence'){ return (<td>{d.plan_adherence_plan}</td>)}
        if(z== 'productivity'){ return (<td>{d.productivity_plan}</td>)}
        if(z== 'hold_compound'){ return (<td>{d.hold_compound_plan}</td>)}
        if (z=='reject_compound'){return (<td>{d.reject_compound_plan}</td>)}
        if(z== 'nm_dirty_tires'){ return (<td>{d.nm_dirty_tires_plan}</td>)}
        
        if(z== 'compound_weight_actual'){ return (<td>{d.compound_weight_plan}</td>)}
        if (z=='mixing_break_down'){return (<td>{d.mixing_break_down_plan}</td>)}
        if(z== 'mixing_productivity'){ return (<td>{d.mixing_productivity_plan}</td>)}
        if(z== 'mixing_man_power'){ return (<td>{d.mixing_man_power_plan}</td>)}
        if(z== 'mixing_energy'){ return (<td>{d.mixing_energy_plan}</td>)}
        if(z== 'energy_cost_kg'){ return (<td>{d.energy_cost_kg_plan}</td>)}
        if(z== 'energy_consumed'){ return (<td>{d.energy_consumed_plan}</td>)}
        if (z=='break_down'){return (<td>{d.break_down_plan}</td>)}
        if(z== 'firewood_cost_rate'){ return (<td>{d.firewood_cost_rate_plan}</td>)}
        if (z=='oil'){return (<td>{d.oil_plan}</td>)}
    
        if(z== 'pm_actual'){ return (<td>{d.pm_actual_plan}</td>)}
        if (z=='absent_inform'){return (<td>{d.absent_inform_plan}</td>)}
        if(z== 'absent_non_inform'){ return (<td>{d.absent_non_inform_plan}</td>)}
        if(z== 'man_power'){ return (<td>{d.man_power_plan}</td>)}
        if(z== 'late'){ return (<td>{d.late_plan}</td>)}
        if(z== 'dot'){ return (<td>{d.dot_plan}</td>)}
        if(z== 'reportable_accident'){ return (<td>{d.reportable_accident_plan}</td>)}
        if (z=='near_miss'){return (<td>{d.near_miss_plan}</td>)}
        if(z== 'kaizen'){ return (<td>{d.kaizen_plan}</td>)}
        if (z=='training'){return (<td>{d.training_plan}</td>)}
        if (z=='ftr'){return (<td>{d.ftr_plan}</td>)}
    
        if(z== 'creel_bead_actual'){ return (<td>{d.creel_bead_plan}</td>)}
        if (z=='reject_bead'){return (<td>{d.reject_bead_plan}</td>)}
        if(z== 'non_reportable_accident'){ return (<td>{d.non_reportable_accident_plan}</td>)}
        if(z== 'bead_energy'){ return (<td>{d.bead_energy_plan}</td>)}
        if(z== 'bead_breakdown'){ return (<td>{d.bead_breakdown_plan}</td>)}
        if(z== 'bead_productivity_actual'){ return (<td>{d.bead_productivity_plan}</td>)}
        if(z== 'bead_manpower_actual'){ return (<td>{d.bead_manpower_plan}</td>)}
      })}
      
    </tr>
    
    
    
  </tbody>
</table>
</div> 
      
      
      
      </Card></Grid>



</Grid>

<div className='extra'>

</div>

</div>
    

    
  );
};

export default RegisterView;






{/* <div className="table-responsive">
    <table className="table">
  <tbody><tr>
  <th  >Date</th>
      {lineChartData.map((d)=>{ 
     return (<td >{
      moment(d.date).format('MMM D')
     }</td>)})}
      
    </tr>
    <tr>
      <th>Actual</th>
      {lineChartData.map((d)=>{ 
        if(z== 'flash'){return (<td>{d.flash}</td>)}
        if (z=='berlc'){return (<td>{d.berlc}</td>)}
        if(z== 'actual_weight'){ return (<td>{d.actual_weight}</td>)}
        if(z== 'plant_utilization'){ return (<td>{d.plant_utilization}</td>)}
        if(z== 'plan_adherence'){ return (<td>{d.plan_adherence}</td>)}
        if(z== 'productivity'){ return (<td>{d.productivity}</td>)}
        if(z== 'hold_compound'){ return (<td>{d.hold_compound}</td>)}
        if (z=='reject_compound'){return (<td>{d.reject_compound}</td>)}
        if(z== 'nm_dirty_tires'){ return (<td>{d.nm_dirty_tires}</td>)}
        
        if(z== 'compound_weight_actual'){ return (<td>{d.compound_weight_actual}</td>)}
        if (z=='mixing_break_down'){return (<td>{d.mixing_break_down}</td>)}
        if(z== 'mixing_productivity'){ return (<td>{d.mixing_productivity}</td>)}
        if(z== 'mixing_man_power'){ return (<td>{d.mixing_man_power}</td>)}
        if(z== 'mixing_energy'){ return (<td>{d.mixing_energy}</td>)}
        if(z== 'energy_cost_kg'){ return (<td>{d.energy_cost_kg}</td>)}
        if(z== 'energy_consumed'){ return (<td>{d.energy_consumed}</td>)}
        if (z=='break_down'){return (<td>{d.break_down}</td>)}
        if(z== 'firewood_cost_rate'){ return (<td>{d.firewood_cost_rate}</td>)}
        if (z=='oil'){return (<td>{d.oil}</td>)}
    
        if(z== 'pm_actual'){ return (<td>{d.pm_actual}</td>)}
        if (z=='absent_inform'){return (<td>{d.absent_inform}</td>)}
        if(z== 'absent_non_inform'){ return (<td>{d.absent_non_inform}</td>)}
        if(z== 'man_power'){ return (<td>{d.man_power}</td>)}
        if(z== 'late'){ return (<td>{d.late}</td>)}
        if(z== 'dot'){ return (<td>{d.dot}</td>)}
        if(z== 'reportable_accident'){ return (<td>{d.reportable_accident}</td>)}
        if (z=='near_miss'){return (<td>{d.near_miss}</td>)}
        if(z== 'kaizen'){ return (<td>{d.kaizen}</td>)}
        if (z=='training'){return (<td>{d.training}</td>)}
        if (z=='ftr'){return (<td>{d.ftr}</td>)}
    
        if(z== 'creel_bead_actual'){ return (<td>{d.creel_bead_actual}</td>)}
        if (z=='reject_bead'){return (<td>{d.reject_bead}</td>)}
        if(z== 'non_reportable_accident'){ return (<td>{d.non_reportable_accident}</td>)}
        if(z== 'bead_energy'){ return (<td>{d.bead_energy}</td>)}
        if(z== 'bead_breakdown'){ return (<td>{d.bead_breakdown}</td>)}
        if(z== 'bead_productivity_actual'){ return (<td>{d.bead_productivity_actual}</td>)}
        if(z== 'bead_manpower_actual'){ return (<td>{d.bead_manpower_actual}</td>)}
      })}
      
    </tr>
    <tr>
      <th>Plan</th>
     
      {lineChartData.map((d)=>{ 
        if(z== 'flash'){return (<td>{d.flash_plan}</td>)}
        if (z=='berlc'){return (<td>{d.berlc_plan}</td>)}
        if(z== 'actual_weight'){ return (<td>{d.plan_weight}</td>)}
        if(z== 'plant_utilization'){ return (<td>{d.plant_utilization_plan}</td>)}
        if(z== 'plan_adherence'){ return (<td>{d.plan_adherence_plan}</td>)}
        if(z== 'productivity'){ return (<td>{d.productivity_plan}</td>)}
        if(z== 'hold_compound'){ return (<td>{d.hold_compound_plan}</td>)}
        if (z=='reject_compound'){return (<td>{d.reject_compound_plan}</td>)}
        if(z== 'nm_dirty_tires'){ return (<td>{d.nm_dirty_tires_plan}</td>)}
        
        if(z== 'compound_weight_actual'){ return (<td>{d.compound_weight_plan}</td>)}
        if (z=='mixing_break_down'){return (<td>{d.mixing_break_down_plan}</td>)}
        if(z== 'mixing_productivity'){ return (<td>{d.mixing_productivity_plan}</td>)}
        if(z== 'mixing_man_power'){ return (<td>{d.mixing_man_power_plan}</td>)}
        if(z== 'mixing_energy'){ return (<td>{d.mixing_energy_plan}</td>)}
        if(z== 'energy_cost_kg'){ return (<td>{d.energy_cost_kg_plan}</td>)}
        if(z== 'energy_consumed'){ return (<td>{d.energy_consumed_plan}</td>)}
        if (z=='break_down'){return (<td>{d.break_down_plan}</td>)}
        if(z== 'firewood_cost_rate'){ return (<td>{d.firewood_cost_rate_plan}</td>)}
        if (z=='oil'){return (<td>{d.oil_plan}</td>)}
    
        if(z== 'pm_actual'){ return (<td>{d.pm_actual_plan}</td>)}
        if (z=='absent_inform'){return (<td>{d.absent_inform_plan}</td>)}
        if(z== 'absent_non_inform'){ return (<td>{d.absent_non_inform_plan}</td>)}
        if(z== 'man_power'){ return (<td>{d.man_power_plan}</td>)}
        if(z== 'late'){ return (<td>{d.late_plan}</td>)}
        if(z== 'dot'){ return (<td>{d.dot_plan}</td>)}
        if(z== 'reportable_accident'){ return (<td>{d.reportable_accident_plan}</td>)}
        if (z=='near_miss'){return (<td>{d.near_miss_plan}</td>)}
        if(z== 'kaizen'){ return (<td>{d.kaizen_plan}</td>)}
        if (z=='training'){return (<td>{d.training_plan}</td>)}
        if (z=='ftr'){return (<td>{d.ftr_plan}</td>)}
    
        if(z== 'creel_bead_actual'){ return (<td>{d.creel_bead_plan}</td>)}
        if (z=='reject_bead'){return (<td>{d.reject_bead_plan}</td>)}
        if(z== 'non_reportable_accident'){ return (<td>{d.non_reportable_accident_plan}</td>)}
        if(z== 'bead_energy'){ return (<td>{d.bead_energy_plan}</td>)}
        if(z== 'bead_breakdown'){ return (<td>{d.bead_breakdown_plan}</td>)}
        if(z== 'bead_productivity_actual'){ return (<td>{d.bead_productivity_plan}</td>)}
        if(z== 'bead_manpower_actual'){ return (<td>{d.bead_manpower_plan}</td>)}
      })}
      
    </tr>
    
    
    
  </tbody>
</table>
</div> */}
