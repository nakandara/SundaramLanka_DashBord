import React,{useContext, useEffect} from 'react'
import './line.css'
import {  useNavigate } from 'react-router-dom';
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'




const LineThree = () => {
  const {  ddate, shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,
    pressCountA,setPressCountA,
    pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC,
    pressSumKaizen ,setPressSumKaizen,pressSumNearmiss,setPressSumNearmiss,pressSumRa ,setPressSumRa,pressSumNra ,setPressSumNra,pressSumBd ,setPressSumBd } = useContext(reportContext)
  


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





/////filter

//srt
  const pressnumberSum303Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '303' })
  const pressnumberSum304Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '304' })
  const pressnumberSum305Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '305' })
  const pressnumberSum306Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '306' })
  const pressnumberSum151Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '151' })
  const pressnumberSum152Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '152' })
  const pressnumberSum153Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '153' })
  const pressnumberSum154Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '154' })
  const pressnumberSum155Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '155' })
  const pressnumberSum156Srt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '156' })


  const pressnumberCount303Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '303' })
  const pressnumberCount304Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '304' })
  const pressnumberCount305Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '305' })
  const pressnumberCount306Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '306' })
  const pressnumberCount151Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '151' })
  const pressnumberCount152Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '152' })
  const pressnumberCount153Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '153' })
  const pressnumberCount154Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '154' })
  const pressnumberCount155Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '155' })
  const pressnumberCount156Srt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '156' })

//pob

const pressnumberSum303Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '303' })
  const pressnumberSum304Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '304' })
  const pressnumberSum305Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '305' })
  const pressnumberSum306Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '306' })
  const pressnumberSum151Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '151' })
  const pressnumberSum152Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '152' })
  const pressnumberSum153Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '153' })
  const pressnumberSum154Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '154' })
  const pressnumberSum155Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '155' })
  const pressnumberSum156Pob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '156' })


  const pressnumberCount303Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '303' })
  const pressnumberCount304Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '304' })
  const pressnumberCount305Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '305' })
  const pressnumberCount306Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '306' })
  const pressnumberCount151Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '151' })
  const pressnumberCount152Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '152' })
  const pressnumberCount153Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '153' })
  const pressnumberCount154Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '154' })
  const pressnumberCount155Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '155' })
  const pressnumberCount156Pob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '156' })

///pbb

const pressnumberSum303Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '303' })
  const pressnumberSum304Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '304' })
  const pressnumberSum305Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '305' })
  const pressnumberSum306Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '306' })
  const pressnumberSum151Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '151' })
  const pressnumberSum152Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '152' })
  const pressnumberSum153Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '153' })
  const pressnumberSum154Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '154' })
  const pressnumberSum155Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '155' })
  const pressnumberSum156Pbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '156' })


  const pressnumberCount303Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '303' })
  const pressnumberCount304Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '304' })
  const pressnumberCount305Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '305' })
  const pressnumberCount306Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '306' })
  const pressnumberCount151Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '151' })
  const pressnumberCount152Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '152' })
  const pressnumberCount153Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '153' })
  const pressnumberCount154Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '154' })
  const pressnumberCount155Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '155' })
  const pressnumberCount156Pbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '156' })
  




////apw

const pressnumberSum303Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '303' })
  const pressnumberSum304Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '304' })
  const pressnumberSum305Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '305' })
  const pressnumberSum306Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '306' })
  const pressnumberSum151Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '151' })
  const pressnumberSum152Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '152' })
  const pressnumberSum153Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '153' })
  const pressnumberSum154Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '154' })
  const pressnumberSum155Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '155' })
  const pressnumberSum156Apw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '156' })
  


  const pressnumberCount303Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '303' })
  const pressnumberCount304Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '304' })
  const pressnumberCount305Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '305' })
  const pressnumberCount306Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '306' })
  const pressnumberCount151Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '151' })
  const pressnumberCount152Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '152' })
  const pressnumberCount153Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '153' })
  const pressnumberCount154Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '154' })
  const pressnumberCount155Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '155' })
  const pressnumberCount156Apw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '156' })
///////sks

const pressnumberSum303Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '303' })
  const pressnumberSum304Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '304' })
  const pressnumberSum305Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '305' })
  const pressnumberSum306Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '306' })
  const pressnumberSum151Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '151' })
  const pressnumberSum152Sks= pressSumSks && pressSumSks.filter((d) => { return d.press_no === '152' })
  const pressnumberSum153Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '153' })
  const pressnumberSum154Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '154' })
  const pressnumberSum155Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '155' })
  const pressnumberSum156Sks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '156' })
 



  const pressnumberCount303Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '303' })
  const pressnumberCount304Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '304' })
  const pressnumberCount305Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '305' })
  const pressnumberCount306Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '306' })
  const pressnumberCount151Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '151' })
  const pressnumberCount152Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '152' })

  const pressnumberCount153Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '153' })
  const pressnumberCount154Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '154' })
  const pressnumberCount155Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '155' })
  const pressnumberCount156Sks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '156' })
  


////filter-quality

//A
// const pressnumberSum156A = pressSumA && pressSumA.filter((d) => { return d.press_no === '156' })
// const pressnumberSum151A = pressSumA && pressSumA.filter((d) => { return d.press_no === '151' })
// const pressnumberSum152A = pressSumA && pressSumA.filter((d) => { return d.press_no === '152' })
// const pressnumberSum153A = pressSumA && pressSumA.filter((d) => { return d.press_no === '153' })
// const pressnumberSum154A = pressSumA && pressSumA.filter((d) => { return d.press_no === '154' })
// const pressnumberSum155A = pressSumA && pressSumA.filter((d) => { return d.press_no === '155' })




const pressnumberCount151A = pressCountA && pressCountA.filter((d) => { return d.press_no === '151' })
const pressnumberCount152A = pressCountA && pressCountA.filter((d) => { return d.press_no === '152' })
const pressnumberCount153A = pressCountA && pressCountA.filter((d) => { return d.press_no === '153' })
const pressnumberCount154A = pressCountA && pressCountA.filter((d) => { return d.press_no === '154' })
const pressnumberCount155A = pressCountA && pressCountA.filter((d) => { return d.press_no === '155' })
const pressnumberCount156A = pressCountA && pressCountA.filter((d) => { return d.press_no === '156' })
 

//B

const pressnumberSum156B = pressSumB && pressSumB.filter((d) => { return d.press_no === '156' })
const pressnumberSum151B = pressSumB && pressSumB.filter((d) => { return d.press_no === '151' })
const pressnumberSum152B = pressSumB && pressSumB.filter((d) => { return d.press_no === '152' })
const pressnumberSum153B = pressSumB && pressSumB.filter((d) => { return d.press_no === '153' })
const pressnumberSum154B = pressSumB && pressSumB.filter((d) => { return d.press_no === '154' })
const pressnumberSum155B = pressSumB && pressSumB.filter((d) => { return d.press_no === '155' })



// const pressnumberCount156B = pressCountB && pressCountB.filter((d) => { return d.press_no === '156' })
// const pressnumberCount151B = pressCountB && pressCountB.filter((d) => { return d.press_no === '151' })
// const pressnumberCount152B = pressCountB && pressCountB.filter((d) => { return d.press_no === '152' })
// const pressnumberCount153B = pressCountB && pressCountB.filter((d) => { return d.press_no === '153' })
// const pressnumberCount154B = pressCountB && pressCountB.filter((d) => { return d.press_no === '154' })
// const pressnumberCount155B = pressCountB && pressCountB.filter((d) => { return d.press_no === '155' })


///E

const pressnumberSum156E = pressSumE && pressSumE.filter((d) => { return d.press_no === '156' })
const pressnumberSum151E = pressSumE && pressSumE.filter((d) => { return d.press_no === '151' })
const pressnumberSum152E = pressSumE && pressSumE.filter((d) => { return d.press_no === '152' })
const pressnumberSum153E = pressSumE && pressSumE.filter((d) => { return d.press_no === '153' })
const pressnumberSum154E = pressSumE && pressSumE.filter((d) => { return d.press_no === '154' })
const pressnumberSum155E = pressSumE && pressSumE.filter((d) => { return d.press_no === '155' })



// const pressnumberCount156E = pressCountE && pressCountE.filter((d) => { return d.press_no === '156' })
// const pressnumberCount151E = pressCountE && pressCountE.filter((d) => { return d.press_no === '151' })
// const pressnumberCount152E = pressCountE && pressCountE.filter((d) => { return d.press_no === '152' })
// const pressnumberCount153E = pressCountE && pressCountE.filter((d) => { return d.press_no === '153' })
// const pressnumberCount154E = pressCountE && pressCountE.filter((d) => { return d.press_no === '154' })
// const pressnumberCount155E = pressCountE && pressCountE.filter((d) => { return d.press_no === '155' })



////R


const pressnumberSum151R = pressSumR && pressSumR.filter((d) => { return d.press_no === '151' })
const pressnumberSum152R = pressSumR && pressSumR.filter((d) => { return d.press_no === '152' })
const pressnumberSum153R = pressSumR && pressSumR.filter((d) => { return d.press_no === '153' })
const pressnumberSum154R = pressSumR && pressSumR.filter((d) => { return d.press_no === '154' })
const pressnumberSum155R = pressSumR && pressSumR.filter((d) => { return d.press_no === '155' })
const pressnumberSum156R = pressSumR && pressSumR.filter((d) => { return d.press_no === '156' })


// const pressnumberCount156R = pressCountR && pressCountR.filter((d) => { return d.press_no === '156' })
// const pressnumberCount151R = pressCountR && pressCountR.filter((d) => { return d.press_no === '151' })
// const pressnumberCount152R = pressCountR && pressCountR.filter((d) => { return d.press_no === '152' })
// const pressnumberCount153R = pressCountR && pressCountR.filter((d) => { return d.press_no === '153' })
// const pressnumberCount154R = pressCountR && pressCountR.filter((d) => { return d.press_no === '154' })
// const pressnumberCount155R = pressCountR && pressCountR.filter((d) => { return d.press_no === '155' })

///////L

const pressnumberSum156L = pressSumL && pressSumL.filter((d) => { return d.press_no === '156' })
const pressnumberSum151L = pressSumL && pressSumL.filter((d) => { return d.press_no === '151' })
const pressnumberSum152L = pressSumL && pressSumL.filter((d) => { return d.press_no === '152' })
const pressnumberSum153L = pressSumL && pressSumL.filter((d) => { return d.press_no === '153' })
const pressnumberSum154L = pressSumL && pressSumL.filter((d) => { return d.press_no === '154' })
const pressnumberSum155L= pressSumL && pressSumL.filter((d) => { return d.press_no === '155' })




const pressnumberCount303A = pressCountA && pressCountA.filter((d) => { return d.press_no === '303' })
const pressnumberCount304A = pressCountA && pressCountA.filter((d) => { return d.press_no === '304' })
const pressnumberCount305A = pressCountA && pressCountA.filter((d) => { return d.press_no === '305' })
const pressnumberCount306A = pressCountA && pressCountA.filter((d) => { return d.press_no === '306' })


 

//B


const pressnumberSum303B = pressSumB && pressSumB.filter((d) => { return d.press_no === '303' })
const pressnumberSum304B = pressSumB && pressSumB.filter((d) => { return d.press_no === '304' })
const pressnumberSum305B = pressSumB && pressSumB.filter((d) => { return d.press_no === '305' })
const pressnumberSum306B = pressSumB && pressSumB.filter((d) => { return d.press_no === '306' })




// const pressnumberCount107B = pressCountB && pressCountB.filter((d) => { return d.press_no === '107' })
// const pressnumberCount303B = pressCountB && pressCountB.filter((d) => { return d.press_no === '303' })
// const pressnumberCount304B = pressCountB && pressCountB.filter((d) => { return d.press_no === '304' })
// const pressnumberCount305B = pressCountB && pressCountB.filter((d) => { return d.press_no === '305' })
// const pressnumberCount306B = pressCountB && pressCountB.filter((d) => { return d.press_no === '306' })
// const pressnumberCount106B = pressCountB && pressCountB.filter((d) => { return d.press_no === '106' })


///E


const pressnumberSum303E = pressSumE && pressSumE.filter((d) => { return d.press_no === '303' })
const pressnumberSum304E = pressSumE && pressSumE.filter((d) => { return d.press_no === '304' })
const pressnumberSum305E = pressSumE && pressSumE.filter((d) => { return d.press_no === '305' })
const pressnumberSum306E = pressSumE && pressSumE.filter((d) => { return d.press_no === '306' })




// const pressnumberCount107E = pressCountE && pressCountE.filter((d) => { return d.press_no === '107' })
// const pressnumberCount303E = pressCountE && pressCountE.filter((d) => { return d.press_no === '303' })
// const pressnumberCount304E = pressCountE && pressCountE.filter((d) => { return d.press_no === '304' })
// const pressnumberCount305E = pressCountE && pressCountE.filter((d) => { return d.press_no === '305' })
// const pressnumberCount306E = pressCountE && pressCountE.filter((d) => { return d.press_no === '306' })
// const pressnumberCount106E = pressCountE && pressCountE.filter((d) => { return d.press_no === '106' })



////R


const pressnumberSum303R = pressSumR && pressSumR.filter((d) => { return d.press_no === '303' })
const pressnumberSum304R = pressSumR && pressSumR.filter((d) => { return d.press_no === '304' })
const pressnumberSum305R = pressSumR && pressSumR.filter((d) => { return d.press_no === '305' })
const pressnumberSum306R = pressSumR && pressSumR.filter((d) => { return d.press_no === '306' })



// const pressnumberCount107R = pressCountR && pressCountR.filter((d) => { return d.press_no === '107' })
// const pressnumberCount303R = pressCountR && pressCountR.filter((d) => { return d.press_no === '303' })
// const pressnumberCount304R = pressCountR && pressCountR.filter((d) => { return d.press_no === '304' })
// const pressnumberCount305R = pressCountR && pressCountR.filter((d) => { return d.press_no === '305' })
// const pressnumberCount306R = pressCountR && pressCountR.filter((d) => { return d.press_no === '306' })
// const pressnumberCount106R = pressCountR && pressCountR.filter((d) => { return d.press_no === '106' })

///////L


const pressnumberSum303L = pressSumL && pressSumL.filter((d) => { return d.press_no === '303' })
const pressnumberSum304L = pressSumL && pressSumL.filter((d) => { return d.press_no === '304' })
const pressnumberSum305L = pressSumL && pressSumL.filter((d) => { return d.press_no === '305' })
const pressnumberSum306L = pressSumL && pressSumL.filter((d) => { return d.press_no === '306' })



///kpi

const pressnumberSum151Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '151' })
const pressnumberSum152Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '152' })
const pressnumberSum153Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '153' })
const pressnumberSum154Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '154' })
const pressnumberSum155Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '155' })
const pressnumberSum156Kaizen= pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '156' })


const pressnumberSum151Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '151' })
const pressnumberSum152Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '152' })
const pressnumberSum153Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '153' })
const pressnumberSum154Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '154' })
const pressnumberSum155Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '155' })
const pressnumberSum156Nearmiss= pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '156' })


const pressnumberSum151Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '151' })
const pressnumberSum152Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '152' })
const pressnumberSum153Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '153' })
const pressnumberSum154Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '154' })
const pressnumberSum155Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '155' })
const pressnumberSum156Ra= pressSumRa && pressSumRa.filter((d) => { return d.press_no === '156' })

const pressnumberSum151Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '151' })
const pressnumberSum152Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '152' })
const pressnumberSum153Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '153' })
const pressnumberSum154Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '154' })
const pressnumberSum155Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '155' })
const pressnumberSum156Nra= pressSumNra && pressSumNra.filter((d) => { return d.press_no === '156' })


const pressnumberSum151Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '151' })
const pressnumberSum152Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '152' })
const pressnumberSum153Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '153' })
const pressnumberSum154Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '154' })
const pressnumberSum155Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '155' })
const pressnumberSum156Bd= pressSumBd && pressSumBd.filter((d) => { return d.press_no === '156' })




///kpi

const pressnumberSum303Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '303' })
const pressnumberSum304Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '304' })
const pressnumberSum305Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '305' })
const pressnumberSum306Kaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '306' })


const pressnumberSum303Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '303' })
const pressnumberSum304Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '304' })
const pressnumberSum305Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '305' })
const pressnumberSum306Nearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '306' })


const pressnumberSum303Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '303' })
const pressnumberSum304Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '304' })
const pressnumberSum305Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '305' })
const pressnumberSum306Ra = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '306' })


const pressnumberSum303Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '303' })
const pressnumberSum304Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '304' })
const pressnumberSum305Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '305' })
const pressnumberSum306Nra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '306' })

const pressnumberSum303Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '303' })
const pressnumberSum304Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '304' })
const pressnumberSum305Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '305' })
const pressnumberSum306Bd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '306' })



                                                 
                                                 
  







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
            <td   width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td   colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>151</td>
          
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 152</td>
            
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>153</td>
        
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>154</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>155</td>
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>156</td>
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
            
            <td  >{( isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total))}</td>


               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total))

               }</td>
               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount153Srt[0]?.total)) ? 0 : parseInt(pressnumberCount153Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Pob[0]?.total)) ? 0 : parseInt(pressnumberCount153Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Apw[0]?.total)) ? 0 : parseInt(pressnumberCount153Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Sks[0]?.total)) ? 0 : parseInt(pressnumberCount153Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount153Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount153Pbb[0]?.total))


               }</td>
               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total))}</td>

               <td  ></td>
               <td  > {(isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total))}</td>

               <td  ></td>
               <td  > {(isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total))}</td>
               <td  ></td>
               <td  >{( isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total))+
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
               <td  ></td>



             </tr>

             <tr>
               <td  style={{ fontSize: '14px' }}>Weight</td>
               <td  style={{ fontSize: '14px' }}>Ton</td>

               <td  >{
                 (isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total))




               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total))



               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total))

               }</td>


               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total))}</td>

               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total))}</td>

               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total))}</td>
               <td  ></td>
               <td  >{( isNaN( parseInt(pressnumberSum151Pob[0]?.total)) ?0:parseInt(pressnumberSum151Pob[0]?.total))+
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
               <td  ></td>

            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}}>FTR</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount151A[0]?.total)) ? 0 : parseInt(pressnumberCount151A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount151Srt[0]?.total)) ? 0 : parseInt(pressnumberCount151Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount151Pob[0]?.total)) ? 0 : parseInt(pressnumberCount151Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount151Apw[0]?.total)) ? 0 : parseInt(pressnumberCount151Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount151Sks[0]?.total)) ? 0 : parseInt(pressnumberCount151Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount151Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount151Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount151A[0]?.total)) ? 0 : parseInt(pressnumberCount151A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount151Srt[0]?.total)) ? 0 : parseInt(pressnumberCount151Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount151Pob[0]?.total)) ? 0 : parseInt(pressnumberCount151Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount151Apw[0]?.total)) ? 0 : parseInt(pressnumberCount151Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount151Sks[0]?.total)) ? 0 : parseInt(pressnumberCount151Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount151Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount151Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount152A[0]?.total)) ? 0 : parseInt(pressnumberCount152A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount152A[0]?.total)) ? 0 : parseInt(pressnumberCount152A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount153A[0]?.total)) ? 0 : parseInt(pressnumberCount153A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount153Srt[0]?.total)) ? 0 : parseInt(pressnumberCount153Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount153Pob[0]?.total)) ? 0 : parseInt(pressnumberCount153Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount153Apw[0]?.total)) ? 0 : parseInt(pressnumberCount153Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount153Sks[0]?.total)) ? 0 : parseInt(pressnumberCount153Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount153Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount153Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount153A[0]?.total)) ? 0 : parseInt(pressnumberCount153A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount153Srt[0]?.total)) ? 0 : parseInt(pressnumberCount153Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount153Pob[0]?.total)) ? 0 : parseInt(pressnumberCount153Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount153Apw[0]?.total)) ? 0 : parseInt(pressnumberCount153Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount153Sks[0]?.total)) ? 0 : parseInt(pressnumberCount153Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount153Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount153Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount154A[0]?.total)) ? 0 : parseInt(pressnumberCount154A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount154A[0]?.total)) ? 0 : parseInt(pressnumberCount154A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount155A[0]?.total)) ? 0 : parseInt(pressnumberCount155A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount155A[0]?.total)) ? 0 : parseInt(pressnumberCount155A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>


            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount156A[0]?.total)) ? 0 : parseInt(pressnumberCount156A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount156A[0]?.total)) ? 0 : parseInt(pressnumberCount156A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>




            <td  >90%</td>
            <td  >
            {(((isNaN(((((isNaN(parseInt(pressnumberCount156A[0]?.total)) ? 0 : parseInt(pressnumberCount156A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount156A[0]?.total)) ? 0 : parseInt(pressnumberCount156A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount156Srt[0]?.total)) ? 0 : parseInt(pressnumberCount156Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Pob[0]?.total)) ? 0 : parseInt(pressnumberCount156Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Apw[0]?.total)) ? 0 : parseInt(pressnumberCount156Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Sks[0]?.total)) ? 0 : parseInt(pressnumberCount156Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount156Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount156Pbb[0]?.total)))) * 100))) +(isNaN(((((isNaN(parseInt(pressnumberCount151A[0]?.total)) ? 0 : parseInt(pressnumberCount151A[0]?.total))
               / ((isNaN(parseInt(pressnumberCount151Srt[0]?.total)) ? 0 : parseInt(pressnumberCount151Srt[0]?.total)) +
           (isNaN(parseInt(pressnumberCount151Pob[0]?.total)) ? 0 : parseInt(pressnumberCount151Pob[0]?.total)) +
           (isNaN(parseInt(pressnumberCount151Apw[0]?.total)) ? 0 : parseInt(pressnumberCount151Apw[0]?.total)) +
           (isNaN(parseInt(pressnumberCount151Sks[0]?.total)) ? 0 : parseInt(pressnumberCount151Sks[0]?.total)) +
           (isNaN(parseInt(pressnumberCount151Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount151Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount151A[0]?.total)) ? 0 : parseInt(pressnumberCount151A[0]?.total))
           / ((isNaN(parseInt(pressnumberCount151Srt[0]?.total)) ? 0 : parseInt(pressnumberCount151Srt[0]?.total)) +
       (isNaN(parseInt(pressnumberCount151Pob[0]?.total)) ? 0 : parseInt(pressnumberCount151Pob[0]?.total)) +
       (isNaN(parseInt(pressnumberCount151Apw[0]?.total)) ? 0 : parseInt(pressnumberCount151Apw[0]?.total)) +
       (isNaN(parseInt(pressnumberCount151Sks[0]?.total)) ? 0 : parseInt(pressnumberCount151Sks[0]?.total)) +
       (isNaN(parseInt(pressnumberCount151Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount151Pbb[0]?.total)))) * 100))+(isNaN(((((isNaN(parseInt(pressnumberCount152A[0]?.total)) ? 0 : parseInt(pressnumberCount152A[0]?.total))
       / ((isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total)) +
   (isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total)) +
   (isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total)) +
   (isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total)) +
   (isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount152A[0]?.total)) ? 0 : parseInt(pressnumberCount152A[0]?.total))
   / ((isNaN(parseInt(pressnumberCount152Srt[0]?.total)) ? 0 : parseInt(pressnumberCount152Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount152Pob[0]?.total)) ? 0 : parseInt(pressnumberCount152Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount152Apw[0]?.total)) ? 0 : parseInt(pressnumberCount152Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount152Sks[0]?.total)) ? 0 : parseInt(pressnumberCount152Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount152Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount152Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount154A[0]?.total)) ? 0 : parseInt(pressnumberCount154A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount154A[0]?.total)) ? 0 : parseInt(pressnumberCount154A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount154Srt[0]?.total)) ? 0 : parseInt(pressnumberCount154Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Pob[0]?.total)) ? 0 : parseInt(pressnumberCount154Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Apw[0]?.total)) ? 0 : parseInt(pressnumberCount154Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Sks[0]?.total)) ? 0 : parseInt(pressnumberCount154Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount154Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount154Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount155A[0]?.total)) ? 0 : parseInt(pressnumberCount155A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount155A[0]?.total)) ? 0 : parseInt(pressnumberCount155A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount155Srt[0]?.total)) ? 0 : parseInt(pressnumberCount155Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Pob[0]?.total)) ? 0 : parseInt(pressnumberCount155Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Apw[0]?.total)) ? 0 : parseInt(pressnumberCount155Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Sks[0]?.total)) ? 0 : parseInt(pressnumberCount155Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount155Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount155Pbb[0]?.total)))) * 100)))))/6).toFixed(2)}%
            </td>
            <td  >90%</td>
            
          </tr>
          
          <tr>
          <td  style={{fontSize:'14px'}}>B</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum151B[0]?.total)) ? 0 : parseInt(pressnumberSum151B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum151B[0]?.total)) ? 0 : parseInt(pressnumberSum151B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum152B[0]?.total)) ? 0 : parseInt(pressnumberSum152B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum152B[0]?.total)) ? 0 : parseInt(pressnumberSum152B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum153B[0]?.total)) ? 0 : parseInt(pressnumberSum153B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum153B[0]?.total)) ? 0 : parseInt(pressnumberSum153B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum154B[0]?.total)) ? 0 : parseInt(pressnumberSum154B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum154B[0]?.total)) ? 0 : parseInt(pressnumberSum154B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>

               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum155B[0]?.total)) ? 0 : parseInt(pressnumberSum155B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum155B[0]?.total)) ? 0 : parseInt(pressnumberSum155B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>

               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum156B[0]?.total)) ? 0 : parseInt(pressnumberSum156B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum156B[0]?.total)) ? 0 : parseInt(pressnumberSum156B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



               <td  >0.15%</td>
               <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum156B[0]?.total)) ? 0 : parseInt(pressnumberSum156B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum156B[0]?.total)) ? 0 : parseInt(pressnumberSum156B[0]?.total))
                     / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                       (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum151B[0]?.total)) ? 0 : parseInt(pressnumberSum151B[0]?.total))
                         / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum151B[0]?.total)) ? 0 : parseInt(pressnumberSum151B[0]?.total))
                             / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum152B[0]?.total)) ? 0 : parseInt(pressnumberSum152B[0]?.total))
                                 / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum152B[0]?.total)) ? 0 : parseInt(pressnumberSum152B[0]?.total))
                                     / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum154B[0]?.total)) ? 0 : parseInt(pressnumberSum154B[0]?.total))
                                         / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum154B[0]?.total)) ? 0 : parseInt(pressnumberSum154B[0]?.total))
                                             / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum155B[0]?.total)) ? 0 : parseInt(pressnumberSum155B[0]?.total))
                                                 / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                                                   (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum155B[0]?.total)) ? 0 : parseInt(pressnumberSum155B[0]?.total))
                                                     / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                                                       (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
               <td  >0.15%</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>E</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
           
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum151E[0]?.total)) ? 0 : parseInt(pressnumberSum151E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum151E[0]?.total)) ? 0 : parseInt(pressnumberSum151E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum152E[0]?.total)) ? 0 : parseInt(pressnumberSum152E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum152E[0]?.total)) ? 0 : parseInt(pressnumberSum152E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum153E[0]?.total)) ? 0 : parseInt(pressnumberSum153E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum153E[0]?.total)) ? 0 : parseInt(pressnumberSum153E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum154E[0]?.total)) ? 0 : parseInt(pressnumberSum154E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum154E[0]?.total)) ? 0 : parseInt(pressnumberSum154E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum155E[0]?.total)) ? 0 : parseInt(pressnumberSum155E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum155E[0]?.total)) ? 0 : parseInt(pressnumberSum155E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum156E[0]?.total)) ? 0 : parseInt(pressnumberSum156E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum156E[0]?.total)) ? 0 : parseInt(pressnumberSum156E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



            <td  >0%</td>
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum156E[0]?.total)) ? 0 : parseInt(pressnumberSum156E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum156E[0]?.total)) ? 0 : parseInt(pressnumberSum156E[0]?.total))
                  / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum151E[0]?.total)) ? 0 : parseInt(pressnumberSum151E[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum151E[0]?.total)) ? 0 : parseInt(pressnumberSum151E[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum152E[0]?.total)) ? 0 : parseInt(pressnumberSum152E[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum152E[0]?.total)) ? 0 : parseInt(pressnumberSum152E[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum154E[0]?.total)) ? 0 : parseInt(pressnumberSum154E[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum154E[0]?.total)) ? 0 : parseInt(pressnumberSum154E[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum155E[0]?.total)) ? 0 : parseInt(pressnumberSum155E[0]?.total))
                                              / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum155E[0]?.total)) ? 0 : parseInt(pressnumberSum155E[0]?.total))
                                                  / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
            <td  >0%</td>
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>R</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
           
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum151R[0]?.total)) ? 0 : parseInt(pressnumberSum151R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum151R[0]?.total)) ? 0 : parseInt(pressnumberSum151R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum152R[0]?.total)) ? 0 : parseInt(pressnumberSum152R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum152R[0]?.total)) ? 0 : parseInt(pressnumberSum152R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum153R[0]?.total)) ? 0 : parseInt(pressnumberSum153R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum153R[0]?.total)) ? 0 : parseInt(pressnumberSum153R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum153Srt[0]?.total)) ? 0 : parseInt(pressnumberSum153Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Pob[0]?.total)) ? 0 : parseInt(pressnumberSum153Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Apw[0]?.total)) ? 0 : parseInt(pressnumberSum153Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Sks[0]?.total)) ? 0 : parseInt(pressnumberSum153Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum153Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum153Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum154R[0]?.total)) ? 0 : parseInt(pressnumberSum154R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum154R[0]?.total)) ? 0 : parseInt(pressnumberSum154R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum155R[0]?.total)) ? 0 : parseInt(pressnumberSum155R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum155R[0]?.total)) ? 0 : parseInt(pressnumberSum155R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>

            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum156R[0]?.total)) ? 0 : parseInt(pressnumberSum156R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum156R[0]?.total)) ? 0 : parseInt(pressnumberSum156R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>



            <td  >0.15%</td>
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum156R[0]?.total)) ? 0 : parseInt(pressnumberSum156R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum156R[0]?.total)) ? 0 : parseInt(pressnumberSum156R[0]?.total))
                  / ((isNaN(parseInt(pressnumberSum156Srt[0]?.total)) ? 0 : parseInt(pressnumberSum156Srt[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Pob[0]?.total)) ? 0 : parseInt(pressnumberSum156Pob[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Apw[0]?.total)) ? 0 : parseInt(pressnumberSum156Apw[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Sks[0]?.total)) ? 0 : parseInt(pressnumberSum156Sks[0]?.total)) +
                    (isNaN(parseInt(pressnumberSum156Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum156Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum151R[0]?.total)) ? 0 : parseInt(pressnumberSum151R[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum151R[0]?.total)) ? 0 : parseInt(pressnumberSum151R[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum151Srt[0]?.total)) ? 0 : parseInt(pressnumberSum151Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Pob[0]?.total)) ? 0 : parseInt(pressnumberSum151Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Apw[0]?.total)) ? 0 : parseInt(pressnumberSum151Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Sks[0]?.total)) ? 0 : parseInt(pressnumberSum151Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum151Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum151Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum152R[0]?.total)) ? 0 : parseInt(pressnumberSum152R[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum152R[0]?.total)) ? 0 : parseInt(pressnumberSum152R[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum152Srt[0]?.total)) ? 0 : parseInt(pressnumberSum152Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Pob[0]?.total)) ? 0 : parseInt(pressnumberSum152Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Apw[0]?.total)) ? 0 : parseInt(pressnumberSum152Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Sks[0]?.total)) ? 0 : parseInt(pressnumberSum152Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum152Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum152Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum154R[0]?.total)) ? 0 : parseInt(pressnumberSum154R[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum154R[0]?.total)) ? 0 : parseInt(pressnumberSum154R[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum154Srt[0]?.total)) ? 0 : parseInt(pressnumberSum154Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Pob[0]?.total)) ? 0 : parseInt(pressnumberSum154Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Apw[0]?.total)) ? 0 : parseInt(pressnumberSum154Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Sks[0]?.total)) ? 0 : parseInt(pressnumberSum154Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum154Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum154Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum155R[0]?.total)) ? 0 : parseInt(pressnumberSum155R[0]?.total))
                                              / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                                                (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum155R[0]?.total)) ? 0 : parseInt(pressnumberSum155R[0]?.total))
                                                  / ((isNaN(parseInt(pressnumberSum155Srt[0]?.total)) ? 0 : parseInt(pressnumberSum155Srt[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Pob[0]?.total)) ? 0 : parseInt(pressnumberSum155Pob[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Apw[0]?.total)) ? 0 : parseInt(pressnumberSum155Apw[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Sks[0]?.total)) ? 0 : parseInt(pressnumberSum155Sks[0]?.total)) +
                                                    (isNaN(parseInt(pressnumberSum155Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum155Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
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
            
            <td  >{isNaN(parseInt(pressnumberSum151Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum151Kaizen[0]?.total)}</td>


               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum152Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum152Kaizen[0]?.total)

               }</td>
               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum153Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum153Kaizen[0]?.total)

               }</td>
               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum154Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum154Kaizen[0]?.total)

               }</td>

               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum155Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum155Kaizen[0]?.total)

               }</td>

               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum156Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum156Kaizen[0]?.total)

               }</td>
               <td  >1</td>
               <td  >{( isNaN(parseInt(pressnumberSum151Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum151Kaizen[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum152Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum152Kaizen[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum153Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum153Kaizen[0]?.total))+(isNaN(parseInt(pressnumberSum154Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum154Kaizen[0]?.total))+
                                                 (isNaN(parseInt(pressnumberSum155Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum155Kaizen[0]?.total))+( isNaN(parseInt(pressnumberSum156Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum156Kaizen[0]?.total))
                                                  }</td>
               <td  >1</td>
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}}>NearMiss</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum151Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum151Nearmiss[0]?.total)}</td>


<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum152Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum152Nearmiss[0]?.total)

}</td>
<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum153Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum153Nearmiss[0]?.total)

}</td>
<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum154Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum154Nearmiss[0]?.total)

}</td>

<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum155Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum155Nearmiss[0]?.total)

}</td>

<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum156Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum156Nearmiss[0]?.total)

}</td>
<td  >1</td>
<td  >{( isNaN(parseInt(pressnumberSum151Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum151Nearmiss[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum152Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum152Nearmiss[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum153Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum153Nearmiss[0]?.total))+(isNaN(parseInt(pressnumberSum154Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum154Nearmiss[0]?.total))+
                                  (isNaN(parseInt(pressnumberSum155Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum155Nearmiss[0]?.total))+( isNaN(parseInt(pressnumberSum156Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum156Nearmiss[0]?.total))
                                   }</td>
<td  >1</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>RA</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum151Ra[0]?.total)) ? 0 : parseInt(pressnumberSum151Ra[0]?.total)}</td>


<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum152Ra[0]?.total)) ? 0 : parseInt(pressnumberSum152Ra[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum153Ra[0]?.total)) ? 0 : parseInt(pressnumberSum153Ra[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum154Ra[0]?.total)) ? 0 : parseInt(pressnumberSum154Ra[0]?.total)

}</td>

<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum155Ra[0]?.total)) ? 0 : parseInt(pressnumberSum155Ra[0]?.total)

}</td>

<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum156Ra[0]?.total)) ? 0 : parseInt(pressnumberSum156Ra[0]?.total)

}</td>
<td  >0</td>
<td  >{( isNaN(parseInt(pressnumberSum151Ra[0]?.total)) ? 0 : parseInt(pressnumberSum151Ra[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum152Ra[0]?.total)) ? 0 : parseInt(pressnumberSum152Ra[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum153Ra[0]?.total)) ? 0 : parseInt(pressnumberSum153Ra[0]?.total))+(isNaN(parseInt(pressnumberSum154Ra[0]?.total)) ? 0 : parseInt(pressnumberSum154Ra[0]?.total))+
                                  (isNaN(parseInt(pressnumberSum155Ra[0]?.total)) ? 0 : parseInt(pressnumberSum155Ra[0]?.total))+( isNaN(parseInt(pressnumberSum156Ra[0]?.total)) ? 0 : parseInt(pressnumberSum156Ra[0]?.total))
                                   }</td>
<td  >0</td>
          </tr>

          <tr>
          <td  style={{fontSize:'14px'}}>NRA</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum151Nra[0]?.total)) ? 0 : parseInt(pressnumberSum151Nra[0]?.total)}</td>


               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum152Nra[0]?.total)) ? 0 : parseInt(pressnumberSum152Nra[0]?.total)

               }</td>
               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum153Nra[0]?.total)) ? 0 : parseInt(pressnumberSum153Nra[0]?.total)

               }</td>
               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum154Nra[0]?.total)) ? 0 : parseInt(pressnumberSum154Nra[0]?.total)

               }</td>

               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum155Nra[0]?.total)) ? 0 : parseInt(pressnumberSum155Nra[0]?.total)

               }</td>

               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum156Nra[0]?.total)) ? 0 : parseInt(pressnumberSum156Nra[0]?.total)

               }</td>
               <td  >0</td>
               <td  >{( isNaN(parseInt(pressnumberSum151Nra[0]?.total)) ? 0 : parseInt(pressnumberSum151Nra[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum152Nra[0]?.total)) ? 0 : parseInt(pressnumberSum152Nra[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum153Nra[0]?.total)) ? 0 : parseInt(pressnumberSum153Nra[0]?.total))+(isNaN(parseInt(pressnumberSum154Nra[0]?.total)) ? 0 : parseInt(pressnumberSum154Nra[0]?.total))+
                                                 (isNaN(parseInt(pressnumberSum155Nra[0]?.total)) ? 0 : parseInt(pressnumberSum155Nra[0]?.total))+( isNaN(parseInt(pressnumberSum156Nra[0]?.total)) ? 0 : parseInt(pressnumberSum156Nra[0]?.total))
                                                  }</td>
               <td  >0</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>Bd</td>
            <td   style={{fontSize:'14px'}} >hrs</td>
            
            <td  >{isNaN(parseInt(pressnumberSum151Bd[0]?.total)) ? 0 : parseInt(pressnumberSum151Bd[0]?.total)}</td>


<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum152Bd[0]?.total)) ? 0 : parseInt(pressnumberSum152Bd[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum153Bd[0]?.total)) ? 0 : parseInt(pressnumberSum153Bd[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum154Bd[0]?.total)) ? 0 : parseInt(pressnumberSum154Bd[0]?.total)

}</td>

<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum155Bd[0]?.total)) ? 0 : parseInt(pressnumberSum155Bd[0]?.total)

}</td>

<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum156Bd[0]?.total)) ? 0 : parseInt(pressnumberSum156Bd[0]?.total)

}</td>
<td  >0</td>
<td  >{( isNaN(parseInt(pressnumberSum151Bd[0]?.total)) ? 0 : parseInt(pressnumberSum151Bd[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum152Bd[0]?.total)) ? 0 : parseInt(pressnumberSum152Bd[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum153Bd[0]?.total)) ? 0 : parseInt(pressnumberSum153Bd[0]?.total))+(isNaN(parseInt(pressnumberSum154Bd[0]?.total)) ? 0 : parseInt(pressnumberSum154Bd[0]?.total))+
                                  (isNaN(parseInt(pressnumberSum155Bd[0]?.total)) ? 0 : parseInt(pressnumberSum155Bd[0]?.total))+( isNaN(parseInt(pressnumberSum156Bd[0]?.total)) ? 0 : parseInt(pressnumberSum156Bd[0]?.total))
                                   }</td>
<td  >0</td>
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
      
      
     
      <div className='row mr-1 ml-1 mt-2 bo'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
            
      
         <table className="table  table-bordered table-hover ttt">
       
        <tbody>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td   colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>303</td>
          
            <td   colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> 304</td>
            
            <td  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>305</td>
        
            <td  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>306</td>
            
            <td  colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
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
           
         
            
           
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>Pcs</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
            <td  >{( isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total))}</td>


               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total))

               }</td>
               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberCount305Srt[0]?.total)) ? 0 : parseInt(pressnumberCount305Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Pob[0]?.total)) ? 0 : parseInt(pressnumberCount305Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Apw[0]?.total)) ? 0 : parseInt(pressnumberCount305Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Sks[0]?.total)) ? 0 : parseInt(pressnumberCount305Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberCount305Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount305Pbb[0]?.total))


               }</td>
               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total))}</td>

               <td  ></td>
              
               <td  >{( isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total))+
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
               <td  ></td>



             </tr>

             <tr>
               <td  style={{ fontSize: '14px' }}>Weight</td>
               <td  style={{ fontSize: '14px' }}>Ton</td>

               <td  >{
                 (isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total))




               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total))



               }</td>

               <td  ></td>
               <td  >{
                 (isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                 (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total))

               }</td>


               <td  ></td>
               <td  >{(isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total))
                 + (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total))}</td>

               <td  ></td>
               
               <td  >{( isNaN( parseInt(pressnumberSum303Pob[0]?.total)) ?0:parseInt(pressnumberSum303Pob[0]?.total))+
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
               <td  ></td>

            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}}>FTR</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount303A[0]?.total)) ? 0 : parseInt(pressnumberCount303A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount303Srt[0]?.total)) ? 0 : parseInt(pressnumberCount303Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount303Pob[0]?.total)) ? 0 : parseInt(pressnumberCount303Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount303Apw[0]?.total)) ? 0 : parseInt(pressnumberCount303Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount303Sks[0]?.total)) ? 0 : parseInt(pressnumberCount303Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount303Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount303Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount303A[0]?.total)) ? 0 : parseInt(pressnumberCount303A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount303Srt[0]?.total)) ? 0 : parseInt(pressnumberCount303Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount303Pob[0]?.total)) ? 0 : parseInt(pressnumberCount303Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount303Apw[0]?.total)) ? 0 : parseInt(pressnumberCount303Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount303Sks[0]?.total)) ? 0 : parseInt(pressnumberCount303Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount303Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount303Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount304A[0]?.total)) ? 0 : parseInt(pressnumberCount304A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount304A[0]?.total)) ? 0 : parseInt(pressnumberCount304A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount305A[0]?.total)) ? 0 : parseInt(pressnumberCount305A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount305Srt[0]?.total)) ? 0 : parseInt(pressnumberCount305Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount305Pob[0]?.total)) ? 0 : parseInt(pressnumberCount305Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount305Apw[0]?.total)) ? 0 : parseInt(pressnumberCount305Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount305Sks[0]?.total)) ? 0 : parseInt(pressnumberCount305Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount305Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount305Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount305A[0]?.total)) ? 0 : parseInt(pressnumberCount305A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount305Srt[0]?.total)) ? 0 : parseInt(pressnumberCount305Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount305Pob[0]?.total)) ? 0 : parseInt(pressnumberCount305Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount305Apw[0]?.total)) ? 0 : parseInt(pressnumberCount305Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount305Sks[0]?.total)) ? 0 : parseInt(pressnumberCount305Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount305Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount305Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberCount306A[0]?.total)) ? 0 : parseInt(pressnumberCount306A[0]?.total))
                       / ((isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount306A[0]?.total)) ? 0 : parseInt(pressnumberCount306A[0]?.total))
                   / ((isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total)) +
               (isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total)) +
               (isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total)) +
               (isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total)) +
               (isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >90%</td>
            
           
            <td  >
            {(((isNaN(((((isNaN(parseInt(pressnumberCount303A[0]?.total)) ? 0 : parseInt(pressnumberCount303A[0]?.total))
               / ((isNaN(parseInt(pressnumberCount303Srt[0]?.total)) ? 0 : parseInt(pressnumberCount303Srt[0]?.total)) +
           (isNaN(parseInt(pressnumberCount303Pob[0]?.total)) ? 0 : parseInt(pressnumberCount303Pob[0]?.total)) +
           (isNaN(parseInt(pressnumberCount303Apw[0]?.total)) ? 0 : parseInt(pressnumberCount303Apw[0]?.total)) +
           (isNaN(parseInt(pressnumberCount303Sks[0]?.total)) ? 0 : parseInt(pressnumberCount303Sks[0]?.total)) +
           (isNaN(parseInt(pressnumberCount303Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount303Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount303A[0]?.total)) ? 0 : parseInt(pressnumberCount303A[0]?.total))
           / ((isNaN(parseInt(pressnumberCount303Srt[0]?.total)) ? 0 : parseInt(pressnumberCount303Srt[0]?.total)) +
       (isNaN(parseInt(pressnumberCount303Pob[0]?.total)) ? 0 : parseInt(pressnumberCount303Pob[0]?.total)) +
       (isNaN(parseInt(pressnumberCount303Apw[0]?.total)) ? 0 : parseInt(pressnumberCount303Apw[0]?.total)) +
       (isNaN(parseInt(pressnumberCount303Sks[0]?.total)) ? 0 : parseInt(pressnumberCount303Sks[0]?.total)) +
       (isNaN(parseInt(pressnumberCount303Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount303Pbb[0]?.total)))) * 100))+(isNaN(((((isNaN(parseInt(pressnumberCount304A[0]?.total)) ? 0 : parseInt(pressnumberCount304A[0]?.total))
       / ((isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total)) +
   (isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total)) +
   (isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total)) +
   (isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total)) +
   (isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount304A[0]?.total)) ? 0 : parseInt(pressnumberCount304A[0]?.total))
   / ((isNaN(parseInt(pressnumberCount304Srt[0]?.total)) ? 0 : parseInt(pressnumberCount304Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount304Pob[0]?.total)) ? 0 : parseInt(pressnumberCount304Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount304Apw[0]?.total)) ? 0 : parseInt(pressnumberCount304Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount304Sks[0]?.total)) ? 0 : parseInt(pressnumberCount304Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount304Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount304Pbb[0]?.total)))) * 100)))+(isNaN(((((isNaN(parseInt(pressnumberCount306A[0]?.total)) ? 0 : parseInt(pressnumberCount306A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total)))) * 100)))?0:((((isNaN(parseInt(pressnumberCount306A[0]?.total)) ? 0 : parseInt(pressnumberCount306A[0]?.total))
/ ((isNaN(parseInt(pressnumberCount306Srt[0]?.total)) ? 0 : parseInt(pressnumberCount306Srt[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Pob[0]?.total)) ? 0 : parseInt(pressnumberCount306Pob[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Apw[0]?.total)) ? 0 : parseInt(pressnumberCount306Apw[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Sks[0]?.total)) ? 0 : parseInt(pressnumberCount306Sks[0]?.total)) +
(isNaN(parseInt(pressnumberCount306Pbb[0]?.total)) ? 0 : parseInt(pressnumberCount306Pbb[0]?.total)))) * 100)))))/6).toFixed(2)}%
            </td>
            <td  >90%</td>
            
          </tr>
          
          <tr>
          <td  style={{fontSize:'14px'}}>B</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
               
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum303B[0]?.total)) ? 0 : parseInt(pressnumberSum303B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum303B[0]?.total)) ? 0 : parseInt(pressnumberSum303B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum304B[0]?.total)) ? 0 : parseInt(pressnumberSum304B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum304B[0]?.total)) ? 0 : parseInt(pressnumberSum304B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum305B[0]?.total)) ? 0 : parseInt(pressnumberSum305B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum305B[0]?.total)) ? 0 : parseInt(pressnumberSum305B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>
               <td  >{isNaN(((((isNaN(parseInt(pressnumberSum306B[0]?.total)) ? 0 : parseInt(pressnumberSum306B[0]?.total))
                 / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                   (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) ? 0 :
                 ((((isNaN(parseInt(pressnumberSum306B[0]?.total)) ? 0 : parseInt(pressnumberSum306B[0]?.total))
                   / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                     (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
               <td  >0.15%</td>

               
               
               <td  > {(( (isNaN(((((isNaN(parseInt(pressnumberSum303B[0]?.total)) ? 0 : parseInt(pressnumberSum303B[0]?.total))
                         / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                           (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum303B[0]?.total)) ? 0 : parseInt(pressnumberSum303B[0]?.total))
                             / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                               (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum304B[0]?.total)) ? 0 : parseInt(pressnumberSum304B[0]?.total))
                                 / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                                   (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum304B[0]?.total)) ? 0 : parseInt(pressnumberSum304B[0]?.total))
                                     / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                                       (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum306B[0]?.total)) ? 0 : parseInt(pressnumberSum306B[0]?.total))
                                         / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                                           (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum306B[0]?.total)) ? 0 : parseInt(pressnumberSum306B[0]?.total))
                                             / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                                               (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))))) / 6).toFixed(2)}%</td>
               <td  >0.15%</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>E</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
           
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum303E[0]?.total)) ? 0 : parseInt(pressnumberSum303E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum303E[0]?.total)) ? 0 : parseInt(pressnumberSum303E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum304E[0]?.total)) ? 0 : parseInt(pressnumberSum304E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum304E[0]?.total)) ? 0 : parseInt(pressnumberSum304E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum305E[0]?.total)) ? 0 : parseInt(pressnumberSum305E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum305E[0]?.total)) ? 0 : parseInt(pressnumberSum305E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum306E[0]?.total)) ? 0 : parseInt(pressnumberSum306E[0]?.total))
              / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum306E[0]?.total)) ? 0 : parseInt(pressnumberSum306E[0]?.total))
                / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0%</td>

           
            <td  > {(((isNaN(((((isNaN(parseInt(pressnumberSum303E[0]?.total)) ? 0 : parseInt(pressnumberSum303E[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum303E[0]?.total)) ? 0 : parseInt(pressnumberSum303E[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum304E[0]?.total)) ? 0 : parseInt(pressnumberSum304E[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum304E[0]?.total)) ? 0 : parseInt(pressnumberSum304E[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum306E[0]?.total)) ? 0 : parseInt(pressnumberSum306E[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum306E[0]?.total)) ? 0 : parseInt(pressnumberSum306E[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) )) / 6).toFixed(2)}%</td>
            <td  >0%</td>
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>R</td>
          <td  style={{fontSize:'14px'}}>%</td>
            
           
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum303R[0]?.total)) ? 0 : parseInt(pressnumberSum303R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum303R[0]?.total)) ? 0 : parseInt(pressnumberSum303R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum304R[0]?.total)) ? 0 : parseInt(pressnumberSum304R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum304R[0]?.total)) ? 0 : parseInt(pressnumberSum304R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum305R[0]?.total)) ? 0 : parseInt(pressnumberSum305R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum305R[0]?.total)) ? 0 : parseInt(pressnumberSum305R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum305Srt[0]?.total)) ? 0 : parseInt(pressnumberSum305Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Pob[0]?.total)) ? 0 : parseInt(pressnumberSum305Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Apw[0]?.total)) ? 0 : parseInt(pressnumberSum305Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Sks[0]?.total)) ? 0 : parseInt(pressnumberSum305Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum305Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum305Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((((isNaN(parseInt(pressnumberSum306R[0]?.total)) ? 0 : parseInt(pressnumberSum306R[0]?.total))
              / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) ? 0 :
              ((((isNaN(parseInt(pressnumberSum306R[0]?.total)) ? 0 : parseInt(pressnumberSum306R[0]?.total))
                / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                  (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100)).toFixed(2)}%</td>
            <td  >0.15%</td>

           

            <td  > {(( (isNaN(((((isNaN(parseInt(pressnumberSum303R[0]?.total)) ? 0 : parseInt(pressnumberSum303R[0]?.total))
                      / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                        (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum303R[0]?.total)) ? 0 : parseInt(pressnumberSum303R[0]?.total))
                          / ((isNaN(parseInt(pressnumberSum303Srt[0]?.total)) ? 0 : parseInt(pressnumberSum303Srt[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Pob[0]?.total)) ? 0 : parseInt(pressnumberSum303Pob[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Apw[0]?.total)) ? 0 : parseInt(pressnumberSum303Apw[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Sks[0]?.total)) ? 0 : parseInt(pressnumberSum303Sks[0]?.total)) +
                            (isNaN(parseInt(pressnumberSum303Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum303Pbb[0]?.total)))) * 100)) + (isNaN(((((isNaN(parseInt(pressnumberSum304R[0]?.total)) ? 0 : parseInt(pressnumberSum304R[0]?.total))
                              / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                                (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum304R[0]?.total)) ? 0 : parseInt(pressnumberSum304R[0]?.total))
                                  / ((isNaN(parseInt(pressnumberSum304Srt[0]?.total)) ? 0 : parseInt(pressnumberSum304Srt[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Pob[0]?.total)) ? 0 : parseInt(pressnumberSum304Pob[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Apw[0]?.total)) ? 0 : parseInt(pressnumberSum304Apw[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Sks[0]?.total)) ? 0 : parseInt(pressnumberSum304Sks[0]?.total)) +
                                    (isNaN(parseInt(pressnumberSum304Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum304Pbb[0]?.total)))) * 100))) + (isNaN(((((isNaN(parseInt(pressnumberSum306R[0]?.total)) ? 0 : parseInt(pressnumberSum306R[0]?.total))
                                      / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                                        (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) ? 0 : ((((isNaN(parseInt(pressnumberSum306R[0]?.total)) ? 0 : parseInt(pressnumberSum306R[0]?.total))
                                          / ((isNaN(parseInt(pressnumberSum306Srt[0]?.total)) ? 0 : parseInt(pressnumberSum306Srt[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Pob[0]?.total)) ? 0 : parseInt(pressnumberSum306Pob[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Apw[0]?.total)) ? 0 : parseInt(pressnumberSum306Apw[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Sks[0]?.total)) ? 0 : parseInt(pressnumberSum306Sks[0]?.total)) +
                                            (isNaN(parseInt(pressnumberSum306Pbb[0]?.total)) ? 0 : parseInt(pressnumberSum306Pbb[0]?.total)))) * 100))) )) / 6).toFixed(2)}%</td>
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
         
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>Kaizen</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum303Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum303Kaizen[0]?.total)}</td>


               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum304Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum304Kaizen[0]?.total)

               }</td>
               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum305Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum305Kaizen[0]?.total)

               }</td>
               <td  >1</td>
               <td  >{
                isNaN(parseInt(pressnumberSum306Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum306Kaizen[0]?.total)

               }</td>

               <td  >1</td>
              
               <td  >{( isNaN(parseInt(pressnumberSum303Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum303Kaizen[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum304Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum304Kaizen[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum305Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum305Kaizen[0]?.total))+(isNaN(parseInt(pressnumberSum306Kaizen[0]?.total)) ? 0 : parseInt(pressnumberSum306Kaizen[0]?.total))
                                                  }</td>
               <td  >1</td>
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}}>NearMiss</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum303Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum303Nearmiss[0]?.total)}</td>


<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum304Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum304Nearmiss[0]?.total)

}</td>
<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum305Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum305Nearmiss[0]?.total)

}</td>
<td  >1</td>
<td  >{
 isNaN(parseInt(pressnumberSum306Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum306Nearmiss[0]?.total)

}</td>

<td  >1</td>

<td  >{( isNaN(parseInt(pressnumberSum303Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum303Nearmiss[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum304Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum304Nearmiss[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum305Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum305Nearmiss[0]?.total))+(isNaN(parseInt(pressnumberSum306Nearmiss[0]?.total)) ? 0 : parseInt(pressnumberSum306Nearmiss[0]?.total))   }</td>
<td  >1</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>RA</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum303Ra[0]?.total)) ? 0 : parseInt(pressnumberSum303Ra[0]?.total)}</td>


<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum304Ra[0]?.total)) ? 0 : parseInt(pressnumberSum304Ra[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum305Ra[0]?.total)) ? 0 : parseInt(pressnumberSum305Ra[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum306Ra[0]?.total)) ? 0 : parseInt(pressnumberSum306Ra[0]?.total)

}</td>

<td  >0</td>

<td  >{( isNaN(parseInt(pressnumberSum303Ra[0]?.total)) ? 0 : parseInt(pressnumberSum303Ra[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum304Ra[0]?.total)) ? 0 : parseInt(pressnumberSum304Ra[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum305Ra[0]?.total)) ? 0 : parseInt(pressnumberSum305Ra[0]?.total))+(isNaN(parseInt(pressnumberSum306Ra[0]?.total)) ? 0 : parseInt(pressnumberSum306Ra[0]?.total))
                                   }</td>
<td  >0</td>
          </tr>

          <tr>
          <td  style={{fontSize:'14px'}}>NRA</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN(parseInt(pressnumberSum303Nra[0]?.total)) ? 0 : parseInt(pressnumberSum303Nra[0]?.total)}</td>


               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum304Nra[0]?.total)) ? 0 : parseInt(pressnumberSum304Nra[0]?.total)

               }</td>
               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum305Nra[0]?.total)) ? 0 : parseInt(pressnumberSum305Nra[0]?.total)

               }</td>
               <td  >0</td>
               <td  >{
                isNaN(parseInt(pressnumberSum306Nra[0]?.total)) ? 0 : parseInt(pressnumberSum306Nra[0]?.total)

               }</td>

               <td  >0</td>
              
               <td  >{( isNaN(parseInt(pressnumberSum303Nra[0]?.total)) ? 0 : parseInt(pressnumberSum303Nra[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum304Nra[0]?.total)) ? 0 : parseInt(pressnumberSum304Nra[0]?.total))+
                                                 ( isNaN(parseInt(pressnumberSum305Nra[0]?.total)) ? 0 : parseInt(pressnumberSum305Nra[0]?.total))+(isNaN(parseInt(pressnumberSum306Nra[0]?.total)) ? 0 : parseInt(pressnumberSum306Nra[0]?.total))  }</td>
               <td  >0</td>
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>Bd</td>
            <td   style={{fontSize:'14px'}} >hrs</td>
            
            <td  >{isNaN(parseInt(pressnumberSum303Bd[0]?.total)) ? 0 : parseInt(pressnumberSum303Bd[0]?.total)}</td>


<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum304Bd[0]?.total)) ? 0 : parseInt(pressnumberSum304Bd[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum305Bd[0]?.total)) ? 0 : parseInt(pressnumberSum305Bd[0]?.total)

}</td>
<td  >0</td>
<td  >{
 isNaN(parseInt(pressnumberSum306Bd[0]?.total)) ? 0 : parseInt(pressnumberSum306Bd[0]?.total)

}</td>

<td  >0</td>

<td  >{( isNaN(parseInt(pressnumberSum303Bd[0]?.total)) ? 0 : parseInt(pressnumberSum303Bd[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum304Bd[0]?.total)) ? 0 : parseInt(pressnumberSum304Bd[0]?.total))+
                                  ( isNaN(parseInt(pressnumberSum305Bd[0]?.total)) ? 0 : parseInt(pressnumberSum305Bd[0]?.total))+(isNaN(parseInt(pressnumberSum306Bd[0]?.total)) ? 0 : parseInt(pressnumberSum306Bd[0]?.total))
                                   }</td>
<td  >0</td>
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
            <td  width='17%' colspan='2'  style={{fontWeight:'bold'}} >TYPE</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>SRT</td>
          
            <td  width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> POB</td>
            
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
          <td  style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>303</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount303Srt[0]?.total)) ?0:parseInt(pressnumberCount303Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount303Pob[0]?.total)) ?0:parseInt(pressnumberCount303Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Apw[0]?.total)) ?0:parseInt(pressnumberCount303Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount303Sks[0]?.total)) ?0:parseInt(pressnumberCount303Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount303Pbb[0]?.total)) ?0:parseInt(pressnumberCount303Pbb[0]?.total))
            }</td>
            <td  ></td>
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum303Srt[0]?.total)) ?0:parseInt(pressnumberSum303Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum303Pob[0]?.total)) ?0:parseInt(pressnumberSum303Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum303Apw[0]?.total)) ?0:parseInt(pressnumberSum303Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum303Sks[0]?.total)) ?0:parseInt(pressnumberSum303Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum303Pbb[0]?.total)) ?0:parseInt(pressnumberSum303Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                         (isNaN( parseInt(pressnumberSum303Srt[0]?.total)) ?0:parseInt(pressnumberSum303Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum303Pob[0]?.total)) ?0:parseInt(pressnumberSum303Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum303Apw[0]?.total)) ?0:parseInt(pressnumberSum303Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum303Sks[0]?.total)) ?0:parseInt(pressnumberSum303Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum303Pbb[0]?.total)) ?0:parseInt(pressnumberSum303Pbb[0]?.total))




            }</td>
            <td  ></td>
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>304</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount304Srt[0]?.total)) ?0:parseInt(pressnumberCount304Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount304Pob[0]?.total)) ?0:parseInt(pressnumberCount304Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount304Apw[0]?.total)) ?0:parseInt(pressnumberCount304Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount304Sks[0]?.total)) ?0:parseInt(pressnumberCount304Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount304Pbb[0]?.total)) ?0:parseInt(pressnumberCount304Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
              (isNaN( parseInt(pressnumberCount304Srt[0]?.total)) ?0:parseInt(pressnumberCount304Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Pob[0]?.total)) ?0:parseInt(pressnumberCount304Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Apw[0]?.total)) ?0:parseInt(pressnumberCount304Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Sks[0]?.total)) ?0:parseInt(pressnumberCount304Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount304Pbb[0]?.total)) ?0:parseInt(pressnumberCount304Pbb[0]?.total))
                                                          
            }</td>
            <td  ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum304Srt[0]?.total)) ?0:parseInt(pressnumberSum304Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum304Pob[0]?.total)) ?0:parseInt(pressnumberSum304Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum304Apw[0]?.total)) ?0:parseInt(pressnumberSum304Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum304Sks[0]?.total)) ?0:parseInt(pressnumberSum304Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum304Pbb[0]?.total)) ?0:parseInt(pressnumberSum304Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                       (isNaN( parseInt(pressnumberSum304Srt[0]?.total)) ?0:parseInt(pressnumberSum304Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum304Pob[0]?.total)) ?0:parseInt(pressnumberSum304Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum304Apw[0]?.total)) ?0:parseInt(pressnumberSum304Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum304Sks[0]?.total)) ?0:parseInt(pressnumberSum304Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum304Pbb[0]?.total)) ?0:parseInt(pressnumberSum304Pbb[0]?.total))


                                                   
            }</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>305</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount305Srt[0]?.total)) ?0:parseInt(pressnumberCount305Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount305Pob[0]?.total)) ?0:parseInt(pressnumberCount305Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount305Apw[0]?.total)) ?0:parseInt(pressnumberCount305Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount305Sks[0]?.total)) ?0:parseInt(pressnumberCount305Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount305Pbb[0]?.total)) ?0:parseInt(pressnumberCount305Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                      (isNaN( parseInt(pressnumberCount305Srt[0]?.total)) ?0:parseInt(pressnumberCount305Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount305Pob[0]?.total)) ?0:parseInt(pressnumberCount305Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount305Apw[0]?.total)) ?0:parseInt(pressnumberCount305Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount305Sks[0]?.total)) ?0:parseInt(pressnumberCount305Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount305Pbb[0]?.total)) ?0:parseInt(pressnumberCount305Pbb[0]?.total) )


            }</td>
            <td  ></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum305Srt[0]?.total)) ?0:parseInt(pressnumberSum305Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum305Pob[0]?.total)) ?0:parseInt(pressnumberSum305Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum305Apw[0]?.total)) ?0:parseInt(pressnumberSum305Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum305Sks[0]?.total)) ?0:parseInt(pressnumberSum305Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum305Pbb[0]?.total)) ?0:parseInt(pressnumberSum305Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                      ( isNaN( parseInt(pressnumberSum305Srt[0]?.total)) ?0:parseInt(pressnumberSum305Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum305Pob[0]?.total)) ?0:parseInt(pressnumberSum305Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum305Apw[0]?.total)) ?0:parseInt(pressnumberSum305Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum305Sks[0]?.total)) ?0:parseInt(pressnumberSum305Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum305Pbb[0]?.total)) ?0:parseInt(pressnumberSum305Pbb[0]?.total))

            }</td>
            <td  ></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>306</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount306Srt[0]?.total)) ?0:parseInt(pressnumberCount306Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount306Pob[0]?.total)) ?0:parseInt(pressnumberCount306Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount306Apw[0]?.total)) ?0:parseInt(pressnumberCount306Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount306Sks[0]?.total)) ?0:parseInt(pressnumberCount306Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount306Pbb[0]?.total)) ?0:parseInt(pressnumberCount306Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{  ( isNaN( parseInt(pressnumberCount306Srt[0]?.total)) ?0:parseInt(pressnumberCount306Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount306Pob[0]?.total)) ?0:parseInt(pressnumberCount306Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount306Apw[0]?.total)) ?0:parseInt(pressnumberCount306Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount306Sks[0]?.total)) ?0:parseInt(pressnumberCount306Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount306Pbb[0]?.total)) ?0:parseInt(pressnumberCount306Pbb[0]?.total))}</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum306Srt[0]?.total)) ?0:parseInt(pressnumberSum306Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum306Pob[0]?.total)) ?0:parseInt(pressnumberSum306Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum306Apw[0]?.total)) ?0:parseInt(pressnumberSum306Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum306Sks[0]?.total)) ?0:parseInt(pressnumberSum306Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum306Pbb[0]?.total)) ?0:parseInt(pressnumberSum306Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum306Srt[0]?.total)) ?0:parseInt(pressnumberSum306Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum306Pob[0]?.total)) ?0:parseInt(pressnumberSum306Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum306Apw[0]?.total)) ?0:parseInt(pressnumberSum306Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum306Sks[0]?.total)) ?0:parseInt(pressnumberSum306Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum306Pbb[0]?.total)) ?0:parseInt(pressnumberSum306Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>151</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{(isNaN( parseInt(pressnumberCount151Srt[0]?.total)) ?0:parseInt(pressnumberCount151Srt[0]?.total) )}</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >
                                                        {(isNaN( parseInt(pressnumberCount151Srt[0]?.total)) ?0:parseInt(pressnumberCount151Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Pob[0]?.total)) ?0:parseInt(pressnumberCount151Pob[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Apw[0]?.total)) ?0:parseInt(pressnumberCount151Apw[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Sks[0]?.total)) ?0:parseInt(pressnumberCount151Sks[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount151Pbb[0]?.total)) ?0:parseInt(pressnumberCount151Pbb[0]?.total) )}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum151Srt[0]?.total)) ?0:parseInt(pressnumberSum151Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum151Pob[0]?.total)) ?0:parseInt(pressnumberSum151Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum151Apw[0]?.total)) ?0:parseInt(pressnumberSum151Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum151Sks[0]?.total)) ?0:parseInt(pressnumberSum151Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum151Pbb[0]?.total)) ?0:parseInt(pressnumberSum151Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum151Srt[0]?.total)) ?0:parseInt(pressnumberSum151Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum151Pob[0]?.total)) ?0:parseInt(pressnumberSum151Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum151Apw[0]?.total)) ?0:parseInt(pressnumberSum151Apw[0]?.total)) 
                                                    +(isNaN( parseInt(pressnumberSum151Sks[0]?.total)) ?0:parseInt(pressnumberSum151Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum151Pbb[0]?.total)) ?0:parseInt(pressnumberSum151Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
         
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>152</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount152Srt[0]?.total)) ?0:parseInt(pressnumberCount152Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount152Pob[0]?.total)) ?0:parseInt(pressnumberCount152Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount152Apw[0]?.total)) ?0:parseInt(pressnumberCount152Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount152Sks[0]?.total)) ?0:parseInt(pressnumberCount152Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount152Pbb[0]?.total)) ?0:parseInt(pressnumberCount152Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberCount152Srt[0]?.total)) ?0:parseInt(pressnumberCount152Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount152Pob[0]?.total)) ?0:parseInt(pressnumberCount152Pob[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberCount152Apw[0]?.total)) ?0:parseInt(pressnumberCount152Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount152Sks[0]?.total)) ?0:parseInt(pressnumberCount152Sks[0]?.total))
                                                    +(isNaN( parseInt(pressnumberCount152Pbb[0]?.total)) ?0:parseInt(pressnumberCount152Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum152Srt[0]?.total)) ?0:parseInt(pressnumberSum152Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum152Pob[0]?.total)) ?0:parseInt(pressnumberSum152Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum152Apw[0]?.total)) ?0:parseInt(pressnumberSum152Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum152Sks[0]?.total)) ?0:parseInt(pressnumberSum152Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum152Pbb[0]?.total)) ?0:parseInt(pressnumberSum152Pbb[0]?.total).toFixed(1)}</td>
            <td  ></td>
            <td  >
                                                   {(isNaN( parseInt(pressnumberSum152Srt[0]?.total)) ?0:parseInt(pressnumberSum152Srt[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum152Pob[0]?.total)) ?0:parseInt(pressnumberSum152Pob[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum152Apw[0]?.total)) ?0:parseInt(pressnumberSum152Apw[0]?.total)) 
                                                   +(isNaN( parseInt(pressnumberSum152Sks[0]?.total)) ?0:parseInt(pressnumberSum152Sks[0]?.total))
                                                   +(isNaN( parseInt(pressnumberSum152Pbb[0]?.total)) ?0:parseInt(pressnumberSum152Pbb[0]?.total))}
            </td>
            <td  ></td>
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>153</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount153Srt[0]?.total)) ?0:parseInt(pressnumberCount153Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount153Pob[0]?.total)) ?0:parseInt(pressnumberCount153Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount153Apw[0]?.total)) ?0:parseInt(pressnumberCount153Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount153Sks[0]?.total)) ?0:parseInt(pressnumberCount153Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount153Pbb[0]?.total)) ?0:parseInt(pressnumberCount153Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                 
                                                  ( isNaN( parseInt(pressnumberCount153Pob[0]?.total)) ?0:parseInt(pressnumberCount153Pob[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount153Apw[0]?.total)) ?0:parseInt(pressnumberCount153Apw[0]?.total)) +
                                                  ( isNaN( parseInt(pressnumberCount153Sks[0]?.total)) ?0:parseInt(pressnumberCount153Sks[0]?.total))+
                                                  ( isNaN( parseInt(pressnumberCount153Pbb[0]?.total)) ?0:parseInt(pressnumberCount153Pbb[0]?.total))
            }</td>
            <td  ></td>
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum153Srt[0]?.total)) ?0:parseInt(pressnumberSum153Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum153Pob[0]?.total)) ?0:parseInt(pressnumberSum153Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum153Apw[0]?.total)) ?0:parseInt(pressnumberSum153Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum153Sks[0]?.total)) ?0:parseInt(pressnumberSum153Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum153Pbb[0]?.total)) ?0:parseInt(pressnumberSum153Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                         (isNaN( parseInt(pressnumberSum153Srt[0]?.total)) ?0:parseInt(pressnumberSum153Srt[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum153Pob[0]?.total)) ?0:parseInt(pressnumberSum153Pob[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum153Apw[0]?.total)) ?0:parseInt(pressnumberSum153Apw[0]?.total)) +
                                                         (isNaN( parseInt(pressnumberSum153Sks[0]?.total)) ?0:parseInt(pressnumberSum153Sks[0]?.total))+
                                                        ( isNaN( parseInt(pressnumberSum153Pbb[0]?.total)) ?0:parseInt(pressnumberSum153Pbb[0]?.total))




            }</td>
            <td  ></td>
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>154</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount154Srt[0]?.total)) ?0:parseInt(pressnumberCount154Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount154Pob[0]?.total)) ?0:parseInt(pressnumberCount154Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount154Apw[0]?.total)) ?0:parseInt(pressnumberCount154Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount154Sks[0]?.total)) ?0:parseInt(pressnumberCount154Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount154Pbb[0]?.total)) ?0:parseInt(pressnumberCount154Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
              (isNaN( parseInt(pressnumberCount154Srt[0]?.total)) ?0:parseInt(pressnumberCount154Srt[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Pob[0]?.total)) ?0:parseInt(pressnumberCount154Pob[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Apw[0]?.total)) ?0:parseInt(pressnumberCount154Apw[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Sks[0]?.total)) ?0:parseInt(pressnumberCount154Sks[0]?.total))
              +(isNaN( parseInt(pressnumberCount154Pbb[0]?.total)) ?0:parseInt(pressnumberCount154Pbb[0]?.total))
                                                          
            }</td>
            <td  ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum154Srt[0]?.total)) ?0:parseInt(pressnumberSum154Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum154Pob[0]?.total)) ?0:parseInt(pressnumberSum154Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum154Apw[0]?.total)) ?0:parseInt(pressnumberSum154Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum154Sks[0]?.total)) ?0:parseInt(pressnumberSum154Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum154Pbb[0]?.total)) ?0:parseInt(pressnumberSum154Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                       (isNaN( parseInt(pressnumberSum154Srt[0]?.total)) ?0:parseInt(pressnumberSum154Srt[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum154Pob[0]?.total)) ?0:parseInt(pressnumberSum154Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum154Apw[0]?.total)) ?0:parseInt(pressnumberSum154Apw[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum154Sks[0]?.total)) ?0:parseInt(pressnumberSum154Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberSum154Pbb[0]?.total)) ?0:parseInt(pressnumberSum154Pbb[0]?.total))


                                                   
            }</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>155</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount155Srt[0]?.total)) ?0:parseInt(pressnumberCount155Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount155Pob[0]?.total)) ?0:parseInt(pressnumberCount155Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount155Apw[0]?.total)) ?0:parseInt(pressnumberCount155Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount155Sks[0]?.total)) ?0:parseInt(pressnumberCount155Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount155Pbb[0]?.total)) ?0:parseInt(pressnumberCount155Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{
                                                      (isNaN( parseInt(pressnumberCount155Srt[0]?.total)) ?0:parseInt(pressnumberCount155Srt[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount155Pob[0]?.total)) ?0:parseInt(pressnumberCount155Pob[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount155Apw[0]?.total)) ?0:parseInt(pressnumberCount155Apw[0]?.total))+
                                                     ( isNaN( parseInt(pressnumberCount155Sks[0]?.total)) ?0:parseInt(pressnumberCount155Sks[0]?.total))+
                                                      (isNaN( parseInt(pressnumberCount155Pbb[0]?.total)) ?0:parseInt(pressnumberCount155Pbb[0]?.total) )


            }</td>
            <td  ></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum155Srt[0]?.total)) ?0:parseInt(pressnumberSum155Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum155Pob[0]?.total)) ?0:parseInt(pressnumberSum155Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum155Apw[0]?.total)) ?0:parseInt(pressnumberSum155Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum155Sks[0]?.total)) ?0:parseInt(pressnumberSum155Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum155Pbb[0]?.total)) ?0:parseInt(pressnumberSum155Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{
                                                      ( isNaN( parseInt(pressnumberSum155Srt[0]?.total)) ?0:parseInt(pressnumberSum155Srt[0]?.total)) +
                                                      ( isNaN( parseInt(pressnumberSum155Pob[0]?.total)) ?0:parseInt(pressnumberSum155Pob[0]?.total)) +
                                                       (isNaN( parseInt(pressnumberSum155Apw[0]?.total)) ?0:parseInt(pressnumberSum155Apw[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum155Sks[0]?.total)) ?0:parseInt(pressnumberSum155Sks[0]?.total))+
                                                       (isNaN( parseInt(pressnumberSum155Pbb[0]?.total)) ?0:parseInt(pressnumberSum155Pbb[0]?.total))

            }</td>
            <td  ></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>156</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{isNaN( parseInt(pressnumberCount156Srt[0]?.total)) ?0:parseInt(pressnumberCount156Srt[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount156Pob[0]?.total)) ?0:parseInt(pressnumberCount156Pob[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount156Apw[0]?.total)) ?0:parseInt(pressnumberCount156Apw[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount156Sks[0]?.total)) ?0:parseInt(pressnumberCount156Sks[0]?.total) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberCount156Pbb[0]?.total)) ?0:parseInt(pressnumberCount156Pbb[0]?.total) }</td>
            <td  ></td>
            <td  >{  ( isNaN( parseInt(pressnumberCount156Srt[0]?.total)) ?0:parseInt(pressnumberCount156Srt[0]?.total))
                                                        +(isNaN( parseInt(pressnumberCount156Pob[0]?.total)) ?0:parseInt(pressnumberCount156Pob[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount156Apw[0]?.total)) ?0:parseInt(pressnumberCount156Apw[0]?.total))
                                                       +( isNaN( parseInt(pressnumberCount156Sks[0]?.total)) ?0:parseInt(pressnumberCount156Sks[0]?.total))
                                                       +(isNaN( parseInt(pressnumberCount156Pbb[0]?.total)) ?0:parseInt(pressnumberCount156Pbb[0]?.total))}</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{isNaN( parseInt(pressnumberSum156Srt[0]?.total)) ?0:parseInt(pressnumberSum156Srt[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum156Pob[0]?.total)) ?0:parseInt(pressnumberSum156Pob[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum156Apw[0]?.total)) ?0:parseInt(pressnumberSum156Apw[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum156Sks[0]?.total)) ?0:parseInt(pressnumberSum156Sks[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >{isNaN( parseInt(pressnumberSum156Pbb[0]?.total)) ?0:parseInt(pressnumberSum156Pbb[0]?.total).toFixed(1) }</td>
            <td  ></td>
            <td  >
                                                    {(isNaN( parseInt(pressnumberSum156Srt[0]?.total)) ?0:parseInt(pressnumberSum156Srt[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum156Pob[0]?.total)) ?0:parseInt(pressnumberSum156Pob[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum156Apw[0]?.total)) ?0:parseInt(pressnumberSum156Apw[0]?.total))
                                                    +(isNaN( parseInt(pressnumberSum156Sks[0]?.total)) ?0:parseInt(pressnumberSum156Sks[0]?.total) )
                                                    +(isNaN( parseInt(pressnumberSum156Pbb[0]?.total)) ?0:parseInt(pressnumberSum156Pbb[0]?.total))} 
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

export default LineThree
