import React,{useContext, useEffect} from 'react'
import './line.css'
import { useNavigate} from 'react-router-dom';
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'




const LineBody = () => {


  const {  ddate, shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,pressCountA,setPressCountA,
    pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC } = useContext(reportContext)
  



      const navigate = useNavigate();

      const handleOption = (e) => {
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


//console.log(datetwo);

////////////////////

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
    let initialValue = 0
    //srt
      const pressnumberSumLineOneSrt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberSumLineTwoSrt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberSumLineThreeSrt = pressSumSrt && pressSumSrt.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

      
  let sumpressnumberSumLineOneSrt = pressnumberSumLineOneSrt.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberSumLineTwoSrt = pressnumberSumLineTwoSrt.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberSumLineThreeSrt = pressnumberSumLineThreeSrt.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)








     
   
    
      const pressnumberCountLineOneSrt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberCountLineTwoSrt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberCountLineThreeSrt = pressCountSrt && pressCountSrt.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
       

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
    
    const pressnumberSumLineOnePob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberSumLineTwoPob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberSumLineThreePob = pressSumPob && pressSumPob.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
     
    

      let sumpressnumberSumLineOnePob = pressnumberSumLineOnePob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoPob = pressnumberSumLineTwoPob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreePob = pressnumberSumLineThreePob.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
      const pressnumberCountLineOnePob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberCountLineTwoPob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberCountLineThreePob = pressCountPob && pressCountPob.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
      
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
    
    const pressnumberSumLineOnePbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberSumLineTwoPbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberSumLineThreePbb = pressSumPbb && pressSumPbb.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
      
      let sumpressnumberSumLineOnePbb = pressnumberSumLineOnePbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoPbb = pressnumberSumLineTwoPbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreePbb = pressnumberSumLineThreePbb.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
    
      const pressnumberCountLineOnePbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberCountLineTwoPbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberCountLineThreePbb = pressCountPbb && pressCountPbb.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
      
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
    
    const pressnumberSumLineOneApw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberSumLineTwoApw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberSumLineThreeApw = pressSumApw && pressSumApw.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
      
      let sumpressnumberSumLineOneApw = pressnumberSumLineOneApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoApw = pressnumberSumLineTwoApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreeApw = pressnumberSumLineThreeApw.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
    
      const pressnumberCountLineOneApw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberCountLineTwoApw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberCountLineThreeApw = pressCountApw && pressCountApw.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
     
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
    
    const pressnumberSumLineOneSks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberSumLineTwoSks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberSumLineThreeSks = pressSumSks && pressSumSks.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
     
      let sumpressnumberSumLineOneSks = pressnumberSumLineOneSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineTwoSks = pressnumberSumLineTwoSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let sumpressnumberSumLineThreeSks = pressnumberSumLineThreeSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
    
      const pressnumberCountLineOneSks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
      const pressnumberCountLineTwoSks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
      const pressnumberCountLineThreeSks = pressCountSks && pressCountSks.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })
     
    
      let countpressnumberSumLineOneSks = pressnumberCountLineOneSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineTwoSks = pressnumberCountLineTwoSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    
    
      let countpressnumberSumLineThreeSks = pressnumberCountLineThreeSks.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.total)
      }, initialValue)
    



      


/////filter A

const pressnumberCountLineOneA = pressCountA && pressCountA.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberCountLineTwoA= pressCountA && pressSumSrt.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberCountLineThreeA = pressCountA && pressCountA.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })


  let countpressnumberCountLineOneA = pressnumberCountLineOneA.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let countpressnumberCountLineTwoA = pressnumberCountLineTwoA.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let countpressnumberCountLineThreeA = pressnumberCountLineThreeA.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)







//srt
  const pressnumberSumLineOneB = pressSumB && pressSumB.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoB= pressSumB && pressSumB.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeB = pressSumB && pressSumB.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneB= pressnumberSumLineOneB.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoB= pressnumberSumLineTwoB.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeB= pressnumberSumLineThreeB.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)














  const pressnumberSumLineOneE = pressSumE && pressSumE.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoE= pressSumE && pressSumE.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeE= pressSumE && pressSumE.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })



  let sumpressnumberCountLineOneE= pressnumberSumLineOneE.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoE= pressnumberSumLineTwoE.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeE= pressnumberSumLineThreeE.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


















  const pressnumberSumLineOneR = pressSumR && pressSumR.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoR= pressSumR && pressSumR.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeR = pressSumR && pressSumR.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneR= pressnumberSumLineOneR.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoR= pressnumberSumLineTwoR.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeR= pressnumberSumLineThreeR.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


//console.log(pressnumberCountLineOneA );



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
            <td  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>LINE 01</td>
          
            <td  width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> LINE 02</td>
            
            <td width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>LINE 03</td>
        
           
            
            <td width='10%' colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
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
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'12px'}}>Pcs</td>
            <td  style={{fontSize:'12px'}} >Nos</td>
            
            <td  >{countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks}</td>
            <td  > </td>
            <td  >{countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks +countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks+countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks}</td>
            <td  ></td>
           
            
            
            
          </tr>
          
          <tr>
          <td  style={{fontSize:'14px'}}>Weight</td>
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineOnePob+sumpressnumberSumLineOnePbb+sumpressnumberSumLineOneApw+
                                                        sumpressnumberSumLineOneSks}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineTwoSrt+sumpressnumberSumLineTwoPob+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineTwoApw+
                                                        sumpressnumberSumLineTwoSks}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineThreeSrt+sumpressnumberSumLineThreePob+sumpressnumberSumLineThreePbb+sumpressnumberSumLineThreeApw+
                                                        sumpressnumberSumLineThreeSks}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineOnePob+sumpressnumberSumLineOnePbb+sumpressnumberSumLineOneApw+
                                                        sumpressnumberSumLineOneSks +sumpressnumberSumLineTwoSrt+sumpressnumberSumLineTwoPob+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineTwoApw+
                                                        sumpressnumberSumLineTwoSks+sumpressnumberSumLineThreeSrt+sumpressnumberSumLineThreePob+sumpressnumberSumLineThreePbb+sumpressnumberSumLineThreeApw+
                                                        sumpressnumberSumLineThreeSks}</td>
            <td  ></td>
            
            
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}}>FTR</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
            <td  >{isNaN(((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  >90%</td>
            <td  >{isNaN(((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  >90%</td>
            <td  >{(((isNaN(((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  >90%</td>
            
            
            
            
            
          </tr>
          
          <tr>
          <td  style={{fontSize:'14px'}}>B</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
            <td  >{isNaN(((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  >0.15%</td>
            <td  >{(((isNaN(((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  >0.15%</td>
            
          
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>E</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
            <td  >{isNaN(((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  >0%</td>
            <td  >{isNaN(((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  >0%</td>
            <td  >{(((isNaN(((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  >0%</td>
            
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>R</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
            <td  >{isNaN(((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  >0.15%</td>
            <td  >{isNaN(((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  >0.15%</td>
            <td  >{(((isNaN(((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  >0.15%</td>
            
            
            
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}}>OPE</td>
            <td  style={{fontSize:'14px'}}>%</td>
            
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
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>RA  </td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
            
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}}>OT</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
          <td  style={{fontSize:'14px'}}>DOT</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
          <td  style={{fontSize:'14px'}}>MP</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
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
          <td  colspan='2'>SUMMARY</td>
          
            
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
            <td  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>LINE 01</td>
          
            <td  width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> LINE 02</td>
            
            <td width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>LINE 03</td>
        
          
            
            <td width='10%' colspan='2'  style={{fontWeight:'bold'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td  style={{fontWeight:'bold'}}>TYPE</td>
            <td  style={{fontWeight:'bold'}} >UOM</td>
            
            <td  style={{fontSize:'12px',textAlign:'center'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
            <td  style={{fontSize:'12px'}}>Act</td>
            <td  style={{fontSize:'12px'}}>Plan</td>
           
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>SRT</td>
            <td  style={{fontSize:'14px'}} >Nos</td>
            
            <td  >{countpressnumberSumLineOneSrt}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineTwoSrt}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineThreeSrt}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineOneSrt+countpressnumberSumLineTwoSrt+countpressnumberSumLineThreeSrt}</td>
            <td  ></td>
           
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{sumpressnumberSumLineOneSrt}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineTwoSrt}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineThreeSrt}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineTwoSrt+sumpressnumberSumLineThreeSrt}</td>
            <td  ></td>
           
            
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>POB</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{countpressnumberSumLineOnePob}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineTwoPob}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineThreePob}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineOnePob+countpressnumberSumLineTwoPob+countpressnumberSumLineThreePob}</td>
            <td  ></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{sumpressnumberSumLineOnePob}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineTwoPob}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineThreePob}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineOnePob+sumpressnumberSumLineTwoPob+sumpressnumberSumLineThreePob}</td>
            <td  ></td>
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>APW</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{countpressnumberSumLineOneApw}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineTwoApw}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineThreeApw}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineOneApw+countpressnumberSumLineTwoApw+countpressnumberSumLineThreeApw}</td>
            <td  ></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{sumpressnumberSumLineOneApw}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineTwoApw}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineThreeApw}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineOneApw+sumpressnumberSumLineTwoApw+sumpressnumberSumLineThreeApw}</td>
            <td  ></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>SKS</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{countpressnumberSumLineOneSks}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineTwoSks}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineThreeSks}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineOneSks+countpressnumberSumLineTwoSks+countpressnumberSumLineThreeSks}</td>
            <td  ></td>
            
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{sumpressnumberSumLineOneSks}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineTwoSks}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineThreeSks}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineOneSks+sumpressnumberSumLineTwoSks+sumpressnumberSumLineThreeSks}</td>
            <td  ></td>
            
            
            
          </tr>  <tr>
          <td  style={{fontSize:'14px'}} rowspan='2'>PBB</td>
            <td  style={{fontSize:'14px'}}>Nos</td>
            
            <td  >{countpressnumberSumLineOnePbb}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineTwoPbb}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineThreePbb}</td>
            <td  ></td>
            <td  >{countpressnumberSumLineOnePbb+countpressnumberSumLineTwoPbb+countpressnumberSumLineThreePbb}</td>
            <td  ></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontSize:'14px'}}>Ton</td>
            
            <td  >{sumpressnumberSumLineOnePbb}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineTwoPbb}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineThreePbb}</td>
            <td  ></td>
            <td  >{sumpressnumberSumLineOnePbb+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineThreePbb}</td>
            <td  ></td>
            
            
            
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
