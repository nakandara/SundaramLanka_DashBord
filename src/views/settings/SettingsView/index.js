import React, { useContext,useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Typography} from '@material-ui/core';
import {Table} from '../Table'
import MachineCost from './MachineCost';
import MachineCostTotal from './MachineCostTotal';
import api from '../../../api/api';
import {reportContext} from '../../../context/ContextProvider'
import moment from 'moment'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },hOne:{
    textAlign:'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(1)
  }
}));










const SettingsView = () => {
  


  const {ddate} =useContext(reportContext)



  var newd =  new Date(ddate);
  let monthNumber = newd.getMonth() + 1;                                       
  let yearNumber = newd.getFullYear() ;
  let dateNumber = newd.getDate();
  
  var parmDate =yearNumber +'-'+monthNumber +'-'+ dateNumber
  
  var paramDateOne =yearNumber +'-'+monthNumber +'-'+ '1'





///////////state///////////


const[eightyFourMillDaily,setEightyFourMillDaily] =useState([])
const[eightyFourMillMtd,setEightyFourMillMtd] =useState([])

const[sixtyChineseMillDaily,setsixtyChineseMillDaily] =useState([])
const[sixtyChineseMillMtd,setsixtyChineseMillMtd] =useState([])


const[sixtyMillDaily,setsixtyMillDaily] =useState([])
const[sixtyMillMtd,setsixtyMillMtd] =useState([])


const[fourtyEightMillDaily,setfourtyEightMillDaily] =useState([])
const[fourtyEightMillMtd,setfourtyEightMillMtd] =useState([])


const[fourtyTwoMillDaily,setfourtyTwoMillDaily] =useState([])
const[fourtyTwoMillMtd,setfourtyTwoMillMtd] =useState([])


const[crackerMillDaily,setcrackerMillDaily] =useState([])
const[crackerMillMtd,setcrackerMillMtd] =useState([])

const[batchOffDaily,setbatchOffDaily] =useState([])
const[batchOffMtd,setbatchOffMtd] =useState([])

const[extruderDaily,setextruderDaily] =useState([])
const[extruderMtd,setextruderMtd] =useState([])



const[shotBlastDaily,setshotBlastDaily] =useState([])
const[shotBlastMtd,setshotBlastMtd] =useState([])




const[shotBlastTwoDaily,setshotBlastTwoDaily] =useState([])
const[shotBlastTwoMtd,setshotBlastTwoMtd] =useState([])



const[kneederDaily,setkneederDaily] =useState([])
const[kneederMtd,setkneederMtd] =useState([])




const[beadDaily,setbeadDaily] =useState([])
const[beadMtd,setbeadMtd] =useState([])




const[press1001Daily,setpress1001Daily] =useState([])
const[press1001yMtd,setpress1001Mtd] =useState([])



const[press651Daily,setpress651Daily] =useState([])
const[press651Mtd,setpress651Mtd] =useState([])


const[press401Daily,setpress401Daily] =useState([])
const[press401Mtd,setpress401Mtd] =useState([])


const[press402Daily,setpress402Daily] =useState([])
const[press402Mtd,setpress402Mtd] =useState([])


const[press101Daily,setpress101Daily] =useState([])
const[press101Mtd,setpress101Mtd] =useState([])


const[press501Daily,setpress501Daily] =useState([])
const[press501Mtd,setpress501Mtd] =useState([])

const[press502Daily,setpress502Daily] =useState([])
const[press502Mtd,setpress502Mtd] =useState([])

const[pressBumpingDaily,setpressBumpingDaily] =useState([])
const[pressBumpingMtd,setpressBumpingMtd] =useState([])




const[loadingPressLineOneDaily,setloadingPressLineOneDaily] =useState([])
const[loadingPressLineOneMtd,setloadingPressLineOneMtd] =useState([])



const[loadingPressLineTwoDaily,setloadingPressLineTwoDaily] =useState([])
const[loadingPressLineTwoMtd,setloadingPressLineTwoMtd] =useState([])




const[loadingPressLineThreeDaily,setloadingPressLineThreeDaily] =useState([])
const[loadingPressLineThreeMtd,setloadingPressLineThreeMtd] =useState([])


const[press303Daily,setpress303Daily] =useState([])
const[press303Mtd,setpress303Mtd] =useState([])


const[press304Daily,setpress304Daily] =useState([])
const[press304Mtd,setpress304Mtd] =useState([])


const[press305Daily,setpress305Daily] =useState([])
const[press305Mtd,setpress305Mtd] =useState([])



const[press306Daily,setpress306Daily] =useState([])
const[press306Mtd,setpress306Mtd] =useState([])



const[press102Daily,setpress102Daily] =useState([])
const[press102Mtd,setpress102Mtd] =useState([])


const[press103Daily,setpress103Daily] =useState([])
const[press103Mtd,setpress103Mtd] =useState([])


const[press104Daily,setpress104Daily] =useState([])
const[press104Mtd,setpress104Mtd] =useState([])


const[press105Daily,setpress105Daily] =useState([])
const[press105Mtd,setpress105Mtd] =useState([])



const[press106Daily,setpress106Daily] =useState([])
const[press106Mtd,setpress106Mtd] =useState([])


const[press151Daily,setpress151Daily] =useState([])
const[press151Mtd,setpress151Mtd] =useState([])


const[press152Daily,setpress152Daily] =useState([])
const[press152Mtd,setpress152Mtd] =useState([])



const[press153Daily,setpress153Daily] =useState([])
const[press153Mtd,setpress153Mtd] =useState([])




const[fiveThoistPress1001Daily,setfiveThoistPress1001Daily] =useState([])
const[fiveThoistPress1001Mtd,setfiveThoistPress1001Mtd] =useState([])


const[fiveThoistPress651Daily,setfiveThoistPress651Daily] =useState([])
const[fiveThoistPress651Mtd,setfiveThoistPress651Mtd] =useState([])



const[threeThoistBummpingPress1Daily,setthreeThoistBummpingPress1Daily] =useState([])
const[threeThoistBummpingPress1Mtd,setthreeThoistBummpingPress1Mtd] =useState([])


const[threeThoistLoadingPress1Daily,setthreeThoistLoadingPress1Daily] =useState([])
const[threeThoistLoadingPress1Mtd,setthreeThoistLoadingPress1Mtd] =useState([])


const[threeThoistLoadingPress21Daily,setthreeThoistLoadingPress2Daily] =useState([])
const[threeThoistLoadingPress2Mtd,setthreeThoistLoadingPress2Mtd] =useState([])


const[threeThoistBattaryPressDaily,setthreeThoistBattaryPressDaily] =useState([])
const[threeThoistBattaryPressMtd,setthreeThoistBattaryPressMtd] =useState([])


const[threeThoistLine3PressDaily,setthreeThoistLine3PressDaily] =useState([])
const[threeThoistLine3PressMtd,setthreeThoistLine3PressMtd] =useState([])


const[threeThoist42MillDaily,setthreeThoist42MillDaily] =useState([])
const[threeThoist42MillMtd,setthreeThoist42MillMtd] =useState([])


const[threeThoist48MillDaily,setthreeThoist48MillDaily] =useState([])
const[threeThoist48MillMtd,setthreeThoist48MillMtd] =useState([])


const[boilerDaily,setboilerDaily] =useState([])
const[boilerMtd,setboilerMtd] =useState([])


const[airCompressor1Daily,setairCompressor1Daily] =useState([])
const[airCompressor1Mtd,setairCompressor1Mtd] =useState([])


const[airCompressor2Daily,setairCompressor2Daily] =useState([])
const[airCompressor2Mtd,setairCompressor2Mtd] =useState([])


const[airCompressor3Daily,setairCompressor3Daily] =useState([])
const[airCompressor3Mtd,setairCompressor3Mtd] =useState([])


const[coolingTower1Daily,setcoolingTower1Daily] =useState([])
const[coolingTower1Mtd,setcoolingTower1Mtd] =useState([])



const[coolingTower2Daily,setcoolingTower2Daily] =useState([])
const[coolingTower2Mtd,setcoolingTower2Mtd] =useState([])



const[mouldTravTrolly1Daily,setmouldTravTrolly1Daily] =useState([])
const[mouldTravTrolly1Mtd,setmouldTravTrolly1Mtd] =useState([])



const[mouldTravTrolly2Daily,setmouldTravTrolly2Daily] =useState([])
const[mouldTravTrolly2Mtd,setmouldTravTrolly2Mtd] =useState([])


const[mouldTravTrolly3Daily,setmouldTravTrolly3Daily] =useState([])
const[mouldTravTrolly3Mtd,setmouldTravTrolly3Mtd] =useState([])



const[mouldTravTrolly4Daily,setmouldTravTrolly4Daily] =useState([])
const[mouldTravTrolly4Mtd,setmouldTravTrolly4Mtd] =useState([])


const[mouldTravTrolly5Daily,setmouldTravTrolly5Daily] =useState([])
const[mouldTravTrolly5Mtd,setmouldTravTrolly5Mtd] =useState([])


const[mouldTravTrolly6Daily,setmouldTravTrolly6Daily] =useState([])
const[mouldTravTrolly6Mtd,setmouldTravTrolly6Mtd] =useState([])


const[mouldTravTrolly7Daily,setmouldTravTrolly7Daily] =useState([])
const[mouldTravTrolly7Mtd,setmouldTravTrolly7Mtd] =useState([])

const[mouldTravTrolly8Daily,setmouldTravTrolly8Daily] =useState([])
const[mouldTravTrolly8Mtd,setmouldTravTrolly8Mtd] =useState([])

const[mouldTravTrolly9Daily,setmouldTravTrolly9Daily] =useState([])
const[mouldTravTrolly9Mtd,setmouldTravTrolly9Mtd] =useState([])

const[allCostDaily,setallCostDaily] =useState([])
const[allCostMtd,setallCostMtd] =useState([])


///take individual data/////////







const fetchData84Mill = async () => {
    
  try {
  
    const response = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/84_mill`);
   
    setEightyFourMillDaily(response.data.data.data)

    const responseTwo = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/84_mill`);
   
    setEightyFourMillMtd(responseTwo.data.data.data)

 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataChineseMill = async () => {
    
  try {
  
      /////////////////////////////

      const response = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/60_chinese_Mill`);
   
      setsixtyChineseMillDaily(response.data.data.data)


/////////////////////////////

   const responseTwo = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/60_chinese_Mill`);
   
   setsixtyChineseMillMtd(responseTwo.data.data.data)





 
      
  } catch (err) {
    console.log(err);
  }
};




///////////////////

const fetchDataSixtyMill = async () => {
    
  try {
  
      /////////////////////////////

      const responseThree = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/60_mill`);
   
setsixtyMillDaily(responseThree.data.data.data)

/////////////////////////////

  



   const responseTwo = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/60_mill`);
  
setsixtyMillMtd(responseTwo.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};



///////////////////

const fetchDataFourtyEightMill = async () => {
    
  try {
  
      /////////////////////////////
      const responseFour = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/48_mill`);
   
      setfourtyEightMillDaily(responseFour.data.data.data)

/////////////////////////////

  



const responseFive = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/48_mill`);
  
setfourtyEightMillMtd(responseFive.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataFourtyTwoMill = async () => {
    
  try {
  
      /////////////////////////////
      const responseFive = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/42_mill`);
   
setfourtyTwoMillDaily(responseFive.data.data.data)

/////////////////////////////

  


const responseFivee = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/42_mill`);
  
setfourtyTwoMillMtd(responseFivee.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataCrackerMill = async () => {
    
  try {
  
      /////////////////////////////
      const responseSix = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Cracker_mill`);
   
setcrackerMillDaily(responseSix.data.data.data)

/////////////////////////////

  



const responseSixx = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Cracker_mill`);
  
setcrackerMillMtd(responseSixx.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataBatchOff = async () => {
    
  try {
  
      /////////////////////////////
      const responseSeven = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Batch_off`);
   
      setbatchOffDaily(responseSeven.data.data.data)
/////////////////////////////

  



const responseSevend = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Batch_off`);
  
setbatchOffMtd(responseSevend.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataExtruder = async () => {
    
  try {
  
      /////////////////////////////
      const responseEight = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Extruder`);
   
      setextruderDaily(responseEight.data.data.data)
      
/////////////////////////////

  



const responseEightt = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Extruder`);
  
setextruderMtd(responseEightt.data.data.data)





 
      
  } catch (err) {
    console.log(err);
  }
};

const fetchDataShotBlast = async () => {
    
  try {
  
      /////////////////////////////
      const responseNine = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Shot_Blasting_Machine_001`);
   
setshotBlastDaily(responseNine.data.data.data)
      
/////////////////////////////

  



const responseNineg = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Shot_Blasting_Machine_001`);
  
setshotBlastMtd(responseNineg.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataShotBlastTwo = async () => {
    
  try {
  
      /////////////////////////////
      const responseTen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Shot_Blasting_Machine_002`);
   
      setshotBlastTwoDaily(responseTen.data.data.data)
      
      
/////////////////////////////

  



const responseTenb = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Shot_Blasting_Machine_002`);
  
setshotBlastTwoMtd(responseTenb.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataKneeder = async () => {
    
  try {
  
      /////////////////////////////
      const responseTwelve = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Kneeder`);
   
      setkneederDaily(responseTwelve.data.data.data)
      
/////////////////////////////

  



const responseTwelvev = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Kneeder`);
  
setkneederMtd(responseTwelvev.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataBead = async () => {
    
  try {
  
      /////////////////////////////
      const responseEleven = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Creel_Bead_Machine`);
   
      setbeadDaily(responseEleven.data.data.data)
      
/////////////////////////////

  


const responseElevenv = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Creel_Bead_Machine`);
  
setbeadMtd(responseElevenv.data.data.data)





 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress1001 = async () => {
    
  try {
  
      /////////////////////////////
      const responseThirteen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_1001`);
   
      setpress1001Daily(responseThirteen.data.data.data)
      
/////////////////////////////

  



const responseThirteenb = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_1001`);
  
setpress1001Mtd(responseThirteenb.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};








const fetchDataPress651 = async () => {
    
  try {
  
      /////////////////////////////
      const responseFourteen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_651`);
   
      setpress651Daily(responseFourteen.data.data.data)
      
/////////////////////////////

  


const responseFourteendd = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_651`);
  
setpress651Mtd(responseFourteendd.data.data.data)





 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress401 = async () => {
    
  try {
  
      /////////////////////////////
      const responseFifteen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_401`);
   
      setpress401Daily(responseFifteen.data.data.data)
/////////////////////////////

  



const responseFifteend = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_401`);
  
setpress401Mtd(responseFifteend.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};




const fetchDataPress402 = async () => {
    
  try {
  
      /////////////////////////////
      const responseSixteen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_402`);
   
      setpress402Daily(responseSixteen.data.data.data)
/////////////////////////////

  



const responseSixteend = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_402`);
  
setpress402Mtd(responseSixteend.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress101 = async () => {
    
  try {
  
      /////////////////////////////
      const responseSeventeen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_101`);
   
setpress101Daily(responseSeventeen.data.data.data)
/////////////////////////////

  



const responseSeventeend = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_101`);
  
setpress101Mtd(responseSeventeend.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress501 = async () => {
    
  try {
  
      /////////////////////////////
     
const responseEighteen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_501`);
   
setpress501Daily(responseEighteen.data.data.data)
/////////////////////////////

  




const responseEighteend = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_501`);
  
setpress501Mtd(responseEighteend.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataPress502 = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseNineteen = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_502`);
   
      setpress502Daily(responseNineteen.data.data.data)
/////////////////////////////

  



const responseNineteend = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_502`);
  
setpress502Mtd(responseNineteend.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPressBumping = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwenty = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Bumping_Press`);
   
setpressBumpingDaily(responseTwenty.data.data.data)
/////////////////////////////

  




const responseTwentyd = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Bumping_Press`);
  
setpressBumpingMtd(responseTwentyd.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataloadingPressLineOne = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyOne = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/L/Un_Loading_press_20T_Line_01`);
   
setloadingPressLineOneDaily(responseTwentyOne.data.data.data)
/////////////////////////////

  



const responseTwentyOned = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/L/Un_Loading_press_20T_Line_01`);
  
setloadingPressLineOneMtd(responseTwentyOned.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};

const fetchDataloadingPressLineTwo = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyTwo = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/L/Un_Loading_press_20T_Line_02`);
   
setloadingPressLineTwoDaily(responseTwentyTwo.data.data.data)
/////////////////////////////

  


const responseTwentyTwod = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/L/Un_Loading_press_20T_Line_02`);
  
setloadingPressLineTwoMtd(responseTwentyTwod.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataloadingPressLineThree = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyThree = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/L/Un_Loading_press_20T_Line_03`);
   
setloadingPressLineThreeDaily(responseTwentyThree.data.data.data)
/////////////////////////////

  



const responseTwentyThreed = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/L/Un_Loading_press_20T_Line_03`);
  
setloadingPressLineThreeMtd(responseTwentyThreed.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress303 = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyFour = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_303`);
   
setpress303Daily(responseTwentyFour.data.data.data)
/////////////////////////////

  


const responseTwentyFourv = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_303`);
  
setpress303Mtd(responseTwentyFourv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress304 = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyFive = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_304`);
   
setpress304Daily(responseTwentyFive.data.data.data)
/////////////////////////////

  



const responseTwentyFivec = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_304`);
  
setpress304Mtd(responseTwentyFivec.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress305 = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentySix = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_305`);
   
      setpress305Daily(responseTwentySix.data.data.data)
/////////////////////////////

  



const responseTwentySixv = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_305`);
  
setpress305Mtd(responseTwentySixv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataPress306 = async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentySeven = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_306`);
   
      setpress306Daily(responseTwentySeven.data.data.data)
/////////////////////////////

  



const responseTwentySevenv = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_306`);
  
setpress306Mtd(responseTwentySevenv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress102= async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyEight = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_102`);
   
setpress102Daily(responseTwentyEight.data.data.data)
/////////////////////////////

  



const responseTwentyEightv = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_102`);
  
setpress102Mtd(responseTwentyEightv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress103= async () => {
    
  try {
  
      /////////////////////////////
     
      const responseTwentyNine = await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_103`);
   
setpress103Daily(responseTwentyNine.data.data.data)
/////////////////////////////

  

const responseTwentyNined = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_103`);
  
setpress103Mtd(responseTwentyNined.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress104= async () => {
    
  try {
  
      /////////////////////////////
     
      const responseThirty= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_104`);
   
      setpress104Daily(responseThirty.data.data.data)
/////////////////////////////

  


const responseThirtyv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_104`);
  
setpress104Mtd(responseThirtyv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress105= async () => {
    
  try {
  
      /////////////////////////////
     
      
const responseThirtyOne= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_105`);
   
setpress105Daily(responseThirtyOne.data.data.data)
/////////////////////////////

  




const responseThirtyOneb= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_105`);
  
setpress105Mtd(responseThirtyOneb.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress106= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtyTwo= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_106`);
   
      setpress106Daily(responseThirtyTwo.data.data.data)
/////////////////////////////

  



const responseThirtyTwov= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_106`);
  
setpress106Mtd(responseThirtyTwov.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};

const fetchDataPress151= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtyThree= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_151`);
   
setpress151Daily(responseThirtyThree.data.data.data)
/////////////////////////////

  



const responseThirtyThreev= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_151`);
  
setpress151Mtd(responseThirtyThreev.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};

const fetchDataPress152= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtyFour= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_152`);
   
setpress152Daily(responseThirtyFour.data.data.data)
/////////////////////////////

  



const responseThirtyFourf= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_152`);
  
setpress152Mtd(responseThirtyFourf.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataPress153= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtyFive= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Curing_press_153`);
   
setpress153Daily(responseThirtyFive.data.data.data)
/////////////////////////////

  



const responseThirtyFivef= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Curing_press_153`);
  
setpress153Mtd(responseThirtyFivef.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDatafiveThoistPress1001= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtySix= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/5T_Hoist`);
   
      setfiveThoistPress1001Daily(responseThirtySix.data.data.data)
/////////////////////////////

  


const responseThirtySixd= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/5T_Hoist`);
  
setfiveThoistPress1001Mtd(responseThirtySixd.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatafiveThoistPress651= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtySeven= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/5T_Hoist_Daesun_Press_651`);
   
setfiveThoistPress651Daily(responseThirtySeven.data.data.data)
/////////////////////////////

  


const responseThirtySevend= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/5T_Hoist_Daesun_Press_651`);
  
setfiveThoistPress651Mtd(responseThirtySevend.data.data.data)





 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatathreeThoistBummpingPress1= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtyEight= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Daesun_Bumping_Press_01`);
   
setthreeThoistBummpingPress1Daily(responseThirtyEight.data.data.data)
/////////////////////////////

  




const responseThirtyEightv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Daesun_Bumping_Press_01`);
  
setthreeThoistBummpingPress1Mtd(responseThirtyEightv.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatathreeThoistLoadingPress1= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseThirtyNine= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Dausun_L/Un_Loading_Press_01`);
   
setthreeThoistLoadingPress1Daily(responseThirtyNine.data.data.data)
/////////////////////////////

  


const responseThirtyNinef= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Dausun_L/Un_Loading_Press_01`);
  
setthreeThoistLoadingPress1Mtd(responseThirtyNinef.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};

const fetchDatathreeThoistLoadingPress2= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourty= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Dausun_L/Un_Loading_Press_02`);
   
setthreeThoistLoadingPress2Daily(responseFourty.data.data.data)
/////////////////////////////

  




const responseFourtyf= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Dausun_L/Un_Loading_Press_02`);
  
setthreeThoistLoadingPress2Mtd(responseFourtyf.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDatathreeThoistBattaryPress= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyOne= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Dausun_L/3T_Hoist_Daesun_Battary_Press`);
   
      setthreeThoistBattaryPressDaily(responseFourtyOne.data.data.data)
/////////////////////////////

  




const responseFourtyOnef= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Dausun_L/3T_Hoist_Daesun_Battary_Press`);
  
setthreeThoistBattaryPressMtd(responseFourtyOnef.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};




const fetchDatathreeThoistLine3Press= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyTwo= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Dausun_L/3T_Hoist_Daesun_Line_03_Press`);
   
      setthreeThoistLine3PressDaily(responseFourtyTwo.data.data.data)
      
/////////////////////////////

  



const responseFourtyTwof= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Dausun_L/3T_Hoist_Daesun_Line_03_Press`);
  
setthreeThoistLine3PressMtd(responseFourtyTwof.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};




const fetchDatathreeThoist42Mill= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyThree= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Daesun_42_Mill`);
   
setthreeThoist42MillDaily(responseFourtyThree.data.data.data)

      
/////////////////////////////

  



const responseFourtyThreev= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Daesun_42_Mill`);
  
setthreeThoist42MillMtd(responseFourtyThreev.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatathreeThoist48Mill= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyFour= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/3T_Hoist_Daesun_48_Mill`);
   
setthreeThoist48MillDaily(responseFourtyFour.data.data.data)

      
/////////////////////////////

  



const responseFourtyFourv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/3T_Hoist_Daesun_48_Mill`);
  
setthreeThoist48MillMtd(responseFourtyFourv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};




const fetchDataBoiler= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyFive= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Boiler_Fire_Wood`);
   
setboilerDaily(responseFourtyFive.data.data.data)

      
/////////////////////////////

  



const responseFourtyFivef= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Boiler_Fire_Wood`);
  
setboilerMtd(responseFourtyFivef.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataairCompressor1= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtySix= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Air_Compressor_001`);
   
      setairCompressor1Daily(responseFourtySix.data.data.data)
      
/////////////////////////////

  



const responseFourtySixv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Air_Compressor_001`);
  
setairCompressor1Mtd(responseFourtySixv.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDataairCompressor2= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtySeven= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Air_Compressor_002`);
   
setairCompressor2Daily(responseFourtySeven.data.data.data)

/////////////////////////////

  



const responseFourtySevenv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Air_Compressor_002`);
  
setairCompressor2Mtd(responseFourtySevenv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDataairCompressor3= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyEight= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Air_Compressor_003`);
   
setairCompressor3Daily(responseFourtyEight.data.data.data)


/////////////////////////////

  



const responseFourtyEightv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Air_Compressor_003`);
  
setairCompressor3Mtd(responseFourtyEightv.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};




const fetchDatacoolingTower1= async () => {
    
  try {
  
      /////////////////////////////
     
      
      const responseFourtyNine= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Cooling_Tower_001`);
   
      setcoolingTower1Daily(responseFourtyNine.data.data.data)


/////////////////////////////

  


const responseFourtyNinev= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Cooling_Tower_001`);
  
setcoolingTower1Mtd(responseFourtyNinev.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDatacoolingTower2= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
const responseFifty= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Cooling_Tower_002`);
   
setcoolingTower2Daily(responseFifty.data.data.data)



/////////////////////////////

  


const responseFiftyx= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Cooling_Tower_002`);
  
setcoolingTower2Mtd(responseFiftyx.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatamouldTravTrolly1= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftyOne= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_01`);
   
      setmouldTravTrolly1Daily(responseFiftyOne.data.data.data)

/////////////////////////////

  



const responseFiftyOnev= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_01`);
  
setmouldTravTrolly1Mtd(responseFiftyOnev.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDatamouldTravTrolly2= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftyTwo= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_02`);
   
      setmouldTravTrolly2Daily(responseFiftyTwo.data.data.data)

/////////////////////////////

  


const responseFiftyTwov= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_02`);
  
setmouldTravTrolly2Mtd(responseFiftyTwov.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatamouldTravTrolly3= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftyThree= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_03`);
   
setmouldTravTrolly3Daily(responseFiftyThree.data.data.data)

/////////////////////////////

  




const responseFiftyThreed= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_03`);
  
setmouldTravTrolly3Mtd(responseFiftyThreed.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatamouldTravTrolly4= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftyFour= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_04`);
   
      setmouldTravTrolly4Daily(responseFiftyFour.data.data.data)
/////////////////////////////

  



const responseFiftyFourv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_04`);
  
setmouldTravTrolly4Mtd(responseFiftyFourv.data.data.data)





 
      
  } catch (err) {
    console.log(err);
  }
};



const fetchDatamouldTravTrolly5= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      
const responseFiftyFive= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_05`);
   
setmouldTravTrolly5Daily(responseFiftyFive.data.data.data)

/////////////////////////////

  



const responseFiftySix= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_05`);
  
setmouldTravTrolly5Mtd(responseFiftySix.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};


const fetchDatamouldTravTrolly6= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftySix= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_06`);
   
      setmouldTravTrolly6Daily(responseFiftySix.data.data.data)

/////////////////////////////

  



const responseFiftySixv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_06`);
  
setmouldTravTrolly6Mtd(responseFiftySixv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};
const fetchDatamouldTravTrolly7= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftySeven= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_07`);
   
setmouldTravTrolly7Daily(responseFiftySeven.data.data.data)

/////////////////////////////

  



const responseFiftySevenv= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_07`);
  
setmouldTravTrolly7Mtd(responseFiftySevenv.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};




const fetchDatamouldTravTrolly8= async () => {
    
  try {
  
      /////////////////////////////
     
      
      
      const responseFiftyEight= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_08`);
   
setmouldTravTrolly8Daily(responseFiftyEight.data.data.data)
/////////////////////////////

  



const responseFiftyEights= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_08`);
  
setmouldTravTrolly8Mtd(responseFiftyEights.data.data.data)



 
      
  } catch (err) {
    console.log(err);
  }
};





const fetchDatamouldTravTrolly9= async () => {
    
  try {
  
      /////////////////////////////
    
      const responseFiftyNine= await api.get(`/machinecost/cost/${parmDate}/${parmDate}/Mould_Traviling_trolly_No_1_Line_09`);
   
      setmouldTravTrolly9Daily(responseFiftyNine.data.data.data)
/////////////////////////////

  


const responseFiftyNinef= await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}/Mould_Traviling_trolly_No_1_Line_09`);
  
setmouldTravTrolly9Mtd(responseFiftyNinef.data.data.data)




 
      
  } catch (err) {
    console.log(err);
  }
};













/////////////machine data mtd/////////////





///////////////////


const fetchDataTotal = async () => {
    
  try {
  
//       ///////////////////////////////hr


     const responseone = await api.get(`/machinecost/cost/${parmDate}/${parmDate}`);

     setallCostDaily(responseone.data.data.data)



     const responseTwo = await api.get(`/machinecost/cost/${paramDateOne}/${parmDate}`);

     setallCostMtd(responseTwo.data.data.data)
     

 
      
  } catch (err) {
    console.log(err);
  }
};


useEffect(() => {
  
  fetchData84Mill()
  fetchDataChineseMill()
  fetchDataSixtyMill()
  fetchDataFourtyEightMill()
  fetchDataTotal()

}, [parmDate]);
































// console.log(eightyFourMillMtd);




///////////reducer///////////////




let initialValue =0


////////////////////////////////// daily-84mill////////////

let eightyFourMillPmCostDaily =eightyFourMillDaily && eightyFourMillDaily.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let eightyFourMillBdCostDaily =eightyFourMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let eightyFourMillProCostDaily =eightyFourMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)


console.log(eightyFourMillDaily);
////////////////////////////////// mtd-84mill////////////

let eightyFourMillPmCostMtd =eightyFourMillMtd && eightyFourMillMtd.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let eightyFourMillBdCostMtd =eightyFourMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let eightyFourMillProCostMtd =eightyFourMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)

////////////////////////////////// daily-chinese 60 mill////////////

let chinese60MillPmCostDaily =sixtyChineseMillDaily && sixtyChineseMillDaily.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let chinese60MillBdCostDaily =sixtyChineseMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let chinese60MillProCostDaily =sixtyChineseMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)


console.log(eightyFourMillDaily);
////////////////////////////////// mtd-60chinse mill////////////

let chinese60MillPmCostMtd =sixtyChineseMillMtd && sixtyChineseMillMtd.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let chinese60MillBdCostMtd =sixtyChineseMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let chinese60MillProCostMtd =sixtyChineseMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)




///////sixtyMillDaily


////////////////////////////////// daily- 60 mill////////////

let sixtyMillPmCostDaily =sixtyMillDaily && sixtyMillDaily.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let sixtyMillBdCostDaily =sixtyMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let sixtyMillProCostDaily =sixtyMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)


console.log(eightyFourMillDaily);
////////////////////////////////// mtd-60chinse mill////////////

let sixtyMillPmCostMtd =sixtyMillMtd && sixtyMillMtd.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let sixtyMillBdCostMtd =sixtyMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let sixtyMillProCostMtd =sixtyMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)




////////////////////fourtyEightMillDaily///////////////////


////////////////////////////////// daily- 60 mill////////////

let fourtyEightMillPmCostDaily =fourtyEightMillDaily && fourtyEightMillDaily.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let fourtyEightMillBdCostDaily =fourtyEightMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let fourtyEightMillProCostDaily =fourtyEightMillDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)



////////////////////////////////// mtd-60chinse mill////////////

let fourtyEightMillPmCostMtd =fourtyEightMillMtd && fourtyEightMillMtd.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let fourtyEightMillBdCostMtd =fourtyEightMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let fourtyEightMillProCostMtd =fourtyEightMillMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)







/////////total////////////


////////////////////////////////// all////////////

let allPmCostDaily =allCostDaily && allCostDaily.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let allBdCostDaily =allCostDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let allProCostDaily =allCostDaily.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)



////////////////////////////////// all////////////

let allPmCostMtd =allCostMtd && allCostMtd.reduce((acc,curr)=>
  acc+parseInt(curr.pm_cost)

,initialValue)

let allBdCostMtd =allCostMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.bd_cost)
}
,initialValue)


let allProCostMtd =allCostMtd.reduce((acc,curr)=>{
  return acc+parseInt(curr.pro_cost)
}
,initialValue)


// let initialalue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
//     (accumulator, currentValue) => accumulator + currentValue.x
//     , initialalue
// )

// console.log(sum)















































//////////////////useeffect///////////////







const classes = useStyles();





  function FormRowThree() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MachineCost machineName={'84" mill'}  pmCostDaily={eightyFourMillPmCostDaily}  bdCostDaily={eightyFourMillBdCostDaily}  proCostDaily={eightyFourMillProCostDaily}
          pmCostMtd={eightyFourMillPmCostMtd}  bdCostMtd={eightyFourMillBdCostMtd}  proCostMtd={eightyFourMillProCostMtd} allpmCostDaily={allPmCostDaily}  allbdCostDaily={allBdCostDaily}  allproCostDaily={allProCostDaily}
          allpmCostMtd={allPmCostMtd}  allbdCostMtd={allBdCostMtd}  allproCostMtd={allProCostMtd}
          
          
          /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MachineCost machineName={'china mill'}  pmCostDaily={chinese60MillPmCostDaily}  bdCostDaily={chinese60MillBdCostDaily}  proCostDaily={chinese60MillProCostDaily}
          pmCostMtd={chinese60MillPmCostMtd}  bdCostMtd={chinese60MillBdCostMtd}  proCostMtd={chinese60MillProCostMtd} allpmCostDaily={allPmCostDaily}  allbdCostDaily={allBdCostDaily}  allproCostDaily={allProCostDaily}
          allpmCostMtd={allPmCostMtd}  allbdCostMtd={allBdCostMtd}  allproCostMtd={allProCostMtd}
          
          
          /></Paper>
        </Grid>
        
        
      </React.Fragment>
    );
  }

  function FormRowOne() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MachineCostTotal machineName={'All Machines'}  pmCostDaily={allPmCostDaily}  bdCostDaily={allBdCostDaily}  proCostDaily={allProCostDaily}
          pmCostMtd={allPmCostMtd}  bdCostMtd={allBdCostMtd}  proCostMtd={allProCostMtd}/></Paper>
        </Grid>
       
        
        
      </React.Fragment>
    );
  }


  function FormRowTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MachineCost machineName={'60" mill'}  pmCostDaily={sixtyMillPmCostDaily}  bdCostDaily={sixtyMillBdCostDaily}  proCostDaily={sixtyMillBdCostDaily}
          pmCostMtd={sixtyMillPmCostMtd}  bdCostMtd={sixtyMillBdCostMtd}  proCostMtd={sixtyMillProCostMtd}  allpmCostDaily={allPmCostDaily}  allbdCostDaily={allBdCostDaily}  allproCostDaily={allProCostDaily}
          allpmCostMtd={allPmCostMtd}  allbdCostMtd={allBdCostMtd}  allproCostMtd={allProCostMtd}
          
          /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MachineCost machineName={'48  mill'}  pmCostDaily={fourtyEightMillPmCostDaily}  bdCostDaily={fourtyEightMillBdCostDaily}  proCostDaily={fourtyEightMillProCostDaily}
          pmCostMtd={fourtyEightMillPmCostMtd}  bdCostMtd={fourtyEightMillBdCostMtd}  proCostMtd={fourtyEightMillProCostMtd} allpmCostDaily={allPmCostDaily}  allbdCostDaily={allBdCostDaily}  allproCostDaily={allProCostDaily}
          allpmCostMtd={allPmCostMtd}  allbdCostMtd={allBdCostMtd}  allproCostMtd={allProCostMtd}
          
          
          /></Paper>
        </Grid>
        
        
      </React.Fragment>
    );
  }

























  // function FormRowTwo() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={6}>
  //         <Paper className={classes.paper}><MachineCost/></Paper>
  //       </Grid>
  //       <Grid item xs={6}>
  //         <Paper className={classes.paper}><MachineCost/></Paper>
  //       </Grid>
        
        
  //     </React.Fragment>
  //   );
  // }


  return (
    <div className={classes.root}>
     <Typography variant="h1" component="h2" className={classes.hOne}>
  MACHINE COST CONTRIBUTION
</Typography>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRowOne />
        </Grid>
       
        <Grid container item xs={12} spacing={3}>
          <FormRowThree />
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <FormRowTwo />
        </Grid>
       
      </Grid>
    </div>
  );
};

export default SettingsView;
