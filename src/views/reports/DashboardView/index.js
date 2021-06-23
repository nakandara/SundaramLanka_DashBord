import React, { useEffect, useContext } from "react";
import {  useNavigate } from 'react-router-dom';
import { makeStyles,Container, Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {reportContext} from '../../../context/ContextProvider'
import apiThree from '../../../api/apiThree';

import  './dash.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




const useStyles = makeStyles(theme=>({
  root: {
    margin:theme.spacing(3),
    marginLeft:theme.spacing(8),
    
  },MuiCardContentRoot:{

    color:'red',
    padding:0

  },

  MuiCardHeaderRoot:{
    margin:theme.spacing(1),
    backgroundColor:'#3f51b5',
    fontWeight:'900',
    display:'flex',
    justifyItems:'center',
    alignItems:'center',
    textAlign:'center',
    color:'white',
    

  },
  
  

}));




const Dashboard = () => {
 
  const {ddate,productionDashActual,setProductionDashActual,productionDashPlan,setProductionDashPlan,productionDashAdherence,setProductionDashAdherence,productionDashUtilization,setProductionDashUtilization,productionDashProductivity,setProductionDashProductivity,
    qualityDashFtr,setQualityDashFtr,qualityDashBerlc,setQualityDashBerlc,qualityDashB,setQualityDashB,qualityDashE,setQualityDashE,qualityR,setQualityR,qualityL,setQualityL,qualityC,setQualityC,qualityDashFlash,setQualityDashFlash,qualityDashRejectCompound,setQualityDashRejectCompound,qualityDashHold,setQualityDashHold,
    mixingDashTonnage,setMixingDashTonnage,mixingDashTonnagePlan,setMixingDashTonnagePlan,mixingDashProductivity,setMixingDashProductivity,mixingDashBreakDown,setMixingDashBreakDown,mixingDashEnergy,setMixingDashEnergy,beadDashEnergy,setBeadDashEnergy,
    beadDashBead,setBeadDashBead,beadDashBeadPlan,setBeadDashBeadPlan,beadDashRejectBead,setBeadDashRejectBead,beadDashBreakDown,setBeadDashBreakDown,
    hrDashNearMiss,setHRDashNearMis,hrDashKaizen,setHRDashKaizen,hrDashNRC,setHRDashNRC,hrDashRA,setHRDashRA,hrDashdOT,setHRDashDot,hrDashAI,setHRDashAI,hrDashANI,setHRDashANI,
    engDashBreakDown,setENGDashBreakDown,engDashFuelRate,setENGDashFuelRate,engDashFuelConsumption,setENGDashFuelConsumption,engDashEnergyCostRate,setENGDashEnergyCostRate,engDashPowerConsumption,setENGDashPowerConsumption,qualityDashNM,setQualityDashNM,setHRDashManpower,hrDashManpower,kpi,dispatch} =useContext(reportContext)


  const classes = useStyles();

  const navigate = useNavigate();


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

////////production////////////
  const pda ='actual_weight'
  const pdpl ='plan_weight'

  const pdadherence='plan_adherence'

  const pdu ='plant_utilization'

  const pdp ='productivity'


  //////////quality

const qdflash ='flash'

const qdftr ='ftr'

const qdb ='b'

const qde ='ea'

const qdr ='r'

const qdl ='l'

const qdc ='c'

const qdnm  ='nm_dirty_tires'

const qdberlc ='berlc'

  //////////mixing

  const mb ='mixing_data'

  const mdwa = 'compound_weight_actual'

  const mdwp = 'compound_weight_plan'

  const mdbd  ='mixing_break_down'

  const mdp = 'mixing_productivity'

  const mdm ='mixing_man_power'

  const mde ='mixing_energy'



  /////////eng


  const eb ='eng_data'

const edeck ='energy_cost_kg'

const edec = 'energy_consumed'

const edb = 'break_down'

const edfcr ='firewood_cost_rate'

const edoil ='oil'

const edpm  ='pm'






  //////////////hr

  const hb ='hr_data'

  const hdai ='absent_inform'

  const hdani ='absent_non_inform'

  const hddot ='dot'

  const hdra ='reportable_accident'

  const hdnm ='near_miss'

  const hdk  ='kaizen'

  const hdt ='training'

  const hdnra='non_reportable_accident'

  const hdm ='man_power'

  /////////////bead

  const bb ='bead_data'

  const bdcba= 'creel_bead_actual'
  const bdcbp= 'creel_bead_plan'

  const bdrb = 'reject_bead'

  const bde ='bead_energy'

  const bdbd = 'bead_breakdown'

  const bdbp  ='bead_productivity_actual'

  const bmpa ='bead_manpower_actual'


  /////////////hold

  const hob = 'hold_data'

  const hdhc = 'hold_compound'

  const hdrc =' reject_compound'




  



















  
  const fetchData = async () => {
  
    try {
      
  



      /////////////////////////////

      const responsePone = await apiThree.get(`/dashboard/${pda}/${pb}/${parmDate}`);
  
      setProductionDashActual(responsePone.data.data.data.actual_weight);


      const responsePtwo = await apiThree.get(`/dashboard/${pdpl}/${pb}/${parmDate}`);
  
      setProductionDashPlan(responsePtwo.data.data.data.plan_weight);


      const responsePthree = await apiThree.get(`/dashboard/${pdadherence}/${pb}/${parmDate}`);
         setProductionDashAdherence(responsePthree.data.data.data.plan_adherence);


      const responsePfour = await apiThree.get(`/dashboard/${pdu}/${pb}/${parmDate}`);
  
      setProductionDashUtilization(responsePfour.data.data.data.plant_utilization)


      const responsePfive = await apiThree.get(`/dashboard/${pdp}/${pb}/${parmDate}`);
  
       setProductionDashProductivity(responsePfive.data.data.data.productivity)



//       ///////////////////////////////////////////////////Qulaity


//       const responseQone = await apiThree.get(`/dashboard/${qdflash}/${qb}/${parmDate}`);
  
//       setQualityDashFlash(responseQone.data.data.data.flash);


//       const responseQtwo = await apiThree.get(`/dashboard/${qdftr}/${qb}/${parmDate}`);
  
//        setQualityDashFtr(responseQtwo.data.data.data.ftr)


//        const responseQthree = await apiThree.get(`/dashboard/${qdb}/${qb}/${parmDate}`);
  
//        setQualityDashB(responseQthree.data.data.data.b)


//       const responseQfour = await apiThree.get(`/dashboard/${qde}/${qb}/${parmDate}`);
  
//       setQualityDashE(responseQfour.data.data.data.ea)


//      const responseQfive = await apiThree.get(`/dashboard/${qdr}/${qb}/${parmDate}`);
  
//        setQualityR(responseQfive.data.data.data.r)

//        const responseQsix = await apiThree.get(`/dashboard/${qdl}/${qb}/${parmDate}`);
  
//        setQualityL(responseQsix.data.data.data.l)


//        const responseQseven = await apiThree.get(`/dashboard/${qdc}/${qb}/${parmDate}`);
  
//      setQualityC(responseQseven.data.data.data.c)


//       const responseQeight = await apiThree.get(`/dashboard/${qdnm}/${qb}/${parmDate}`);
  
//       setQualityDashNM(responseQeight.data.data.data.nm_dirty_tires)


//        const responseQnine = await apiThree.get(`/dashboard/${qdberlc}/${qb}/${parmDate}`);
  
//       setQualityDashBerlc(responseQnine.data.data.data.berlc)



// // //////Mixing////////////////
//  const responseMone = await apiThree.get(`/dashboard/${mdwa}/${mb}/${parmDate}`);
  
//        setMixingDashTonnage(responseMone.data.data.data.compound_weight_actual)


//       const responseMtwo = await apiThree.get(`/dashboard/${mdwp}/${mb}/${parmDate}`);
  
//       setMixingDashTonnagePlan(responseMtwo.data.data.data.compound_weight_plan)


//       const responseMthree = await apiThree.get(`/dashboard/${mdbd}/${mb}/${parmDate}`);
  
//      setMixingDashBreakDown(responseMthree.data.data.data.mixing_break_down)

//       const responseMfour = await apiThree.get(`/dashboard/${mdp}/${mb}/${parmDate}`);
  
//        setMixingDashProductivity(responseMfour.data.data.data.mixing_productivity)


//        const responseMfive = await apiThree.get(`/dashboard/${mde}/${mb}/${parmDate}`);
  
//        setMixingDashEnergy(responseMfive.data.data.data.mixing_energy)


// // /////////////////////////////eng///////////////////


//  const responseEone = await apiThree.get(`/dashboard/${edeck}/${eb}/${parmDate}`);
  
//        setENGDashEnergyCostRate(responseEone.data.data.data.energy_cost_kg)


//        const responseEtwo= await apiThree.get(`/dashboard/${edec}/${eb}/${parmDate}`);
  
//        setENGDashPowerConsumption(responseEtwo.data.data.data.energy_consumed)

//        const responseEthree = await apiThree.get(`/dashboard/${edb}/${eb}/${parmDate}`);
  
//        setENGDashBreakDown(responseEthree.data.data.data.break_down)


//        const responseEfive = await apiThree.get(`/dashboard/${edfcr}/${eb}/${parmDate}`);
  
//       setENGDashFuelRate(responseEfive.data.data.data.firewood_cost_rate)

     
// console.log(engDashFuelRate);
// //       ///////////////////////////////hr


//        const responseHone = await apiThree.get(`/dashboard/${hdai}/${hb}/${parmDate}`);
  
//        setHRDashAI(responseHone.data.data.data.absent_inform)


//        const responseHtwo = await apiThree.get(`/dashboard/${hdani}/${hb}/${parmDate}`);
  
//       setHRDashANI(responseHtwo.data.data.data.absent_non_inform)



//        const responseHthree = await apiThree.get(`/dashboard/${hddot}/${hb}/${parmDate}`);
  
//        setHRDashDot(responseHthree.data.data.data.dot)


//        const responseHfour = await apiThree.get(`/dashboard/${hdra}/${hb}/${parmDate}`);
  
//        setHRDashRA(responseHfour.data.data.data.reportable_accident)


//        const responseHfive = await apiThree.get(`/dashboard/${hdnra}/${hb}/${parmDate}`);
  
//        setHRDashNRC(responseHfive.data.data.data.non_reportable_accident)



//        const responseHsix = await apiThree.get(`/dashboard/${hdnm}/${hb}/${parmDate}`);
  
//        setHRDashNearMis(responseHsix.data.data.data.near_miss)


//       const responseHseven = await apiThree.get(`/dashboard/${hdk}/${hb}/${parmDate}`);
  
//       setHRDashKaizen(responseHseven.data.data.data.kaizen)

//       const responseHeight = await apiThree.get(`/dashboard/${hdm}/${hb}/${parmDate}`);
  
//       setHRDashManpower(responseHeight.data.data.data.man_power)

// //       /////////////////////BEAD


//       const responseBone = await apiThree.get(`/dashboard/${bdcba}/${bb}/${parmDate}`);
  
//       setBeadDashBead(responseBone.data.data.data.creel_bead_actual)


//        const responseBtwo = await apiThree.get(`/dashboard/${bdcbp}/${bb}/${parmDate}`);
  
//       setBeadDashBeadPlan(responseBtwo.data.data.data.creel_bead_plan)

//        const responseBthree= await apiThree.get(`/dashboard/${bdrb}/${bb}/${parmDate}`);
  
//       setBeadDashRejectBead(responseBthree.data.data.data.reject_bead)

//        const responseBfour= await apiThree.get(`/dashboard/${bdbd}/${bb}/${parmDate}`);
  
//        setBeadDashBreakDown(responseBfour.data.data.data.bead_breakdown)

      
// //       /////////////////HOLD///////////


//        const responseHoone= await apiThree.get(`/dashboard/${hdhc}/${hob}/${parmDate}`);
  
//        setQualityDashHold(responseHoone.data.data.data.hold_compound)

//        const responseHotwo= await apiThree.get(`/dashboard/${hdrc}/${hob}/${parmDate}`);
  
//        setQualityDashRejectCompound(responseHotwo.data.data.data.reject_compound)


// console.log(responseHone);
   
        
    } catch (err) {
      console.log(err);
    }
  };





  const fetchDataQuality = async () => {
  
    try {



//       ///////////////////////////////////////////////////Qulaity


      const responseQone = await apiThree.get(`/dashboard/${qdflash}/${qb}/${parmDate}`);
  
      setQualityDashFlash(responseQone.data.data.data.flash);


      const responseQtwo = await apiThree.get(`/dashboard/${qdftr}/${qb}/${parmDate}`);
  
       setQualityDashFtr(responseQtwo.data.data.data.ftr)

       const responseQnine = await apiThree.get(`/dashboard/${qdberlc}/${qb}/${parmDate}`);
  
       setQualityDashBerlc(responseQnine.data.data.data.berlc)


       const responseQthree = await apiThree.get(`/dashboard/${qdb}/${qb}/${parmDate}`);
  
       setQualityDashB(responseQthree.data.data.data.b)


      const responseQfour = await apiThree.get(`/dashboard/${qde}/${qb}/${parmDate}`);
  
      setQualityDashE(responseQfour.data.data.data.ea)


     const responseQfive = await apiThree.get(`/dashboard/${qdr}/${qb}/${parmDate}`);
  
       setQualityR(responseQfive.data.data.data.r)

       const responseQsix = await apiThree.get(`/dashboard/${qdl}/${qb}/${parmDate}`);
  
       setQualityL(responseQsix.data.data.data.l)


       const responseQseven = await apiThree.get(`/dashboard/${qdc}/${qb}/${parmDate}`);
  
     setQualityC(responseQseven.data.data.data.c)


      const responseQeight = await apiThree.get(`/dashboard/${qdnm}/${qb}/${parmDate}`);
  
      setQualityDashNM(responseQeight.data.data.data.nm_dirty_tires)


     


   
        
    } catch (err) {
      console.log(err);
    }
  };






  const fetchDataMixing = async () => {
  
    try {
      
  



// //////Mixing////////////////
 const responseMone = await apiThree.get(`/dashboard/${mdwa}/${mb}/${parmDate}`);
  
       setMixingDashTonnage(responseMone.data.data.data.compound_weight_actual)


      const responseMtwo = await apiThree.get(`/dashboard/${mdwp}/${mb}/${parmDate}`);
  
      setMixingDashTonnagePlan(responseMtwo.data.data.data.compound_weight_plan)


      const responseMthree = await apiThree.get(`/dashboard/${mdbd}/${mb}/${parmDate}`);
  
     setMixingDashBreakDown(responseMthree.data.data.data.mixing_break_down)

      const responseMfour = await apiThree.get(`/dashboard/${mdp}/${mb}/${parmDate}`);
  
       setMixingDashProductivity(responseMfour.data.data.data.mixing_productivity)


       const responseMfive = await apiThree.get(`/dashboard/${mde}/${mb}/${parmDate}`);
  
       setMixingDashEnergy(responseMfive.data.data.data.mixing_energy)



   
        
    } catch (err) {
      console.log(err);
    }
  };






  const fetchDataEng = async () => {
  
    try {

// /////////////////////////////eng///////////////////


 const responseEone = await apiThree.get(`/dashboard/${edeck}/${eb}/${parmDate}`);
  
       setENGDashEnergyCostRate(responseEone.data.data.data.energy_cost_kg)


       const responseEtwo= await apiThree.get(`/dashboard/${edec}/${eb}/${parmDate}`);
  
       setENGDashPowerConsumption(responseEtwo.data.data.data.energy_consumed)

       const responseEthree = await apiThree.get(`/dashboard/${edb}/${eb}/${parmDate}`);
  
       setENGDashBreakDown(responseEthree.data.data.data.break_down)


       const responseEfive = await apiThree.get(`/dashboard/${edfcr}/${eb}/${parmDate}`);
  
      setENGDashFuelRate(responseEfive.data.data.data.firewood_cost_rate)

        
    } catch (err) {
      console.log(err);
    }
  };


  const fetchDataHold = async () => {
  
    try {

      
//       /////////////////HOLD///////////


       const responseHoone= await apiThree.get(`/dashboard/${hdhc}/${hob}/${parmDate}`);
  
       setQualityDashHold(responseHoone.data.data.data.hold_compound)

       const responseHotwo= await apiThree.get(`/dashboard/${hdrc}/${hob}/${parmDate}`);
  
       setQualityDashRejectCompound(responseHotwo.data.data.data.reject_compound)

console.log(qualityDashHold);

   
        
    } catch (err) {
      console.log(err);
    }
  };











  const fetchDataBead = async () => {
  
    try {
      
  



   

//       /////////////////////BEAD


      const responseBone = await apiThree.get(`/dashboard/${bdcba}/${bb}/${parmDate}`);
  
      setBeadDashBead(responseBone.data.data.data.creel_bead_actual)


       const responseBtwo = await apiThree.get(`/dashboard/${bdcbp}/${bb}/${parmDate}`);
  
      setBeadDashBeadPlan(responseBtwo.data.data.data.creel_bead_plan)

       const responseBthree= await apiThree.get(`/dashboard/${bdrb}/${bb}/${parmDate}`);
  
      setBeadDashRejectBead(responseBthree.data.data.data.reject_bead)

       const responseBfour= await apiThree.get(`/dashboard/${bdbd}/${bb}/${parmDate}`);
  
       setBeadDashBreakDown(responseBfour.data.data.data.bead_breakdown)

      




   
        
    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataHr = async () => {
  
    try {
    
//       ///////////////////////////////hr


       const responseHone = await apiThree.get(`/dashboard/${hdai}/${hb}/${parmDate}`);
  
       setHRDashAI(responseHone.data.data.data.absent_inform)


       const responseHtwo = await apiThree.get(`/dashboard/${hdani}/${hb}/${parmDate}`);
  
      setHRDashANI(responseHtwo.data.data.data.absent_non_inform)



       const responseHthree = await apiThree.get(`/dashboard/${hddot}/${hb}/${parmDate}`);
  
       setHRDashDot(responseHthree.data.data.data.dot)


       const responseHfour = await apiThree.get(`/dashboard/${hdra}/${hb}/${parmDate}`);
  
       setHRDashRA(responseHfour.data.data.data.reportable_accident)


       const responseHfive = await apiThree.get(`/dashboard/${hdnra}/${hb}/${parmDate}`);
  
       setHRDashNRC(responseHfive.data.data.data.non_reportable_accident)



       const responseHsix = await apiThree.get(`/dashboard/${hdnm}/${hb}/${parmDate}`);
  
       setHRDashNearMis(responseHsix.data.data.data.near_miss)


      const responseHseven = await apiThree.get(`/dashboard/${hdk}/${hb}/${parmDate}`);
  
      setHRDashKaizen(responseHseven.data.data.data.kaizen)

      const responseHeight = await apiThree.get(`/dashboard/${hdm}/${hb}/${parmDate}`);
  
      setHRDashManpower(responseHeight.data.data.data.man_power)

        console.log(responseHeight.data.data.data);



   
        
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    fetchData();
    fetchDataQuality();
    fetchDataMixing();
    fetchDataEng();
    fetchDataBead();
    fetchDataHr();
    fetchDataHold();
  }, [parmDate,pda,pdp,pdadherence,qdflash,mdwa,edeck,hdm,bdcba,hdhc]);
  
  //console.log(productionDashData);
  let one = productionDashActual >= productionDashPlan
  let two = productionDashAdherence >= 90
  let three = productionDashUtilization >= 90
  let four = qualityDashFtr >= 90 
  let five = qualityDashBerlc >= 0.03 
  let six = qualityDashB >= 0.015 
  let seven = qualityDashE >= 0.03 
  //let eight = qualityDashR >= 0.03 
  //let nine = qualityDash >= 0.03 
  //let ten= qualityDashBerlc >= 0.03 
  let eleven = qualityDashFlash >= 1.2 
  let twelve = qualityDashHold >= 0
  let thirteen = qualityDashRejectCompound >= 0

  let fourteen = mixingDashTonnage >= mixingDashTonnagePlan
  let fifteen = mixingDashProductivity >= 0
  let sixteen = mixingDashBreakDown > 0

  let seventeen = engDashBreakDown >= 6.67
  let eighteen  = engDashFuelRate >= 6.3
  let nineteen  = engDashFuelConsumption >= 950
  let twenty    = engDashEnergyCostRate >= 5.5
  let twentyone = engDashPowerConsumption >= 380

  let twentytwo = hrDashNearMiss >= 1
  let twentythree = hrDashKaizen >= 1
  let twentyfour = hrDashNRC > 0
  let twentyfive = hrDashRA > 0
  let twentysix = hrDashdOT > 0
  let twentyseven = hrDashAI > 0
  let twentyeight = hrDashANI > 0
  let twentynine = hrDashManpower > 45

  let thirty = beadDashBead >= beadDashBeadPlan
  let thirtyone = beadDashRejectBead>= 0
  //let thirtytwo = beadDashr >= 1
  let thirtythree = beadDashEnergy >= 0
  let thirtyfour = beadDashBreakDown >= 0
  //let thirtyfive = beadDashBead >= 1















  return (
    <div  className='back' style={{ backgroundImage: `url(./image/9i.jpg) !important`,padding:'10px' }}>
    
    <Container maxWidth={false}>

    <Card
       
        

      > <div className='im'><img src='./image/pt.jpg' width='100%' height='100%' className='d-block'/> </div>
        <CardHeader

           className={(classes.MuiCardHeaderRoot)} 

          title='SLTL OPERATIONAL DASHBOARD'
          action ={(<Button    size='small' 
          variant='text' 
          
          ></Button>
            
          )}

        />
        <Divider />
        <CardContent    className={(classes.MuiCardContentRoot)} >
          <Box
           
            position="relative"
          >
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small"   stickyHeader aria-label="sticky table"   >
        <TableHead className='a'>
          <TableRow className='tHead'>
            <TableCell align="start" className='tHead' > DIVISION  </TableCell>
            <TableCell align="start" className='tHead'> INDICATOR </TableCell>
            <TableCell align="center" className='tHead'> UNIT      </TableCell>
            <TableCell align="center" className='tHead'> TARGET    </TableCell>
            <TableCell align="center" className='tHead'>  ACTUAL   </TableCell>
            {/* <TableCell align="center" className='tHead'>  MTD       </TableCell> */}
            <TableCell align="center" className='tHead'> RESPONSIBILITY</TableCell>
            <TableCell align="center" className='tHead'>  RCCM    </TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
             
              <TableCell align="start"  className='tH' rowSpan={3} >Production</TableCell>
              <TableCell align="start" className='tHTwo'>Actual Production</TableCell>
              <TableCell align="center" className='tH'>Ton </TableCell>
              <TableCell align="center" className='tH'>{productionDashPlan}</TableCell>
              <TableCell align="center" className='tH' style={one?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}} >{productionDashActual}</TableCell>
                      {/* <TableCell align="center" className='tH'></TableCell> */}
              <TableCell align="center" className='tH'>Mr.Akalanka</TableCell>
              <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
          variant='text'

          onClick={(e)=>{
            
            e.preventDefault();
            dispatch({type:'plan_vs_actual'})
          navigate('/daily')
        
        }}
          
          ></Button></TableCell>
              
            </TableRow>


            <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>Production Adherence</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>90%</TableCell>
             <TableCell align="center" className='tH' style={two?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{productionDashAdherence}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Akalanka</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'plan_adherence'})
        navigate('/daily')
      
      }}
        
         
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
            
             <TableCell align="start" className='tHTwo'>Plant Utilization</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>90%</TableCell>
             <TableCell align="center" className='tH' style={three?{backgroundColor:"green",fontWeight:900,color:'white',color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{productionDashUtilization}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Akalanka</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'plant_utilization'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>
           <TableRow >
             
             <TableCell align="start"  className='tH' rowSpan={8}>Quality</TableCell>
             <TableCell align="start" className='tHTwo'>FTR</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>90%</TableCell>
             <TableCell align="center" className='tH' style={four?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{qualityDashFtr}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dulan</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'ftr'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>
           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>BERLC</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>0.03%</TableCell>
             <TableCell align="center" className='tH' style={five?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashBerlc}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dulan</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>
           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>B</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>0.015%</TableCell>
             <TableCell align="center" className='tH' style={six?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashB}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dulan</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>E</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'></TableCell>
             <TableCell align="center" className='tH' style={seven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashE}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dulan</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
            
             <TableCell align="start" className='tHTwo'>R</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={seven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityR}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dulan</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>Flash Rate</TableCell>
             <TableCell align="center" className='tH'>% </TableCell>
             <TableCell align="center" className='tH'>1.2%</TableCell>
             <TableCell align="center" className='tH' style={eleven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashFlash}%</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dulan</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'flash'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>
          
           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>Reject Compound</TableCell>
             <TableCell align="center" className='tH'>Kg </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={twelve?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashRejectCompound}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Hasula</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'rejectCompound'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>Hold Compound</TableCell>
             <TableCell align="center" className='tH'>Kg </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={thirteen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashHold}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Hasula</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'holdCompound'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
             <TableCell align="start"  className='tH' rowSpan={3}>Mixing</TableCell>
             <TableCell align="start" className='tHTwo'>Mixing Tonnage</TableCell>
             <TableCell align="center" className='tH'>Kg </TableCell>
             <TableCell align="center" className='tH'>{mixingDashTonnagePlan}</TableCell>
             <TableCell align="center" className='tH' style={fourteen?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{mixingDashTonnage}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dinesh</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'compoundWeight'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
             
             <TableCell align="start" className='tHTwo'>Mixing Productivity</TableCell>
             <TableCell align="center" className='tH'>Kg/ManH </TableCell>
             <TableCell align="center" className='tH'></TableCell>
             <TableCell align="center" className='tH' style={fifteen?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{mixingDashProductivity}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dinesh</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'mixingProductivity'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
           
             <TableCell align="start" className='tHTwo'>Mixing BreakDowns</TableCell>
             <TableCell align="center" className='tH'>Kg </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={sixteen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{mixingDashBreakDown}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Dinesh</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'mixingBreakDown'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>



           <TableRow >
             
           <TableCell align="start"  className='tH' rowSpan={4}>ENG</TableCell>
             <TableCell align="start" className='tHTwo'>Machine BreakDowns</TableCell>
             <TableCell align="center" className='tH'>hrs </TableCell>
             <TableCell align="center" className='tH'>6.67</TableCell>
             <TableCell align="center" className='tH' style={seventeen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashBreakDown}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Suminda</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'breakdown'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
           
             <TableCell align="start" className='tHTwo'>Fuel Cost/Kg of Tyre</TableCell>
             <TableCell align="center" className='tH'>Lkr/Kg </TableCell>
             <TableCell align="center" className='tH'>6.3</TableCell>
             <TableCell align="center" className='tH' style={eighteen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashFuelRate}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Suminda</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'fireWoodCostRate'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           

           <TableRow >
             
           
             <TableCell align="start" className='tHTwo'>Energy Cost/Kg of Tyre</TableCell>
             <TableCell align="center" className='tH'>Lkr/Kg </TableCell>
             <TableCell align="center" className='tH'>5.5</TableCell>
             <TableCell align="center" className='tH' style={twenty?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashEnergyCostRate}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Suminda</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'energyCost'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
           
             <TableCell align="start" className='tHTwo'>Power Consumption</TableCell>
             <TableCell align="center" className='tH'>Kwh/MT </TableCell>
             <TableCell align="center" className='tH'>380</TableCell>
             <TableCell align="center" className='tH' style={twentyone?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashPowerConsumption}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Suminda</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'energyCost'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
             <TableCell align="start"  className='tH' rowSpan={8}>HR & Safety</TableCell>
             <TableCell align="start" className='tHTwo'>Near Miss</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>1</TableCell>
             <TableCell align="center" className='tH' style={twentytwo?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashNearMiss}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'nearMiss'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>



           <TableRow >
             
             <TableCell align="start" className='tHTwo'>Kaizen</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>1</TableCell>
             <TableCell align="center" className='tH' style={twentythree?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{hrDashKaizen}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'kaizen'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
             <TableCell align="start" className='tHTwo'>NRA</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={twentyfour?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashNRC}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'nonReportableAccident'})
        navigate('/daily')
      
      }}
        
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
             <TableCell align="start" className='tHTwo'>RA</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={twentyfive?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashRA}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'reportableAccident'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
             <TableCell align="start" className='tHTwo'>DOT</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={twentysix?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashdOT}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'dot'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
             <TableCell align="start" className='tHTwo'>Absent Inform</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={twentyseven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashAI}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'absentInform'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
             <TableCell align="start" className='tHTwo'>Absent Non Inform</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={twentyeight?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashANI}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'absentNonInform'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>
           <TableRow >
             
             <TableCell align="start" className='tHTwo'>Man Power</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>45</TableCell>
             <TableCell align="center" className='tH' style={twentynine?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashManpower}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Indika</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'manPower'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>
           <TableRow >
             
             <TableCell align="start"  className='tH' rowSpan={5}>Bead</TableCell>
             <TableCell align="start" className='tHTwo'>No of Bead</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH' >{beadDashBeadPlan}</TableCell>
             <TableCell align="center" className='tH' style={thirty?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{beadDashBead}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Janaka</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'creelBead'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
            
             <TableCell align="start" className='tHTwo'>Reject Bead</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={thirtyone?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{beadDashRejectBead}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Janaka</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'rejectBead'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
            
             <TableCell align="start" className='tHTwo'>Reject Bead Pcs</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={thirtyfour?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}} ></TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Janaka</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'rejectBead'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
            
             <TableCell align="start" className='tHTwo'>Energy</TableCell>
             <TableCell align="center" className='tH'>nos </TableCell>
             <TableCell align="center" className='tH'></TableCell>
             <TableCell align="center" className='tH' style={thirtythree?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{beadDashEnergy}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Janaka</TableCell>
             <TableCell align="center" className='tH'><Button   size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'beadEnergy'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>


           <TableRow >
             
            
             <TableCell align="start" className='tHTwo'>Break Down</TableCell>
             <TableCell align="center" className='tH'>hrs </TableCell>
             <TableCell align="center" className='tH'>0</TableCell>
             <TableCell align="center" className='tH' style={thirtyfour?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{beadDashBreakDown}</TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'>Mr.Janaka</TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'beadBreakDown'})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>

           <TableRow >
             
             <TableCell align="start"  className='tH' rowSpan={0}>Cost Of Quality</TableCell>
             <TableCell align="start" className='tHTwo'></TableCell>
             <TableCell align="center" className='tH'> </TableCell>
             {/* <TableCell align="center" className='tH'></TableCell> */}
             <TableCell align="center" className='tH'></TableCell>
             <TableCell align="center" className='tH'></TableCell>
             <TableCell align="center" className='tH'></TableCell>
             <TableCell align="center" className='tH'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
          onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:''})
        navigate('/daily')
      
      }}
         ></Button></TableCell>
             
           </TableRow>

        </TableBody>
      </Table>
    </TableContainer>


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
    </Container>
    </div>
  );
}

export default Dashboard;








