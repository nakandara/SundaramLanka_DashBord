import React,{useContext, useEffect} from 'react'
import './line.css'
import {  useNavigate } from 'react-router-dom';

import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'




const LineOne = () => {
  const {  ddate,  shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,pressCountA,setPressCountA,
    pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC } = useContext(reportContext)
  


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
     
    }


  }, [dateone, shift])


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
            <td   width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td   colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>1001</td>
          
            <td  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 651</td>
            
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>401</td>
        
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>402</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>501</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>502</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td  style={{fontWeight:'bold'}}>PI</td>
            <td  style={{fontWeight:'bold'}} >UOM</td>
            
            <td  style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            
           
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>Pcs</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
               <td  >{(isNaN(parseInt(pressnumberCount1001Srt[0]?.total)) ? 0 : parseInt(pressnumberCount1001Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Pob[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Apw[0]?.total)) ? 0 : parseInt(pressnumberCount1001Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Sks[0]?.total)) ? 0 : parseInt(pressnumberCount1001Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount1001Pbb[0]?.total))}</td>


               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount651Srt[0]?.total)) ? 0 : parseInt(pressnumberCount651Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Pob[0]?.total)) ? 0 : parseInt(pressnumberCount651Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Apw[0]?.total)) ? 0 : parseInt(pressnumberCount651Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Sks[0]?.total)) ? 0 : parseInt(pressnumberCount651Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount651Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount651Pbb[0]?.total))

               }</td>
               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount401Srt[0]?.total)) ? 0 : parseInt(pressnumberCount401Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Pob[0]?.total)) ? 0 : parseInt(pressnumberCount401Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Apw[0]?.total)) ? 0 : parseInt(pressnumberCount401Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Sks[0]?.total)) ? 0 : parseInt(pressnumberCount401Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount401Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount401Pbb[0]?.total))


               }</td>
               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberCount402Srt[0]?.total)) ? 0 : parseInt(pressnumberCount402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Pob[0]?.total)) ? 0 : parseInt(pressnumberCount402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Apw[0]?.total)) ? 0 : parseInt(pressnumberCount402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Sks[0]?.total)) ? 0 : parseInt(pressnumberCount402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount402Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount402Pbb[0]?.total))}</td>

               <td  ></td>
               <td  > {(isNaN(parseInt(pressnumberCount501Srt[0]?.total)) ? 0 : parseInt(pressnumberCount501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Pob[0]?.total)) ? 0 : parseInt(pressnumberCount501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Apw[0]?.total)) ? 0 : parseInt(pressnumberCount501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Sks[0]?.total)) ? 0 : parseInt(pressnumberCount501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount501Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount501Pbb[0]?.total))}</td>

               <td  ></td>
               <td  > {(isNaN(parseInt(pressnumberCount502Srt[0]?.total)) ? 0 : parseInt(pressnumberCount502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Pob[0]?.total)) ? 0 : parseInt(pressnumberCount502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Apw[0]?.total)) ? 0 : parseInt(pressnumberCount502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Sks[0]?.total)) ? 0 : parseInt(pressnumberCount502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount502Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount502Pbb[0]?.total))}</td>
               <td  ></td>
               <td  >{( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
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
               <td  ></td>



             </tr>

             <tr>
               <td  style={{ fontSize: '14px' }}>Weight</td>
               <td  style={{ fontSize: '14px' }}>Ton</td>

               <td  >{
                 (isNaN(parseInt(pressnumberSum1001Srt[0]?.total)) ? 0 : parseInt(pressnumberSum1001Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Apw[0]?.total)) ? 0 : parseInt(pressnumberSum1001Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Sks[0]?.total)) ? 0 : parseInt(pressnumberSum1001Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum1001Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pbb[0]?.total))




               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum651Srt[0]?.total)) ? 0 : parseInt(pressnumberSum651Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Pob[0]?.total)) ? 0 : parseInt(pressnumberSum651Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Apw[0]?.total)) ? 0 : parseInt(pressnumberSum651Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum651Sks[0]?.total)) ? 0 : parseInt(pressnumberSum651Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum651Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum651Pbb[0]?.total))



               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum401Srt[0]?.total)) ? 0 : parseInt(pressnumberSum401Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Pob[0]?.total)) ? 0 : parseInt(pressnumberSum401Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Apw[0]?.total)) ? 0 : parseInt(pressnumberSum401Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Sks[0]?.total)) ? 0 : parseInt(pressnumberSum401Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum401Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum401Pbb[0]?.total))

               }</td>


               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum402Srt[0]?.total)) ? 0 : parseInt(pressnumberSum402Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pob[0]?.total)) ? 0 : parseInt(pressnumberSum402Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Apw[0]?.total)) ? 0 : parseInt(pressnumberSum402Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Sks[0]?.total)) ? 0 : parseInt(pressnumberSum402Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum402Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum402Pbb[0]?.total))}</td>

               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum501Srt[0]?.total)) ? 0 : parseInt(pressnumberSum501Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pob[0]?.total)) ? 0 : parseInt(pressnumberSum501Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Apw[0]?.total)) ? 0 : parseInt(pressnumberSum501Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Sks[0]?.total)) ? 0 : parseInt(pressnumberSum501Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum501Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum501Pbb[0]?.total))}</td>

               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum502Srt[0]?.total)) ? 0 : parseInt(pressnumberSum502Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pob[0]?.total)) ? 0 : parseInt(pressnumberSum502Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Apw[0]?.total)) ? 0 : parseInt(pressnumberSum502Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Sks[0]?.total)) ? 0 : parseInt(pressnumberSum502Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum502Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum502Pbb[0]?.total))}</td>
               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum1001Pob[0]?.total)) ? 0 : parseInt(pressnumberSum1001Pob[0]?.total))+
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
               <td  ></td>

            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}}>FTR</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               <td  >{isNaN(((((isNaN(parseInt(pressnumberCount1001A[0]?.total)) ? 0 : parseInt(pressnumberCount1001A[0]?.total))
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




            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount651A[0]?.total)) ? 0 : parseInt(pressnumberCount651A[0]?.total))
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
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount401A[0]?.total)) ? 0 : parseInt(pressnumberCount401A[0]?.total))
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
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount402A[0]?.total)) ? 0 : parseInt(pressnumberCount402A[0]?.total))
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
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount501A[0]?.total)) ? 0 : parseInt(pressnumberCount501A[0]?.total))
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
            <td  >90%</td>
            
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount502A[0]?.total)) ? 0 : parseInt(pressnumberCount502A[0]?.total))
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
            <td  >90%</td>
            <td  >
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
            <td  >90%</td>
            
          </tr>
          
          <tr>
          <td  style={{fontSize:'14px'}}>B</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum1001B[0]?.total)) ? 0 : parseInt(pressnumberSum1001B[0]?.total))
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



               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum651B[0]?.total)) ? 0 : parseInt(pressnumberSum651B[0]?.total))
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
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum401B[0]?.total)) ? 0 : parseInt(pressnumberSum401B[0]?.total))
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
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum402B[0]?.total)) ? 0 : parseInt(pressnumberSum402B[0]?.total))
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
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum501B[0]?.total)) ? 0 : parseInt(pressnumberSum501B[0]?.total))
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
               <td  >0.15%</td>

               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum502B[0]?.total)) ? 0 : parseInt(pressnumberSum502B[0]?.total))
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
               <td  >0.15%</td>
               <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum1001B[0]?.total)) ? 0 : parseInt(pressnumberSum1001B[0]?.total))
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
               <td  >0.15%</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>E</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum1001E[0]?.total)) ? 0 : parseInt(pressnumberSum1001E[0]?.total))
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



            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum651E[0]?.total)) ? 0 : parseInt(pressnumberSum651E[0]?.total))
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
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum401E[0]?.total)) ? 0 : parseInt(pressnumberSum401E[0]?.total))
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
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum402E[0]?.total)) ? 0 : parseInt(pressnumberSum402E[0]?.total))
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
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum501E[0]?.total)) ? 0 : parseInt(pressnumberSum501E[0]?.total))
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
            <td  >0%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum502E[0]?.total)) ? 0 : parseInt(pressnumberSum502E[0]?.total))
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
            <td  >0%</td>
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum1001E[0]?.total)) ? 0 : parseInt(pressnumberSum1001E[0]?.total))
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
            <td  >0%</td>
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>R</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum1001R[0]?.total)) ? 0 : parseInt(pressnumberSum1001R[0]?.total))
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



            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum651R[0]?.total)) ? 0 : parseInt(pressnumberSum651R[0]?.total))
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
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum401R[0]?.total)) ? 0 : parseInt(pressnumberSum401R[0]?.total))
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
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum402R[0]?.total)) ? 0 : parseInt(pressnumberSum402R[0]?.total))
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
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum501R[0]?.total)) ? 0 : parseInt(pressnumberSum501R[0]?.total))
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
            <td  >0.15%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum502R[0]?.total)) ? 0 : parseInt(pressnumberSum502R[0]?.total))
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
            <td  >0.15%</td>
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum1001R[0]?.total)) ? 0 : parseInt(pressnumberSum1001R[0]?.total))
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
            <td  >0.15%</td>
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}}>OEE</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
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
          <tr>
          <td  style={{fontSize:'14px'}}>Kaizen</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}}>NearMiss</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
          <tr>
          <td  style={{fontSize:'14px'}}>RA</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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

          <tr>
          <td  style={{fontSize:'14px'}}>NRA</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
          <tr>
          <td  style={{fontSize:'14px'}}>AI</td>
            <td   style={{fontSize:'14px'}} >Nos</td>
            
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
          <tr>
          <td  style={{fontSize:'14px'}}>ANI</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
          



          <tr>
          <td  colspan='2' style={{fontWeight:'bold'}}>SUMMARY</td>
          
            
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
            <td   width='17%' colspan='2'  style={{fontWeight:'bold'}} >TYPE</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>SRT</td>
          
            <td width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> POB</td>
            
            <td  width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>APW</td>
        
            <td  width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>SKS</td>
            <td  width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>PBB</td>
            
            <td  width='10%' colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td  style={{fontWeight:'bold'}}>Press No</td>
            <td  style={{fontWeight:'bold'}} >UOM</td>
            
            <td  style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>1001</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount1001Srt[0]?.total)) ?0:parseInt(pressnumberCount1001Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                 (isNaN( parseInt(pressnumberCount1001Srt[0]?.total)) ?0:parseInt(pressnumberCount1001Srt[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pob[0]?.total)) ?0:parseInt(pressnumberCount1001Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Apw[0]?.total)) ?0:parseInt(pressnumberCount1001Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount1001Sks[0]?.total)) ?0:parseInt(pressnumberCount1001Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount1001Pbb[0]?.total)) ?0:parseInt(pressnumberCount1001Pbb[0]?.total))
            }</td>
            <td  ></td>
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                         (isNaN( parseInt(pressnumberSum1001Srt[0]?.total)) ?0:parseInt(pressnumberSum1001Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum1001Pob[0]?.total)) ?0:parseInt(pressnumberSum1001Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum1001Apw[0]?.total)) ?0:parseInt(pressnumberSum1001Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum1001Sks[0]?.total)) ?0:parseInt(pressnumberSum1001Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum1001Pbb[0]?.total)) ?0:parseInt(pressnumberSum1001Pbb[0]?.total))




            }</td>
            <td  ></td>
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>651</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount651Srt[0]?.total)) ?0:parseInt(pressnumberCount651Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount651Pob[0]?.total)) ?0:parseInt(pressnumberCount651Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount651Apw[0]?.total)) ?0:parseInt(pressnumberCount651Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount651Sks[0]?.total)) ?0:parseInt(pressnumberCount651Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount651Pbb[0]?.total)) ?0:parseInt(pressnumberCount651Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
              (isNaN( parseInt(pressnumberCount651Srt[0]?.total)) ?0:parseInt(pressnumberCount651Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Pob[0]?.total)) ?0:parseInt(pressnumberCount651Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Apw[0]?.total)) ?0:parseInt(pressnumberCount651Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Sks[0]?.total)) ?0:parseInt(pressnumberCount651Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount651Pbb[0]?.total)) ?0:parseInt(pressnumberCount651Pbb[0]?.total))
                                                          
            }</td>
            <td  ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum651Srt[0]?.total)) ?0:parseInt(pressnumberSum651Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum651Pob[0]?.total)) ?0:parseInt(pressnumberSum651Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum651Apw[0]?.total)) ?0:parseInt(pressnumberSum651Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum651Sks[0]?.total)) ?0:parseInt(pressnumberSum651Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum651Pbb[0]?.total)) ?0:parseInt(pressnumberSum651Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                       (isNaN( parseInt(pressnumberSum651Srt[0]?.total)) ?0:parseInt(pressnumberSum651Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Pob[0]?.total)) ?0:parseInt(pressnumberSum651Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Apw[0]?.total)) ?0:parseInt(pressnumberSum651Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum651Sks[0]?.total)) ?0:parseInt(pressnumberSum651Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum651Pbb[0]?.total)) ?0:parseInt(pressnumberSum651Pbb[0]?.total))


                                                   
            }</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>401</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount401Srt[0]?.total)) ?0:parseInt(pressnumberCount401Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount401Pob[0]?.total)) ?0:parseInt(pressnumberCount401Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount401Apw[0]?.total)) ?0:parseInt(pressnumberCount401Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount401Sks[0]?.total)) ?0:parseInt(pressnumberCount401Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount401Pbb[0]?.total)) ?0:parseInt(pressnumberCount401Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                      (isNaN( parseInt(pressnumberCount401Srt[0]?.total)) ?0:parseInt(pressnumberCount401Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Pob[0]?.total)) ?0:parseInt(pressnumberCount401Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Apw[0]?.total)) ?0:parseInt(pressnumberCount401Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount401Sks[0]?.total)) ?0:parseInt(pressnumberCount401Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount401Pbb[0]?.total)) ?0:parseInt(pressnumberCount401Pbb[0]?.total) )


            }</td>
            <td  ></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum401Srt[0]?.total)) ?0:parseInt(pressnumberSum401Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum401Pob[0]?.total)) ?0:parseInt(pressnumberSum401Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum401Apw[0]?.total)) ?0:parseInt(pressnumberSum401Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum401Sks[0]?.total)) ?0:parseInt(pressnumberSum401Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum401Pbb[0]?.total)) ?0:parseInt(pressnumberSum401Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                      ( isNaN( parseInt(pressnumberSum401Srt[0]?.total)) ?0:parseInt(pressnumberSum401Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum401Pob[0]?.total)) ?0:parseInt(pressnumberSum401Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum401Apw[0]?.total)) ?0:parseInt(pressnumberSum401Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum401Sks[0]?.total)) ?0:parseInt(pressnumberSum401Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum401Pbb[0]?.total)) ?0:parseInt(pressnumberSum401Pbb[0]?.total))

            }</td>
            <td  ></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>402</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount402Srt[0]?.total)) ?0:parseInt(pressnumberCount402Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount402Pob[0]?.total)) ?0:parseInt(pressnumberCount402Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount402Apw[0]?.total)) ?0:parseInt(pressnumberCount402Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount402Sks[0]?.total)) ?0:parseInt(pressnumberCount402Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount402Pbb[0]?.total)) ?0:parseInt(pressnumberCount402Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{  ( isNaN( parseInt(pressnumberCount402Srt[0]?.total)) ?0:parseInt(pressnumberCount402Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount402Pob[0]?.total)) ?0:parseInt(pressnumberCount402Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount402Apw[0]?.total)) ?0:parseInt(pressnumberCount402Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount402Sks[0]?.total)) ?0:parseInt(pressnumberCount402Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount402Pbb[0]?.total)) ?0:parseInt(pressnumberCount402Pbb[0]?.total))}</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum402Srt[0]?.total)) ?0:parseInt(pressnumberSum402Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum402Pob[0]?.total)) ?0:parseInt(pressnumberSum402Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum402Apw[0]?.total)) ?0:parseInt(pressnumberSum402Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum402Sks[0]?.total)) ?0:parseInt(pressnumberSum402Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum402Pbb[0]?.total)) ?0:parseInt(pressnumberSum402Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum402Srt[0]?.total)) ?0:parseInt(pressnumberSum402Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Pob[0]?.total)) ?0:parseInt(pressnumberSum402Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Apw[0]?.total)) ?0:parseInt(pressnumberSum402Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum402Sks[0]?.total)) ?0:parseInt(pressnumberSum402Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum402Pbb[0]?.total)) ?0:parseInt(pressnumberSum402Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>501</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{(isNaN( parseInt(pressnumberCount501Srt[0]?.total)) ?0:parseInt(pressnumberCount501Srt[0]?.total) )}</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount501Pob[0]?.total)) ?0:parseInt(pressnumberCount501Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount501Apw[0]?.total)) ?0:parseInt(pressnumberCount501Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount501Sks[0]?.total)) ?0:parseInt(pressnumberCount501Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount501Pbb[0]?.total)) ?0:parseInt(pressnumberCount501Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >
                                                        {(isNaN( parseInt(pressnumberCount501Srt[0]?.total)) ?0:parseInt(pressnumberCount501Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Pob[0]?.total)) ?0:parseInt(pressnumberCount501Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Apw[0]?.total)) ?0:parseInt(pressnumberCount501Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Sks[0]?.total)) ?0:parseInt(pressnumberCount501Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount501Pbb[0]?.total)) ?0:parseInt(pressnumberCount501Pbb[0]?.total) )}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum501Srt[0]?.total)) ?0:parseInt(pressnumberSum501Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum501Pob[0]?.total)) ?0:parseInt(pressnumberSum501Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum501Apw[0]?.total)) ?0:parseInt(pressnumberSum501Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum501Sks[0]?.total)) ?0:parseInt(pressnumberSum501Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum501Pbb[0]?.total)) ?0:parseInt(pressnumberSum501Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum501Srt[0]?.total)) ?0:parseInt(pressnumberSum501Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Pob[0]?.total)) ?0:parseInt(pressnumberSum501Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Apw[0]?.total)) ?0:parseInt(pressnumberSum501Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum501Sks[0]?.total)) ?0:parseInt(pressnumberSum501Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum501Pbb[0]?.total)) ?0:parseInt(pressnumberSum501Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
         
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>502</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount502Srt[0]?.total)) ?0:parseInt(pressnumberCount502Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount502Pob[0]?.total)) ?0:parseInt(pressnumberCount502Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount502Apw[0]?.total)) ?0:parseInt(pressnumberCount502Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount502Sks[0]?.total)) ?0:parseInt(pressnumberCount502Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount502Pbb[0]?.total)) ?0:parseInt(pressnumberCount502Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberCount502Srt[0]?.total)) ?0:parseInt(pressnumberCount502Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Pob[0]?.total)) ?0:parseInt(pressnumberCount502Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount502Apw[0]?.total)) ?0:parseInt(pressnumberCount502Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Sks[0]?.total)) ?0:parseInt(pressnumberCount502Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount502Pbb[0]?.total)) ?0:parseInt(pressnumberCount502Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum502Srt[0]?.total)) ?0:parseInt(pressnumberSum502Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum502Pob[0]?.total)) ?0:parseInt(pressnumberSum502Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum502Apw[0]?.total)) ?0:parseInt(pressnumberSum502Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum502Sks[0]?.total)) ?0:parseInt(pressnumberSum502Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum502Pbb[0]?.total)) ?0:parseInt(pressnumberSum502Pbb[0]?.total).toFixed(1)}</td>
            <td  ></td>
            <td  >
                                                   {(isNaN( parseInt(pressnumberSum502Srt[0]?.total)) ?0:parseInt(pressnumberSum502Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Pob[0]?.total)) ?0:parseInt(pressnumberSum502Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Apw[0]?.total)) ?0:parseInt(pressnumberSum502Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum502Sks[0]?.total)) ?0:parseInt(pressnumberSum502Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum502Pbb[0]?.total)) ?0:parseInt(pressnumberSum502Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
         
         
          <tr>
          <td  colspan='2'>SUMMARY</td>
          
            
            <td  >{
                                                      
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
