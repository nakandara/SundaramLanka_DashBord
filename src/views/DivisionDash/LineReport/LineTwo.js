import React,{useContext, useEffect} from 'react'
import './line.css'
import {  useNavigate } from 'react-router-dom';
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'




const LineTwo = () => {


  
  const {  ddate,  shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,
    pressCountA,setPressCountA,
    pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC  } = useContext(reportContext)
  


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

    setPressSumL(responsePressOne.data.data.data);

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




/////filter

//srt
  const pressnumberSum102Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '102' })
  const pressnumberSum103Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '103' })
  const pressnumberSum104Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '104' })
  const pressnumberSum105Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '105' })
  const pressnumberSum106Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '106' })
  const pressnumberSum107Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '107' })



  const pressnumberCount102Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '102' })
  const pressnumberCount103Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '103' })
  const pressnumberCount104Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '104' })
  const pressnumberCount105Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '105' })
  const pressnumberCount106Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '106' })
  const pressnumberCount107Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '107' })


//pob

const pressnumberSum102Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '102' })
  const pressnumberSum103Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '103' })
  const pressnumberSum104Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '104' })
  const pressnumberSum105Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '105' })
  const pressnumberSum106Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '106' })
  const pressnumberSum107Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '107' })



  const pressnumberCount102Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '102' })
  const pressnumberCount103Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '103' })
  const pressnumberCount104Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '104' })
  const pressnumberCount105Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '105' })
  const pressnumberCount106Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '106' })
  const pressnumberCount107Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '107' })


///pbb

const pressnumberSum102Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '102' })
  const pressnumberSum103Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '103' })
  const pressnumberSum104Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '104' })
  const pressnumberSum105Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '105' })
  const pressnumberSum106Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '106' })
  const pressnumberSum107Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '107' })



  const pressnumberCount102Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '102' })
  const pressnumberCount103Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '103' })
  const pressnumberCount104Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '104' })
  const pressnumberCount105Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '105' })
  const pressnumberCount106Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '106' })
  const pressnumberCount107Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '107' })



////apw

const pressnumberSum102Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '102' })
  const pressnumberSum103Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '103' })
  const pressnumberSum104Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '104' })
  const pressnumberSum105Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '105' })
  const pressnumberSum106Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '106' })
  const pressnumberSum107Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '107' })



  const pressnumberCount102Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '102' })
  const pressnumberCount103Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '103' })
  const pressnumberCount104Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '104' })
  const pressnumberCount105Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '105' })
  const pressnumberCount106Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '106' })
  const pressnumberCount107Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '107' })

///////sks

const pressnumberSum102Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '102' })
  const pressnumberSum103Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '103' })
  const pressnumberSum104Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '104' })
  const pressnumberSum105Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '105' })
  const pressnumberSum106Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '106' })
  const pressnumberSum107Sks= pressSumSks && pressSumSks.filter((d) => { return d.press_no === '107' })



  const pressnumberCount102Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '102' })
  const pressnumberCount103Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '103' })
  const pressnumberCount104Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '104' })
  const pressnumberCount105Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '105' })
  const pressnumberCount106Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '106' })
  const pressnumberCount107Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '107' })





/////filter-quality

//A
// const pressnumberSum107A = pressSumA && pressSumA.filter((d) => { return d.press_no === '107' })
// const pressnumberSum102A = pressSumA && pressSumA.filter((d) => { return d.press_no === '102' })
// const pressnumberSum103A = pressSumA && pressSumA.filter((d) => { return d.press_no === '103' })
// const pressnumberSum104A = pressSumA && pressSumA.filter((d) => { return d.press_no === '104' })
// const pressnumberSum105A = pressSumA && pressSumA.filter((d) => { return d.press_no === '105' })
// const pressnumberSum106A = pressSumA && pressSumA.filter((d) => { return d.press_no === '106' })




const pressnumberCount102A = pressCountA && pressCountA.filter((d) => { return d.press_no === '102' })
const pressnumberCount103A = pressCountA && pressCountA.filter((d) => { return d.press_no === '103' })
const pressnumberCount104A = pressCountA && pressCountA.filter((d) => { return d.press_no === '104' })
const pressnumberCount105A = pressCountA && pressCountA.filter((d) => { return d.press_no === '105' })
const pressnumberCount106A = pressCountA && pressCountA.filter((d) => { return d.press_no === '106' })
const pressnumberCount107A = pressCountA && pressCountA.filter((d) => { return d.press_no === '107' })
 

//B

const pressnumberSum107B = pressSumB && pressSumB.filter((d) => { return d.press_no === '107' })
const pressnumberSum102B = pressSumB && pressSumB.filter((d) => { return d.press_no === '102' })
const pressnumberSum103B = pressSumB && pressSumB.filter((d) => { return d.press_no === '103' })
const pressnumberSum104B = pressSumB && pressSumB.filter((d) => { return d.press_no === '104' })
const pressnumberSum105B = pressSumB && pressSumB.filter((d) => { return d.press_no === '105' })
const pressnumberSum106B = pressSumB && pressSumB.filter((d) => { return d.press_no === '106' })



// const pressnumberCount107B = pressCountB && pressCountB.filter((d) => { return d.press_no === '107' })
// const pressnumberCount102B = pressCountB && pressCountB.filter((d) => { return d.press_no === '102' })
// const pressnumberCount103B = pressCountB && pressCountB.filter((d) => { return d.press_no === '103' })
// const pressnumberCount104B = pressCountB && pressCountB.filter((d) => { return d.press_no === '104' })
// const pressnumberCount105B = pressCountB && pressCountB.filter((d) => { return d.press_no === '105' })
// const pressnumberCount106B = pressCountB && pressCountB.filter((d) => { return d.press_no === '106' })


///E

const pressnumberSum107E = pressSumE && pressSumE.filter((d) => { return d.press_no === '107' })
const pressnumberSum102E = pressSumE && pressSumE.filter((d) => { return d.press_no === '102' })
const pressnumberSum103E = pressSumE && pressSumE.filter((d) => { return d.press_no === '103' })
const pressnumberSum104E = pressSumE && pressSumE.filter((d) => { return d.press_no === '104' })
const pressnumberSum105E = pressSumE && pressSumE.filter((d) => { return d.press_no === '105' })
const pressnumberSum106E = pressSumE && pressSumE.filter((d) => { return d.press_no === '106' })



// const pressnumberCount107E = pressCountE && pressCountE.filter((d) => { return d.press_no === '107' })
// const pressnumberCount102E = pressCountE && pressCountE.filter((d) => { return d.press_no === '102' })
// const pressnumberCount103E = pressCountE && pressCountE.filter((d) => { return d.press_no === '103' })
// const pressnumberCount104E = pressCountE && pressCountE.filter((d) => { return d.press_no === '104' })
// const pressnumberCount105E = pressCountE && pressCountE.filter((d) => { return d.press_no === '105' })
// const pressnumberCount106E = pressCountE && pressCountE.filter((d) => { return d.press_no === '106' })



////R


const pressnumberSum102R = pressSumR && pressSumR.filter((d) => { return d.press_no === '102' })
const pressnumberSum103R = pressSumR && pressSumR.filter((d) => { return d.press_no === '103' })
const pressnumberSum104R = pressSumR && pressSumR.filter((d) => { return d.press_no === '104' })
const pressnumberSum105R = pressSumR && pressSumR.filter((d) => { return d.press_no === '105' })
const pressnumberSum106R = pressSumR && pressSumR.filter((d) => { return d.press_no === '106' })
const pressnumberSum107R = pressSumR && pressSumR.filter((d) => { return d.press_no === '107' })


// const pressnumberCount107R = pressCountR && pressCountR.filter((d) => { return d.press_no === '107' })
// const pressnumberCount102R = pressCountR && pressCountR.filter((d) => { return d.press_no === '102' })
// const pressnumberCount103R = pressCountR && pressCountR.filter((d) => { return d.press_no === '103' })
// const pressnumberCount104R = pressCountR && pressCountR.filter((d) => { return d.press_no === '104' })
// const pressnumberCount105R = pressCountR && pressCountR.filter((d) => { return d.press_no === '105' })
// const pressnumberCount106R = pressCountR && pressCountR.filter((d) => { return d.press_no === '106' })

///////L

const pressnumberSum107L = pressSumL && pressSumL.filter((d) => { return d.press_no === '107' })
const pressnumberSum102L = pressSumL && pressSumL.filter((d) => { return d.press_no === '102' })
const pressnumberSum103L = pressSumL && pressSumL.filter((d) => { return d.press_no === '103' })
const pressnumberSum104L = pressSumL && pressSumL.filter((d) => { return d.press_no === '104' })
const pressnumberSum105L = pressSumL && pressSumL.filter((d) => { return d.press_no === '105' })
const pressnumberSum106L= pressSumL && pressSumL.filter((d) => { return d.press_no === '106' })






                                                 
                                                 
  
//console.log(pressnumberSum106R);






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
            <th scope="col-md-12 col-sm-12 col-lg-12" width='60%' height='1% ' style={{maxHeight:'1px'}}> LINE TWO REPORT - SLTL</th>
            
            <th  width='10%' style={{maxHeight:'1px'}}> <div className="col">
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
            <td   colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>102</td>
          
            <td  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 103</td>
            
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>104</td>
        
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>105</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>106</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>107</td>
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
            
            <td  >{( isNaN( parseInt(pressnumberCount102Pob[0]?.total)) ?0:parseInt(pressnumberCount102Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Apw[0]?.total)) ?0:parseInt(pressnumberCount102Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount102Sks[0]?.total)) ?0:parseInt(pressnumberCount102Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Pbb[0]?.total)) ?0:parseInt(pressnumberCount102Pbb[0]?.total))}</td>


               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount103Srt[0]?.total)) ? 0 : parseInt(pressnumberCount103Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount103Pob[0]?.total)) ? 0 : parseInt(pressnumberCount103Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount103Apw[0]?.total)) ? 0 : parseInt(pressnumberCount103Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount103Sks[0]?.total)) ? 0 : parseInt(pressnumberCount103Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount103Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount103Pbb[0]?.total))

               }</td>
               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount104Srt[0]?.total)) ? 0 : parseInt(pressnumberCount104Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount104Pob[0]?.total)) ? 0 : parseInt(pressnumberCount104Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount104Apw[0]?.total)) ? 0 : parseInt(pressnumberCount104Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount104Sks[0]?.total)) ? 0 : parseInt(pressnumberCount104Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount104Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount104Pbb[0]?.total))


               }</td>
               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberCount105Srt[0]?.total)) ? 0 : parseInt(pressnumberCount105Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount105Pob[0]?.total)) ? 0 : parseInt(pressnumberCount105Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount105Apw[0]?.total)) ? 0 : parseInt(pressnumberCount105Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount105Sks[0]?.total)) ? 0 : parseInt(pressnumberCount105Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount105Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount105Pbb[0]?.total))}</td>

               <td  ></td>
               <td  > {(isNaN(parseInt(pressnumberCount106Srt[0]?.total)) ? 0 : parseInt(pressnumberCount106Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount106Pob[0]?.total)) ? 0 : parseInt(pressnumberCount106Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount106Apw[0]?.total)) ? 0 : parseInt(pressnumberCount106Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount106Sks[0]?.total)) ? 0 : parseInt(pressnumberCount106Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount106Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount106Pbb[0]?.total))}</td>

               <td  ></td>
               <td  > {(isNaN(parseInt(pressnumberCount107Srt[0]?.total)) ? 0 : parseInt(pressnumberCount107Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount107Pob[0]?.total)) ? 0 : parseInt(pressnumberCount107Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount107Apw[0]?.total)) ? 0 : parseInt(pressnumberCount107Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount107Sks[0]?.total)) ? 0 : parseInt(pressnumberCount107Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount107Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount107Pbb[0]?.total))}</td>
               <td  ></td>
               <td  >{( isNaN( parseInt(pressnumberCount102Pob[0]?.total)) ?0:parseInt(pressnumberCount102Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Apw[0]?.total)) ?0:parseInt(pressnumberCount102Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount102Sks[0]?.total)) ?0:parseInt(pressnumberCount102Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Pbb[0]?.total)) ?0:parseInt(pressnumberCount102Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberCount103Srt[0]?.total)) ? 0 : parseInt(pressnumberCount103Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount103Pob[0]?.total)) ? 0 : parseInt(pressnumberCount103Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount103Apw[0]?.total)) ? 0 : parseInt(pressnumberCount103Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount103Sks[0]?.total)) ? 0 : parseInt(pressnumberCount103Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount103Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount103Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberCount104Srt[0]?.total)) ? 0 : parseInt(pressnumberCount104Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount104Pob[0]?.total)) ? 0 : parseInt(pressnumberCount104Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount104Apw[0]?.total)) ? 0 : parseInt(pressnumberCount104Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount104Sks[0]?.total)) ? 0 : parseInt(pressnumberCount104Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberCount104Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount104Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount105Srt[0]?.total)) ? 0 : parseInt(pressnumberCount105Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount105Pob[0]?.total)) ? 0 : parseInt(pressnumberCount105Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount105Apw[0]?.total)) ? 0 : parseInt(pressnumberCount105Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount105Sks[0]?.total)) ? 0 : parseInt(pressnumberCount105Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount105Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount105Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberCount106Srt[0]?.total)) ? 0 : parseInt(pressnumberCount106Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount106Pob[0]?.total)) ? 0 : parseInt(pressnumberCount106Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount106Apw[0]?.total)) ? 0 : parseInt(pressnumberCount106Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount106Sks[0]?.total)) ? 0 : parseInt(pressnumberCount106Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount106Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount106Pbb[0]?.total))

                                                  +(isNaN(parseInt(pressnumberCount107Srt[0]?.total)) ? 0 : parseInt(pressnumberCount107Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount107Pob[0]?.total)) ? 0 : parseInt(pressnumberCount107Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount107Apw[0]?.total)) ? 0 : parseInt(pressnumberCount107Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount107Sks[0]?.total)) ? 0 : parseInt(pressnumberCount107Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberCount107Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount107Pbb[0]?.total))
                                                  
                                                  }</td>
               <td  ></td>



             </tr>

             <tr>
               <td  style={{ fontSize: '14px' }}>Weight</td>
               <td  style={{ fontSize: '14px' }}>Ton</td>

               <td  >{
                 (isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total))




               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total))



               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total))

               }</td>


               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total))}</td>

               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total))}</td>

               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total))}</td>
               <td  ></td>
               <td  >{( isNaN( parseInt(pressnumberSum102Pob[0]?.total)) ?0:parseInt(pressnumberSum102Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum102Apw[0]?.total)) ?0:parseInt(pressnumberSum102Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberSum102Sks[0]?.total)) ?0:parseInt(pressnumberSum102Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberSum102Pbb[0]?.total)) ?0:parseInt(pressnumberSum102Pbb[0]?.total))
                                                  
                                                  + (isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total))

                                                  + (isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                                                  (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total))


                                                  +(isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total))

                                                  +(isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total))
                                                  + (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total))
                                                  
                                                  }</td>
               <td  ></td>

            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}}>FTR</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount102A[0]?.total)) ? 0 : parseInt(pressnumberCount102A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount102Srt[0]?.total)) ? 0 : parseInt(pressnumberCount102Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount102Pob[0]?.total)) ? 0 : parseInt(pressnumberCount102Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount102Apw[0]?.total)) ? 0 : parseInt(pressnumberCount102Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount102Sks[0]?.total)) ? 0 : parseInt(pressnumberCount102Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount102Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount102Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount102A[0]?.total)) ? 0 : parseInt(pressnumberCount102A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount102Srt[0]?.total)) ? 0 : parseInt(pressnumberCount102Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount102Pob[0]?.total)) ? 0 : parseInt(pressnumberCount102Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount102Apw[0]?.total)) ? 0 : parseInt(pressnumberCount102Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount102Sks[0]?.total)) ? 0 : parseInt(pressnumberCount102Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount102Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount102Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount103A[0]?.total)) ? 0 : parseInt(pressnumberCount103A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount103Srt[0]?.total)) ? 0 : parseInt(pressnumberCount103Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount103Pob[0]?.total)) ? 0 : parseInt(pressnumberCount103Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount103Apw[0]?.total)) ? 0 : parseInt(pressnumberCount103Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount103Sks[0]?.total)) ? 0 : parseInt(pressnumberCount103Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount103Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount103Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount103A[0]?.total)) ? 0 : parseInt(pressnumberCount103A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount103Srt[0]?.total)) ? 0 : parseInt(pressnumberCount103Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount103Pob[0]?.total)) ? 0 : parseInt(pressnumberCount103Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount103Apw[0]?.total)) ? 0 : parseInt(pressnumberCount103Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount103Sks[0]?.total)) ? 0 : parseInt(pressnumberCount103Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount103Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount103Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount104A[0]?.total)) ? 0 : parseInt(pressnumberCount104A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount104Srt[0]?.total)) ? 0 : parseInt(pressnumberCount104Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount104Pob[0]?.total)) ? 0 : parseInt(pressnumberCount104Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount104Apw[0]?.total)) ? 0 : parseInt(pressnumberCount104Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount104Sks[0]?.total)) ? 0 : parseInt(pressnumberCount104Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount104Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount104Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount104A[0]?.total)) ? 0 : parseInt(pressnumberCount104A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount104Srt[0]?.total)) ? 0 : parseInt(pressnumberCount104Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount104Pob[0]?.total)) ? 0 : parseInt(pressnumberCount104Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount104Apw[0]?.total)) ? 0 : parseInt(pressnumberCount104Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount104Sks[0]?.total)) ? 0 : parseInt(pressnumberCount104Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount104Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount104Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount105A[0]?.total)) ? 0 : parseInt(pressnumberCount105A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount105Srt[0]?.total)) ? 0 : parseInt(pressnumberCount105Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount105Pob[0]?.total)) ? 0 : parseInt(pressnumberCount105Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount105Apw[0]?.total)) ? 0 : parseInt(pressnumberCount105Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount105Sks[0]?.total)) ? 0 : parseInt(pressnumberCount105Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount105Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount105Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount105A[0]?.total)) ? 0 : parseInt(pressnumberCount105A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount105Srt[0]?.total)) ? 0 : parseInt(pressnumberCount105Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount105Pob[0]?.total)) ? 0 : parseInt(pressnumberCount105Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount105Apw[0]?.total)) ? 0 : parseInt(pressnumberCount105Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount105Sks[0]?.total)) ? 0 : parseInt(pressnumberCount105Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount105Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount105Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount106A[0]?.total)) ? 0 : parseInt(pressnumberCount106A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount106Srt[0]?.total)) ? 0 : parseInt(pressnumberCount106Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount106Pob[0]?.total)) ? 0 : parseInt(pressnumberCount106Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount106Apw[0]?.total)) ? 0 : parseInt(pressnumberCount106Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount106Sks[0]?.total)) ? 0 : parseInt(pressnumberCount106Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount106Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount106Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount106A[0]?.total)) ? 0 : parseInt(pressnumberCount106A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount106Srt[0]?.total)) ? 0 : parseInt(pressnumberCount106Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount106Pob[0]?.total)) ? 0 : parseInt(pressnumberCount106Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount106Apw[0]?.total)) ? 0 : parseInt(pressnumberCount106Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount106Sks[0]?.total)) ? 0 : parseInt(pressnumberCount106Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount106Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount106Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>


            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount107A[0]?.total)) ? 0 : parseInt(pressnumberCount107A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount107Srt[0]?.total)) ? 0 : parseInt(pressnumberCount107Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Pob[0]?.total)) ? 0 : parseInt(pressnumberCount107Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Apw[0]?.total)) ? 0 : parseInt(pressnumberCount107Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Sks[0]?.total)) ? 0 : parseInt(pressnumberCount107Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount107Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount107A[0]?.total)) ? 0 : parseInt(pressnumberCount107A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount107Srt[0]?.total)) ? 0 : parseInt(pressnumberCount107Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Pob[0]?.total)) ? 0 : parseInt(pressnumberCount107Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Apw[0]?.total)) ? 0 : parseInt(pressnumberCount107Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Sks[0]?.total)) ? 0 : parseInt(pressnumberCount107Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount107Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>




            <td  >90%</td>
            <td  >
            {(((isNaN(((((isNaN(parseInt(pressnumberCount107A[0]?.total)) ? 0 : parseInt(pressnumberCount107A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount107Srt[0]?.total)) ? 0 : parseInt(pressnumberCount107Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Pob[0]?.total)) ? 0 : parseInt(pressnumberCount107Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Apw[0]?.total)) ? 0 : parseInt(pressnumberCount107Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Sks[0]?.total)) ? 0 : parseInt(pressnumberCount107Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount107Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount107Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount107A[0]?.total)) ? 0 : parseInt(pressnumberCount107A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount107Srt[0]?.total)) ? 0 : parseInt(pressnumberCount107Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Pob[0]?.total)) ? 0 : parseInt(pressnumberCount107Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Apw[0]?.total)) ? 0 : parseInt(pressnumberCount107Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Sks[0]?.total)) ? 0 : parseInt(pressnumberCount107Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount107Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount107Pbb[0]?.total)))) * 100))) +(isNaN(((((isNaN(parseInt(pressnumberCount102A[0]?.total)) ? 0 : parseInt(pressnumberCount102A[0]?.total))
               / ((isNaN(parseInt(pressnumberCount102Srt[0]?.total)) ? 0 : parseInt(pressnumberCount102Srt[0]?.total)) +
           (isNaN(parseInt(pressnumberCount102Pob[0]?.total)) ? 0 : parseInt(pressnumberCount102Pob[0]?.total)) +
           (isNaN(parseInt(pressnumberCount102Apw[0]?.total)) ? 0 : parseInt(pressnumberCount102Apw[0]?.total)) +
           (isNaN(parseInt(pressnumberCount102Sks[0]?.total)) ? 0 : parseInt(pressnumberCount102Sks[0]?.total)) +
           (isNaN(parseInt(pressnumberCount102Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount102Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount102A[0]?.total)) ? 0 : parseInt(pressnumberCount102A[0]?.total))
           / ((isNaN(parseInt(pressnumberCount102Srt[0]?.total)) ? 0 : parseInt(pressnumberCount102Srt[0]?.total)) +
       (isNaN(parseInt(pressnumberCount102Pob[0]?.total)) ? 0 : parseInt(pressnumberCount102Pob[0]?.total)) +
       (isNaN(parseInt(pressnumberCount102Apw[0]?.total)) ? 0 : parseInt(pressnumberCount102Apw[0]?.total)) +
       (isNaN(parseInt(pressnumberCount102Sks[0]?.total)) ? 0 : parseInt(pressnumberCount102Sks[0]?.total)) +
       (isNaN(parseInt(pressnumberCount102Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount102Pbb[0]?.total)))) * 100))+(isNaN(((((isNaN(parseInt(pressnumberCount103A[0]?.total)) ? 0 : parseInt(pressnumberCount103A[0]?.total))
       / ((isNaN(parseInt(pressnumberCount103Srt[0]?.total)) ? 0 : parseInt(pressnumberCount103Srt[0]?.total)) +
   (isNaN(parseInt(pressnumberCount103Pob[0]?.total)) ? 0 : parseInt(pressnumberCount103Pob[0]?.total)) +
   (isNaN(parseInt(pressnumberCount103Apw[0]?.total)) ? 0 : parseInt(pressnumberCount103Apw[0]?.total)) +
   (isNaN(parseInt(pressnumberCount103Sks[0]?.total)) ? 0 : parseInt(pressnumberCount103Sks[0]?.total)) +
   (isNaN(parseInt(pressnumberCount103Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount103Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount103A[0]?.total)) ? 0 : parseInt(pressnumberCount103A[0]?.total))
   / ((isNaN(parseInt(pressnumberCount103Srt[0]?.total)) ? 0 : parseInt(pressnumberCount103Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount103Pob[0]?.total)) ? 0 : parseInt(pressnumberCount103Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount103Apw[0]?.total)) ? 0 : parseInt(pressnumberCount103Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount103Sks[0]?.total)) ? 0 : parseInt(pressnumberCount103Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount103Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount103Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount105A[0]?.total)) ? 0 : parseInt(pressnumberCount105A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount105Srt[0]?.total)) ? 0 : parseInt(pressnumberCount105Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Pob[0]?.total)) ? 0 : parseInt(pressnumberCount105Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Apw[0]?.total)) ? 0 : parseInt(pressnumberCount105Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Sks[0]?.total)) ? 0 : parseInt(pressnumberCount105Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount105Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount105A[0]?.total)) ? 0 : parseInt(pressnumberCount105A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount105Srt[0]?.total)) ? 0 : parseInt(pressnumberCount105Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Pob[0]?.total)) ? 0 : parseInt(pressnumberCount105Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Apw[0]?.total)) ? 0 : parseInt(pressnumberCount105Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Sks[0]?.total)) ? 0 : parseInt(pressnumberCount105Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount105Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount105Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount106A[0]?.total)) ? 0 : parseInt(pressnumberCount106A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount106Srt[0]?.total)) ? 0 : parseInt(pressnumberCount106Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Pob[0]?.total)) ? 0 : parseInt(pressnumberCount106Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Apw[0]?.total)) ? 0 : parseInt(pressnumberCount106Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Sks[0]?.total)) ? 0 : parseInt(pressnumberCount106Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount106Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount106A[0]?.total)) ? 0 : parseInt(pressnumberCount106A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount106Srt[0]?.total)) ? 0 : parseInt(pressnumberCount106Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Pob[0]?.total)) ? 0 : parseInt(pressnumberCount106Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Apw[0]?.total)) ? 0 : parseInt(pressnumberCount106Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Sks[0]?.total)) ? 0 : parseInt(pressnumberCount106Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount106Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount106Pbb[0]?.total)))) * 100)))))/6).toFixed(2)}%
            </td>
            <td  >90%</td>
            
          </tr>
          
          <tr>
          <td  style={{fontSize:'14px'}}>B</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum102B[0]?.total)) ? 0 : parseInt(pressnumberSum102B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum102B[0]?.total)) ? 0 : parseInt(pressnumberSum102B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum103B[0]?.total)) ? 0 : parseInt(pressnumberSum103B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum103B[0]?.total)) ? 0 : parseInt(pressnumberSum103B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum104B[0]?.total)) ? 0 : parseInt(pressnumberSum104B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum104B[0]?.total)) ? 0 : parseInt(pressnumberSum104B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum105B[0]?.total)) ? 0 : parseInt(pressnumberSum105B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum105B[0]?.total)) ? 0 : parseInt(pressnumberSum105B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>

               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum106B[0]?.total)) ? 0 : parseInt(pressnumberSum106B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum106B[0]?.total)) ? 0 : parseInt(pressnumberSum106B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>

               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum107B[0]?.total)) ? 0 : parseInt(pressnumberSum107B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum107B[0]?.total)) ? 0 : parseInt(pressnumberSum107B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



               <td  >0.15%</td>
               <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum107B[0]?.total)) ? 0 : parseInt(pressnumberSum107B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum107B[0]?.total)) ? 0 : parseInt(pressnumberSum107B[0]?.total))
                     / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum102B[0]?.total)) ? 0 : parseInt(pressnumberSum102B[0]?.total))
                         / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum102B[0]?.total)) ? 0 : parseInt(pressnumberSum102B[0]?.total))
                             / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum103B[0]?.total)) ? 0 : parseInt(pressnumberSum103B[0]?.total))
                                 / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum103B[0]?.total)) ? 0 : parseInt(pressnumberSum103B[0]?.total))
                                     / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum105B[0]?.total)) ? 0 : parseInt(pressnumberSum105B[0]?.total))
                                         / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum105B[0]?.total)) ? 0 : parseInt(pressnumberSum105B[0]?.total))
                                             / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum106B[0]?.total)) ? 0 : parseInt(pressnumberSum106B[0]?.total))
                                                 / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum106B[0]?.total)) ? 0 : parseInt(pressnumberSum106B[0]?.total))
                                                     / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
               <td  >0.15%</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>E</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
           
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum102E[0]?.total)) ? 0 : parseInt(pressnumberSum102E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum102E[0]?.total)) ? 0 : parseInt(pressnumberSum102E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum103E[0]?.total)) ? 0 : parseInt(pressnumberSum103E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum103E[0]?.total)) ? 0 : parseInt(pressnumberSum103E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum104E[0]?.total)) ? 0 : parseInt(pressnumberSum104E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum104E[0]?.total)) ? 0 : parseInt(pressnumberSum104E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum105E[0]?.total)) ? 0 : parseInt(pressnumberSum105E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum105E[0]?.total)) ? 0 : parseInt(pressnumberSum105E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum106E[0]?.total)) ? 0 : parseInt(pressnumberSum106E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum106E[0]?.total)) ? 0 : parseInt(pressnumberSum106E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum107E[0]?.total)) ? 0 : parseInt(pressnumberSum107E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum107E[0]?.total)) ? 0 : parseInt(pressnumberSum107E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



            <td  >0%</td>
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum107E[0]?.total)) ? 0 : parseInt(pressnumberSum107E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum107E[0]?.total)) ? 0 : parseInt(pressnumberSum107E[0]?.total))
                  / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum102E[0]?.total)) ? 0 : parseInt(pressnumberSum102E[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum102E[0]?.total)) ? 0 : parseInt(pressnumberSum102E[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum103E[0]?.total)) ? 0 : parseInt(pressnumberSum103E[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum103E[0]?.total)) ? 0 : parseInt(pressnumberSum103E[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum105E[0]?.total)) ? 0 : parseInt(pressnumberSum105E[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum105E[0]?.total)) ? 0 : parseInt(pressnumberSum105E[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum106E[0]?.total)) ? 0 : parseInt(pressnumberSum106E[0]?.total))
                                              / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum106E[0]?.total)) ? 0 : parseInt(pressnumberSum106E[0]?.total))
                                                  / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
            <td  >0%</td>
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>R</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
           
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum102R[0]?.total)) ? 0 : parseInt(pressnumberSum102R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum102R[0]?.total)) ? 0 : parseInt(pressnumberSum102R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum103R[0]?.total)) ? 0 : parseInt(pressnumberSum103R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum103R[0]?.total)) ? 0 : parseInt(pressnumberSum103R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum104R[0]?.total)) ? 0 : parseInt(pressnumberSum104R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum104R[0]?.total)) ? 0 : parseInt(pressnumberSum104R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum104Srt[0]?.total)) ? 0 : parseInt(pressnumberSum104Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Pob[0]?.total)) ? 0 : parseInt(pressnumberSum104Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Apw[0]?.total)) ? 0 : parseInt(pressnumberSum104Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Sks[0]?.total)) ? 0 : parseInt(pressnumberSum104Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum104Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum104Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum105R[0]?.total)) ? 0 : parseInt(pressnumberSum105R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum105R[0]?.total)) ? 0 : parseInt(pressnumberSum105R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum106R[0]?.total)) ? 0 : parseInt(pressnumberSum106R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum106R[0]?.total)) ? 0 : parseInt(pressnumberSum106R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum107R[0]?.total)) ? 0 : parseInt(pressnumberSum107R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum107R[0]?.total)) ? 0 : parseInt(pressnumberSum107R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



            <td  >0.15%</td>
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum107R[0]?.total)) ? 0 : parseInt(pressnumberSum107R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum107R[0]?.total)) ? 0 : parseInt(pressnumberSum107R[0]?.total))
                  / ((isNaN(parseInt(pressnumberSum107Srt[0]?.total)) ? 0 : parseInt(pressnumberSum107Srt[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Pob[0]?.total)) ? 0 : parseInt(pressnumberSum107Pob[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Apw[0]?.total)) ? 0 : parseInt(pressnumberSum107Apw[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Sks[0]?.total)) ? 0 : parseInt(pressnumberSum107Sks[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum107Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum107Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum102R[0]?.total)) ? 0 : parseInt(pressnumberSum102R[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum102R[0]?.total)) ? 0 : parseInt(pressnumberSum102R[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum102Srt[0]?.total)) ? 0 : parseInt(pressnumberSum102Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Pob[0]?.total)) ? 0 : parseInt(pressnumberSum102Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Apw[0]?.total)) ? 0 : parseInt(pressnumberSum102Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Sks[0]?.total)) ? 0 : parseInt(pressnumberSum102Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum102Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum102Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum103R[0]?.total)) ? 0 : parseInt(pressnumberSum103R[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum103R[0]?.total)) ? 0 : parseInt(pressnumberSum103R[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum103Srt[0]?.total)) ? 0 : parseInt(pressnumberSum103Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Pob[0]?.total)) ? 0 : parseInt(pressnumberSum103Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Apw[0]?.total)) ? 0 : parseInt(pressnumberSum103Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Sks[0]?.total)) ? 0 : parseInt(pressnumberSum103Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum103Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum103Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum105R[0]?.total)) ? 0 : parseInt(pressnumberSum105R[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum105R[0]?.total)) ? 0 : parseInt(pressnumberSum105R[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum105Srt[0]?.total)) ? 0 : parseInt(pressnumberSum105Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Pob[0]?.total)) ? 0 : parseInt(pressnumberSum105Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Apw[0]?.total)) ? 0 : parseInt(pressnumberSum105Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Sks[0]?.total)) ? 0 : parseInt(pressnumberSum105Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum105Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum105Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum106R[0]?.total)) ? 0 : parseInt(pressnumberSum106R[0]?.total))
                                              / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum106R[0]?.total)) ? 0 : parseInt(pressnumberSum106R[0]?.total))
                                                  / ((isNaN(parseInt(pressnumberSum106Srt[0]?.total)) ? 0 : parseInt(pressnumberSum106Srt[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Pob[0]?.total)) ? 0 : parseInt(pressnumberSum106Pob[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Apw[0]?.total)) ? 0 : parseInt(pressnumberSum106Apw[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Sks[0]?.total)) ? 0 : parseInt(pressnumberSum106Sks[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum106Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum106Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
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
          <td  style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>102</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount102Srt[0]?.total)) ?0:parseInt(pressnumberCount102Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount102Pob[0]?.total)) ?0:parseInt(pressnumberCount102Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount102Apw[0]?.total)) ?0:parseInt(pressnumberCount102Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount102Sks[0]?.total)) ?0:parseInt(pressnumberCount102Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount102Pbb[0]?.total)) ?0:parseInt(pressnumberCount102Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount102Pob[0]?.total)) ?0:parseInt(pressnumberCount102Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Apw[0]?.total)) ?0:parseInt(pressnumberCount102Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount102Sks[0]?.total)) ?0:parseInt(pressnumberCount102Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount102Pbb[0]?.total)) ?0:parseInt(pressnumberCount102Pbb[0]?.total))
            }</td>
            <td  ></td>
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum102Srt[0]?.total)) ?0:parseInt(pressnumberSum102Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum102Pob[0]?.total)) ?0:parseInt(pressnumberSum102Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum102Apw[0]?.total)) ?0:parseInt(pressnumberSum102Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum102Sks[0]?.total)) ?0:parseInt(pressnumberSum102Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum102Pbb[0]?.total)) ?0:parseInt(pressnumberSum102Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                         (isNaN( parseInt(pressnumberSum102Srt[0]?.total)) ?0:parseInt(pressnumberSum102Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum102Pob[0]?.total)) ?0:parseInt(pressnumberSum102Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum102Apw[0]?.total)) ?0:parseInt(pressnumberSum102Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum102Sks[0]?.total)) ?0:parseInt(pressnumberSum102Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum102Pbb[0]?.total)) ?0:parseInt(pressnumberSum102Pbb[0]?.total))




            }</td>
            <td  ></td>
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>103</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount103Srt[0]?.total)) ?0:parseInt(pressnumberCount103Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount103Pob[0]?.total)) ?0:parseInt(pressnumberCount103Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount103Apw[0]?.total)) ?0:parseInt(pressnumberCount103Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount103Sks[0]?.total)) ?0:parseInt(pressnumberCount103Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount103Pbb[0]?.total)) ?0:parseInt(pressnumberCount103Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
              (isNaN( parseInt(pressnumberCount103Srt[0]?.total)) ?0:parseInt(pressnumberCount103Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Pob[0]?.total)) ?0:parseInt(pressnumberCount103Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Apw[0]?.total)) ?0:parseInt(pressnumberCount103Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Sks[0]?.total)) ?0:parseInt(pressnumberCount103Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount103Pbb[0]?.total)) ?0:parseInt(pressnumberCount103Pbb[0]?.total))
                                                          
            }</td>
            <td  ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum103Srt[0]?.total)) ?0:parseInt(pressnumberSum103Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum103Pob[0]?.total)) ?0:parseInt(pressnumberSum103Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum103Apw[0]?.total)) ?0:parseInt(pressnumberSum103Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum103Sks[0]?.total)) ?0:parseInt(pressnumberSum103Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum103Pbb[0]?.total)) ?0:parseInt(pressnumberSum103Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                       (isNaN( parseInt(pressnumberSum103Srt[0]?.total)) ?0:parseInt(pressnumberSum103Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum103Pob[0]?.total)) ?0:parseInt(pressnumberSum103Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum103Apw[0]?.total)) ?0:parseInt(pressnumberSum103Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum103Sks[0]?.total)) ?0:parseInt(pressnumberSum103Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum103Pbb[0]?.total)) ?0:parseInt(pressnumberSum103Pbb[0]?.total))


                                                   
            }</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>104</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount104Srt[0]?.total)) ?0:parseInt(pressnumberCount104Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount104Pob[0]?.total)) ?0:parseInt(pressnumberCount104Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount104Apw[0]?.total)) ?0:parseInt(pressnumberCount104Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount104Sks[0]?.total)) ?0:parseInt(pressnumberCount104Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount104Pbb[0]?.total)) ?0:parseInt(pressnumberCount104Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                      (isNaN( parseInt(pressnumberCount104Srt[0]?.total)) ?0:parseInt(pressnumberCount104Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount104Pob[0]?.total)) ?0:parseInt(pressnumberCount104Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount104Apw[0]?.total)) ?0:parseInt(pressnumberCount104Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount104Sks[0]?.total)) ?0:parseInt(pressnumberCount104Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount104Pbb[0]?.total)) ?0:parseInt(pressnumberCount104Pbb[0]?.total) )


            }</td>
            <td  ></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum104Srt[0]?.total)) ?0:parseInt(pressnumberSum104Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum104Pob[0]?.total)) ?0:parseInt(pressnumberSum104Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum104Apw[0]?.total)) ?0:parseInt(pressnumberSum104Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum104Sks[0]?.total)) ?0:parseInt(pressnumberSum104Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum104Pbb[0]?.total)) ?0:parseInt(pressnumberSum104Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                      ( isNaN( parseInt(pressnumberSum104Srt[0]?.total)) ?0:parseInt(pressnumberSum104Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum104Pob[0]?.total)) ?0:parseInt(pressnumberSum104Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum104Apw[0]?.total)) ?0:parseInt(pressnumberSum104Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum104Sks[0]?.total)) ?0:parseInt(pressnumberSum104Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum104Pbb[0]?.total)) ?0:parseInt(pressnumberSum104Pbb[0]?.total))

            }</td>
            <td  ></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>105</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount105Srt[0]?.total)) ?0:parseInt(pressnumberCount105Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount105Pob[0]?.total)) ?0:parseInt(pressnumberCount105Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount105Apw[0]?.total)) ?0:parseInt(pressnumberCount105Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount105Sks[0]?.total)) ?0:parseInt(pressnumberCount105Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount105Pbb[0]?.total)) ?0:parseInt(pressnumberCount105Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{  ( isNaN( parseInt(pressnumberCount105Srt[0]?.total)) ?0:parseInt(pressnumberCount105Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount105Pob[0]?.total)) ?0:parseInt(pressnumberCount105Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount105Apw[0]?.total)) ?0:parseInt(pressnumberCount105Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount105Sks[0]?.total)) ?0:parseInt(pressnumberCount105Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount105Pbb[0]?.total)) ?0:parseInt(pressnumberCount105Pbb[0]?.total))}</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum105Srt[0]?.total)) ?0:parseInt(pressnumberSum105Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum105Pob[0]?.total)) ?0:parseInt(pressnumberSum105Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum105Apw[0]?.total)) ?0:parseInt(pressnumberSum105Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum105Sks[0]?.total)) ?0:parseInt(pressnumberSum105Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum105Pbb[0]?.total)) ?0:parseInt(pressnumberSum105Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum105Srt[0]?.total)) ?0:parseInt(pressnumberSum105Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum105Pob[0]?.total)) ?0:parseInt(pressnumberSum105Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum105Apw[0]?.total)) ?0:parseInt(pressnumberSum105Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum105Sks[0]?.total)) ?0:parseInt(pressnumberSum105Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum105Pbb[0]?.total)) ?0:parseInt(pressnumberSum105Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>106</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{(isNaN( parseInt(pressnumberCount106Srt[0]?.total)) ?0:parseInt(pressnumberCount106Srt[0]?.total) )}</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount106Pob[0]?.total)) ?0:parseInt(pressnumberCount106Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount106Apw[0]?.total)) ?0:parseInt(pressnumberCount106Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount106Sks[0]?.total)) ?0:parseInt(pressnumberCount106Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount106Pbb[0]?.total)) ?0:parseInt(pressnumberCount106Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >
                                                        {(isNaN( parseInt(pressnumberCount106Srt[0]?.total)) ?0:parseInt(pressnumberCount106Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Pob[0]?.total)) ?0:parseInt(pressnumberCount106Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Apw[0]?.total)) ?0:parseInt(pressnumberCount106Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Sks[0]?.total)) ?0:parseInt(pressnumberCount106Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount106Pbb[0]?.total)) ?0:parseInt(pressnumberCount106Pbb[0]?.total) )}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum106Srt[0]?.total)) ?0:parseInt(pressnumberSum106Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum106Pob[0]?.total)) ?0:parseInt(pressnumberSum106Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum106Apw[0]?.total)) ?0:parseInt(pressnumberSum106Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum106Sks[0]?.total)) ?0:parseInt(pressnumberSum106Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum106Pbb[0]?.total)) ?0:parseInt(pressnumberSum106Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum106Srt[0]?.total)) ?0:parseInt(pressnumberSum106Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum106Pob[0]?.total)) ?0:parseInt(pressnumberSum106Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum106Apw[0]?.total)) ?0:parseInt(pressnumberSum106Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum106Sks[0]?.total)) ?0:parseInt(pressnumberSum106Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum106Pbb[0]?.total)) ?0:parseInt(pressnumberSum106Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
         
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>107</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount107Srt[0]?.total)) ?0:parseInt(pressnumberCount107Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount107Pob[0]?.total)) ?0:parseInt(pressnumberCount107Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount107Apw[0]?.total)) ?0:parseInt(pressnumberCount107Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount107Sks[0]?.total)) ?0:parseInt(pressnumberCount107Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount107Pbb[0]?.total)) ?0:parseInt(pressnumberCount107Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberCount107Srt[0]?.total)) ?0:parseInt(pressnumberCount107Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount107Pob[0]?.total)) ?0:parseInt(pressnumberCount107Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount107Apw[0]?.total)) ?0:parseInt(pressnumberCount107Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount107Sks[0]?.total)) ?0:parseInt(pressnumberCount107Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount107Pbb[0]?.total)) ?0:parseInt(pressnumberCount107Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum107Srt[0]?.total)) ?0:parseInt(pressnumberSum107Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum107Pob[0]?.total)) ?0:parseInt(pressnumberSum107Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum107Apw[0]?.total)) ?0:parseInt(pressnumberSum107Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum107Sks[0]?.total)) ?0:parseInt(pressnumberSum107Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum107Pbb[0]?.total)) ?0:parseInt(pressnumberSum107Pbb[0]?.total).toFixed(1)}</td>
            <td  ></td>
            <td  >
                                                   {(isNaN( parseInt(pressnumberSum107Srt[0]?.total)) ?0:parseInt(pressnumberSum107Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum107Pob[0]?.total)) ?0:parseInt(pressnumberSum107Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum107Apw[0]?.total)) ?0:parseInt(pressnumberSum107Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum107Sks[0]?.total)) ?0:parseInt(pressnumberSum107Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum107Pbb[0]?.total)) ?0:parseInt(pressnumberSum107Pbb[0]?.total))}
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

export default LineTwo
