import React,{useContext, useEffect, useState} from 'react'
import './line.css'
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import moment from 'moment'
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'
import Page from 'src/components/Page';



const LineThree = () => {
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
  const pressnumberSum303Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '303' })
  const pressnumberSum304Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '304' })
  const pressnumberSum305Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '305' })
  const pressnumberSum306Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '306' })
  const pressnumberSum151Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '151' })
  const pressnumberSum152Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '152' })
  const pressnumberSum153Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '153' })
  const pressnumberSum154Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '154' })
  const pressnumberSum155Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '155' })
  const pressnumberSum156Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '156' })


  const pressnumberCount303Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '303' })
  const pressnumberCount304Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '304' })
  const pressnumberCount305Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '305' })
  const pressnumberCount306Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '306' })
  const pressnumberCount151Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '151' })
  const pressnumberCount152Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '152' })
  const pressnumberCount153Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '153' })
  const pressnumberCount154Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '154' })
  const pressnumberCount155Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '155' })
  const pressnumberCount156Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '156' })

//pob

const pressnumberSum303Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '303' })
  const pressnumberSum304Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '304' })
  const pressnumberSum305Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '305' })
  const pressnumberSum306Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '306' })
  const pressnumberSum151Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '151' })
  const pressnumberSum152Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '152' })
  const pressnumberSum153Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '153' })
  const pressnumberSum154Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '154' })
  const pressnumberSum155Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '155' })
  const pressnumberSum156Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '156' })


  const pressnumberCount303Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '303' })
  const pressnumberCount304Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '304' })
  const pressnumberCount305Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '305' })
  const pressnumberCount306Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '306' })
  const pressnumberCount151Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '151' })
  const pressnumberCount152Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '152' })
  const pressnumberCount153Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '153' })
  const pressnumberCount154Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '154' })
  const pressnumberCount155Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '155' })
  const pressnumberCount156Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '156' })

///pbb

const pressnumberSum303Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '303' })
  const pressnumberSum304Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '304' })
  const pressnumberSum305Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '305' })
  const pressnumberSum306Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '306' })
  const pressnumberSum151Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '151' })
  const pressnumberSum152Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '152' })
  const pressnumberSum153Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '153' })
  const pressnumberSum154Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '154' })
  const pressnumberSum155Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '155' })
  const pressnumberSum156Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '156' })


  const pressnumberCount303Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '303' })
  const pressnumberCount304Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '304' })
  const pressnumberCount305Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '305' })
  const pressnumberCount306Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '306' })
  const pressnumberCount151Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '151' })
  const pressnumberCount152Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '152' })
  const pressnumberCount153Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '153' })
  const pressnumberCount154Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '154' })
  const pressnumberCount155Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '155' })
  const pressnumberCount156Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '156' })
  




////apw

const pressnumberSum303Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '303' })
  const pressnumberSum304Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '304' })
  const pressnumberSum305Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '305' })
  const pressnumberSum306Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '306' })
  const pressnumberSum151Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '151' })
  const pressnumberSum152Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '152' })
  const pressnumberSum153Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '153' })
  const pressnumberSum154Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '154' })
  const pressnumberSum155Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '155' })
  const pressnumberSum156Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '156' })
  


  const pressnumberCount303Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '303' })
  const pressnumberCount304Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '304' })
  const pressnumberCount305Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '305' })
  const pressnumberCount306Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '306' })
  const pressnumberCount151Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '151' })
  const pressnumberCount152Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '152' })
  const pressnumberCount153Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '153' })
  const pressnumberCount154Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '154' })
  const pressnumberCount155Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '155' })
  const pressnumberCount156Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '156' })
///////sks

const pressnumberSum303Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '303' })
  const pressnumberSum304Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '304' })
  const pressnumberSum305Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '305' })
  const pressnumberSum306Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '306' })
  const pressnumberSum151Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '151' })
  const pressnumberSum152Sks= pressSumSks && pressSumSks.filter((d) => { return d.press_no == '152' })
  const pressnumberSum153Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '153' })
  const pressnumberSum154Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '154' })
  const pressnumberSum155Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '155' })
  const pressnumberSum156Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '156' })
 



  const pressnumberCount303Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '303' })
  const pressnumberCount304Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '304' })
  const pressnumberCount305Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '305' })
  const pressnumberCount306Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '306' })
  const pressnumberCount151Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '151' })
  const pressnumberCount152Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '152' })

  const pressnumberCount153Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '153' })
  const pressnumberCount154Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '154' })
  const pressnumberCount155Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '155' })
  const pressnumberCount156Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '156' })
  










                                                 
                                                 
  







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


      <div className='row dhead bo mt-5'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center '>
            
      
         <table className="table  table-bordered table-hover mb-0 ">
        <thead className="thead-dark trmain">
          <tr className='trmain'>
            <th scope="col-md-12 col-sm-12 col-lg-12" width='60%' height='1% ' style={{maxHeight:'1px'}}> LINE THREE REPORT - SLTL</th>
            
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
            <td scope="col-md-3 col-sm-3 col-lg-3"  colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>151</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 152</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>153</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>154</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>155</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>156</td>
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
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total))}</td>


               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total))

               }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberCount153Srt[0]?.total)) ? 0 : parseInt(pressnumberCount153Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Pob[0]?.total)) ? 0 : parseInt(pressnumberCount153Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Apw[0]?.total)) ? 0 : parseInt(pressnumberCount153Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Sks[0]?.total)) ? 0 : parseInt(pressnumberCount153Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount153Pbb[0]?.total))


               }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" > {(isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" > {(isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total))}</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberCount153Srt[0]?.total)) ? 0 : parseInt(pressnumberCount153Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount153Pob[0]?.total)) ? 0 : parseInt(pressnumberCount153Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount153Apw[0]?.total)) ? 0 : parseInt(pressnumberCount153Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount153Sks[0]?.total)) ? 0 : parseInt(pressnumberCount153Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount153Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount153Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total))

                                                  +(isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total))
                                                  
                                                  }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>



             </tr>

             <tr>
               <td scope="col-md-3 col-sm-3 col-lg-3" style={{ fontSize: '14px' }}>Weight</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" style={{ fontSize: '14px' }}>Ton</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total))




               }</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total))



               }</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total))

               }</td>


               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total))}</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberSum151Pob[0]?.total)) ?0:parseInt(pressnumberSum151Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum151Apw[0]?.total)) ?0:parseInt(pressnumberSum151Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberSum151Sks[0]?.total)) ?0:parseInt(pressnumberSum151Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum151Pbb[0]?.total)) ?0:parseInt(pressnumberSum151Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total))

                                                  +(isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total))
                                                  
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
      
      
     
      <div className='row mr-1 ml-1 mt-2 bo'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
            
      
         <table className="table  table-bordered table-hover ttt">
       
        <tbody>
          <tr>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3"  colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>303</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 304</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>305</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>306</td>
            
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
           
         
            
           
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Pcs</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total))}</td>


               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total))

               }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberCount305Srt[0]?.total)) ? 0 : parseInt(pressnumberCount305Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Pob[0]?.total)) ? 0 : parseInt(pressnumberCount305Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Apw[0]?.total)) ? 0 : parseInt(pressnumberCount305Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Sks[0]?.total)) ? 0 : parseInt(pressnumberCount305Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount305Pbb[0]?.total))


               }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
              
               <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberCount305Srt[0]?.total)) ? 0 : parseInt(pressnumberCount305Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount305Pob[0]?.total)) ? 0 : parseInt(pressnumberCount305Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount305Apw[0]?.total)) ? 0 : parseInt(pressnumberCount305Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount305Sks[0]?.total)) ? 0 : parseInt(pressnumberCount305Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount305Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount305Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total))


                                                 
                                                  }</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>



             </tr>

             <tr>
               <td scope="col-md-3 col-sm-3 col-lg-3" style={{ fontSize: '14px' }}>Weight</td>
               <td scope="col-md-3 col-sm-3 col-lg-3" style={{ fontSize: '14px' }}>Ton</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total))




               }</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total))



               }</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{
                 (isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total))

               }</td>


               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total))}</td>

               <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
               
               <td scope="col-md-3 col-sm-3 col-lg-3" >{( isNaN( parseInt(pressnumberSum303Pob[0]?.total)) ?0:parseInt(pressnumberSum303Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum303Apw[0]?.total)) ?0:parseInt(pressnumberSum303Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberSum303Sks[0]?.total)) ?0:parseInt(pressnumberSum303Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum303Pbb[0]?.total)) ?0:parseInt(pressnumberSum303Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total))


                                                 
                                                  
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>303</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount303Srt[0]?.total)) ?0:parseInt(pressnumberCount303Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total))
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum303Srt[0]?.total)) ?0:parseInt(pressnumberSum303Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum303Pob[0]?.total)) ?0:parseInt(pressnumberSum303Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum303Apw[0]?.total)) ?0:parseInt(pressnumberSum303Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum303Sks[0]?.total)) ?0:parseInt(pressnumberSum303Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum303Pbb[0]?.total)) ?0:parseInt(pressnumberSum303Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                         (isNaN( parseInt(pressnumberSum303Srt[0]?.total)) ?0:parseInt(pressnumberSum303Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum303Pob[0]?.total)) ?0:parseInt(pressnumberSum303Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum303Apw[0]?.total)) ?0:parseInt(pressnumberSum303Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum303Sks[0]?.total)) ?0:parseInt(pressnumberSum303Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum303Pbb[0]?.total)) ?0:parseInt(pressnumberSum303Pbb[0]?.total))




            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>304</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount304Srt[0]?.total)) ?0:parseInt(pressnumberCount304Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount304Pob[0]?.total)) ?0:parseInt(pressnumberCount304Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount304Apw[0]?.total)) ?0:parseInt(pressnumberCount304Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount304Sks[0]?.total)) ?0:parseInt(pressnumberCount304Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount304Pbb[0]?.total)) ?0:parseInt(pressnumberCount304Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
              (isNaN( parseInt(pressnumberCount304Srt[0]?.total)) ?0:parseInt(pressnumberCount304Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Pob[0]?.total)) ?0:parseInt(pressnumberCount304Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Apw[0]?.total)) ?0:parseInt(pressnumberCount304Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Sks[0]?.total)) ?0:parseInt(pressnumberCount304Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Pbb[0]?.total)) ?0:parseInt(pressnumberCount304Pbb[0]?.total))
                                                          
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum304Srt[0]?.total)) ?0:parseInt(pressnumberSum304Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum304Pob[0]?.total)) ?0:parseInt(pressnumberSum304Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum304Apw[0]?.total)) ?0:parseInt(pressnumberSum304Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum304Sks[0]?.total)) ?0:parseInt(pressnumberSum304Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum304Pbb[0]?.total)) ?0:parseInt(pressnumberSum304Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                       (isNaN( parseInt(pressnumberSum304Srt[0]?.total)) ?0:parseInt(pressnumberSum304Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum304Pob[0]?.total)) ?0:parseInt(pressnumberSum304Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum304Apw[0]?.total)) ?0:parseInt(pressnumberSum304Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum304Sks[0]?.total)) ?0:parseInt(pressnumberSum304Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum304Pbb[0]?.total)) ?0:parseInt(pressnumberSum304Pbb[0]?.total))


                                                   
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>305</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount305Srt[0]?.total)) ?0:parseInt(pressnumberCount305Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount305Pob[0]?.total)) ?0:parseInt(pressnumberCount305Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount305Apw[0]?.total)) ?0:parseInt(pressnumberCount305Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount305Sks[0]?.total)) ?0:parseInt(pressnumberCount305Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount305Pbb[0]?.total)) ?0:parseInt(pressnumberCount305Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      (isNaN( parseInt(pressnumberCount305Srt[0]?.total)) ?0:parseInt(pressnumberCount305Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount305Pob[0]?.total)) ?0:parseInt(pressnumberCount305Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount305Apw[0]?.total)) ?0:parseInt(pressnumberCount305Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount305Sks[0]?.total)) ?0:parseInt(pressnumberCount305Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount305Pbb[0]?.total)) ?0:parseInt(pressnumberCount305Pbb[0]?.total) )


            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum305Srt[0]?.total)) ?0:parseInt(pressnumberSum305Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum305Pob[0]?.total)) ?0:parseInt(pressnumberSum305Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum305Apw[0]?.total)) ?0:parseInt(pressnumberSum305Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum305Sks[0]?.total)) ?0:parseInt(pressnumberSum305Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum305Pbb[0]?.total)) ?0:parseInt(pressnumberSum305Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      ( isNaN( parseInt(pressnumberSum305Srt[0]?.total)) ?0:parseInt(pressnumberSum305Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum305Pob[0]?.total)) ?0:parseInt(pressnumberSum305Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum305Apw[0]?.total)) ?0:parseInt(pressnumberSum305Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum305Sks[0]?.total)) ?0:parseInt(pressnumberSum305Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum305Pbb[0]?.total)) ?0:parseInt(pressnumberSum305Pbb[0]?.total))

            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>306</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount306Srt[0]?.total)) ?0:parseInt(pressnumberCount306Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount306Pob[0]?.total)) ?0:parseInt(pressnumberCount306Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount306Apw[0]?.total)) ?0:parseInt(pressnumberCount306Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount306Sks[0]?.total)) ?0:parseInt(pressnumberCount306Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount306Pbb[0]?.total)) ?0:parseInt(pressnumberCount306Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{  ( isNaN( parseInt(pressnumberCount306Srt[0]?.total)) ?0:parseInt(pressnumberCount306Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount306Pob[0]?.total)) ?0:parseInt(pressnumberCount306Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount306Apw[0]?.total)) ?0:parseInt(pressnumberCount306Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount306Sks[0]?.total)) ?0:parseInt(pressnumberCount306Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount306Pbb[0]?.total)) ?0:parseInt(pressnumberCount306Pbb[0]?.total))}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum306Srt[0]?.total)) ?0:parseInt(pressnumberSum306Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum306Pob[0]?.total)) ?0:parseInt(pressnumberSum306Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum306Apw[0]?.total)) ?0:parseInt(pressnumberSum306Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum306Sks[0]?.total)) ?0:parseInt(pressnumberSum306Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum306Pbb[0]?.total)) ?0:parseInt(pressnumberSum306Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum306Srt[0]?.total)) ?0:parseInt(pressnumberSum306Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum306Pob[0]?.total)) ?0:parseInt(pressnumberSum306Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum306Apw[0]?.total)) ?0:parseInt(pressnumberSum306Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum306Sks[0]?.total)) ?0:parseInt(pressnumberSum306Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum306Pbb[0]?.total)) ?0:parseInt(pressnumberSum306Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>  <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>151</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{(isNaN( parseInt(pressnumberCount151Srt[0]?.total)) ?0:parseInt(pressnumberCount151Srt[0]?.total) )}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                        {(isNaN( parseInt(pressnumberCount151Srt[0]?.total)) ?0:parseInt(pressnumberCount151Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total) )}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum151Srt[0]?.total)) ?0:parseInt(pressnumberSum151Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum151Pob[0]?.total)) ?0:parseInt(pressnumberSum151Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum151Apw[0]?.total)) ?0:parseInt(pressnumberSum151Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum151Sks[0]?.total)) ?0:parseInt(pressnumberSum151Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum151Pbb[0]?.total)) ?0:parseInt(pressnumberSum151Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum151Srt[0]?.total)) ?0:parseInt(pressnumberSum151Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum151Pob[0]?.total)) ?0:parseInt(pressnumberSum151Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum151Apw[0]?.total)) ?0:parseInt(pressnumberSum151Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum151Sks[0]?.total)) ?0:parseInt(pressnumberSum151Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum151Pbb[0]?.total)) ?0:parseInt(pressnumberSum151Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
         
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>152</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount152Srt[0]?.total)) ?0:parseInt(pressnumberCount152Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount152Pob[0]?.total)) ?0:parseInt(pressnumberCount152Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount152Apw[0]?.total)) ?0:parseInt(pressnumberCount152Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount152Sks[0]?.total)) ?0:parseInt(pressnumberCount152Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount152Pbb[0]?.total)) ?0:parseInt(pressnumberCount152Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberCount152Srt[0]?.total)) ?0:parseInt(pressnumberCount152Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount152Pob[0]?.total)) ?0:parseInt(pressnumberCount152Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount152Apw[0]?.total)) ?0:parseInt(pressnumberCount152Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount152Sks[0]?.total)) ?0:parseInt(pressnumberCount152Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount152Pbb[0]?.total)) ?0:parseInt(pressnumberCount152Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum152Srt[0]?.total)) ?0:parseInt(pressnumberSum152Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum152Pob[0]?.total)) ?0:parseInt(pressnumberSum152Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum152Apw[0]?.total)) ?0:parseInt(pressnumberSum152Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum152Sks[0]?.total)) ?0:parseInt(pressnumberSum152Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum152Pbb[0]?.total)) ?0:parseInt(pressnumberSum152Pbb[0]?.total).toFixed(1)}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                   {(isNaN( parseInt(pressnumberSum152Srt[0]?.total)) ?0:parseInt(pressnumberSum152Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum152Pob[0]?.total)) ?0:parseInt(pressnumberSum152Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum152Apw[0]?.total)) ?0:parseInt(pressnumberSum152Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum152Sks[0]?.total)) ?0:parseInt(pressnumberSum152Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum152Pbb[0]?.total)) ?0:parseInt(pressnumberSum152Pbb[0]?.total))}
            </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>153</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount153Srt[0]?.total)) ?0:parseInt(pressnumberCount153Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount153Pob[0]?.total)) ?0:parseInt(pressnumberCount153Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount153Apw[0]?.total)) ?0:parseInt(pressnumberCount153Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount153Sks[0]?.total)) ?0:parseInt(pressnumberCount153Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount153Pbb[0]?.total)) ?0:parseInt(pressnumberCount153Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount153Pob[0]?.total)) ?0:parseInt(pressnumberCount153Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount153Apw[0]?.total)) ?0:parseInt(pressnumberCount153Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount153Sks[0]?.total)) ?0:parseInt(pressnumberCount153Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount153Pbb[0]?.total)) ?0:parseInt(pressnumberCount153Pbb[0]?.total))
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum153Srt[0]?.total)) ?0:parseInt(pressnumberSum153Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum153Pob[0]?.total)) ?0:parseInt(pressnumberSum153Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum153Apw[0]?.total)) ?0:parseInt(pressnumberSum153Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum153Sks[0]?.total)) ?0:parseInt(pressnumberSum153Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum153Pbb[0]?.total)) ?0:parseInt(pressnumberSum153Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                         (isNaN( parseInt(pressnumberSum153Srt[0]?.total)) ?0:parseInt(pressnumberSum153Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum153Pob[0]?.total)) ?0:parseInt(pressnumberSum153Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum153Apw[0]?.total)) ?0:parseInt(pressnumberSum153Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum153Sks[0]?.total)) ?0:parseInt(pressnumberSum153Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum153Pbb[0]?.total)) ?0:parseInt(pressnumberSum153Pbb[0]?.total))




            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>154</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount154Srt[0]?.total)) ?0:parseInt(pressnumberCount154Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount154Pob[0]?.total)) ?0:parseInt(pressnumberCount154Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount154Apw[0]?.total)) ?0:parseInt(pressnumberCount154Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount154Sks[0]?.total)) ?0:parseInt(pressnumberCount154Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount154Pbb[0]?.total)) ?0:parseInt(pressnumberCount154Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
              (isNaN( parseInt(pressnumberCount154Srt[0]?.total)) ?0:parseInt(pressnumberCount154Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Pob[0]?.total)) ?0:parseInt(pressnumberCount154Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Apw[0]?.total)) ?0:parseInt(pressnumberCount154Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Sks[0]?.total)) ?0:parseInt(pressnumberCount154Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Pbb[0]?.total)) ?0:parseInt(pressnumberCount154Pbb[0]?.total))
                                                          
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum154Srt[0]?.total)) ?0:parseInt(pressnumberSum154Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum154Pob[0]?.total)) ?0:parseInt(pressnumberSum154Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum154Apw[0]?.total)) ?0:parseInt(pressnumberSum154Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum154Sks[0]?.total)) ?0:parseInt(pressnumberSum154Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum154Pbb[0]?.total)) ?0:parseInt(pressnumberSum154Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                       (isNaN( parseInt(pressnumberSum154Srt[0]?.total)) ?0:parseInt(pressnumberSum154Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum154Pob[0]?.total)) ?0:parseInt(pressnumberSum154Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum154Apw[0]?.total)) ?0:parseInt(pressnumberSum154Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum154Sks[0]?.total)) ?0:parseInt(pressnumberSum154Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum154Pbb[0]?.total)) ?0:parseInt(pressnumberSum154Pbb[0]?.total))


                                                   
            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>155</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount155Srt[0]?.total)) ?0:parseInt(pressnumberCount155Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount155Pob[0]?.total)) ?0:parseInt(pressnumberCount155Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount155Apw[0]?.total)) ?0:parseInt(pressnumberCount155Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount155Sks[0]?.total)) ?0:parseInt(pressnumberCount155Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount155Pbb[0]?.total)) ?0:parseInt(pressnumberCount155Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      (isNaN( parseInt(pressnumberCount155Srt[0]?.total)) ?0:parseInt(pressnumberCount155Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount155Pob[0]?.total)) ?0:parseInt(pressnumberCount155Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount155Apw[0]?.total)) ?0:parseInt(pressnumberCount155Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount155Sks[0]?.total)) ?0:parseInt(pressnumberCount155Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount155Pbb[0]?.total)) ?0:parseInt(pressnumberCount155Pbb[0]?.total) )


            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum155Srt[0]?.total)) ?0:parseInt(pressnumberSum155Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum155Pob[0]?.total)) ?0:parseInt(pressnumberSum155Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum155Apw[0]?.total)) ?0:parseInt(pressnumberSum155Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum155Sks[0]?.total)) ?0:parseInt(pressnumberSum155Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum155Pbb[0]?.total)) ?0:parseInt(pressnumberSum155Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{
                                                      ( isNaN( parseInt(pressnumberSum155Srt[0]?.total)) ?0:parseInt(pressnumberSum155Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum155Pob[0]?.total)) ?0:parseInt(pressnumberSum155Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum155Apw[0]?.total)) ?0:parseInt(pressnumberSum155Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum155Sks[0]?.total)) ?0:parseInt(pressnumberSum155Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum155Pbb[0]?.total)) ?0:parseInt(pressnumberSum155Pbb[0]?.total))

            }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>156</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount156Srt[0]?.total)) ?0:parseInt(pressnumberCount156Srt[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount156Pob[0]?.total)) ?0:parseInt(pressnumberCount156Pob[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount156Apw[0]?.total)) ?0:parseInt(pressnumberCount156Apw[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount156Sks[0]?.total)) ?0:parseInt(pressnumberCount156Sks[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberCount156Pbb[0]?.total)) ?0:parseInt(pressnumberCount156Pbb[0]?.total) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{  ( isNaN( parseInt(pressnumberCount156Srt[0]?.total)) ?0:parseInt(pressnumberCount156Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount156Pob[0]?.total)) ?0:parseInt(pressnumberCount156Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount156Apw[0]?.total)) ?0:parseInt(pressnumberCount156Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount156Sks[0]?.total)) ?0:parseInt(pressnumberCount156Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount156Pbb[0]?.total)) ?0:parseInt(pressnumberCount156Pbb[0]?.total))}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum156Srt[0]?.total)) ?0:parseInt(pressnumberSum156Srt[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum156Pob[0]?.total)) ?0:parseInt(pressnumberSum156Pob[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum156Apw[0]?.total)) ?0:parseInt(pressnumberSum156Apw[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum156Sks[0]?.total)) ?0:parseInt(pressnumberSum156Sks[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{isNaN( parseInt(pressnumberSum156Pbb[0]?.total)) ?0:parseInt(pressnumberSum156Pbb[0]?.total).toFixed(1) }</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >
                                                    {(isNaN( parseInt(pressnumberSum156Srt[0]?.total)) ?0:parseInt(pressnumberSum156Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum156Pob[0]?.total)) ?0:parseInt(pressnumberSum156Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum156Apw[0]?.total)) ?0:parseInt(pressnumberSum156Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum156Sks[0]?.total)) ?0:parseInt(pressnumberSum156Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum156Pbb[0]?.total)) ?0:parseInt(pressnumberSum156Pbb[0]?.total))} 
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

export default LineThree
