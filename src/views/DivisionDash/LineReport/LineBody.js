import React,{useContext, useEffect} from 'react'
import './line.css'
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import moment from 'moment'
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'
import Page from 'src/components/Page';



const LineBody = () => {


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















      const fetchDataShiftPressWiseSumPOB = async () => {

        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/sum/${dateone}/${datetwo}/${shift}/POB`);
    
          setPressSumPob(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    
      const fetchDataTotalPressWiseSumPOB = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/totalall/sum/${dateone}/${datetwo}/POB`);
    
          setPressSumPob(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    
      //////////count
      const fetchDataShiftPressWiseCountPOB = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/count/${dateone}/${datetwo}/${shift}/POB`);
    
          setPressCountPob(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    
      const fetchDataTotalPressWiseCountPOB = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/totalall/count/${dateone}/${datetwo}/POB`);
    
          setPressCountPob(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    //////////////srt
    const fetchDataShiftPressWiseSumSRT = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/sum/${dateone}/${datetwo}/${shift}/SRT`);
    
          setPressSumSrt(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    
      const fetchDataTotalPressWiseSumSRT = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/totalall/sum/${dateone}/${datetwo}/SRT`);
    
          setPressSumSrt(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    
      //////////count
      const fetchDataShiftPressWiseCountSRT = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/count/${dateone}/${datetwo}/${shift}/SRT`);
    
          setPressCountSrt(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    
      const fetchDataTotalPressWiseCountSRT = async () => {
    
        try {
    
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/presswiseline/presswise/totalall/count/${dateone}/${datetwo}/SRT`);
    
          setPressCountSrt(responsePressOne.data.data.data);
    
        } catch (err) {
          console.log(err);
        }
      };
    
    
    //////PBB
    
    const fetchDataShiftPressWiseSumPBB = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/sum/${dateone}/${datetwo}/${shift}/PBB`);
    
        setPressSumPbb(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    const fetchDataTotalPressWiseSumPBB = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/totalall/sum/${dateone}/${datetwo}/PBB`);
    
        setPressSumPbb(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    //////////count
    const fetchDataShiftPressWiseCountPBB = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/count/${dateone}/${datetwo}/${shift}/PBB`);
    
        setPressCountPbb(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    const fetchDataTotalPressWiseCountPBB = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/totalall/count/${dateone}/${datetwo}/PBB`);
    
        setPressCountPbb(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    ////APW
    
    const fetchDataShiftPressWiseSumAPW= async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/sum/${dateone}/${datetwo}/${shift}/APW`);
    
        setPressSumApw(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    const fetchDataTotalPressWiseSumAPW = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/totalall/sum/${dateone}/${datetwo}/APW`);
    
        setPressSumApw(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    //////////count
    const fetchDataShiftPressWiseCountAPW = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/count/${dateone}/${datetwo}/${shift}/APW`);
    
        setPressCountApw(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    const fetchDataTotalPressWiseCountAPW = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/totalall/count/${dateone}/${datetwo}/APW`);
    
        setPressCountApw(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    ///SKS
    const fetchDataShiftPressWiseSumSKS = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/sum/${dateone}/${datetwo}/${shift}/SKS`);
    
        setPressSumSks(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    const fetchDataTotalPressWiseSumSKS = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/totalall/sum/${dateone}/${datetwo}/SKS`);
    
        setPressSumSks(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    //////////count
    const fetchDataShiftPressWiseCountSKS = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/shiftall/count/${dateone}/${datetwo}/${shift}/SKS`);
    
        setPressCountSks(responsePressOne.data.data.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    const fetchDataTotalPressWiseCountSKS = async () => {
    
      try {
    
        //       ///////////////////////////////////////////////////
        const responsePressOne = await api.get(`/presswiseline/presswise/totalall/count/${dateone}/${datetwo}/SKS`);
    
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
    let initialValue = 0
    //srt
      const pressnumberSumLineOneSrt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberSumLineTwoSrt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberSumLineThreeSrt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })

      
  let sumpressnumberSumLineOneSrt = pressnumberSumLineOneSrt.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberSumLineTwoSrt = pressnumberSumLineTwoSrt.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberSumLineThreeSrt = pressnumberSumLineThreeSrt.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)








     
   
    
      const pressnumberCountLineOneSrt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberCountLineTwoSrt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberCountLineThreeSrt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
       

      let countpressnumberSumLineOneSrt = pressnumberCountLineOneSrt.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineTwoSrt = pressnumberCountLineTwoSrt.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineThreeSrt = pressnumberCountLineThreeSrt.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    









    
    //pob
    
    const pressnumberSumLineOnePob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberSumLineTwoPob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberSumLineThreePob = pressSumPob && pressSumPob.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
     
    

      let sumpressnumberSumLineOnePob = pressnumberSumLineOnePob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoPob = pressnumberSumLineTwoPob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreePob = pressnumberSumLineThreePob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
      const pressnumberCountLineOnePob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberCountLineTwoPob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberCountLineThreePob = pressCountPob && pressCountPob.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
      
      let countpressnumberSumLineOnePob = pressnumberCountLineOnePob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineTwoPob = pressnumberCountLineTwoPob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineThreePob = pressnumberCountLineThreePob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    ///pbb
    
    const pressnumberSumLineOnePbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberSumLineTwoPbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberSumLineThreePbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
      
      let sumpressnumberSumLineOnePbb = pressnumberSumLineOnePbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoPbb = pressnumberSumLineTwoPbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreePbb = pressnumberSumLineThreePbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
    
      const pressnumberCountLineOnePbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberCountLineTwoPbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberCountLineThreePbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
      
      let countpressnumberSumLineOnePbb = pressnumberCountLineOnePbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineTwoPbb = pressnumberCountLineTwoPbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineThreePbb = pressnumberCountLineThreePbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    ////apw
    
    const pressnumberSumLineOneApw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberSumLineTwoApw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberSumLineThreeApw = pressSumApw && pressSumApw.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
      
      let sumpressnumberSumLineOneApw = pressnumberSumLineOneApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoApw = pressnumberSumLineTwoApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreeApw = pressnumberSumLineThreeApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
    
      const pressnumberCountLineOneApw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberCountLineTwoApw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberCountLineThreeApw = pressCountApw && pressCountApw.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
     
      let countpressnumberSumLineOneApw = pressnumberCountLineOneApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineTwoApw = pressnumberCountLineTwoApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineThreeApw = pressnumberCountLineThreeApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    ///////sks
    
    const pressnumberSumLineOneSks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberSumLineTwoSks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberSumLineThreeSks = pressSumSks && pressSumSks.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
     
      let sumpressnumberSumLineOneSks = pressnumberSumLineOneSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoSks = pressnumberSumLineTwoSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreeSks = pressnumberSumLineThreeSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
      const pressnumberCountLineOneSks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '1001' ||d.press_no =='501'||d.press_no =='502'||d.press_no =='401'||d.press_no =='402'||d.press_no =='651' })
      const pressnumberCountLineTwoSks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '102' ||d.press_no =='103'||d.press_no =='104'||d.press_no =='105'||d.press_no =='106'||d.press_no =='107' })
      const pressnumberCountLineThreeSks = pressCountSks && pressCountSks.filter((d) => { return d.press_no == '303' ||d.press_no =='304'||d.press_no =='305'||d.press_no =='306'||d.press_no =='151'||d.press_no =='152'||d.press_no =='153'||d.press_no =='154'||d.press_no =='155'||d.press_no =='151'||d.press_no =='156' })
     
    
      let countpressnumberSumLineOneSks = pressnumberCountLineOneSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineTwoSks = pressnumberCountLineTwoSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineThreeSks = pressnumberCountLineThreeSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    



      
















      const pressOne =(e)=>{
         e.preventDefault();
        
       navigate('/app/lineone')
      }


      const pressTwo =(e)=>{
         e.preventDefault();
        
         navigate('/app/linetwo')
      }

      const pressThree =(e)=>{
         e.preventDefault();
        
         navigate('/app/linethree')
      }

      const pressFour =(e)=>{
         e.preventDefault();
        
         navigate('/app/linefour')
      }


      const handleOption=(e)=>{
        setShift(e.target.value)
      }


   return (<>
      <div className='thm ' >


       <div className='row dhead bo mt-3'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center  mt-5'>


           <table className="table  table-bordered table-hover mb-0 ">
             <thead className="thead-dark trmain">
               <tr className='trmain'>
                 <th scope="col-md-12 col-sm-12 col-lg-12" width='60%' height='1% ' style={{ maxHeight: '1px' }}> LINE PRODUCTION REPORT - SLTL</th>

                 <th scope="col-md-1 col-sm-1 col-lg-1" width='10%' style={{ maxHeight: '1px' }}> <div className="col">
                   <select className="col form-control " aria-label="Default select example" onChange={(e) => handleOption(e)}>
                     <option selected>Shift</option>
                     <option value="A"   >A</option>
                     <option value="B"   >B</option>
                     <option value="C"  >C </option>
                     <option value=""  >TOTAL</option>
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
            <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>LINE 01</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> LINE 02</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>LINE 03</td>
        
           
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='10%' colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
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
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Pcs</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" > </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks +countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks+countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
           
            
            
            
          </tr>
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Weight</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineOnePob+sumpressnumberSumLineOnePbb+sumpressnumberSumLineOneApw+
                                                        sumpressnumberSumLineOneSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineTwoSrt+sumpressnumberSumLineTwoPob+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineTwoApw+
                                                        sumpressnumberSumLineTwoSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineThreeSrt+sumpressnumberSumLineThreePob+sumpressnumberSumLineThreePbb+sumpressnumberSumLineThreeApw+
                                                        sumpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineOnePob+sumpressnumberSumLineOnePbb+sumpressnumberSumLineOneApw+
                                                        sumpressnumberSumLineOneSks +sumpressnumberSumLineTwoSrt+sumpressnumberSumLineTwoPob+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineTwoApw+
                                                        sumpressnumberSumLineTwoSks+sumpressnumberSumLineThreeSrt+sumpressnumberSumLineThreePob+sumpressnumberSumLineThreePbb+sumpressnumberSumLineThreeApw+
                                                        sumpressnumberSumLineThreeSks}</td>
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
            
            
            
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>OPE</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>%</td>
            
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
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>RA  </td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
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
            
            
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>OT</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>DOT</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>MP</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" colspan='2'>SUMMARY</td>
          
            
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
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>LINE 01</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> LINE 02</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>LINE 03</td>
        
          
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='10%' colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontWeight:'bold'}}>TYPE</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontWeight:'bold'}} >UOM</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
           
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>SRT</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineTwoSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineThreeSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneSrt+countpressnumberSumLineTwoSrt+countpressnumberSumLineThreeSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
           
            
            
          </tr>
          
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineTwoSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineThreeSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineTwoSrt+sumpressnumberSumLineThreeSrt}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
           
            
            
            
          </tr>
          
          
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>POB</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOnePob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineTwoPob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineThreePob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOnePob+countpressnumberSumLineTwoPob+countpressnumberSumLineThreePob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOnePob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineTwoPob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineThreePob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOnePob+sumpressnumberSumLineTwoPob+sumpressnumberSumLineThreePob}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>APW</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineTwoApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineThreeApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneApw+countpressnumberSumLineTwoApw+countpressnumberSumLineThreeApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
          <tr>
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineTwoApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineThreeApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneApw+sumpressnumberSumLineTwoApw+sumpressnumberSumLineThreeApw}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
          </tr>
        

          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>SKS</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineTwoSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOneSks+countpressnumberSumLineTwoSks+countpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineTwoSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOneSks+sumpressnumberSumLineTwoSks+sumpressnumberSumLineThreeSks}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>  <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>PBB</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Nos</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOnePbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineTwoPbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineThreePbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{countpressnumberSumLineOnePbb+countpressnumberSumLineTwoPbb+countpressnumberSumLineThreePbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>
          <tr>
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOnePbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineTwoPbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineThreePbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" >{sumpressnumberSumLineOnePbb+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineThreePbb}</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
          </tr>

         
          {/* <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" colspan='2'>SUMMARY</td>
          
            
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            <td scope="col-md-3 col-sm-3 col-lg-3" ></td>
            
            
            
            
          </tr> */}
          </tbody>
          </table>
      </div>    </div>
      
      
      
      
      
      
        </>
   )
}

export default LineBody
