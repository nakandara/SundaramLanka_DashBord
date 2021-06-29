import React,{useContext, useEffect} from 'react'
import './line.css'
import {  useNavigate } from 'react-router-dom';

import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'




const LineOne = () => {
  const {  ddate,  shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,pressCountA,setPressCountA,
    pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC,
    pressSumKaizen ,setPressSumKaizen,pressSumNearmiss,setPressSumNearmiss,pressSumRa ,setPressSumRa,pressSumNra ,setPressSumNra,pressSumBd ,setPressSumBd,pressState,setPressState } = useContext(reportContext)
  


      const navigate = useNavigate();
     


      const oeeChange =(e)=>{
        e.preventDefault();
       setPressState('1001')
        navigate('/app/oeemachinewise')
     }


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

//////////////////////////kpi


const fetchDataShiftPressWiseKpiKaizen = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpishift/kaizen/${dateone}/${datetwo}/${shift}`);

    setPressSumKaizen(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataShiftPressWiseKpiNearmiss = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpishift/nearmiss/${dateone}/${datetwo}/${shift}`);

    setPressSumNearmiss(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataShiftPressWiseKpiRa = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpishift/ra/${dateone}/${datetwo}/${shift}`);

    setPressSumRa(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataShiftPressWiseKpiNra = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpishift/nra/${dateone}/${datetwo}/${shift}`);

    setPressSumNra(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataShiftPressWiseKpiBd = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateone}/${datetwo}/${shift}`);

    setPressSumBd(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


////////////////////////kpi total

const fetchDataTotalPressWiseKpiKaizen = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpitotal/kaizen/${dateone}/${datetwo}`);

    setPressSumKaizen(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseKpiNearmiss = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpitotal/nearmiss/${dateone}/${datetwo}`);

    setPressSumNearmiss(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseKpiRa = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpitotal/ra/${dateone}/${datetwo}`);

    setPressSumRa(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseKpiNra = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpitotal/nra/${dateone}/${datetwo}`);

    setPressSumNra(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseKpiBd = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpitotal/bd/${dateone}/${datetwo}`);

    setPressSumBd(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



///////////////////////////

const fetchDataShiftPressWiseCountA = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateone}/${datetwo}/${shift}/A`);

    setPressCountA(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

//console.log(pressCountA);

//grade wise sum grade


const fetchDataShiftPressWiseSumB= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualityshift/sum/${dateone}/${datetwo}/${shift}/B`);

    setPressSumB(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

const fetchDataShiftPressWiseSumE= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualityshift/sum/${dateone}/${datetwo}/${shift}/E`);

    setPressSumE(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataShiftPressWiseSumR= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualityshift/sum/${dateone}/${datetwo}/${shift}/R`);

    setPressSumR(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataShiftPressWiseSumL= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualityshift/sum/${dateone}/${datetwo}/${shift}/L`);

    setPressSumL(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

const fetchDataShiftPressWiseSumC= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualityshift/sum/${dateone}/${datetwo}/${shift}/C`);

    setPressSumC(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



/////////////////TOTAL QUALITY


const fetchDataTotalPressWiseCountA = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateone}/${datetwo}/A`);

    setPressCountA(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



//grade wise sum grade


const fetchDataTotalPressWiseSumB= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualitytotal/sum/${dateone}/${datetwo}/B`);

    setPressSumB(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

const fetchDataTotalPressWiseSumE= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualitytotal/sum/${dateone}/${datetwo}/E`);

    setPressSumE(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseSumR= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualitytotal/sum/${dateone}/${datetwo}/R`);

    setPressSumR(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

const fetchDataTotalPressWiseSumL= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualitytotal/sum/${dateone}/${datetwo}/L`);

    setPressSumL(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};




const fetchDataTotalPressWiseSumC= async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/qualitygrade/qualitytotal/sum/${dateone}/${datetwo}/C`);

    setPressSumL(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};

//////////////////////////////

  
  

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
    if (shift === 'A' || shift === 'B' || shift === 'C') {
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


      fetchDataShiftPressWiseCountA()
      fetchDataShiftPressWiseSumB()
      fetchDataShiftPressWiseSumE()
      fetchDataShiftPressWiseSumR()
      fetchDataShiftPressWiseSumL()
      fetchDataShiftPressWiseSumC()


      fetchDataShiftPressWiseKpiKaizen()
      fetchDataShiftPressWiseKpiNearmiss()
      fetchDataShiftPressWiseKpiRa()
      fetchDataShiftPressWiseKpiNra()
      fetchDataShiftPressWiseKpiBd()

     


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
      fetchDataShiftPressWiseCountA()

      fetchDataTotalPressWiseCountA()
      fetchDataTotalPressWiseSumB()
      fetchDataTotalPressWiseSumE()
      fetchDataTotalPressWiseSumR()
      fetchDataTotalPressWiseSumL()
      fetchDataTotalPressWiseSumC()

      fetchDataTotalPressWiseKpiKaizen()
      fetchDataTotalPressWiseKpiNearmiss()
      fetchDataTotalPressWiseKpiRa()
      fetchDataTotalPressWiseKpiNra()
      fetchDataTotalPressWiseKpiBd()
     
    }


  }, [dateone, shift])

//console.log(pressSumKaizen);
  // useEffect(() => { 
  //   if (shift === 'A' || shift === 'B' || shift === 'C') {
      


  //     fetchDataShiftPressWiseCountA()
  //     fetchDataShiftPressWiseSumB()
  //     fetchDataShiftPressWiseSumE()
  //     fetchDataShiftPressWiseSumR()
  //     fetchDataShiftPressWiseSumL()
  //     fetchDataShiftPressWiseSumC()


  //   } else {
      


  //     fetchDataTotalPressWiseCountA()
  //     fetchDataTotalPressWiseSumB()
  //     fetchDataTotalPressWiseSumE()
  //     fetchDataTotalPressWiseSumR()
  //     fetchDataTotalPressWiseSumL()
  //     fetchDataTotalPressWiseSumC()
  //   }


  // }, [dateone, shift])

  
/////filter

//srt
  const pressnumberSum1001Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '1001' })
  const pressnumberSum651Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '651' })
  const pressnumberSum401Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '401' })
  const pressnumberSum402Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '402' })
  const pressnumberSum501Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '501' })
  const pressnumberSum502Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '502' })



  const pressnumberCount1001Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '1001' })
  const pressnumberCount651Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '651' })
  const pressnumberCount401Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '401' })
  const pressnumberCount402Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '402' })
  const pressnumberCount501Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '501' })
  const pressnumberCount502Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '502' })


//pob

const pressnumberSum1001Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '1001' })
  const pressnumberSum651Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '651' })
  const pressnumberSum401Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '401' })
  const pressnumberSum402Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '402' })
  const pressnumberSum501Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '501' })
  const pressnumberSum502Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '502' })



  const pressnumberCount1001Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '1001' })
  const pressnumberCount651Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '651' })
  const pressnumberCount401Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '401' })
  const pressnumberCount402Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '402' })
  const pressnumberCount501Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '501' })
  const pressnumberCount502Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '502' })


///pbb

const pressnumberSum1001Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '1001' })
  const pressnumberSum651Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '651' })
  const pressnumberSum401Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '401' })
  const pressnumberSum402Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '402' })
  const pressnumberSum501Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '501' })
  const pressnumberSum502Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '502' })



  const pressnumberCount1001Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '1001' })
  const pressnumberCount651Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '651' })
  const pressnumberCount401Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '401' })
  const pressnumberCount402Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '402' })
  const pressnumberCount501Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '501' })
  const pressnumberCount502Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '502' })



////apw

const pressnumberSum1001Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '1001' })
  const pressnumberSum651Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '651' })
  const pressnumberSum401Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '401' })
  const pressnumberSum402Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '402' })
  const pressnumberSum501Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '501' })
  const pressnumberSum502Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '502' })



  const pressnumberCount1001Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '1001' })
  const pressnumberCount651Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '651' })
  const pressnumberCount401Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '401' })
  const pressnumberCount402Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '402' })
  const pressnumberCount501Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '501' })
  const pressnumberCount502Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '502' })

///////sks

const pressnumberSum1001Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '1001' })
  const pressnumberSum651Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '651' })
  const pressnumberSum401Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '401' })
  const pressnumberSum402Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '402' })
  const pressnumberSum501Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '501' })
  const pressnumberSum502Sks= pressSumSks && pressSumSks.filter((d) => { return d.press_no === '502' })



  const pressnumberCount1001Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '1001' })
  const pressnumberCount651Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '651' })
  const pressnumberCount401Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '401' })
  const pressnumberCount402Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '402' })
  const pressnumberCount501Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '501' })
  const pressnumberCount502Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '502' })






  /////filter-quality

//A
// const pressnumberSum1001A = pressSumA && pressSumA.filter((d) => { return d.press_no === '1001' })
// const pressnumberSum651A = pressSumA && pressSumA.filter((d) => { return d.press_no === '651' })
// const pressnumberSum401A = pressSumA && pressSumA.filter((d) => { return d.press_no === '401' })
// const pressnumberSum402A = pressSumA && pressSumA.filter((d) => { return d.press_no === '402' })
// const pressnumberSum501A = pressSumA && pressSumA.filter((d) => { return d.press_no === '501' })
// const pressnumberSum502A = pressSumA && pressSumA.filter((d) => { return d.press_no === '502' })



const pressnumberCount1001A = pressCountA && pressCountA.filter((d) => { return d.press_no === '1001' })
const pressnumberCount651A = pressCountA && pressCountA.filter((d) => { return d.press_no === '651' })
const pressnumberCount401A = pressCountA && pressCountA.filter((d) => { return d.press_no === '401' })
const pressnumberCount402A = pressCountA && pressCountA.filter((d) => { return d.press_no === '402' })
const pressnumberCount501A = pressCountA && pressCountA.filter((d) => { return d.press_no === '501' })
const pressnumberCount502A = pressCountA && pressCountA.filter((d) => { return d.press_no === '502' })


//B

const pressnumberSum1001B = pressSumB && pressSumB.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651B = pressSumB && pressSumB.filter((d) => { return d.press_no === '651' })
const pressnumberSum401B = pressSumB && pressSumB.filter((d) => { return d.press_no === '401' })
const pressnumberSum402B = pressSumB && pressSumB.filter((d) => { return d.press_no === '402' })
const pressnumberSum501B = pressSumB && pressSumB.filter((d) => { return d.press_no === '501' })
const pressnumberSum502B = pressSumB && pressSumB.filter((d) => { return d.press_no === '502' })



// const pressnumberCount1001B = pressCountB && pressCountB.filter((d) => { return d.press_no === '1001' })
// const pressnumberCount651B = pressCountB && pressCountB.filter((d) => { return d.press_no === '651' })
// const pressnumberCount401B = pressCountB && pressCountB.filter((d) => { return d.press_no === '401' })
// const pressnumberCount402B = pressCountB && pressCountB.filter((d) => { return d.press_no === '402' })
// const pressnumberCount501B = pressCountB && pressCountB.filter((d) => { return d.press_no === '501' })
// const pressnumberCount502B = pressCountB && pressCountB.filter((d) => { return d.press_no === '502' })


///E

const pressnumberSum1001E = pressSumE && pressSumE.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651E = pressSumE && pressSumE.filter((d) => { return d.press_no === '651' })
const pressnumberSum401E = pressSumE && pressSumE.filter((d) => { return d.press_no === '401' })
const pressnumberSum402E = pressSumE && pressSumE.filter((d) => { return d.press_no === '402' })
const pressnumberSum501E = pressSumE && pressSumE.filter((d) => { return d.press_no === '501' })
const pressnumberSum502E = pressSumE && pressSumE.filter((d) => { return d.press_no === '502' })



// const pressnumberCount1001E = pressCountE && pressCountE.filter((d) => { return d.press_no === '1001' })
// const pressnumberCount651E = pressCountE && pressCountE.filter((d) => { return d.press_no === '651' })
// const pressnumberCount401E = pressCountE && pressCountE.filter((d) => { return d.press_no === '401' })
// const pressnumberCount402E = pressCountE && pressCountE.filter((d) => { return d.press_no === '402' })
// const pressnumberCount501E = pressCountE && pressCountE.filter((d) => { return d.press_no === '501' })
// const pressnumberCount502E = pressCountE && pressCountE.filter((d) => { return d.press_no === '502' })



////R

const pressnumberSum1001R = pressSumR && pressSumR.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651R = pressSumR && pressSumR.filter((d) => { return d.press_no === '651' })
const pressnumberSum401R = pressSumR && pressSumR.filter((d) => { return d.press_no === '401' })
const pressnumberSum402R = pressSumR && pressSumR.filter((d) => { return d.press_no === '402' })
const pressnumberSum501R = pressSumR && pressSumR.filter((d) => { return d.press_no === '501' })
const pressnumberSum502R = pressSumR && pressSumR.filter((d) => { return d.press_no === '502' })



// const pressnumberCount1001R = pressCountR && pressCountR.filter((d) => { return d.press_no === '1001' })
// const pressnumberCount651R = pressCountR && pressCountR.filter((d) => { return d.press_no === '651' })
// const pressnumberCount401R = pressCountR && pressCountR.filter((d) => { return d.press_no === '401' })
// const pressnumberCount402R = pressCountR && pressCountR.filter((d) => { return d.press_no === '402' })
// const pressnumberCount501R = pressCountR && pressCountR.filter((d) => { return d.press_no === '501' })
// const pressnumberCount502R = pressCountR && pressCountR.filter((d) => { return d.press_no === '502' })

///////L

const pressnumberSum1001L = pressSumL && pressSumL.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651L = pressSumL && pressSumL.filter((d) => { return d.press_no === '651' })
const pressnumberSum401L = pressSumL && pressSumL.filter((d) => { return d.press_no === '401' })
const pressnumberSum402L = pressSumL && pressSumL.filter((d) => { return d.press_no === '402' })
const pressnumberSum501L = pressSumL && pressSumL.filter((d) => { return d.press_no === '501' })
const pressnumberSum502L= pressSumL && pressSumL.filter((d) => { return d.press_no === '502' })



// const pressnumberCount1001L = pressCountL && pressCountL.filter((d) => { return d.press_no === '1001' })
// const pressnumberCount651L = pressCountL && pressCountL.filter((d) => { return d.press_no === '651' })
// const pressnumberCount401L = pressCountL && pressCountL.filter((d) => { return d.press_no === '401' })
// const pressnumberCount402L = pressCountL && pressCountL.filter((d) => { return d.press_no === '402' })
// const pressnumberCount501L = pressCountL && pressCountL.filter((d) => { return d.press_no === '501' })
// const pressnumberCount502L = pressCountL && pressCountL.filter((d) => { return d.press_no === '502' })


///kpi

const pressnumberSum1001Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '651' })
const pressnumberSum401Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '401' })
const pressnumberSum402Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '402' })
const pressnumberSum501Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '501' })
const pressnumberSum502Kaizen= pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '502' })


const pressnumberSum1001Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '651' })
const pressnumberSum401Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '401' })
const pressnumberSum402Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '402' })
const pressnumberSum501Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '501' })
const pressnumberSum502Nearmiss= pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '502' })


const pressnumberSum1001Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '651' })
const pressnumberSum401Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '401' })
const pressnumberSum402Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '402' })
const pressnumberSum501Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '501' })
const pressnumberSum502Ra= pressSumRa && pressSumRa.filter((d) => { return d.press_no === '502' })

const pressnumberSum1001Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '651' })
const pressnumberSum401Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '401' })
const pressnumberSum402Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '402' })
const pressnumberSum501Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '501' })
const pressnumberSum502Nra= pressSumNra && pressSumNra.filter((d) => { return d.press_no === '502' })


const pressnumberSum1001Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '1001' })
const pressnumberSum651Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '651' })
const pressnumberSum401Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '401' })
const pressnumberSum402Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '402' })
const pressnumberSum501Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '501' })
const pressnumberSum502Bd= pressSumBd && pressSumBd.filter((d) => { return d.press_no === '502' })

                                                 
//console.log(pressnumberSum1001B);                                              
//   console.log( (isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total)) +
//   (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
//     (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
//     (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
//     (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total)));
// console.log( ( (  (isNaN(parseInt(pressnumberCount1001A[0]?.total)) ? 0 : parseInt(pressnumberCount1001A[0]?.total))
// /( (isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total)) +
// (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
//   (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
//   (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
//   (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total))))*100));





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
            
            <th scope="col-md-1 col-sm-1 col-lg-1"  width='10%' style={{maxHeight:'1px'}}> <div className="col">
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
            <td   width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >KPI</td>
            <td   colspan='2' style={{fontWeight:'bold',fontSize:'12px'}}  onClick={(e)=>pressOne(e)}>1001</td>
          
            <td  colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressTwo(e)}> 651</td>
            
            <td   colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressThree(e)}>401</td>
        
            <td   colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressFour(e)}>402</td>
            <td   colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressFour(e)}>501</td>
            <td   colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressFour(e)}>502</td>
            <td   colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>PI</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >UOM</td>
            
            <td  style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            
           
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Pcs</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >Nos</td>
            
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(isNaN(parseInt(pressnumberCount1001Srt[0]?.total)) ? 0 : parseInt(pressnumberCount1001Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total))}</td>


               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                 (isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total))

               }</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                 (isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total))


               }</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(isNaN(parseInt(pressnumberCount402Srt[0]?.total)) ? 0 : parseInt(pressnumberCount402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Pob[0]?.total)) ? 0 : parseInt(pressnumberCount402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Apw[0]?.total)) ? 0 : parseInt(pressnumberCount402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Sks[0]?.total)) ? 0 : parseInt(pressnumberCount402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount402Pbb[0]?.total))}</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}> {(isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total))}</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}> {(isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total))}</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
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
               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>



             </tr>

             <tr>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>Weight</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                 (isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total))




               }</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                 (isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total))



               }</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                 (isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total))

               }</td>


               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total))}</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total))}</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total))}</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total))+
                 (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total))

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


                 + (isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total))


                 + (isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total))

                 + (isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total))

               }</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>

            
          </tr>
          
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>FTR</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberCount1001A[0]?.total)) ? 0 : parseInt(pressnumberCount1001A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount1001Srt[0]?.total)) ? 0 : parseInt(pressnumberCount1001Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount1001A[0]?.total)) ? 0 : parseInt(pressnumberCount1001A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount1001Srt[0]?.total)) ? 0 : parseInt(pressnumberCount1001Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>




            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberCount651A[0]?.total)) ? 0 : parseInt(pressnumberCount651A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount651A[0]?.total)) ? 0 : parseInt(pressnumberCount651A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >90%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberCount401A[0]?.total)) ? 0 : parseInt(pressnumberCount401A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount401A[0]?.total)) ? 0 : parseInt(pressnumberCount401A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >90%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberCount402A[0]?.total)) ? 0 : parseInt(pressnumberCount402A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount402Srt[0]?.total)) ? 0 : parseInt(pressnumberCount402Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount402Pob[0]?.total)) ? 0 : parseInt(pressnumberCount402Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount402Apw[0]?.total)) ? 0 : parseInt(pressnumberCount402Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount402Sks[0]?.total)) ? 0 : parseInt(pressnumberCount402Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount402Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount402Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount402A[0]?.total)) ? 0 : parseInt(pressnumberCount402A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount402Srt[0]?.total)) ? 0 : parseInt(pressnumberCount402Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount402Pob[0]?.total)) ? 0 : parseInt(pressnumberCount402Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount402Apw[0]?.total)) ? 0 : parseInt(pressnumberCount402Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount402Sks[0]?.total)) ? 0 : parseInt(pressnumberCount402Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount402Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount402Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberCount501A[0]?.total)) ? 0 : parseInt(pressnumberCount501A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount501A[0]?.total)) ? 0 : parseInt(pressnumberCount501A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >90%</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberCount502A[0]?.total)) ? 0 : parseInt(pressnumberCount502A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount502A[0]?.total)) ? 0 : parseInt(pressnumberCount502A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}  >
            {(((isNaN(((((isNaN(parseInt(pressnumberCount1001A[0]?.total)) ? 0 : parseInt(pressnumberCount1001A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount1001Srt[0]?.total)) ? 0 : parseInt(pressnumberCount1001Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount1001A[0]?.total)) ? 0 : parseInt(pressnumberCount1001A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount1001Srt[0]?.total)) ? 0 : parseInt(pressnumberCount1001Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total)))) * 100))) +(isNaN(((((isNaN(parseInt(pressnumberCount651A[0]?.total)) ? 0 : parseInt(pressnumberCount651A[0]?.total))
               / ((isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total)) +
           (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total)) +
           (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total)) +
           (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total)) +
           (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount651A[0]?.total)) ? 0 : parseInt(pressnumberCount651A[0]?.total))
           / ((isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total)) +
       (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total)) +
       (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total)) +
       (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total)) +
       (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total)))) * 100))+(isNaN(((((isNaN(parseInt(pressnumberCount401A[0]?.total)) ? 0 : parseInt(pressnumberCount401A[0]?.total))
       / ((isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
   (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
   (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
   (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
   (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount401A[0]?.total)) ? 0 : parseInt(pressnumberCount401A[0]?.total))
   / ((isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount501A[0]?.total)) ? 0 : parseInt(pressnumberCount501A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount501A[0]?.total)) ? 0 : parseInt(pressnumberCount501A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount502A[0]?.total)) ? 0 : parseInt(pressnumberCount502A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount502A[0]?.total)) ? 0 : parseInt(pressnumberCount502A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total)))) * 100)))))/6).toFixed(2)}%
            </td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >90%</td>
            
          </tr>
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>B</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum1001B[0]?.total)) ? 0 : parseInt(pressnumberSum1001B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum1001B[0]?.total)) ? 0 : parseInt(pressnumberSum1001B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum651B[0]?.total)) ? 0 : parseInt(pressnumberSum651B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum651B[0]?.total)) ? 0 : parseInt(pressnumberSum651B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >0.15%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum401B[0]?.total)) ? 0 : parseInt(pressnumberSum401B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum401B[0]?.total)) ? 0 : parseInt(pressnumberSum401B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >0.15%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum402B[0]?.total)) ? 0 : parseInt(pressnumberSum402B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum402B[0]?.total)) ? 0 : parseInt(pressnumberSum402B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberSum501B[0]?.total)) ? 0 : parseInt(pressnumberSum501B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum501B[0]?.total)) ? 0 : parseInt(pressnumberSum501B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum502B[0]?.total)) ? 0 : parseInt(pressnumberSum502B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum502B[0]?.total)) ? 0 : parseInt(pressnumberSum502B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}> {(((isNaN(((((isNaN(parseInt(pressnumberSum1001B[0]?.total)) ? 0 : parseInt(pressnumberSum1001B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum1001B[0]?.total)) ? 0 : parseInt(pressnumberSum1001B[0]?.total))
                     / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum651B[0]?.total)) ? 0 : parseInt(pressnumberSum651B[0]?.total))
                         / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum651B[0]?.total)) ? 0 : parseInt(pressnumberSum651B[0]?.total))
                             / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum401B[0]?.total)) ? 0 : parseInt(pressnumberSum401B[0]?.total))
                                 / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum401B[0]?.total)) ? 0 : parseInt(pressnumberSum401B[0]?.total))
                                     / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum501B[0]?.total)) ? 0 : parseInt(pressnumberSum501B[0]?.total))
                                         / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum501B[0]?.total)) ? 0 : parseInt(pressnumberSum501B[0]?.total))
                                             / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum502B[0]?.total)) ? 0 : parseInt(pressnumberSum502B[0]?.total))
                                                 / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum502B[0]?.total)) ? 0 : parseInt(pressnumberSum502B[0]?.total))
                                                     / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>E</td>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberSum1001E[0]?.total)) ? 0 : parseInt(pressnumberSum1001E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum1001E[0]?.total)) ? 0 : parseInt(pressnumberSum1001E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



            <td style={{fontWeight:'bold',fontSize:'12px'}} >0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum651E[0]?.total)) ? 0 : parseInt(pressnumberSum651E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum651E[0]?.total)) ? 0 : parseInt(pressnumberSum651E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum401E[0]?.total)) ? 0 : parseInt(pressnumberSum401E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum401E[0]?.total)) ? 0 : parseInt(pressnumberSum401E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum402E[0]?.total)) ? 0 : parseInt(pressnumberSum402E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum402E[0]?.total)) ? 0 : parseInt(pressnumberSum402E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum501E[0]?.total)) ? 0 : parseInt(pressnumberSum501E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum501E[0]?.total)) ? 0 : parseInt(pressnumberSum501E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>

            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum502E[0]?.total)) ? 0 : parseInt(pressnumberSum502E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum502E[0]?.total)) ? 0 : parseInt(pressnumberSum502E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}> {(((isNaN(((((isNaN(parseInt(pressnumberSum1001E[0]?.total)) ? 0 : parseInt(pressnumberSum1001E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum1001E[0]?.total)) ? 0 : parseInt(pressnumberSum1001E[0]?.total))
                  / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum651E[0]?.total)) ? 0 : parseInt(pressnumberSum651E[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum651E[0]?.total)) ? 0 : parseInt(pressnumberSum651E[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum401E[0]?.total)) ? 0 : parseInt(pressnumberSum401E[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum401E[0]?.total)) ? 0 : parseInt(pressnumberSum401E[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum501E[0]?.total)) ? 0 : parseInt(pressnumberSum501E[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum501E[0]?.total)) ? 0 : parseInt(pressnumberSum501E[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum502E[0]?.total)) ? 0 : parseInt(pressnumberSum502E[0]?.total))
                                              / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum502E[0]?.total)) ? 0 : parseInt(pressnumberSum502E[0]?.total))
                                                  / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>R</td>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberSum1001R[0]?.total)) ? 0 : parseInt(pressnumberSum1001R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum1001R[0]?.total)) ? 0 : parseInt(pressnumberSum1001R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



            <td style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberSum651R[0]?.total)) ? 0 : parseInt(pressnumberSum651R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum651R[0]?.total)) ? 0 : parseInt(pressnumberSum651R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum401R[0]?.total)) ? 0 : parseInt(pressnumberSum401R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum401R[0]?.total)) ? 0 : parseInt(pressnumberSum401R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum402R[0]?.total)) ? 0 : parseInt(pressnumberSum402R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum402R[0]?.total)) ? 0 : parseInt(pressnumberSum402R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0.15%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((((isNaN(parseInt(pressnumberSum501R[0]?.total)) ? 0 : parseInt(pressnumberSum501R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum501R[0]?.total)) ? 0 : parseInt(pressnumberSum501R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>

            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((((isNaN(parseInt(pressnumberSum502R[0]?.total)) ? 0 : parseInt(pressnumberSum502R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum502R[0]?.total)) ? 0 : parseInt(pressnumberSum502R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}> {(((isNaN(((((isNaN(parseInt(pressnumberSum1001R[0]?.total)) ? 0 : parseInt(pressnumberSum1001R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum1001R[0]?.total)) ? 0 : parseInt(pressnumberSum1001R[0]?.total))
                  / ((isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum651R[0]?.total)) ? 0 : parseInt(pressnumberSum651R[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum651R[0]?.total)) ? 0 : parseInt(pressnumberSum651R[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum401R[0]?.total)) ? 0 : parseInt(pressnumberSum401R[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum401R[0]?.total)) ? 0 : parseInt(pressnumberSum401R[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum501R[0]?.total)) ? 0 : parseInt(pressnumberSum501R[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum501R[0]?.total)) ? 0 : parseInt(pressnumberSum501R[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum502R[0]?.total)) ? 0 : parseInt(pressnumberSum502R[0]?.total))
                                              / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum502R[0]?.total)) ? 0 : parseInt(pressnumberSum502R[0]?.total))
                                                  / ((isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            
          </tr>
        

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>OEE</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td onClick={oeeChange} ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Kaizen</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(parseInt(pressnumberSum1001Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum1001Kaizen[0]?.total)}</td>


               <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                isNaN(parseInt(pressnumberSum651Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum651Kaizen[0]?.total)

               }</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                isNaN(parseInt(pressnumberSum401Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum401Kaizen[0]?.total)

               }</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                isNaN(parseInt(pressnumberSum402Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum402Kaizen[0]?.total)

               }</td>

               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum501Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum501Kaizen[0]?.total)

               }</td>

               <td  >1</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                isNaN(parseInt(pressnumberSum502Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum502Kaizen[0]?.total)

               }</td>
               <td  >1</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{( isNaN(parseInt(pressnumberSum1001Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum1001Kaizen[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum651Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum651Kaizen[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum401Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum401Kaizen[0]?.total))+(isNaN(parseInt(pressnumberSum402Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum402Kaizen[0]?.total))+
                                                 (isNaN(parseInt(pressnumberSum501Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum501Kaizen[0]?.total))+( isNaN(parseInt(pressnumberSum502Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum502Kaizen[0]?.total))
                                                  }</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            
          </tr>  <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>NearMiss</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(parseInt(pressnumberSum1001Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum1001Nearmiss[0]?.total)}</td>


<td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum651Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum651Nearmiss[0]?.total)

}</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum401Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum401Nearmiss[0]?.total)

}</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum402Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum402Nearmiss[0]?.total)

}</td>

<td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum501Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum501Nearmiss[0]?.total)

}</td>

<td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum502Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum502Nearmiss[0]?.total)

}</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >1</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{( isNaN(parseInt(pressnumberSum1001Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum1001Nearmiss[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum651Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum651Nearmiss[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum401Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum401Nearmiss[0]?.total))+(isNaN(parseInt(pressnumberSum402Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum402Nearmiss[0]?.total))+
                                  (isNaN(parseInt(pressnumberSum501Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum501Nearmiss[0]?.total))+( isNaN(parseInt(pressnumberSum502Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum502Nearmiss[0]?.total))
                                   }</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>RA</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(parseInt(pressnumberSum1001Ra[0]?.total)) ? 0 : parseInt(pressnumberSum1001Ra[0]?.total)}</td>


<td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum651Ra[0]?.total)) ? 0 : parseInt(pressnumberSum651Ra[0]?.total)

}</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum401Ra[0]?.total)) ? 0 : parseInt(pressnumberSum401Ra[0]?.total)

}</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >{
 isNaN(parseInt(pressnumberSum402Ra[0]?.total)) ? 0 : parseInt(pressnumberSum402Ra[0]?.total)

}</td>

<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum501Ra[0]?.total)) ? 0 : parseInt(pressnumberSum501Ra[0]?.total)

}</td>

<td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >{
 isNaN(parseInt(pressnumberSum502Ra[0]?.total)) ? 0 : parseInt(pressnumberSum502Ra[0]?.total)

}</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >{( isNaN(parseInt(pressnumberSum1001Ra[0]?.total)) ? 0 : parseInt(pressnumberSum1001Ra[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum651Ra[0]?.total)) ? 0 : parseInt(pressnumberSum651Ra[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum401Ra[0]?.total)) ? 0 : parseInt(pressnumberSum401Ra[0]?.total))+(isNaN(parseInt(pressnumberSum402Ra[0]?.total)) ? 0 : parseInt(pressnumberSum402Ra[0]?.total))+
                                  (isNaN(parseInt(pressnumberSum501Ra[0]?.total)) ? 0 : parseInt(pressnumberSum501Ra[0]?.total))+( isNaN(parseInt(pressnumberSum502Ra[0]?.total)) ? 0 : parseInt(pressnumberSum502Ra[0]?.total))
                                   }</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
          </tr>

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>NRA</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(parseInt(pressnumberSum1001Nra[0]?.total)) ? 0 : parseInt(pressnumberSum1001Nra[0]?.total)}</td>


               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                isNaN(parseInt(pressnumberSum651Nra[0]?.total)) ? 0 : parseInt(pressnumberSum651Nra[0]?.total)

               }</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                isNaN(parseInt(pressnumberSum401Nra[0]?.total)) ? 0 : parseInt(pressnumberSum401Nra[0]?.total)

               }</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                isNaN(parseInt(pressnumberSum402Nra[0]?.total)) ? 0 : parseInt(pressnumberSum402Nra[0]?.total)

               }</td>

               <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
               <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                isNaN(parseInt(pressnumberSum501Nra[0]?.total)) ? 0 : parseInt(pressnumberSum501Nra[0]?.total)

               }</td>

               <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                isNaN(parseInt(pressnumberSum502Nra[0]?.total)) ? 0 : parseInt(pressnumberSum502Nra[0]?.total)

               }</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >{( isNaN(parseInt(pressnumberSum1001Nra[0]?.total)) ? 0 : parseInt(pressnumberSum1001Nra[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum651Nra[0]?.total)) ? 0 : parseInt(pressnumberSum651Nra[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum401Nra[0]?.total)) ? 0 : parseInt(pressnumberSum401Nra[0]?.total))+(isNaN(parseInt(pressnumberSum402Nra[0]?.total)) ? 0 : parseInt(pressnumberSum402Nra[0]?.total))+
                                                 (isNaN(parseInt(pressnumberSum501Nra[0]?.total)) ? 0 : parseInt(pressnumberSum501Nra[0]?.total))+( isNaN(parseInt(pressnumberSum502Nra[0]?.total)) ? 0 : parseInt(pressnumberSum502Nra[0]?.total))
                                                  }</td>
               <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Bd</td>
            <td   style={{fontWeight:'bold',fontSize:'12px'}} >hrs</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(parseInt(pressnumberSum1001Bd[0]?.total)) ? 0 : parseInt(pressnumberSum1001Bd[0]?.total)}</td>


<td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum651Bd[0]?.total)) ? 0 : parseInt(pressnumberSum651Bd[0]?.total)

}</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum401Bd[0]?.total)) ? 0 : parseInt(pressnumberSum401Bd[0]?.total)

}</td>
<td style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td  >{
 isNaN(parseInt(pressnumberSum402Bd[0]?.total)) ? 0 : parseInt(pressnumberSum402Bd[0]?.total)

}</td>

<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{
 isNaN(parseInt(pressnumberSum501Bd[0]?.total)) ? 0 : parseInt(pressnumberSum501Bd[0]?.total)

}</td>

<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td style={{fontWeight:'bold',fontSize:'12px'}} >{
 isNaN(parseInt(pressnumberSum502Bd[0]?.total)) ? 0 : parseInt(pressnumberSum502Bd[0]?.total)

}</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>{( isNaN(parseInt(pressnumberSum1001Bd[0]?.total)) ? 0 : parseInt(pressnumberSum1001Bd[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum651Bd[0]?.total)) ? 0 : parseInt(pressnumberSum651Bd[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum401Bd[0]?.total)) ? 0 : parseInt(pressnumberSum401Bd[0]?.total))+(isNaN(parseInt(pressnumberSum402Bd[0]?.total)) ? 0 : parseInt(pressnumberSum402Bd[0]?.total))+
                                  (isNaN(parseInt(pressnumberSum501Bd[0]?.total)) ? 0 : parseInt(pressnumberSum501Bd[0]?.total))+( isNaN(parseInt(pressnumberSum502Bd[0]?.total)) ? 0 : parseInt(pressnumberSum502Bd[0]?.total))
                                   }</td>
<td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
          </tr>
          
          <tr>
          <td  colspan='2' style={{fontWeight:'bold',fontSize:'12px'}}>SUMMARY</td>
          
            
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            
            <td  ></td>
            <td  ></td>
            
            <td  ></td>
            <td  ></td>
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
            <td   width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >TYPE</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold',fontSize:'12px'}}  onClick={(e)=>pressOne(e)}>SRT</td>
          
            <td width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressTwo(e)}> POB</td>
            
            <td  width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressThree(e)}>APW</td>
        
            <td  width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressFour(e)}>SKS</td>
            <td  width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressFour(e)}>PBB</td>
            
            <td  width='10%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Press No</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >UOM</td>
            
            <td  style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>1001</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount1001Srt[0]?.total)) ?0:parseInt(pressnumberCount1001Srt[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                                                 (isNaN( parseInt(pressnumberCount1001Srt[0]?.total)) ?0:parseInt(pressnumberCount1001Srt[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total))
            }</td>
            <td  ></td>
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                                                         (isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total))




            }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>651</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount651Srt[0]?.total)) ?0:parseInt(pressnumberCount651Srt[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount651Pob[0]?.total)) ?0:parseInt(pressnumberCount651Pob[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount651Apw[0]?.total)) ?0:parseInt(pressnumberCount651Apw[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount651Sks[0]?.total)) ?0:parseInt(pressnumberCount651Sks[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount651Pbb[0]?.total)) ?0:parseInt(pressnumberCount651Pbb[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
              (isNaN( parseInt(pressnumberCount651Srt[0]?.total)) ?0:parseInt(pressnumberCount651Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Pob[0]?.total)) ?0:parseInt(pressnumberCount651Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Apw[0]?.total)) ?0:parseInt(pressnumberCount651Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Sks[0]?.total)) ?0:parseInt(pressnumberCount651Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Pbb[0]?.total)) ?0:parseInt(pressnumberCount651Pbb[0]?.total))
                                                          
            }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum651Srt[0]?.total)) ?0:parseInt(pressnumberSum651Srt[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum651Pob[0]?.total)) ?0:parseInt(pressnumberSum651Pob[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum651Apw[0]?.total)) ?0:parseInt(pressnumberSum651Apw[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum651Sks[0]?.total)) ?0:parseInt(pressnumberSum651Sks[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum651Pbb[0]?.total)) ?0:parseInt(pressnumberSum651Pbb[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                                                       (isNaN( parseInt(pressnumberSum651Srt[0]?.total)) ?0:parseInt(pressnumberSum651Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Pob[0]?.total)) ?0:parseInt(pressnumberSum651Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Apw[0]?.total)) ?0:parseInt(pressnumberSum651Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum651Sks[0]?.total)) ?0:parseInt(pressnumberSum651Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Pbb[0]?.total)) ?0:parseInt(pressnumberSum651Pbb[0]?.total))


                                                   
            }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>401</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount401Srt[0]?.total)) ?0:parseInt(pressnumberCount401Srt[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount401Pob[0]?.total)) ?0:parseInt(pressnumberCount401Pob[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount401Apw[0]?.total)) ?0:parseInt(pressnumberCount401Apw[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount401Sks[0]?.total)) ?0:parseInt(pressnumberCount401Sks[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount401Pbb[0]?.total)) ?0:parseInt(pressnumberCount401Pbb[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                                                      (isNaN( parseInt(pressnumberCount401Srt[0]?.total)) ?0:parseInt(pressnumberCount401Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Pob[0]?.total)) ?0:parseInt(pressnumberCount401Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Apw[0]?.total)) ?0:parseInt(pressnumberCount401Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Sks[0]?.total)) ?0:parseInt(pressnumberCount401Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount401Pbb[0]?.total)) ?0:parseInt(pressnumberCount401Pbb[0]?.total) )


            }</td>
            <td  ></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum401Srt[0]?.total)) ?0:parseInt(pressnumberSum401Srt[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum401Pob[0]?.total)) ?0:parseInt(pressnumberSum401Pob[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum401Apw[0]?.total)) ?0:parseInt(pressnumberSum401Apw[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum401Sks[0]?.total)) ?0:parseInt(pressnumberSum401Sks[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum401Pbb[0]?.total)) ?0:parseInt(pressnumberSum401Pbb[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{
                                                      ( isNaN( parseInt(pressnumberSum401Srt[0]?.total)) ?0:parseInt(pressnumberSum401Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum401Pob[0]?.total)) ?0:parseInt(pressnumberSum401Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum401Apw[0]?.total)) ?0:parseInt(pressnumberSum401Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum401Sks[0]?.total)) ?0:parseInt(pressnumberSum401Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum401Pbb[0]?.total)) ?0:parseInt(pressnumberSum401Pbb[0]?.total))

            }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>402</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount402Srt[0]?.total)) ?0:parseInt(pressnumberCount402Srt[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount402Pob[0]?.total)) ?0:parseInt(pressnumberCount402Pob[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount402Apw[0]?.total)) ?0:parseInt(pressnumberCount402Apw[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount402Sks[0]?.total)) ?0:parseInt(pressnumberCount402Sks[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount402Pbb[0]?.total)) ?0:parseInt(pressnumberCount402Pbb[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{  ( isNaN( parseInt(pressnumberCount402Srt[0]?.total)) ?0:parseInt(pressnumberCount402Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount402Pob[0]?.total)) ?0:parseInt(pressnumberCount402Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount402Apw[0]?.total)) ?0:parseInt(pressnumberCount402Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount402Sks[0]?.total)) ?0:parseInt(pressnumberCount402Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount402Pbb[0]?.total)) ?0:parseInt(pressnumberCount402Pbb[0]?.total))}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum402Srt[0]?.total)) ?0:parseInt(pressnumberSum402Srt[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum402Pob[0]?.total)) ?0:parseInt(pressnumberSum402Pob[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum402Apw[0]?.total)) ?0:parseInt(pressnumberSum402Apw[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum402Sks[0]?.total)) ?0:parseInt(pressnumberSum402Sks[0]?.total).toFixed(1) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum402Pbb[0]?.total)) ?0:parseInt(pressnumberSum402Pbb[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >
                                                    {(isNaN( parseInt(pressnumberSum402Srt[0]?.total)) ?0:parseInt(pressnumberSum402Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Pob[0]?.total)) ?0:parseInt(pressnumberSum402Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Apw[0]?.total)) ?0:parseInt(pressnumberSum402Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Sks[0]?.total)) ?0:parseInt(pressnumberSum402Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum402Pbb[0]?.total)) ?0:parseInt(pressnumberSum402Pbb[0]?.total))}
            </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
          </tr>  <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>501</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{(isNaN( parseInt(pressnumberCount501Srt[0]?.total)) ?0:parseInt(pressnumberCount501Srt[0]?.total) )}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount501Pob[0]?.total)) ?0:parseInt(pressnumberCount501Pob[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount501Apw[0]?.total)) ?0:parseInt(pressnumberCount501Apw[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberCount501Sks[0]?.total)) ?0:parseInt(pressnumberCount501Sks[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount501Pbb[0]?.total)) ?0:parseInt(pressnumberCount501Pbb[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>
                                                        {(isNaN( parseInt(pressnumberCount501Srt[0]?.total)) ?0:parseInt(pressnumberCount501Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Pob[0]?.total)) ?0:parseInt(pressnumberCount501Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Apw[0]?.total)) ?0:parseInt(pressnumberCount501Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Sks[0]?.total)) ?0:parseInt(pressnumberCount501Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Pbb[0]?.total)) ?0:parseInt(pressnumberCount501Pbb[0]?.total) )}
            </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum501Srt[0]?.total)) ?0:parseInt(pressnumberSum501Srt[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum501Pob[0]?.total)) ?0:parseInt(pressnumberSum501Pob[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum501Apw[0]?.total)) ?0:parseInt(pressnumberSum501Apw[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum501Sks[0]?.total)) ?0:parseInt(pressnumberSum501Sks[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum501Pbb[0]?.total)) ?0:parseInt(pressnumberSum501Pbb[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>
                                                    {(isNaN( parseInt(pressnumberSum501Srt[0]?.total)) ?0:parseInt(pressnumberSum501Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Pob[0]?.total)) ?0:parseInt(pressnumberSum501Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Apw[0]?.total)) ?0:parseInt(pressnumberSum501Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum501Sks[0]?.total)) ?0:parseInt(pressnumberSum501Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Pbb[0]?.total)) ?0:parseInt(pressnumberSum501Pbb[0]?.total))}
            </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
          </tr>
         
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>502</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount502Srt[0]?.total)) ?0:parseInt(pressnumberCount502Srt[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount502Pob[0]?.total)) ?0:parseInt(pressnumberCount502Pob[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount502Apw[0]?.total)) ?0:parseInt(pressnumberCount502Apw[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount502Sks[0]?.total)) ?0:parseInt(pressnumberCount502Sks[0]?.total) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberCount502Pbb[0]?.total)) ?0:parseInt(pressnumberCount502Pbb[0]?.total) }</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >
                                                    {(isNaN( parseInt(pressnumberCount502Srt[0]?.total)) ?0:parseInt(pressnumberCount502Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Pob[0]?.total)) ?0:parseInt(pressnumberCount502Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount502Apw[0]?.total)) ?0:parseInt(pressnumberCount502Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Sks[0]?.total)) ?0:parseInt(pressnumberCount502Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Pbb[0]?.total)) ?0:parseInt(pressnumberCount502Pbb[0]?.total))}
            </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum502Srt[0]?.total)) ?0:parseInt(pressnumberSum502Srt[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum502Pob[0]?.total)) ?0:parseInt(pressnumberSum502Pob[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN( parseInt(pressnumberSum502Apw[0]?.total)) ?0:parseInt(pressnumberSum502Apw[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum502Sks[0]?.total)) ?0:parseInt(pressnumberSum502Sks[0]?.total).toFixed(1) }</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN( parseInt(pressnumberSum502Pbb[0]?.total)) ?0:parseInt(pressnumberSum502Pbb[0]?.total).toFixed(1)}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >
                                                   {(isNaN( parseInt(pressnumberSum502Srt[0]?.total)) ?0:parseInt(pressnumberSum502Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Pob[0]?.total)) ?0:parseInt(pressnumberSum502Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Apw[0]?.total)) ?0:parseInt(pressnumberSum502Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum502Sks[0]?.total)) ?0:parseInt(pressnumberSum502Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Pbb[0]?.total)) ?0:parseInt(pressnumberSum502Pbb[0]?.total))}
            </td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            
            
          </tr>
         
         
          <tr>
          <td  colspan='2' style={{fontWeight:'bold',fontSize:'12px'}}>SUMMARY</td>
          
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{
                                                      
            }</td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            <td  ></td>
            
            
            
          </tr>
          </tbody>
          </table>
      </div>    </div> </>
   )
}

export default LineOne
