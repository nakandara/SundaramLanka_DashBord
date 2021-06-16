import React,{useContext,useEffect, useState} from 'react'
import './dprone.css' 
import logo from './unnamed.png';
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import { makeStyles,Container, Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'
import {reportContext} from '../context/ContextProvider'
import apiThree from '../../src/api/apiThree';
import api from '../../src/api/api';
import Page from 'src/components/Page';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { grey } from "@material-ui/core/colors";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


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
    

  }
  
  

}));







const Dpr = () => {





   const {productionDashData,setProductionDashData,ddate,setMfgData,qualityDashData,setQualityDashData,productionDashActual,setProductionDashActual,productionDashPlan,setProductionDashPlan,productionDashAdherence,setProductionDashAdherence,productionDashUtilization,setProductionDashUtilization,productionDashProductivity,setProductionDashProductivity,
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
    
    var paramDateOne =yearNumber +'-'+monthNumber +'-'+ '1'
    
   ////////////state

   const [productionMtd,setProductionMtd] =useState("")
   const [productionAdherenceMtd,setProductionAdherenceMtd] =useState("")
   const [productionUtilizationMtd,setProductionUtilizationMtd] =useState("")
    // Add a day
    const [productionDashProductivityMtd,setProductionDashProductivityMtd]  =useState('')



/////////////////quality///////////////

const [qualityDashFtrMtd,setQualityDashFtrMtd]  =useState('')

const [qualityDashBerlcMtd,setQualityDashBerlcMtd]  =useState('')

const [qualityDashBMtd,setQualityDashBMtd]  =useState('')

const [qualityDashEMtd,setQualityDashEMtd]  =useState()

const [qualityRMtd,setQualityRMtd]  =useState()

const [qualityLMtd,setQualityLMtd]  =useState()

const [qualityCMtd,setQualityCMtd]  =useState()

const [qualityDashFlashMtd,setQualityDashFlashMtd]  =useState()

const [qualityDashRejectCompoundMtd,setQualityDashRejectCompoundMtd]  =useState()

const [qualityDashHoldMtd,setQualityDashHoldMtd]  =useState()

const [qualityDashNMMtd,setQualityDashNMMtd]  =useState()

///////////////Mixing///////////////

const [mixingDashTonnageMtd,setMixingDashTonnageMtd]  =useState()
const [mixingDashTonnagePlanMtd,setMixingDashTonnagePlanMtd]  =useState()

const [mixingDashProductivityMtd,setMixingDashProductivityMtd]  =useState()

const [mixingDashBreakDownMtd,setMixingDashBreakDownMtd]  =useState()

const [mixingDashEnergyMtd,setMixingDashEnergyMtd]  =useState()


////////bead////////////////////////

const [beadDashBeadMtd,setBeadDashBeadMtd]  =useState()
const [beadDashBeadPlanMtdMtd,setBeadDashBeadPlanMtd]  =useState()

const [beadDashRejectBeadMtd,setBeadDashRejectBeadMtd]  =useState()

const [beadDashEnergyMtd,setBeadDashEnergyMtd]  =useState()

const [beadDashBreakDownMtd,setBeadDashBreakDownMtd]  =useState()



////////////////////hr///////////////////

const [hrDashNearMissMtd,setHRDashNearMisMtd]  =useState()

const [hrDashKaizenMtd,setHRDashKaizenMtd]  =useState()

const [hrDashNRCMtd,setHRDashNRCMtd]  =useState()

const [hrDashRAMtd,setHRDashRAMtd]  =useState()

const [hrDashdOTMtd,setHRDashDotMtd]  =useState()

const [hrDashAIMtd,setHRDashAIMtd]  =useState()

const [hrDashANIMtd,setHRDashANIMtd]  =useState()

const [hrDashManpowerMtd,setHRDashManpowerMtd] =useState('')

////////////////////////////////////////

const [engDashBreakDownMtd,setENGDashBreakDownMtd]  =useState('')

const [engDashFuelRateMtd,setENGDashFuelRateMtd]  =useState('')

const [engDashFuelConsumptionMtd,setengDashFuelConsumptionMtd]  =useState('')


const [engDashEnergyCostRateMtd,setengDashEnergyCostRateMtd]  =useState('')


const [engDashPowerConsumptionMtd,setENGDashPowerConsumptionMtd]  =useState('')
    //quality
    
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
  
  
    ///mtd////////////

    const fetchDataMtd = async () => {
    
      try {
        
    
        const response = await api.get(`/reporting/piechart/sum/actual_weight/production_data/${paramDateOne}/${parmDate}`);
       
        setProductionMtd(response.data.data.data[0].total)
  
  
        /////////////////////////////
  
        const responsePone = await api.get(`/reporting/piechart/avg/plan_adherence/production_data/${paramDateOne}/${parmDate}`);
       
        setProductionAdherenceMtd(responsePone.data.data.data[0].total)
        
  
        const responsePtwo = await api.get(`/reporting/piechart/avg/plant_utilization/production_data/${paramDateOne}/${parmDate}`);
       
        setProductionUtilizationMtd(responsePtwo.data.data.data[0].total)
  
  
        const responseThree= await api.get(`/reporting/piechart/avg/productivity/production_data/${paramDateOne}/${parmDate}`);
       
        setProductionDashProductivityMtd(responseThree.data.data.data[0].total)
  
  
  
        
  
  
  
     
          
      } catch (err) {
        console.log(err);
      }
    };
  

    //////////////////////////
  
  
  
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



    ///////////////////


    const fetchDataQualityMtd = async () => {
    
      try {
  
  
  
  //       ///////////////////////////////////////////////////Qulaity
  
  
        const responseQone = await api.get(`/reporting/piechart/avg/flash/quality_data/${paramDateOne}/${parmDate}`);
       
        setQualityDashFlashMtd(responseQone.data.data.data[0].total)
  
  
        const responseQtwo  = await api.get(`/reporting/piechart/avg/ftr/quality_data/${paramDateOne}/${parmDate}`);
       
        setQualityDashFtrMtd(responseQtwo.data.data.data[0].total)
  
         const responseQnine  = await api.get(`/reporting/piechart/avg/berlc/quality_data/${paramDateOne}/${parmDate}`);
       
         setQualityDashBerlcMtd(responseQnine.data.data.data[0].total)
  
         const responseQthree  = await api.get(`/reporting/piechart/avg/b/quality_data/${paramDateOne}/${parmDate}`);
       
         setQualityDashBMtd(responseQthree.data.data.data[0].total)
  
  
        const responseQfour  = await api.get(`/reporting/piechart/avg/ea/quality_data/${paramDateOne}/${parmDate}`);
       
        setQualityDashEMtd(responseQfour.data.data.data[0].total)
  
  
       const responseQfive  = await api.get(`/reporting/piechart/avg/r/quality_data/${paramDateOne}/${parmDate}`);
       
       setQualityRMtd(responseQfive.data.data.data[0].total)
  
         const responseQsix= await api.get(`/reporting/piechart/avg/l/quality_data/${paramDateOne}/${parmDate}`);
       
       setQualityLMtd(responseQsix.data.data.data[0].total)
  
  
         const responseQseven = await api.get(`/reporting/piechart/avg/c/quality_data/${paramDateOne}/${parmDate}`);
       
         setQualityCMtd(responseQseven.data.data.data[0].total)
  
        
  
  
       
  
  
     
          
      } catch (err) {
        console.log(err);
      }
    };
  
  /////////////////
  
  
  
  
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
  

    /////////////////////////

    const fetchDataMixingMtd = async () => {
    
      try {
        
    
  
  
  
  // //////Mixing////////////////
   const responseMone = await api.get(`/reporting/piechart/sum/compound_weight_actual/mixing_data/${paramDateOne}/${parmDate}`);
       
   setMixingDashTonnageMtd(responseMone.data.data.data[0].total)

  
  
  
  
     
          
      } catch (err) {
        console.log(err);
      }
    };
  




    /////////////////////////
  
  
  
  
  
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



    ///////////////////////////////

    const fetchDataEngMtd = async () => {
    
      try {
  
  // /////////////////////////////eng///////////////////
  
  
   
  
  
         const responseEtwo = await api.get(`/reporting/piechart/avg/energy_consumed/eng_data/${paramDateOne}/${parmDate}`);
       
         setENGDashPowerConsumptionMtd(responseEtwo.data.data.data[0].total)
    
         
  
         const responseEthree = await api.get(`/reporting/piechart/sum/break_down/eng_data/${paramDateOne}/${parmDate}`);
       
         setENGDashBreakDownMtd(responseEthree.data.data.data[0].total)
    
  
  
  
         const responseEfive = await api.get(`/reporting/piechart/avg/firewood_cost_rate/eng_data/${paramDateOne}/${parmDate}`);
       
         setENGDashFuelRateMtd(responseEfive.data.data.data[0].total)
    
        

         const responseEone = await api.get(`/reporting/piechart/avg/energy_cost_kg/eng_data/${paramDateOne}/${parmDate}`);
       
          setengDashEnergyCostRateMtd(responseEone.data.data.data[0].total)

         console.log(engDashEnergyCostRateMtd);
  
          
      } catch (err) {
        console.log(err);
      }
    };
  


    ////////////////////////////////
  
  
    const fetchDataHold = async () => {
    
      try {
  
        
  //       /////////////////HOLD///////////
  
  
         const responseHoone= await apiThree.get(`/dashboard/${hdhc}/${hob}/${parmDate}`);
    
         setQualityDashHold(responseHoone.data.data.data.hold_compound)
  
         const responseHotwo= await apiThree.get(`/dashboard/${hdrc}/${hob}/${parmDate}`);
    
         setQualityDashRejectCompound(responseHotwo.data.data.data.reject_compound)
  
  console.log(qualityDashHold);

  ////////////



  ////////////////

  
  
     
          
      } catch (err) {
        console.log(err);
      }
    };
  
  
  
  //////////////////

  const fetchDataHoldMtd = async () => {
    
    try {

      
//       /////////////////HOLDmtdd///////////


       const responseHoone= await api.get(`/reporting/piechart/sum/hold_compound/hold_data/${paramDateOne}/${parmDate}`);
       
       setQualityDashHoldMtd(responseHoone.data.data.data[0].total)

       const responseHotwo = await api.get(`/reporting/piechart/sum/reject_compound/hold_data/${paramDateOne}/${parmDate}`);
       
       setQualityDashRejectCompoundMtd(responseHotwo.data.data.data[0].total)
       
        
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


////////////////////////


const fetchDataHrMtd = async () => {
    
  try {
  
//       ///////////////////////////////hr


     const responseHone = await api.get(`/reporting/piechart/sum/absent_inform/hr_data/${paramDateOne}/${parmDate}`);
       
     setHRDashAIMtd(responseHone.data.data.data[0].total)



     const responseHtwo = await api.get(`/reporting/piechart/sum/absent_non_inform/hr_data/${paramDateOne}/${parmDate}`);
       
     setHRDashANIMtd(responseHtwo.data.data.data[0].total)

    



     const responseHthree = await api.get(`/reporting/piechart/sum/dot/hr_data/${paramDateOne}/${parmDate}`);
       
     setHRDashDotMtd(responseHthree.data.data.data[0].total)


     const responseHfour = await api.get(`/reporting/piechart/sum/reportable_accident/hr_data/${paramDateOne}/${parmDate}`);
       
     setHRDashRAMtd(responseHfour.data.data.data[0].total)

     


     const responseHfive = await api.get(`/reporting/piechart/sum/non_reportable_accident/hr_data/${paramDateOne}/${parmDate}`);
       
     setHRDashNRCMtd(responseHfive.data.data.data[0].total)


     const responseHsix = await api.get(`/reporting/piechart/sum/near_miss/hr_data/${paramDateOne}/${parmDate}`);
       
     setHRDashNearMisMtd(responseHsix.data.data.data[0].total)


     


    const responseHseven = await api.get(`/reporting/piechart/sum/kaizen/hr_data/${paramDateOne}/${parmDate}`);
       
    setHRDashKaizenMtd(responseHseven.data.data.data[0].total)

    

    const responseHeight = await api.get(`/reporting/piechart/avg/man_power/hr_data/${paramDateOne}/${parmDate}`);
       
    setHRDashManpowerMtd(responseHeight.data.data.data[0].total)
    

 
      
  } catch (err) {
    console.log(err);
  }
};


////////////////////////



  
  
  
    useEffect(() => {
      fetchData();
      fetchDataQuality();
      fetchDataMixing();
      fetchDataMixingMtd();
      fetchDataEng();
      fetchDataEngMtd()
      fetchDataBead();
      fetchDataHr();
      fetchDataHrMtd();
      fetchDataHold();
      fetchDataMtd()
      fetchDataQualityMtd()
      fetchDataHoldMtd()
    }, [parmDate,pda,pdp,pdadherence,qdflash,mdwa,edeck,hdm,bdcba,hdhc]);
    
    //console.log(productionDashData);
    let one = productionDashActual >= productionDashPlan
    let two = productionDashAdherence >= 90
    let three = productionDashUtilization >= 90
    let four = qualityDashFtr >= 90 
    let five = qualityDashBerlc >= 0.3 
    let six = qualityDashB >= 0.15 
    let seven = qualityDashE > 0 
    const eight = qualityR >= 0.15 
    //let nine = qualityDash >= 0.03 
    //let ten= qualityDashBerlc >= 0.03 
    let eleven = qualityDashFlash >= 1.2 
    let twelve = qualityDashHold > 0
    let thirteen = qualityDashRejectCompound > 0
  
    let fourteen = mixingDashTonnage >= mixingDashTonnagePlan
    let fifteen = mixingDashProductivity >= 0
    let sixteen = mixingDashBreakDown > 0 
  
    let seventeen = engDashBreakDown >= 6.67
    let eighteen  = engDashFuelRate >= 5.6
    let nineteen  = engDashFuelConsumption >= 950
    let twenty    = engDashEnergyCostRate >= 5.25
    let twentyone = engDashPowerConsumption >= 370
  
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
    let thirtyfour = beadDashBreakDown > 0
    //let thirtyfive = beadDashBead >= 1
  
  
  
  
  
  
  
  
  
  
  
  
  
  











































   return (<div className='maind'>
      <div className='dp'>
       
<div className='row b '>
   <div className='col-md-3 col-sm-3 col-lg-3'><img className='sun' src ={logo}/>
         </div>
         <div className='col-md-9 col-sm-9 col-lg-9 d-flex'>
            <h4 className='htwo '> SLTL OPERATIONAL DASHBOARD</h4> <Button    size='small'  endIcon={<LibraryBooksIcon />}
          variant='text'
        className='momdpr'
          onClick={(e)=>{
            
            e.preventDefault();
            
          navigate('/momdpr')
        
        }}
          
          ></Button>
         </div>
</div></div>


{/* <div className='dpone'>


<div className='row  '>
   <div className='col-md-2 col-sm-2 col-lg-2 text-center'>

     DIVISION
         </div>

         <div className='col-md-3 col-sm-3 col-lg-3  text-center'>

INDICATOR
   </div> 

   <div className='col-md-2 col-sm-2 col-lg-2 text-center'>

UOM
   </div>
   <div className='col-md-1 col-sm-1col-lg-1 text-center'>

      TARGET
         </div> 
         <div className='col-md-2 col-sm-2 col-lg-2 text-center'>

      ACTUAL
         </div> 
         <div className='col-md-1 col-sm-1 col-lg-1 text-start'>

     RESP
         </div>  
         <div className='col-md-1 col-sm-1 col-lg-1 text-start'>

RCCM
    </div>  
</div>  
         
      
      </div> */}

<div className='thm x' >


<div className='row dhead bo x'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center x '>
      

   <table className="table  table-bordered table-hover mb-0  x" style={{position:'sticky',zIndex:'1000'}}>
  <thead className="thead-dark x" >
    <tr>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='14%'> DIVISION</th>
      <th scope="col-md-3 col-sm-3 col-lg-3" width='15%'>INDICATOR</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='8%'>UOM</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='8%'>TARGET</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='8%'>ACTUAL</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='9%'>MTD</th> 
      <th scope="col-md-1 col-sm-1 col-lg-1">RESP</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='12%'>HOD</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='1%'>RCCM</th>
    </tr>
  </thead>
  
</table>


         </div>


         
</div>  
         
      
      </div>

      




<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    <tr>
      <td scope="col-md-1 col-sm-1 col-lg-1" rowspan="3" width='14%' ><div className='division mt-3'>Production</div></td>
      <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' style={{fontSize:'12px',fontWeight:'bold'}}>Actual Production</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='8%' style={{fontSize:'12px',fontWeight:'bold'}}>Ton</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='9%'style={{fontSize:'12px',fontWeight:'bold'}}>{productionDashPlan}</td>
      <td className='acc' scope="col-md-1 col-sm-1 col-lg-1 " width='9%' style={one?{backgroundColor:"green",fontWeight:"bold",color:'white',fontSize:'12px'}:{backgroundColor:"red",fontWeight:900,color:'white',fontSize:'12px'}}>{productionDashActual}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{productionMtd && productionMtd.toFixed(2)}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Akalanka</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='1%'><Button    size='small'  endIcon={<ArrowRightIcon />}
          variant='text'

          onClick={(e)=>{
            
            e.preventDefault();
            dispatch({type:'plan_vs_actual'})
          navigate('/daily')
        
        }}
          
          ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Production Adherence</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>90%</td>
      <td className='acc' style={two?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{productionDashAdherence}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{productionAdherenceMtd && productionAdherenceMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Akalanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'plan_adherence'})
        navigate('/daily')
      
      }}
        
         
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Plant Utilization</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>90%</td>
      <td className='acc' style={three?{backgroundColor:"green",fontWeight:900,color:'white',fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{productionDashUtilization}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{productionUtilizationMtd && productionUtilizationMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Akalanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'plant_utilization'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>  
         
      
      
      
<div className='row mr-1 ml-1 mt-2 bo '>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    <tr>
      <td scope="col-md-1 col-sm-1 col-lg-1" rowspan="8" width='14%' ><div className='division '>Quality</div></td>
      <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' style={{fontSize:'12px',fontWeight:'bold'}}>FTR</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='8%' style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>90%</td>
      <td className='acc' scope="col-md-1 col-sm-1 col-lg-1" width='9%'style={four?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{qualityDashFtr}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashFtrMtd && qualityDashFtrMtd.toFixed(2)}%</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dulan</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='1%'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'ftr'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>BERLC</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0.3%</td>
      <td className='acc' style={five?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashBerlc}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashBerlcMtd && qualityDashBerlcMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dulan</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>B</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0.15%</td>
      <td className='acc' style={six?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashB}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashBMtd && qualityDashBMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dulan</td>
      <td  style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>E</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={seven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashE}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashEMtd && qualityDashEMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dulan</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>R</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0.15%</td>
      <td className='acc' style={eight?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityR}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityRMtd && qualityRMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dulan</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'berlc'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Flash Rate</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>1.2%</td>
      <td className='acc' style={eleven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashFlash}%</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashFlashMtd && qualityDashFlashMtd.toFixed(2)}%</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dulan</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'flash'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Reject Compound</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Kg</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}} >0</td>
      <td className='acc' style={thirteen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashRejectCompound}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashRejectCompoundMtd && qualityDashRejectCompoundMtd.toFixed(2)}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Hasula</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'rejectCompound'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Hold Compound</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}} >Kg</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={twelve?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{qualityDashHold}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{qualityDashHoldMtd}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Hasula</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Saman</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'holdCompound'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>  
      
      
      
      
      
<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    <tr>
      <td scope="col-md-1 col-sm-1 col-lg-1" rowspan="3" width='14%' ><div className='division mt-3'>Mixing</div></td>
      <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' style={{fontSize:'12px',fontWeight:'bold'}}>Mixing Tonnage</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='8%' style={{fontSize:'12px',fontWeight:'bold'}}>Kg</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{mixingDashTonnagePlan}</td>
      <td className='acc' scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={fourteen?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{mixingDashTonnage}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{mixingDashTonnageMtd && mixingDashTonnageMtd.toFixed(2)}</td>
      <td scope="col-md-1 col-sm-1 col-lg-1"  style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dinesh</td>
      <td scope="col-md-1 col-sm-1 col-lg-1"  width='12%' style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='1%'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'compoundWeight'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mixing Productivity</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Kg/Man</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td className='acc' style={fifteen?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{mixingDashProductivity}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dinesh</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}} >Mr.Dhammika</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'mixingProductivity'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mixing BreakDowns</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Kg</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={sixteen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{mixingDashBreakDown}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dinesh</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'mixingBreakDown'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>  
      
      
      
<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    <tr>
      <td scope="col-md-1 col-sm-1 col-lg-1" rowspan="4" width='14%' ><div className='division mt-5'>ENG</div></td>
      <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' style={{fontSize:'12px',fontWeight:'bold'}}>Machine BreakDowns</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='8%' style={{fontSize:'12px',fontWeight:'bold'}}>hrs</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>6.67/200</td>
      <td className='acc' scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={seventeen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashBreakDown}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{engDashBreakDownMtd}</td>
      <td scope="col-md-1 col-sm-1 col-lg-1"  style={{fontSize:'12px',fontWeight:'bold'}}>            Mr.Vidusanka</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold'}}>            Mr.Manoj</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='1%'> <Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'breakdown'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Fuel Cost/Kg of Tyre</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Lkr/Kg</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>5.6</td>
      <td className='acc' style={eighteen?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashFuelRate}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{engDashFuelRateMtd && engDashFuelRateMtd.toFixed(2)}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Vidusanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>            Mr.Suminda</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'fireWoodCostRate'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Energy Cost/Kg of Tyre</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Lkr/Kg</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>5.25</td>
      <td className='acc' style={twenty?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashEnergyCostRate}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{engDashEnergyCostRateMtd  && engDashEnergyCostRateMtd.toFixed(2)}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Vidusanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>            Mr.Suminda</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'energyCost'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Power Consumption</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Kwh/MT</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>370</td>
      <td className='acc' style={twentyone?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{engDashPowerConsumption}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{engDashPowerConsumptionMtd && engDashPowerConsumptionMtd.toFixed(0)}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Vidusanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>            Mr.Suminda</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'energyCost'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>  

<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    <tr>
      <td scope="col-md-1 col-sm-1 col-lg-1" rowspan="8" width='14%' ><div className='division'>HR & Safety</div></td>
      <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' style={{fontSize:'12px',fontWeight:'bold'}}>Near Miss</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='8%' style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>1</td>
      <td className='acc' scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={twentytwo?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashNearMiss}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashNearMissMtd}</td>
      <td scope="col-md-1 col-sm-1 col-lg-1"  style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='1%'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'nearMiss'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Kaizen</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>1</td>
      <td className='acc' style={twentythree?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{hrDashKaizen}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashKaizenMtd}</td>
      <td  style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'kaizen'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>NRA</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={twentyfour?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashNRC}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashNRCMtd}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'nonReportableAccident'})
        navigate('/daily')
      
      }}
        
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>RA</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc'  style={twentyfive?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashRA}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashRAMtd}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'reportableAccident'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>DOT</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={twentysix?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashdOT}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashdOTMtd}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'dot'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Absent Inform</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={twentyseven?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashAI}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashAIMtd}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'absentInform'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Absent Non Inform</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={twentyeight?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashANI}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashANIMtd}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'absentNonInform'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Man Power</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>45</td>
      <td className='acc' style={twentynine?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{hrDashManpower}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>{hrDashManpowerMtd && hrDashManpowerMtd.toFixed(2)}</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Malinda/Indika</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Rohitha</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'manPower'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>  
      
      
<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    <tr>
      <td scope="col-md-1 col-sm-1 col-lg-1" rowspan="4" width='14%' ><div className='division mt-4'>Bead</div></td>
      <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' style={{fontSize:'12px',fontWeight:'bold'}}>No of Bead</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='8%' style={{fontSize:'12px',fontWeight:'bold'}}>nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}>{beadDashBeadPlan}</td>
      <td className='acc' scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={thirty?{backgroundColor:"green",fontWeight:900,color:'white'}:{backgroundColor:"red",fontWeight:900,color:'white'}}>{beadDashBead}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" width='9%' style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Janaka/Akalanka</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='1%'><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'creelBead'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Reject Bead</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={thirtyone?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{beadDashRejectBead}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Janaka/Akalanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'rejectBead'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Energy</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td className='acc' style={thirtythree?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{beadDashEnergy}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Janaka/Akalanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td><Button   size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'beadEnergy'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
    <tr>
      
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Break Down</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>hrs</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>0</td>
      <td className='acc' style={thirtyfour?{backgroundColor:"red",fontWeight:900,color:'white'}:{backgroundColor:"green",fontWeight:900,color:'white'}}>{beadDashBreakDown}</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'12px',fontWeight:'bold'}}></td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Janaka/Akalanka</td>
      <td style={{fontSize:'12px',fontWeight:'bold'}}>Mr.Dhammika</td>
      <td><Button    size='small'  endIcon={<ArrowRightIcon />}
         variant='text'
         onClick={(e)=>{
            
          e.preventDefault();
          dispatch({type:'beadBreakDown'})
        navigate('/daily')
      
      }}
         ></Button></td>
      
    </tr>
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>  
      
      
      
      </div>
   )
}

export default Dpr
