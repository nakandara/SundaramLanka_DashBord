import React,{useContext, useEffect, useState} from 'react'
import './line.css'
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import moment from 'moment'
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'
import Page from 'src/components/Page';



const LineOne = () => {
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
  const pressnumberSum1001Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '1001' })
  const pressnumberSum651Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '651' })
  const pressnumberSum401Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '401' })
  const pressnumberSum402Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '402' })
  const pressnumberSum501Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '501' })
  const pressnumberSum502Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '502' })



  const pressnumberCount1001Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '1001' })
  const pressnumberCount651Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '651' })
  const pressnumberCount401Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '401' })
  const pressnumberCount402Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '402' })
  const pressnumberCount501Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '501' })
  const pressnumberCount502Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '502' })


//pob

const pressnumberSum1001Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '1001' })
  const pressnumberSum651Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '651' })
  const pressnumberSum401Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '401' })
  const pressnumberSum402Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '402' })
  const pressnumberSum501Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '501' })
  const pressnumberSum502Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '502' })



  const pressnumberCount1001Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '1001' })
  const pressnumberCount651Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '651' })
  const pressnumberCount401Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '401' })
  const pressnumberCount402Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '402' })
  const pressnumberCount501Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '501' })
  const pressnumberCount502Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '502' })


///pbb

const pressnumberSum1001Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '1001' })
  const pressnumberSum651Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '651' })
  const pressnumberSum401Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '401' })
  const pressnumberSum402Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '402' })
  const pressnumberSum501Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '501' })
  const pressnumberSum502Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '502' })



  const pressnumberCount1001Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '1001' })
  const pressnumberCount651Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '651' })
  const pressnumberCount401Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '401' })
  const pressnumberCount402Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '402' })
  const pressnumberCount501Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '501' })
  const pressnumberCount502Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '502' })



////apw

const pressnumberSum1001Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '1001' })
  const pressnumberSum651Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '651' })
  const pressnumberSum401Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '401' })
  const pressnumberSum402Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '402' })
  const pressnumberSum501Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '501' })
  const pressnumberSum502Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '502' })



  const pressnumberCount1001Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '1001' })
  const pressnumberCount651Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '651' })
  const pressnumberCount401Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '401' })
  const pressnumberCount402Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '402' })
  const pressnumberCount501Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '501' })
  const pressnumberCount502Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '502' })

///////sks

const pressnumberSum1001Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '1001' })
  const pressnumberSum651Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '651' })
  const pressnumberSum401Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '401' })
  const pressnumberSum402Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '402' })
  const pressnumberSum501Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '501' })
  const pressnumberSum502Sks= pressSumSks && pressSumSks.filter((d) => { return d.press_no == '502' })



  const pressnumberCount1001Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '1001' })
  const pressnumberCount651Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '651' })
  const pressnumberCount401Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '401' })
  const pressnumberCount402Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '402' })
  const pressnumberCount501Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '501' })
  const pressnumberCount502Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '502' })











                                                 
                                                 
  







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
      <div className='thm mt-5' >


      <div className='row dhead bo mt-5'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center '>
            
      
         <table className="table  table-bordered table-hover mb-0 ">
        <thead className="thead-dark trmain">
          <tr className='trmain'>
            <th scope="col-md-12 col-sm-12 col-lg-12" width='60%' height='1% ' style={{maxHeight:'1px'}}> LINE ONE REPORT - SLTL</th>
            
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
            <td scope="col-md-3 col-sm-3 col-lg-3"  colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>1001</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 651</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>401</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>402</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>501</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>502</td>
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
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total))}</td>


               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total))

               }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total))


               }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberCount402Srt[0]?.total)) ? 0 : parseInt(pressnumberCount402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Pob[0]?.total)) ? 0 : parseInt(pressnumberCount402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Apw[0]?.total)) ? 0 : parseInt(pressnumberCount402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Sks[0]?.total)) ? 0 : parseInt(pressnumberCount402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount402Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" > {(isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" > {(isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total))}</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount402Srt[0]?.total)) ? 0 : parseInt(pressnumberCount402Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount402Pob[0]?.total)) ? 0 : parseInt(pressnumberCount402Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount402Apw[0]?.total)) ? 0 : parseInt(pressnumberCount402Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount402Sks[0]?.total)) ? 0 : parseInt(pressnumberCount402Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount402Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount402Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total))

                                                  +(isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total))
                                                  
                                                  }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>



             </tr>

             <tr>
               <td scope="col-md-3 col-sm-3 col-lg-3" style={{ fontSize: '14px' }}>Weight</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" style={{ fontSize: '14px' }}>Ton</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total))




               }</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total))



               }</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total))

               }</td>


               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total))}</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total))

                                                  +(isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total))
                                                  
                                                  }</td>
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>1001</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount1001Srt[0]?.total)) ?0:parseInt(pressnumberCount1001Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total))
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                         (isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total))




            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>651</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount651Srt[0]?.total)) ?0:parseInt(pressnumberCount651Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount651Pob[0]?.total)) ?0:parseInt(pressnumberCount651Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount651Apw[0]?.total)) ?0:parseInt(pressnumberCount651Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount651Sks[0]?.total)) ?0:parseInt(pressnumberCount651Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount651Pbb[0]?.total)) ?0:parseInt(pressnumberCount651Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
              (isNaN( parseInt(pressnumberCount651Srt[0]?.total)) ?0:parseInt(pressnumberCount651Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Pob[0]?.total)) ?0:parseInt(pressnumberCount651Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Apw[0]?.total)) ?0:parseInt(pressnumberCount651Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Sks[0]?.total)) ?0:parseInt(pressnumberCount651Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Pbb[0]?.total)) ?0:parseInt(pressnumberCount651Pbb[0]?.total))
                                                          
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum651Srt[0]?.total)) ?0:parseInt(pressnumberSum651Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum651Pob[0]?.total)) ?0:parseInt(pressnumberSum651Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum651Apw[0]?.total)) ?0:parseInt(pressnumberSum651Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum651Sks[0]?.total)) ?0:parseInt(pressnumberSum651Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum651Pbb[0]?.total)) ?0:parseInt(pressnumberSum651Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                       (isNaN( parseInt(pressnumberSum651Srt[0]?.total)) ?0:parseInt(pressnumberSum651Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Pob[0]?.total)) ?0:parseInt(pressnumberSum651Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Apw[0]?.total)) ?0:parseInt(pressnumberSum651Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum651Sks[0]?.total)) ?0:parseInt(pressnumberSum651Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Pbb[0]?.total)) ?0:parseInt(pressnumberSum651Pbb[0]?.total))


                                                   
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>401</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount401Srt[0]?.total)) ?0:parseInt(pressnumberCount401Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount401Pob[0]?.total)) ?0:parseInt(pressnumberCount401Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount401Apw[0]?.total)) ?0:parseInt(pressnumberCount401Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount401Sks[0]?.total)) ?0:parseInt(pressnumberCount401Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount401Pbb[0]?.total)) ?0:parseInt(pressnumberCount401Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      (isNaN( parseInt(pressnumberCount401Srt[0]?.total)) ?0:parseInt(pressnumberCount401Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Pob[0]?.total)) ?0:parseInt(pressnumberCount401Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Apw[0]?.total)) ?0:parseInt(pressnumberCount401Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Sks[0]?.total)) ?0:parseInt(pressnumberCount401Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount401Pbb[0]?.total)) ?0:parseInt(pressnumberCount401Pbb[0]?.total) )


            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum401Srt[0]?.total)) ?0:parseInt(pressnumberSum401Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum401Pob[0]?.total)) ?0:parseInt(pressnumberSum401Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum401Apw[0]?.total)) ?0:parseInt(pressnumberSum401Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum401Sks[0]?.total)) ?0:parseInt(pressnumberSum401Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum401Pbb[0]?.total)) ?0:parseInt(pressnumberSum401Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      ( isNaN( parseInt(pressnumberSum401Srt[0]?.total)) ?0:parseInt(pressnumberSum401Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum401Pob[0]?.total)) ?0:parseInt(pressnumberSum401Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum401Apw[0]?.total)) ?0:parseInt(pressnumberSum401Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum401Sks[0]?.total)) ?0:parseInt(pressnumberSum401Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum401Pbb[0]?.total)) ?0:parseInt(pressnumberSum401Pbb[0]?.total))

            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>402</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount402Srt[0]?.total)) ?0:parseInt(pressnumberCount402Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount402Pob[0]?.total)) ?0:parseInt(pressnumberCount402Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount402Apw[0]?.total)) ?0:parseInt(pressnumberCount402Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount402Sks[0]?.total)) ?0:parseInt(pressnumberCount402Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount402Pbb[0]?.total)) ?0:parseInt(pressnumberCount402Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{  ( isNaN( parseInt(pressnumberCount402Srt[0]?.total)) ?0:parseInt(pressnumberCount402Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount402Pob[0]?.total)) ?0:parseInt(pressnumberCount402Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount402Apw[0]?.total)) ?0:parseInt(pressnumberCount402Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount402Sks[0]?.total)) ?0:parseInt(pressnumberCount402Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount402Pbb[0]?.total)) ?0:parseInt(pressnumberCount402Pbb[0]?.total))}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum402Srt[0]?.total)) ?0:parseInt(pressnumberSum402Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum402Pob[0]?.total)) ?0:parseInt(pressnumberSum402Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum402Apw[0]?.total)) ?0:parseInt(pressnumberSum402Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum402Sks[0]?.total)) ?0:parseInt(pressnumberSum402Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum402Pbb[0]?.total)) ?0:parseInt(pressnumberSum402Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum402Srt[0]?.total)) ?0:parseInt(pressnumberSum402Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Pob[0]?.total)) ?0:parseInt(pressnumberSum402Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Apw[0]?.total)) ?0:parseInt(pressnumberSum402Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Sks[0]?.total)) ?0:parseInt(pressnumberSum402Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum402Pbb[0]?.total)) ?0:parseInt(pressnumberSum402Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>  <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>501</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN( parseInt(pressnumberCount501Srt[0]?.total)) ?0:parseInt(pressnumberCount501Srt[0]?.total) )}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount501Pob[0]?.total)) ?0:parseInt(pressnumberCount501Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount501Apw[0]?.total)) ?0:parseInt(pressnumberCount501Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount501Sks[0]?.total)) ?0:parseInt(pressnumberCount501Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount501Pbb[0]?.total)) ?0:parseInt(pressnumberCount501Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                        {(isNaN( parseInt(pressnumberCount501Srt[0]?.total)) ?0:parseInt(pressnumberCount501Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Pob[0]?.total)) ?0:parseInt(pressnumberCount501Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Apw[0]?.total)) ?0:parseInt(pressnumberCount501Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Sks[0]?.total)) ?0:parseInt(pressnumberCount501Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Pbb[0]?.total)) ?0:parseInt(pressnumberCount501Pbb[0]?.total) )}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum501Srt[0]?.total)) ?0:parseInt(pressnumberSum501Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum501Pob[0]?.total)) ?0:parseInt(pressnumberSum501Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum501Apw[0]?.total)) ?0:parseInt(pressnumberSum501Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum501Sks[0]?.total)) ?0:parseInt(pressnumberSum501Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum501Pbb[0]?.total)) ?0:parseInt(pressnumberSum501Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum501Srt[0]?.total)) ?0:parseInt(pressnumberSum501Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Pob[0]?.total)) ?0:parseInt(pressnumberSum501Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Apw[0]?.total)) ?0:parseInt(pressnumberSum501Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum501Sks[0]?.total)) ?0:parseInt(pressnumberSum501Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Pbb[0]?.total)) ?0:parseInt(pressnumberSum501Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
         
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>502</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount502Srt[0]?.total)) ?0:parseInt(pressnumberCount502Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount502Pob[0]?.total)) ?0:parseInt(pressnumberCount502Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount502Apw[0]?.total)) ?0:parseInt(pressnumberCount502Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount502Sks[0]?.total)) ?0:parseInt(pressnumberCount502Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount502Pbb[0]?.total)) ?0:parseInt(pressnumberCount502Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberCount502Srt[0]?.total)) ?0:parseInt(pressnumberCount502Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Pob[0]?.total)) ?0:parseInt(pressnumberCount502Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount502Apw[0]?.total)) ?0:parseInt(pressnumberCount502Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Sks[0]?.total)) ?0:parseInt(pressnumberCount502Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Pbb[0]?.total)) ?0:parseInt(pressnumberCount502Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum502Srt[0]?.total)) ?0:parseInt(pressnumberSum502Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum502Pob[0]?.total)) ?0:parseInt(pressnumberSum502Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum502Apw[0]?.total)) ?0:parseInt(pressnumberSum502Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum502Sks[0]?.total)) ?0:parseInt(pressnumberSum502Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum502Pbb[0]?.total)) ?0:parseInt(pressnumberSum502Pbb[0]?.total).toFixed(1)}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                   {(isNaN( parseInt(pressnumberSum502Srt[0]?.total)) ?0:parseInt(pressnumberSum502Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Pob[0]?.total)) ?0:parseInt(pressnumberSum502Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Apw[0]?.total)) ?0:parseInt(pressnumberSum502Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum502Sks[0]?.total)) ?0:parseInt(pressnumberSum502Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Pbb[0]?.total)) ?0:parseInt(pressnumberSum502Pbb[0]?.total))}
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

export default LineOne
