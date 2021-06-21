import React,{useContext, useEffect, useState} from 'react'
import './line.css'
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import moment from 'moment'
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'
import Page from 'src/components/Page';



const LineTwo = () => {


  
  const { productionDashData, setProductionDashData, ddate, setMfgData, qualityDashData, setQualityDashData, productionDashActual, setProductionDashActual, productionDashPlan, setProductionDashPlan, productionDashAdherence, setProductionDashAdherence, productionDashUtilization, setProductionDashUtilization, productionDashProductivity, setProductionDashProductivity,
    qualityDashFtr, setQualityDashFtr, qualityDashBerlc, setQualityDashBerlc, qualityDashB, setQualityDashB, qualityDashE, setQualityDashE, qualityR, setQualityR, qualityL, setQualityL, qualityC, setQualityC, qualityDashFlash, setQualityDashFlash, qualityDashRejectCompound, setQualityDashRejectCompound, qualityDashHold, setQualityDashHold,
    mixingDashTonnage, setMixingDashTonnage, mixingDashTonnagePlan, setMixingDashTonnagePlan, mixingDashProductivity, setMixingDashProductivity, mixingDashBreakDown, setMixingDashBreakDown, mixingDashEnergy, setMixingDashEnergy, beadDashEnergy, setBeadDashEnergy,
    beadDashBead, setBeadDashBead, beadDashBeadPlan, setBeadDashBeadPlan, beadDashRejectBead, setBeadDashRejectBead, beadDashBreakDown, setBeadDashBreakDown,
    hrDashNearMiss, setHRDashNearMis, hrDashKaizen, setHRDashKaizen, hrDashNRC, setHRDashNRC, hrDashRA, setHRDashRA, hrDashdOT, setHRDashDot, hrDashAI, setHRDashAI, hrDashANI, setHRDashANI,
    engDashBreakDown, setENGDashBreakDown, engDashFuelRate, setENGDashFuelRate, engDashFuelConsumption, setENGDashFuelConsumption, engDashEnergyCostRate, setENGDashEnergyCostRate, engDashPowerConsumption, setENGDashPowerConsumption, qualityDashNM, setQualityDashNM, setHRDashManpower, hrDashManpower, kpi, dispatch,
    setPressNumberOne, pressNumberOne, shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks } = useContext(reportContext)
  


      const navigate = useNavigate();
     


  const handleOptionOne = (e) => {
    setShift(e.target.value)

  }





  var newd = new Date(ddate);
  let monthNumber = newd.getMonth() + 1;
  let yearNumber = newd.getFullYear();
  let dateNumber = newd.getDate();

  var dateone = yearNumber + '-' + monthNumber + '-' + dateNumber

  var nextDay;


  nextDay = new Date(ddate);
  nextDay.setDate(nextDay.getDate() + 1);


  let monthNumberTwo = nextDay.getMonth() + 1
  let yearNumberTwo = nextDay.getFullYear()
  let dateNumberTwo = nextDay.getDate()

  var datetwo = yearNumberTwo + '-' + monthNumberTwo + '-' + dateNumberTwo



///////////////////////////



  
  

  const fetchDataShiftPressWiseSumPOB = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/shift/sum/${dateone}/${datetwo}/${shift}/POB`);

      setPressSumPob(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataTotalPressWiseSumPOB = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/total/sum/${dateone}/${datetwo}/POB`);

      setPressSumPob(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };



  //////////count
  const fetchDataShiftPressWiseCountPOB = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/shift/count/${dateone}/${datetwo}/${shift}/POB`);

      setPressCountPob(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataTotalPressWiseCountPOB = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/total/count/${dateone}/${datetwo}/POB`);

      setPressCountPob(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };


//////////////srt
const fetchDataShiftPressWiseSumSRT = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/shift/sum/${dateone}/${datetwo}/${shift}/SRT`);

      setPressSumSrt(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataTotalPressWiseSumSRT = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/total/sum/${dateone}/${datetwo}/SRT`);

      setPressSumSrt(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };



  //////////count
  const fetchDataShiftPressWiseCountSRT = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/shift/count/${dateone}/${datetwo}/${shift}/SRT`);

      setPressCountSrt(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataTotalPressWiseCountSRT = async () => {

    try {

      //       ///////////////////////////////////////////////////
      const responsePressOne = await api.get(`/presswiseline/presswise/total/count/${dateone}/${datetwo}/SRT`);

      setPressCountSrt(responsePressOne.data.data.data);

    } catch (err) {
      console.log(err);
    }
  };


//////PBB

const fetchDataShiftPressWiseSumPBB = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/shift/sum/${dateone}/${datetwo}/${shift}/PBB`);

    setPressSumPbb(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseSumPBB = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/total/sum/${dateone}/${datetwo}/PBB`);

    setPressSumPbb(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



//////////count
const fetchDataShiftPressWiseCountPBB = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/shift/count/${dateone}/${datetwo}/${shift}/PBB`);

    setPressCountPbb(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseCountPBB = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/total/count/${dateone}/${datetwo}/PBB`);

    setPressCountPbb(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

////APW

const fetchDataShiftPressWiseSumAPW= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/shift/sum/${dateone}/${datetwo}/${shift}/APW`);

    setPressSumApw(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseSumAPW = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/total/sum/${dateone}/${datetwo}/APW`);

    setPressSumApw(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



//////////count
const fetchDataShiftPressWiseCountAPW = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/shift/count/${dateone}/${datetwo}/${shift}/APW`);

    setPressCountApw(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseCountAPW = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/total/count/${dateone}/${datetwo}/APW`);

    setPressCountApw(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

///SKS
const fetchDataShiftPressWiseSumSKS = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/shift/sum/${dateone}/${datetwo}/${shift}/SKS`);

    setPressSumSks(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseSumSKS = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/total/sum/${dateone}/${datetwo}/SKS`);

    setPressSumSks(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



//////////count
const fetchDataShiftPressWiseCountSKS = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/shift/count/${dateone}/${datetwo}/${shift}/SKS`);

    setPressCountSks(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseCountSKS = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/presswiseline/presswise/total/count/${dateone}/${datetwo}/SKS`);

    setPressCountSks(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


  useEffect(() => { 
    if (shift == 'A' || shift == 'B' || shift == 'C') {
      fetchDataShiftPressWiseSumPOB()
      fetchDataShiftPressWiseSumSRT()
      fetchDataShiftPressWiseSumPBB()
      fetchDataShiftPressWiseSumSKS()
      fetchDataShiftPressWiseSumAPW()


      fetchDataShiftPressWiseCountPOB()
      fetchDataShiftPressWiseCountSRT()
      fetchDataShiftPressWiseCountPBB()
      fetchDataShiftPressWiseCountSKS()
      fetchDataShiftPressWiseCountAPW()

    } else {
      fetchDataTotalPressWiseSumPOB()
      fetchDataTotalPressWiseSumSRT()
      fetchDataTotalPressWiseSumSKS()
      fetchDataTotalPressWiseSumPBB()
      fetchDataTotalPressWiseSumAPW()


      fetchDataTotalPressWiseCountPOB()
      fetchDataTotalPressWiseCountSRT()
      fetchDataTotalPressWiseCountSKS()
      fetchDataTotalPressWiseCountPBB()
      fetchDataTotalPressWiseCountAPW()
    }


  }, [dateone, shift])




/////filter

//srt
  const pressnumberSum102Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '102' })
  const pressnumberSum103Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '103' })
  const pressnumberSum104Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '104' })
  const pressnumberSum105Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '105' })
  const pressnumberSum106Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '106' })
  const pressnumberSum107Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '107' })



  const pressnumberCount102Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '102' })
  const pressnumberCount103Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '103' })
  const pressnumberCount104Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '104' })
  const pressnumberCount105Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '105' })
  const pressnumberCount106Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '106' })
  const pressnumberCount107Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '107' })


//pob

const pressnumberSum102Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '102' })
  const pressnumberSum103Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '103' })
  const pressnumberSum104Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '104' })
  const pressnumberSum105Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '105' })
  const pressnumberSum106Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '106' })
  const pressnumberSum107Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '107' })



  const pressnumberCount102Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '102' })
  const pressnumberCount103Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '103' })
  const pressnumberCount104Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '104' })
  const pressnumberCount105Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '105' })
  const pressnumberCount106Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '106' })
  const pressnumberCount107Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '107' })


///pbb

const pressnumberSum102Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '102' })
  const pressnumberSum103Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '103' })
  const pressnumberSum104Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '104' })
  const pressnumberSum105Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '105' })
  const pressnumberSum106Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '106' })
  const pressnumberSum107Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '107' })



  const pressnumberCount102Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '102' })
  const pressnumberCount103Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '103' })
  const pressnumberCount104Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '104' })
  const pressnumberCount105Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '105' })
  const pressnumberCount106Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '106' })
  const pressnumberCount107Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '107' })



////apw

const pressnumberSum102Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '102' })
  const pressnumberSum103Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '103' })
  const pressnumberSum104Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '104' })
  const pressnumberSum105Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '105' })
  const pressnumberSum106Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '106' })
  const pressnumberSum107Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '107' })



  const pressnumberCount102Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '102' })
  const pressnumberCount103Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '103' })
  const pressnumberCount104Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '104' })
  const pressnumberCount105Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '105' })
  const pressnumberCount106Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '106' })
  const pressnumberCount107Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '107' })

///////sks

const pressnumberSum102Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '102' })
  const pressnumberSum103Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '103' })
  const pressnumberSum104Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '104' })
  const pressnumberSum105Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '105' })
  const pressnumberSum106Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '106' })
  const pressnumberSum107Sks= pressSumSks && pressSumSks.filter((d) => { return d.press_no == '107' })



  const pressnumberCount102Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '102' })
  const pressnumberCount103Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '103' })
  const pressnumberCount104Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '104' })
  const pressnumberCount105Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '105' })
  const pressnumberCount106Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '106' })
  const pressnumberCount107Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '107' })











                                                 
                                                 
  







  const pressOne = (e) => {
    e.preventDefault();

    navigate('/app/lineone')
  }


  const pressTwo = (e) => {
    e.preventDefault();

    navigate('/app/linetwo')
  }

  const pressThree = (e) => {
    e.preventDefault();

    navigate('/app/linethree')
      }

      const pressFour =(e)=>{
         e.preventDefault();
        
         navigate('/app/linefour')
      }

     


   return (<>
      <div className='thm' >


      <div className='row dhead bo m-5'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center '>
            
      
         <table className="table  table-bordered table-hover mb-0 ">
        <thead className="thead-dark trmain">
          <tr className='trmain'>
            <th scope="col-md-12 col-sm-12 col-lg-12" width='60%' height='1% ' style={{maxHeight:'1px'}}> LINE TWO REPORT - SLTL</th>
            
            <th scope="col-md-1 col-sm-1 col-lg-1" width='10%' style={{maxHeight:'1px'}}> <div className="col">
          <select className="col form-control " aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
          <option selected>Shift</option>
          <option value="A"   >A</option>
         <option value="B"   >B</option>
           <option value="C"  >C </option>
       <option value="TOTAL"  >TOTAL</option>
     </select></div></th>
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
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3"  colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>press 01</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> press 02</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>press 03</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>press 04</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>press 05</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>press 06</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontWeight:'bold'}}>PI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontWeight:'bold'}} >UOM</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            
           
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Pcs</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Weight</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
          
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>FTR</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>%</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>B</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>%</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>E</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>%</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>R</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>%</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>OEE</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>%</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Kaizen</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>  <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>NearMiss</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>RA</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
          </tr>

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>NRA</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>AI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3"  style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>ANI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
          </tr>
          



          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" colspan='2' style={{fontWeight:'bold'}}>SUMMARY</td>
          
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
          </tr>
          </tbody>
          </table>
      </div>    </div>  
      
      
      
      
      
      <h4 style={{textAlign:'center',marginTop:'28px',marginBottom:'20px'}}>CATEGORY WISE WEIGHT & PCS</h4>


      <div className='row mr-1 ml-1 mt-2 bo'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
            
      
         <table className="table  table-bordered table-hover ttt">
       
        <tbody>
          <tr>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='17%' colspan='2'  style={{fontWeight:'bold'}} >TYPE</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>SRT</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> POB</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>APW</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>SKS</td>
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>PBB</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='10%' colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontWeight:'bold'}}>Press No</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontWeight:'bold'}} >UOM</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>102</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount102Srt[0]?.total)) ?0:parseInt(pressnumberCount102Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount102Pob[0]?.total)) ?0:parseInt(pressnumberCount102Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount102Apw[0]?.total)) ?0:parseInt(pressnumberCount102Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount102Sks[0]?.total)) ?0:parseInt(pressnumberCount102Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount102Pbb[0]?.total)) ?0:parseInt(pressnumberCount102Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount102Pob[0]?.total)) ?0:parseInt(pressnumberCount102Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Apw[0]?.total)) ?0:parseInt(pressnumberCount102Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount102Sks[0]?.total)) ?0:parseInt(pressnumberCount102Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Pbb[0]?.total)) ?0:parseInt(pressnumberCount102Pbb[0]?.total))
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum102Srt[0]?.total)) ?0:parseInt(pressnumberSum102Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum102Pob[0]?.total)) ?0:parseInt(pressnumberSum102Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum102Apw[0]?.total)) ?0:parseInt(pressnumberSum102Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum102Sks[0]?.total)) ?0:parseInt(pressnumberSum102Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum102Pbb[0]?.total)) ?0:parseInt(pressnumberSum102Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                         (isNaN( parseInt(pressnumberSum102Srt[0]?.total)) ?0:parseInt(pressnumberSum102Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum102Pob[0]?.total)) ?0:parseInt(pressnumberSum102Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum102Apw[0]?.total)) ?0:parseInt(pressnumberSum102Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum102Sks[0]?.total)) ?0:parseInt(pressnumberSum102Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum102Pbb[0]?.total)) ?0:parseInt(pressnumberSum102Pbb[0]?.total))




            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>103</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount103Srt[0]?.total)) ?0:parseInt(pressnumberCount103Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount103Pob[0]?.total)) ?0:parseInt(pressnumberCount103Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount103Apw[0]?.total)) ?0:parseInt(pressnumberCount103Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount103Sks[0]?.total)) ?0:parseInt(pressnumberCount103Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount103Pbb[0]?.total)) ?0:parseInt(pressnumberCount103Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
              (isNaN( parseInt(pressnumberCount103Srt[0]?.total)) ?0:parseInt(pressnumberCount103Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Pob[0]?.total)) ?0:parseInt(pressnumberCount103Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Apw[0]?.total)) ?0:parseInt(pressnumberCount103Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Sks[0]?.total)) ?0:parseInt(pressnumberCount103Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Pbb[0]?.total)) ?0:parseInt(pressnumberCount103Pbb[0]?.total))
                                                          
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum103Srt[0]?.total)) ?0:parseInt(pressnumberSum103Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum103Pob[0]?.total)) ?0:parseInt(pressnumberSum103Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum103Apw[0]?.total)) ?0:parseInt(pressnumberSum103Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum103Sks[0]?.total)) ?0:parseInt(pressnumberSum103Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum103Pbb[0]?.total)) ?0:parseInt(pressnumberSum103Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                       (isNaN( parseInt(pressnumberSum103Srt[0]?.total)) ?0:parseInt(pressnumberSum103Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum103Pob[0]?.total)) ?0:parseInt(pressnumberSum103Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum103Apw[0]?.total)) ?0:parseInt(pressnumberSum103Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum103Sks[0]?.total)) ?0:parseInt(pressnumberSum103Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum103Pbb[0]?.total)) ?0:parseInt(pressnumberSum103Pbb[0]?.total))


                                                   
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>104</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount104Srt[0]?.total)) ?0:parseInt(pressnumberCount104Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount104Pob[0]?.total)) ?0:parseInt(pressnumberCount104Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount104Apw[0]?.total)) ?0:parseInt(pressnumberCount104Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount104Sks[0]?.total)) ?0:parseInt(pressnumberCount104Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount104Pbb[0]?.total)) ?0:parseInt(pressnumberCount104Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      (isNaN( parseInt(pressnumberCount104Srt[0]?.total)) ?0:parseInt(pressnumberCount104Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount104Pob[0]?.total)) ?0:parseInt(pressnumberCount104Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount104Apw[0]?.total)) ?0:parseInt(pressnumberCount104Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount104Sks[0]?.total)) ?0:parseInt(pressnumberCount104Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount104Pbb[0]?.total)) ?0:parseInt(pressnumberCount104Pbb[0]?.total) )


            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum104Srt[0]?.total)) ?0:parseInt(pressnumberSum104Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum104Pob[0]?.total)) ?0:parseInt(pressnumberSum104Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum104Apw[0]?.total)) ?0:parseInt(pressnumberSum104Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum104Sks[0]?.total)) ?0:parseInt(pressnumberSum104Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum104Pbb[0]?.total)) ?0:parseInt(pressnumberSum104Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      ( isNaN( parseInt(pressnumberSum104Srt[0]?.total)) ?0:parseInt(pressnumberSum104Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum104Pob[0]?.total)) ?0:parseInt(pressnumberSum104Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum104Apw[0]?.total)) ?0:parseInt(pressnumberSum104Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum104Sks[0]?.total)) ?0:parseInt(pressnumberSum104Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum104Pbb[0]?.total)) ?0:parseInt(pressnumberSum104Pbb[0]?.total))

            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>105</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount105Srt[0]?.total)) ?0:parseInt(pressnumberCount105Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount105Pob[0]?.total)) ?0:parseInt(pressnumberCount105Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount105Apw[0]?.total)) ?0:parseInt(pressnumberCount105Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount105Sks[0]?.total)) ?0:parseInt(pressnumberCount105Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount105Pbb[0]?.total)) ?0:parseInt(pressnumberCount105Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{  ( isNaN( parseInt(pressnumberCount105Srt[0]?.total)) ?0:parseInt(pressnumberCount105Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount105Pob[0]?.total)) ?0:parseInt(pressnumberCount105Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount105Apw[0]?.total)) ?0:parseInt(pressnumberCount105Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount105Sks[0]?.total)) ?0:parseInt(pressnumberCount105Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount105Pbb[0]?.total)) ?0:parseInt(pressnumberCount105Pbb[0]?.total))}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum105Srt[0]?.total)) ?0:parseInt(pressnumberSum105Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum105Pob[0]?.total)) ?0:parseInt(pressnumberSum105Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum105Apw[0]?.total)) ?0:parseInt(pressnumberSum105Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum105Sks[0]?.total)) ?0:parseInt(pressnumberSum105Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum105Pbb[0]?.total)) ?0:parseInt(pressnumberSum105Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum105Srt[0]?.total)) ?0:parseInt(pressnumberSum105Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum105Pob[0]?.total)) ?0:parseInt(pressnumberSum105Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum105Apw[0]?.total)) ?0:parseInt(pressnumberSum105Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum105Sks[0]?.total)) ?0:parseInt(pressnumberSum105Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum105Pbb[0]?.total)) ?0:parseInt(pressnumberSum105Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>  <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>106</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN( parseInt(pressnumberCount106Srt[0]?.total)) ?0:parseInt(pressnumberCount106Srt[0]?.total) )}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount106Pob[0]?.total)) ?0:parseInt(pressnumberCount106Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount106Apw[0]?.total)) ?0:parseInt(pressnumberCount106Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount106Sks[0]?.total)) ?0:parseInt(pressnumberCount106Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount106Pbb[0]?.total)) ?0:parseInt(pressnumberCount106Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                        {(isNaN( parseInt(pressnumberCount106Srt[0]?.total)) ?0:parseInt(pressnumberCount106Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Pob[0]?.total)) ?0:parseInt(pressnumberCount106Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Apw[0]?.total)) ?0:parseInt(pressnumberCount106Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Sks[0]?.total)) ?0:parseInt(pressnumberCount106Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Pbb[0]?.total)) ?0:parseInt(pressnumberCount106Pbb[0]?.total) )}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum106Srt[0]?.total)) ?0:parseInt(pressnumberSum106Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum106Pob[0]?.total)) ?0:parseInt(pressnumberSum106Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum106Apw[0]?.total)) ?0:parseInt(pressnumberSum106Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum106Sks[0]?.total)) ?0:parseInt(pressnumberSum106Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum106Pbb[0]?.total)) ?0:parseInt(pressnumberSum106Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum106Srt[0]?.total)) ?0:parseInt(pressnumberSum106Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum106Pob[0]?.total)) ?0:parseInt(pressnumberSum106Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum106Apw[0]?.total)) ?0:parseInt(pressnumberSum106Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum106Sks[0]?.total)) ?0:parseInt(pressnumberSum106Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum106Pbb[0]?.total)) ?0:parseInt(pressnumberSum106Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
         
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>107</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount107Srt[0]?.total)) ?0:parseInt(pressnumberCount107Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount107Pob[0]?.total)) ?0:parseInt(pressnumberCount107Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount107Apw[0]?.total)) ?0:parseInt(pressnumberCount107Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount107Sks[0]?.total)) ?0:parseInt(pressnumberCount107Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount107Pbb[0]?.total)) ?0:parseInt(pressnumberCount107Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberCount107Srt[0]?.total)) ?0:parseInt(pressnumberCount107Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount107Pob[0]?.total)) ?0:parseInt(pressnumberCount107Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount107Apw[0]?.total)) ?0:parseInt(pressnumberCount107Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount107Sks[0]?.total)) ?0:parseInt(pressnumberCount107Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount107Pbb[0]?.total)) ?0:parseInt(pressnumberCount107Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum107Srt[0]?.total)) ?0:parseInt(pressnumberSum107Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum107Pob[0]?.total)) ?0:parseInt(pressnumberSum107Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum107Apw[0]?.total)) ?0:parseInt(pressnumberSum107Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum107Sks[0]?.total)) ?0:parseInt(pressnumberSum107Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum107Pbb[0]?.total)) ?0:parseInt(pressnumberSum107Pbb[0]?.total).toFixed(1)}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                   {(isNaN( parseInt(pressnumberSum107Srt[0]?.total)) ?0:parseInt(pressnumberSum107Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum107Pob[0]?.total)) ?0:parseInt(pressnumberSum107Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum107Apw[0]?.total)) ?0:parseInt(pressnumberSum107Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum107Sks[0]?.total)) ?0:parseInt(pressnumberSum107Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum107Pbb[0]?.total)) ?0:parseInt(pressnumberSum107Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
         
         
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" colspan='2'>SUMMARY</td>
          
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          </tbody>
          </table>
      </div>    </div> </>
   )
}

export default LineTwo
