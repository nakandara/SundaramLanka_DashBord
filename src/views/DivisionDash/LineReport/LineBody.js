import React,{useContext, useEffect} from 'react'
import './line.css'
import { useNavigate} from 'react-router-dom';
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'




const LineBody = () => {


  const {  ddate, shift, setShift,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
    pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,pressCountA,setPressCountA,
    pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC ,
    pressSumKaizen ,setPressSumKaizen,pressSumNearmiss,setPressSumNearmiss,pressSumRa ,setPressSumRa,pressSumNra ,setPressSumNra,pressSumBd ,setPressSumBd,
    pressSumAi ,setPressSumAi,pressSumAni,setPressSumAni,pressSumDot,setPressSumDot,pressSumMp ,setPressSumMp,pressSumHeadCount ,setPressSumHeadCount,pressState,setPressState} = useContext(reportContext)
  



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


     


      //linekpi

      const fetchDataShiftPressWiseLineKpiAi = async () => {

        try {
      
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/kpi/kpilineshift/ai/${dateone}/${datetwo}/${shift}`);
      
          setPressSumAi(responsePressOne.data.data.data);
      
        } catch (err) {
          console.log(err);
        }
      };


      //linekpi

      const fetchDataShiftPressWiseLineKpiAni = async () => {

        try {
      
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/kpi/kpilineshift/ani/${dateone}/${datetwo}/${shift}`);
      
          setPressSumAni(responsePressOne.data.data.data);
      
        } catch (err) {
          console.log(err);
        }
      };



      const fetchDataShiftPressWiseLineKpiDot = async () => {

        try {
      
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/kpi/kpilineshift/dot/${dateone}/${datetwo}/${shift}`);
      
          setPressSumDot(responsePressOne.data.data.data);
      
        } catch (err) {
          console.log(err);
        }
      };


      const fetchDataShiftPressWiseLineKpiHeadCount = async () => {

        try {
      
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/kpi/kpilineshift/head_count/${dateone}/${datetwo}/${shift}`);
      
          setPressSumHeadCount(responsePressOne.data.data.data);
      
        } catch (err) {
          console.log(err);
        }
      };

      const fetchDataShiftPressWiseLineKpiMp = async () => {

        try {
      
          //       ///////////////////////////////////////////////////
          const responsePressOne = await api.get(`/kpi/kpilineshift/mp/${dateone}/${datetwo}/${shift}`);
      
          setPressSumMp(responsePressOne.data.data.data);
      
        } catch (err) {
          console.log(err);
        }
      };

//console.log(pressSumAi)

//linekpi

const fetchDataTotalPressWiseLineKpiAi = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpilinetotal/ai/${dateone}/${datetwo}`);

    setPressSumAi(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


//linekpi

const fetchDataTotalPressWiseLineKpiAni = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpilinetotal/ani/${dateone}/${datetwo}`);

    setPressSumAni(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};



const fetchDataTotalPressWiseLineKpiDot = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpilinetotal/dot/${dateone}/${datetwo}`);

    setPressSumDot(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseLineKpiHeadCount = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpilinetotal/head_count/${dateone}/${datetwo}`);

    setPressSumHeadCount(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};


const fetchDataTotalPressWiseLineKpiMp = async () => {

  try {

    //       ///////////////////////////////////////////////////
    const responsePressOne = await api.get(`/kpi/kpilinetotal/mp/${dateone}/${datetwo}`);

    setPressSumMp(responsePressOne.data.data.data);

  } catch (err) {
    console.log(err);
  }
};




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
  

        fetchDataShiftPressWiseKpiKaizen()
      fetchDataShiftPressWiseKpiNearmiss()
      fetchDataShiftPressWiseKpiRa()
      fetchDataShiftPressWiseKpiNra()
      fetchDataShiftPressWiseKpiBd()


      fetchDataShiftPressWiseLineKpiAi()
      fetchDataShiftPressWiseLineKpiAni()
      fetchDataShiftPressWiseLineKpiMp()
      fetchDataShiftPressWiseLineKpiDot()
      fetchDataShiftPressWiseLineKpiHeadCount()
  
  
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


        fetchDataTotalPressWiseLineKpiAi()
        fetchDataTotalPressWiseLineKpiAni()
        fetchDataTotalPressWiseLineKpiMp()
        fetchDataTotalPressWiseLineKpiDot()
        fetchDataTotalPressWiseLineKpiHeadCount()
       
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
  const pressnumberCountLineTwoA= pressCountA && pressCountA.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
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



  //console.log(pressCountA)


  ////LOGKPI

  const pressnumberSumLineOneKaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoKaizen= pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeKaizen = pressSumKaizen && pressSumKaizen.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneKaizen= pressnumberSumLineOneKaizen.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoKaizen= pressnumberSumLineTwoKaizen.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeKaizen= pressnumberSumLineThreeKaizen.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)




  ///neraconst
   const pressnumberSumLineOneNearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoNearmiss= pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeNearmiss = pressSumNearmiss && pressSumNearmiss.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneNearmiss= pressnumberSumLineOneNearmiss.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoNearmiss= pressnumberSumLineTwoNearmiss.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeNearmiss= pressnumberSumLineThreeNearmiss.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)



  ////////bd
  const pressnumberSumLineOneBd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoBd= pressSumBd && pressSumBd.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeBd = pressSumBd && pressSumBd.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneBd= pressnumberSumLineOneBd.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoBd= pressnumberSumLineTwoBd.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeBd= pressnumberSumLineThreeBd.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)







  ////ai
  const pressnumberSumLineOneRa = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoRa= pressSumRa && pressSumRa.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeRa = pressSumRa && pressSumRa.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneRa= pressnumberSumLineOneRa.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoRa= pressnumberSumLineTwoRa.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeRa= pressnumberSumLineThreeRa.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  ///nra

  const pressnumberSumLineOneNra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '1001' ||d.press_no ==='501'||d.press_no ==='502'||d.press_no ==='401'||d.press_no ==='402'||d.press_no ==='651' })
  const pressnumberSumLineTwoNra= pressSumNra && pressSumNra.filter((d) => { return d.press_no === '102' ||d.press_no ==='103'||d.press_no ==='104'||d.press_no ==='105'||d.press_no ==='106'||d.press_no ==='107' })
  const pressnumberSumLineThreeNra = pressSumNra && pressSumNra.filter((d) => { return d.press_no === '303' ||d.press_no ==='304'||d.press_no ==='305'||d.press_no ==='306'||d.press_no ==='151'||d.press_no ==='152'||d.press_no ==='153'||d.press_no ==='154'||d.press_no ==='155'||d.press_no ==='151'||d.press_no ==='156' })

  let sumpressnumberCountLineOneNra= pressnumberSumLineOneNra.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineTwoNra= pressnumberSumLineTwoNra.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let sumpressnumberCountLineThreeNra= pressnumberSumLineThreeNra.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)

  












  ////line kpi

  const pressnumberCountLineOneAi = pressSumAi && pressSumAi.filter((d) => { return d.line_no === '1'})
  const linenumberCountLineTwoAi = pressSumAi && pressSumAi.filter((d) => { return d.line_no === '2' })
  const linenumberCountLineThreeAi = pressSumAi && pressSumAi.filter((d) => { return d.line_no === '3' })
   

  let countSumLineOneAi = pressnumberCountLineOneAi.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let countSumLineTwoAi = linenumberCountLineTwoAi.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let countSumLineThreeAi = linenumberCountLineThreeAi.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)



  ////line kpi

  const pressnumberCountLineOneAni = pressSumAni && pressSumAni.filter((d) => { return d.line_no === '1'})
  const linenumberCountLineTwoAni = pressSumAni && pressSumAni.filter((d) => { return d.line_no === '2' })
  const linenumberCountLineThreeAni = pressSumAni && pressSumAni.filter((d) => { return d.line_no === '3' })
   

  let countSumLineOneAni = pressnumberCountLineOneAni.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let countSumLineTwoAni = linenumberCountLineTwoAni.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


  let countSumLineThreeAni = linenumberCountLineThreeAni.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.total)
  }, initialValue)


////line kpi

const pressnumberCountLineOneMp = pressSumMp && pressSumMp.filter((d) => { return d.line_no === '1'})
const linenumberCountLineTwoMp = pressSumMp && pressSumMp.filter((d) => { return d.line_no === '2' })
const linenumberCountLineThreeMp = pressSumMp && pressSumMp.filter((d) => { return d.line_no === '3' })
 

let countSumLineOneMp = pressnumberCountLineOneMp.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


let countSumLineTwoMp = linenumberCountLineTwoMp.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


let countSumLineThreeMp = linenumberCountLineThreeMp.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)



////line kpi

const pressnumberCountLineOneHeadCount = pressSumHeadCount && pressSumHeadCount.filter((d) => { return d.line_no === '1'})
const linenumberCountLineTwoHeadCount = pressSumHeadCount && pressSumHeadCount.filter((d) => { return d.line_no === '2' })
const linenumberCountLineThreeHeadCount = pressSumHeadCount && pressSumHeadCount.filter((d) => { return d.line_no === '3' })
 

let countSumLineOneHeadCount = pressnumberCountLineOneHeadCount.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


let countSumLineTwoHeadCount = linenumberCountLineTwoHeadCount.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


let countSumLineThreeHeadCount = linenumberCountLineThreeHeadCount.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


////line kpi

const pressnumberCountLineOneDot = pressSumDot && pressSumDot.filter((d) => { return d.line_no === '1'})
const linenumberCountLineTwoDot = pressSumDot && pressSumDot.filter((d) => { return d.line_no === '2' })
const linenumberCountLineThreeDot = pressSumDot && pressSumDot.filter((d) => { return d.line_no === '3' })
 

let countSumLineOneDot = pressnumberCountLineOneDot.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


let countSumLineTwoDot = linenumberCountLineTwoDot.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.total)
}, initialValue)


let countSumLineThreeDot = linenumberCountLineThreeDot.reduce((accumulator, currentValue) => {
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
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >KPI</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold',fontSize:'12px'}}  onClick={(e)=>pressOne(e)}>LINE 01</td>
          
            <td  width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressTwo(e)}> LINE 02</td>
            
            <td width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressThree(e)}>LINE 03</td>
        
           
            
            <td width='10%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >TOTAL</td>
            
            
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
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Pcs</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >Nos</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}> </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks +countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks+countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
           
            
            
            
          </tr>
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Weight</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneSrt+sumpressnumberSumLineOnePob+sumpressnumberSumLineOnePbb+sumpressnumberSumLineOneApw+
                                                        sumpressnumberSumLineOneSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineTwoSrt+sumpressnumberSumLineTwoPob+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineTwoApw+
                                                        sumpressnumberSumLineTwoSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineThreeSrt+sumpressnumberSumLineThreePob+sumpressnumberSumLineThreePbb+sumpressnumberSumLineThreeApw+
                                                        sumpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneSrt+sumpressnumberSumLineOnePob+sumpressnumberSumLineOnePbb+sumpressnumberSumLineOneApw+
                                                        sumpressnumberSumLineOneSks +sumpressnumberSumLineTwoSrt+sumpressnumberSumLineTwoPob+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineTwoApw+
                                                        sumpressnumberSumLineTwoSks+sumpressnumberSumLineThreeSrt+sumpressnumberSumLineThreePob+sumpressnumberSumLineThreePbb+sumpressnumberSumLineThreeApw+
                                                        sumpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>FTR</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(((isNaN(((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((countpressnumberCountLineOneA/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((countpressnumberCountLineTwoA/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((countpressnumberCountLineThreeA/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>90%</td>
            
            
            
            
            
          </tr>
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>B</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{isNaN(((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(((isNaN(((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneB/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoB/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeB/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            
          
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>E</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{(((isNaN(((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneE/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoE/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeE/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0%</td>
            
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>R</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                        countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                          countpressnumberSumLineTwoSks))*100).toFixed(2)}%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN(((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                        countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                          countpressnumberSumLineThreeSks))*100).toFixed(2)}% </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0.15%</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(((isNaN(((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                        countpressnumberSumLineOneSks))*100).toFixed(2))?0:((sumpressnumberCountLineOneR/(countpressnumberSumLineOneSrt+countpressnumberSumLineOnePob+countpressnumberSumLineOnePbb+countpressnumberSumLineOneApw+
                                                          countpressnumberSumLineOneSks))*100))+(isNaN(((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                            countpressnumberSumLineTwoSks))*100).toFixed(2))?0:((sumpressnumberCountLineTwoR/(countpressnumberSumLineTwoSrt+countpressnumberSumLineTwoPob+countpressnumberSumLineTwoPbb+countpressnumberSumLineTwoApw+
                                                              countpressnumberSumLineTwoSks))*100))+(isNaN(((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                countpressnumberSumLineThreeSks))*100).toFixed(2))?0:((sumpressnumberCountLineThreeR/(countpressnumberSumLineThreeSrt+countpressnumberSumLineThreePob+countpressnumberSumLineThreePbb+countpressnumberSumLineThreeApw+
                                                                  countpressnumberSumLineThreeSks))*100)))/3).toFixed(2)}%</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0.15%</td>
            
            
            
            
          </tr>
        

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>OPE</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>%</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>Kaizen</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineOneKaizen}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineTwoKaizen}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineThreeKaizen}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(sumpressnumberCountLineOneKaizen)+(sumpressnumberCountLineTwoKaizen)+(sumpressnumberCountLineThreeKaizen)}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
           
            
            
            
          </tr>  <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>NearMiss</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineOneNearmiss}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineTwoNearmiss}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineThreeNearmiss}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(sumpressnumberCountLineOneNearmiss)+(sumpressnumberCountLineTwoNearmiss)+(sumpressnumberCountLineThreeNearmiss)}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>1</td>
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>RA  </td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineOneRa}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineTwoRa}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineThreeRa}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(sumpressnumberCountLineOneRa)+(sumpressnumberCountLineTwoRa)+(sumpressnumberCountLineThreeRa)}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            
            
            
          </tr>

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>NRA</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineOneNra}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineTwoNra}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberCountLineThreeNra}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{(sumpressnumberCountLineOneNra)+(sumpressnumberCountLineTwoNra)+(sumpressnumberCountLineThreeNra)}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
           
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>AI</td>
            <td   style={{fontWeight:'bold',fontSize:'12px'}} >Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineOneAi}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineTwoAi}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineThreeAi}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{(countSumLineOneAi)+(countSumLineTwoAi)+(countSumLineThreeAi)}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
           
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>ANI</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineOneAni}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineTwoAni}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineThreeAni}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{(countSumLineOneAni)+(countSumLineTwoAni)+(countSumLineThreeAni)}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>PRODUCTIVITY</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN((((sumpressnumberSumLineOneSrt)+(sumpressnumberSumLineOnePob)+(sumpressnumberSumLineOnePbb)+(sumpressnumberSumLineOneApw)+
                                                        (sumpressnumberSumLineOneSks))/(countSumLineOneHeadCount)))?0:(((sumpressnumberSumLineOneSrt)+(sumpressnumberSumLineOnePob)+(sumpressnumberSumLineOnePbb)+(sumpressnumberSumLineOneApw)+
                                                        (sumpressnumberSumLineOneSks))/(countSumLineOneHeadCount))}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN((((sumpressnumberSumLineTwoSrt)+(sumpressnumberSumLineTwoPob)+(sumpressnumberSumLineTwoPbb)+(sumpressnumberSumLineTwoApw)+
                                                        (sumpressnumberSumLineTwoSks))/(countSumLineTwoHeadCount)))?0:(((sumpressnumberSumLineTwoSrt)+(sumpressnumberSumLineTwoPob)+(sumpressnumberSumLineTwoPbb)+(sumpressnumberSumLineTwoApw)+
                                                        (sumpressnumberSumLineTwoSks))/(countSumLineTwoHeadCount))}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN((((sumpressnumberSumLineThreeSrt)+(sumpressnumberSumLineThreePob)+(sumpressnumberSumLineThreePbb)+(sumpressnumberSumLineThreeApw)+
                                                        (sumpressnumberSumLineThreeSks))/(countSumLineThreeHeadCount)))?0:(((sumpressnumberSumLineThreeSrt)+(sumpressnumberSumLineThreePob)+(sumpressnumberSumLineThreePbb)+(sumpressnumberSumLineThreeApw)+
                                                        (sumpressnumberSumLineThreeSks))/(countSumLineThreeHeadCount))}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}>{isNaN((((((sumpressnumberSumLineOneSrt)+(sumpressnumberSumLineOnePob)+(sumpressnumberSumLineOnePbb)+(sumpressnumberSumLineOneApw)+
                                                        (sumpressnumberSumLineOneSks)))+(((sumpressnumberSumLineTwoSrt)+(sumpressnumberSumLineTwoPob)+(sumpressnumberSumLineTwoPbb)+(sumpressnumberSumLineTwoApw)+
                                                          (sumpressnumberSumLineTwoSks)))+(((sumpressnumberSumLineThreeSrt)+(sumpressnumberSumLineThreePob)+(sumpressnumberSumLineThreePbb)+(sumpressnumberSumLineThreeApw)+
                                                            (sumpressnumberSumLineThreeSks))))/((countSumLineOneHeadCount)+(countSumLineTwoHeadCount)+(countSumLineThreeHeadCount))))?0:(((((sumpressnumberSumLineOneSrt)+(sumpressnumberSumLineOnePob)+(sumpressnumberSumLineOnePbb)+(sumpressnumberSumLineOneApw)+
                                                        (sumpressnumberSumLineOneSks)))+(((sumpressnumberSumLineTwoSrt)+(sumpressnumberSumLineTwoPob)+(sumpressnumberSumLineTwoPbb)+(sumpressnumberSumLineTwoApw)+
                                                          (sumpressnumberSumLineTwoSks)))+(((sumpressnumberSumLineThreeSrt)+(sumpressnumberSumLineThreePob)+(sumpressnumberSumLineThreePbb)+(sumpressnumberSumLineThreeApw)+
                                                            (sumpressnumberSumLineThreeSks))))/((countSumLineOneHeadCount)+(countSumLineTwoHeadCount)+(countSumLineThreeHeadCount)))}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
           
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>DOT</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineOneDot}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineTwoDot}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineThreeDot}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{(countSumLineOneDot)+(countSumLineTwoDot)+(countSumLineThreeDot)}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            
            
            
            
          </tr>

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>MP</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineOneMp}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineTwoMp}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>0</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countSumLineThreeMp}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{(countSumLineOneMp)+(countSumLineTwoMp)+(countSumLineThreeMp)}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >0</td>
           
            
            
            
            
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
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >KPI</td>
            <td  width='15%' colspan='2' style={{fontWeight:'bold',fontSize:'12px'}}  onClick={(e)=>pressOne(e)}>LINE 01</td>
          
            <td  width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressTwo(e)}> LINE 02</td>
            
            <td width='15%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} onClick={(e)=>pressThree(e)}>LINE 03</td>
        
          
            
            <td width='10%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px'}} >TOTAL</td>
            
            
          </tr>


          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}}>TYPE</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >UOM</td>
            
            <td  style={{fontSize:'12px',textAlign:'center',fontWeight:'bold'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Act</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Plan</td>
           
            
            
            
          </tr>
          <tr>
          <td  style={{textAlign:'center',fontSize:'12px',fontWeight:'bold'}} rowspan='2'>SRT</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}} >Nos</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{countpressnumberSumLineOneSrt}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineTwoSrt}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineThreeSrt}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOneSrt+countpressnumberSumLineTwoSrt+countpressnumberSumLineThreeSrt}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
           
            
            
          </tr>
          
          <tr>
         
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneSrt}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineTwoSrt}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{sumpressnumberSumLineThreeSrt}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{sumpressnumberSumLineOneSrt+sumpressnumberSumLineTwoSrt+sumpressnumberSumLineThreeSrt}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
           
            
            
            
          </tr>
          
          
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>POB</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{countpressnumberSumLineOnePob}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineTwoPob}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{countpressnumberSumLineThreePob}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOnePob+countpressnumberSumLineTwoPob+countpressnumberSumLineThreePob}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
          </tr>
          
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOnePob}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineTwoPob}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{sumpressnumberSumLineThreePob}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOnePob+sumpressnumberSumLineTwoPob+sumpressnumberSumLineThreePob}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
            
          </tr>
          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>APW</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOneApw}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineTwoApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineThreeApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOneApw+countpressnumberSumLineTwoApw+countpressnumberSumLineThreeApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
          </tr>
          <tr>
         
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineTwoApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineThreeApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneApw+sumpressnumberSumLineTwoApw+sumpressnumberSumLineThreeApw}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
          </tr>
        

          <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>SKS</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOneSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineTwoSks}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOneSks+countpressnumberSumLineTwoSks+countpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineTwoSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{sumpressnumberSumLineThreeSks}</td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} ></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOneSks+sumpressnumberSumLineTwoSks+sumpressnumberSumLineThreeSks}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
          </tr>  <tr>
          <td  style={{fontWeight:'bold',fontSize:'12px'}} rowspan='2'>PBB</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Nos</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineOnePbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineTwoPbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{countpressnumberSumLineThreePbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td style={{fontWeight:'bold',fontSize:'12px'}} >{countpressnumberSumLineOnePbb+countpressnumberSumLineTwoPbb+countpressnumberSumLineThreePbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
          </tr>
          <tr>
          
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>Ton</td>
            
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOnePbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineTwoPbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineThreePbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}>{sumpressnumberSumLineOnePbb+sumpressnumberSumLineTwoPbb+sumpressnumberSumLineThreePbb}</td>
            <td  style={{fontWeight:'bold',fontSize:'12px'}}></td>
            
            
            
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
