import React, { useEffect, useState,useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GaugeChart from './lib'
import GaugeChartTwo from './libTwo'
import {reportContext} from '../context/ContextProvider'
import apiThree from '../../src/api/apiThree';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './meter.css'
const MeterDash = () => {



  const {productionDashData,setProductionDashData,medate,setMeDdate,setMfgData,qualityDashData,setQualityDashData,productionDashActual,setProductionDashActual,productionDashPlan,setProductionDashPlan,productionDashAdherence,setProductionDashAdherence,productionDashUtilization,setProductionDashUtilization,productionDashProductivity,setProductionDashProductivity,
    qualityDashFtr,setQualityDashFtr,qualityDashBerlc,setQualityDashBerlc,qualityDashB,setQualityDashB,qualityDashE,setQualityDashE,qualityR,setQualityR,qualityL,setQualityL,qualityC,setQualityC,qualityDashFlash,setQualityDashFlash,qualityDashRejectCompound,setQualityDashRejectCompound,qualityDashHold,setQualityDashHold,
    mixingDashTonnage,setMixingDashTonnage,mixingDashTonnagePlan,setMixingDashTonnagePlan,mixingDashProductivity,setMixingDashProductivity,mixingDashBreakDown,setMixingDashBreakDown,mixingDashEnergy,setMixingDashEnergy,beadDashEnergy,setBeadDashEnergy,
    beadDashBead,setBeadDashBead,beadDashBeadPlan,setBeadDashBeadPlan,beadDashRejectBead,setBeadDashRejectBead,beadDashBreakDown,setBeadDashBreakDown,
    hrDashNearMiss,setHRDashNearMis,hrDashKaizen,setHRDashKaizen,hrDashNRC,setHRDashNRC,hrDashRA,setHRDashRA,hrDashdOT,setHRDashDot,hrDashAI,setHRDashAI,hrDashANI,setHRDashANI,
    engDashBreakDown,setENGDashBreakDown,engDashFuelRate,setENGDashFuelRate,engDashFuelConsumption,setENGDashFuelConsumption,engDashEnergyCostRate,setENGDashEnergyCostRate,engDashPowerConsumption,setENGDashPowerConsumption,qualityDashNM,setQualityDashNM,setHRDashManpower,hrDashManpower,kpi,dispatch} =useContext(reportContext)


  

  


  var newd =  new Date(medate);
  let monthNumber = newd.getMonth() + 1;                                       
  let yearNumber = newd.getFullYear() ;
  let dateNumber = newd.getDate();
  
  var parmDate =yearNumber +'-'+monthNumber +'-'+ dateNumber
  
  
  
  // Add a day
  
  
  // const a =[{total:'0'},{value:'7'}]
  
  
  // console.log(a[1].value);
  
  const pa ='plan_adherence'
  
  const pb ='production_data'
  //////////////////////////////
  const qa ='berlc'
  
  const qb ='quality_data'

////////production////////////
  const pda ='actual_weight'
  const pdpl ='plan_weight'

  const pdadherence='plan_adherence'

  const pdu ='plant_utilization'

  const qdflash ='flash'

  const qdb ='b'

  const qdr ='r'

  const qdberlc ='berlc'

  const mb ='mixing_data'
  
  const mdwa = 'compound_weight_actual'

  const mdwp = 'compound_weight_plan'


  const eb ='eng_data'
  
  const edeck ='energy_cost_kg'

  const edb = 'break_down'
  
  const edfcr ='firewood_cost_rate'



  const hb ='hr_data'
  
  const hdai ='absent_inform'

  const hdani ='absent_non_inform'



  const bb ='bead_data'
  
  const bdcba= 'creel_bead_actual'
  const bdcbp= 'creel_bead_plan'





  const fetchData = async () => {
    
    try {
      
  



      /////////////////////////////

      const responsePone = await apiThree.get(`/dashboard/${pda}/${pb}/${parmDate}`); 
  
      setProductionDashActual(responsePone.data.data.data.actual_weight);


      const responsePtwo = await apiThree.get(`/dashboard/${pdpl}/${pb}/${parmDate}`);
  
      setProductionDashPlan(responsePtwo.data.data.data.plan_weight);


      const responsePthree = await apiThree.get(`/dashboard/${pdadherence}/${pb}/${parmDate}`);
         setProductionDashAdherence(responsePthree.data.data.data.plan_adherence);


      


//       ///////////////////////////////////////////////////Qulaity


//       const responseQone = await apiThree.get(`/dashboard/${qdflash}/${qb}/${parmDate}`);
  
//       setQualityDashFlash(responseQone.data.data.data.flash);


//       const responseQtwo = await apiThree.get(`/dashboard/${qdftr}/${qb}/${parmDate}`);
  
//        setQualityDashFtr(responseQtwo.data.data.data.ftr)


//        const responseQthree = await apiThree.get(`/dashboard/${qdb}/${qb}/${parmDate}`);
  
//        setQualityDashB(responseQthree.data.data.data.b)


//       const responseQfour = await apiThree.get(`/dashboard/${qde}/${qb}/${parmDate}`);
  
//       setQualityDashE(responseQfour.data.data.data.ea)


//      const responseQfive = await apiThree.get(`/dashboard/${qdr}/${qb}/${parmDate}`);
  
//        setQualityR(responseQfive.data.data.data.r)

//        const responseQsix = await apiThree.get(`/dashboard/${qdl}/${qb}/${parmDate}`);
  
//        setQualityL(responseQsix.data.data.data.l)


//        const responseQseven = await apiThree.get(`/dashboard/${qdc}/${qb}/${parmDate}`);
  
//      setQualityC(responseQseven.data.data.data.c)


//       const responseQeight = await apiThree.get(`/dashboard/${qdnm}/${qb}/${parmDate}`);
  
//       setQualityDashNM(responseQeight.data.data.data.nm_dirty_tires)


//        const responseQnine = await apiThree.get(`/dashboard/${qdberlc}/${qb}/${parmDate}`);
  
//       setQualityDashBerlc(responseQnine.data.data.data.berlc)



// // //////Mixing////////////////
//  const responseMone = await apiThree.get(`/dashboard/${mdwa}/${mb}/${parmDate}`);
  
//        setMixingDashTonnage(responseMone.data.data.data.compound_weight_actual)


//       const responseMtwo = await apiThree.get(`/dashboard/${mdwp}/${mb}/${parmDate}`);
  
//       setMixingDashTonnagePlan(responseMtwo.data.data.data.compound_weight_plan)


//       const responseMthree = await apiThree.get(`/dashboard/${mdbd}/${mb}/${parmDate}`);
  
//      setMixingDashBreakDown(responseMthree.data.data.data.mixing_break_down)

//       const responseMfour = await apiThree.get(`/dashboard/${mdp}/${mb}/${parmDate}`);
  
//        setMixingDashProductivity(responseMfour.data.data.data.mixing_productivity)


//        const responseMfive = await apiThree.get(`/dashboard/${mde}/${mb}/${parmDate}`);
  
//        setMixingDashEnergy(responseMfive.data.data.data.mixing_energy)


// // /////////////////////////////eng///////////////////


//  const responseEone = await apiThree.get(`/dashboard/${edeck}/${eb}/${parmDate}`);
  
//        setENGDashEnergyCostRate(responseEone.data.data.data.energy_cost_kg)


//        const responseEtwo= await apiThree.get(`/dashboard/${edec}/${eb}/${parmDate}`);
  
//        setENGDashPowerConsumption(responseEtwo.data.data.data.energy_consumed)

//        const responseEthree = await apiThree.get(`/dashboard/${edb}/${eb}/${parmDate}`);
  
//        setENGDashBreakDown(responseEthree.data.data.data.break_down)


//        const responseEfive = await apiThree.get(`/dashboard/${edfcr}/${eb}/${parmDate}`);
  
//       setENGDashFuelRate(responseEfive.data.data.data.firewood_cost_rate)

     
// console.log(engDashFuelRate);
// //       ///////////////////////////////hr


//        const responseHone = await apiThree.get(`/dashboard/${hdai}/${hb}/${parmDate}`);
  
//        setHRDashAI(responseHone.data.data.data.absent_inform)


//        const responseHtwo = await apiThree.get(`/dashboard/${hdani}/${hb}/${parmDate}`);
  
//       setHRDashANI(responseHtwo.data.data.data.absent_non_inform)



//        const responseHthree = await apiThree.get(`/dashboard/${hddot}/${hb}/${parmDate}`);
  
//        setHRDashDot(responseHthree.data.data.data.dot)


//        const responseHfour = await apiThree.get(`/dashboard/${hdra}/${hb}/${parmDate}`);
  
//        setHRDashRA(responseHfour.data.data.data.reportable_accident)


//        const responseHfive = await apiThree.get(`/dashboard/${hdnra}/${hb}/${parmDate}`);
  
//        setHRDashNRC(responseHfive.data.data.data.non_reportable_accident)



//        const responseHsix = await apiThree.get(`/dashboard/${hdnm}/${hb}/${parmDate}`);
  
//        setHRDashNearMis(responseHsix.data.data.data.near_miss)


//       const responseHseven = await apiThree.get(`/dashboard/${hdk}/${hb}/${parmDate}`);
  
//       setHRDashKaizen(responseHseven.data.data.data.kaizen)

//       const responseHeight = await apiThree.get(`/dashboard/${hdm}/${hb}/${parmDate}`);
  
//       setHRDashManpower(responseHeight.data.data.data.man_power)

// //       /////////////////////BEAD


//       const responseBone = await apiThree.get(`/dashboard/${bdcba}/${bb}/${parmDate}`);
  
//       setBeadDashBead(responseBone.data.data.data.creel_bead_actual)


//        const responseBtwo = await apiThree.get(`/dashboard/${bdcbp}/${bb}/${parmDate}`);
  
//       setBeadDashBeadPlan(responseBtwo.data.data.data.creel_bead_plan)

//        const responseBthree= await apiThree.get(`/dashboard/${bdrb}/${bb}/${parmDate}`);
  
//       setBeadDashRejectBead(responseBthree.data.data.data.reject_bead)

//        const responseBfour= await apiThree.get(`/dashboard/${bdbd}/${bb}/${parmDate}`);
  
//        setBeadDashBreakDown(responseBfour.data.data.data.bead_breakdown)

      
// //       /////////////////HOLD///////////


//        const responseHoone= await apiThree.get(`/dashboard/${hdhc}/${hob}/${parmDate}`);
  
//        setQualityDashHold(responseHoone.data.data.data.hold_compound)

//        const responseHotwo= await apiThree.get(`/dashboard/${hdrc}/${hob}/${parmDate}`);
  
//        setQualityDashRejectCompound(responseHotwo.data.data.data.reject_compound)


// console.log(responseHone);
   
        
    } catch (err) {
      console.log(err);
    }
  };





  const fetchDataQuality = async () => {
  
    try {



//       ///////////////////////////////////////////////////Qulaity


      const responseQone = await apiThree.get(`/dashboard/${qdflash}/${qb}/${parmDate}`);
  
      setQualityDashFlash(responseQone.data.data.data.flash);


      // const responseQtwo = await apiThree.get(`/dashboard/${qdftr}/${qb}/${parmDate}`);
  
      //  setQualityDashFtr(responseQtwo.data.data.data.ftr)

       const responseQnine = await apiThree.get(`/dashboard/${qdberlc}/${qb}/${parmDate}`);
  
       setQualityDashBerlc(responseQnine.data.data.data.berlc)


       const responseQthree = await apiThree.get(`/dashboard/${qdb}/${qb}/${parmDate}`);
  
       setQualityDashB(responseQthree.data.data.data.b)


      // const responseQfour = await apiThree.get(`/dashboard/${qde}/${qb}/${parmDate}`);
  
      // setQualityDashE(responseQfour.data.data.data.ea)


     const responseQfive = await apiThree.get(`/dashboard/${qdr}/${qb}/${parmDate}`);
  
       setQualityR(responseQfive.data.data.data.r)

      //  const responseQsix = await apiThree.get(`/dashboard/${qdl}/${qb}/${parmDate}`);
  
      //  setQualityL(responseQsix.data.data.data.l)


    //    const responseQseven = await apiThree.get(`/dashboard/${qdc}/${qb}/${parmDate}`);
  
    //  setQualityC(responseQseven.data.data.data.c)


      // const responseQeight = await apiThree.get(`/dashboard/${qdnm}/${qb}/${parmDate}`);
  
      // setQualityDashNM(responseQeight.data.data.data.nm_dirty_tires)


     


   
        
    } catch (err) {
      console.log(err);
    }
  };






  const fetchDataMixing = async () => {
  
    try {
      
  



// //////Mixing////////////////
 const responseMone = await apiThree.get(`/dashboard/${mdwa}/${mb}/${parmDate}`);
  
       setMixingDashTonnage(responseMone.data.data.data.compound_weight_actual)


      const responseMtwo = await apiThree.get(`/dashboard/${mdwp}/${mb}/${parmDate}`);
  
      setMixingDashTonnagePlan(responseMtwo.data.data.data.compound_weight_plan)


    //   const responseMthree = await apiThree.get(`/dashboard/${mdbd}/${mb}/${parmDate}`);
  
    //  setMixingDashBreakDown(responseMthree.data.data.data.mixing_break_down)

    //   const responseMfour = await apiThree.get(`/dashboard/${mdp}/${mb}/${parmDate}`);
  
    //    setMixingDashProductivity(responseMfour.data.data.data.mixing_productivity)


    //    const responseMfive = await apiThree.get(`/dashboard/${mde}/${mb}/${parmDate}`);
  
    //    setMixingDashEnergy(responseMfive.data.data.data.mixing_energy)



   
        
    } catch (err) {
      console.log(err);
    }
  };






  const fetchDataEng = async () => {
  
    try {

// /////////////////////////////eng///////////////////


 const responseEone = await apiThree.get(`/dashboard/${edeck}/${eb}/${parmDate}`);
  
       setENGDashEnergyCostRate(responseEone.data.data.data.energy_cost_kg)


      //  const responseEtwo= await apiThree.get(`/dashboard/${edec}/${eb}/${parmDate}`);
  
      //  setENGDashPowerConsumption(responseEtwo.data.data.data.energy_consumed)

       const responseEthree = await apiThree.get(`/dashboard/${edb}/${eb}/${parmDate}`);
  
       setENGDashBreakDown(responseEthree.data.data.data.break_down)


       const responseEfive = await apiThree.get(`/dashboard/${edfcr}/${eb}/${parmDate}`);
  
      setENGDashFuelRate(responseEfive.data.data.data.firewood_cost_rate)

        
    } catch (err) {
      console.log(err);
    }
  };


  const fetchDataHold = async () => {
  
    try {

      
//       /////////////////HOLD///////////


//        const responseHoone= await apiThree.get(`/dashboard/${hdhc}/${hob}/${parmDate}`);
  
//        setQualityDashHold(responseHoone.data.data.data.hold_compound)

//        const responseHotwo= await apiThree.get(`/dashboard/${hdrc}/${hob}/${parmDate}`);
  
//        setQualityDashRejectCompound(responseHotwo.data.data.data.reject_compound)

// console.log(qualityDashHold);

   
        
    } catch (err) {
      console.log(err);
    }
  };











  const fetchDataBead = async () => {
  
    try {
      
  



   

//       /////////////////////BEAD


      const responseBone = await apiThree.get(`/dashboard/${bdcba}/${bb}/${parmDate}`);
  
      setBeadDashBead(responseBone.data.data.data.creel_bead_actual)


       const responseBtwo = await apiThree.get(`/dashboard/${bdcbp}/${bb}/${parmDate}`);
  
      setBeadDashBeadPlan(responseBtwo.data.data.data.creel_bead_plan)

      //  const responseBthree= await apiThree.get(`/dashboard/${bdrb}/${bb}/${parmDate}`);
  
      // setBeadDashRejectBead(responseBthree.data.data.data.reject_bead)

      //  const responseBfour= await apiThree.get(`/dashboard/${bdbd}/${bb}/${parmDate}`);
  
      //  setBeadDashBreakDown(responseBfour.data.data.data.bead_breakdown)

      




   
        
    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataHr = async () => {
  
    try {
    
//       ///////////////////////////////hr


       const responseHone = await apiThree.get(`/dashboard/${hdai}/${hb}/${parmDate}`);
  
       setHRDashAI(responseHone.data.data.data.absent_inform)


       const responseHtwo = await apiThree.get(`/dashboard/${hdani}/${hb}/${parmDate}`);
  
      setHRDashANI(responseHtwo.data.data.data.absent_non_inform)



      //  const responseHthree = await apiThree.get(`/dashboard/${hddot}/${hb}/${parmDate}`);
  
      //  setHRDashDot(responseHthree.data.data.data.dot)


      //  const responseHfour = await apiThree.get(`/dashboard/${hdra}/${hb}/${parmDate}`);
  
      //  setHRDashRA(responseHfour.data.data.data.reportable_accident)


      //  const responseHfive = await apiThree.get(`/dashboard/${hdnra}/${hb}/${parmDate}`);
  
      //  setHRDashNRC(responseHfive.data.data.data.non_reportable_accident)



      //  const responseHsix = await apiThree.get(`/dashboard/${hdnm}/${hb}/${parmDate}`);
  
      //  setHRDashNearMis(responseHsix.data.data.data.near_miss)


      // const responseHseven = await apiThree.get(`/dashboard/${hdk}/${hb}/${parmDate}`);
  
      // setHRDashKaizen(responseHseven.data.data.data.kaizen)

      // const responseHeight = await apiThree.get(`/dashboard/${hdm}/${hb}/${parmDate}`);
  
      // setHRDashManpower(responseHeight.data.data.data.man_power)

      //   console.log(responseHeight.data.data.data);



   
        
    } catch (err) {
      console.log(err);
    }
  };






  const accident =()=> {
    

    if ((hrDashNRC+ hrDashRA)==0) {
      return 0;
    } else if ((hrDashNRC+ hrDashRA)==1) {
      return 0.25;
    }

    else if ((hrDashNRC+ hrDashRA)==2) {
      return 0.5;
    }
    else if ((hrDashNRC+ hrDashRA)==3) {
      return 0.75;
    }
    else if ((hrDashNRC+ hrDashRA)==4) {
      return 0.1;
    }
    else  { 
      return 0;
    }
  }



////////////////////////////////


const absent =()=> {
    

  if ((hrDashAI+ hrDashANI)==0) {
    return 0;
  } else if ((hrDashAI+ hrDashANI)==1) {
    return 0.25;
  }

  else if ((hrDashAI+ hrDashANI)==2) {
    return 0.5;
  }
  else if ((hrDashAI+ hrDashANI)==3) {
    return 0.75;
  }
  else if ((hrDashAI+ hrDashANI)==4) {
    return 1;
  }
  else  { 
    return 1;
  }
}


  useEffect(() => {
    fetchData();
    fetchDataQuality();
    fetchDataMixing();
    fetchDataEng();
    fetchDataBead();
    fetchDataHr();
    fetchDataHold();
    accident()
    absent()

  }, [parmDate,pda,pdadherence,qdflash,mdwa,edeck,bdcba]);









  const [currentPercent, setCurrentPercent] = useState();
  const [arcs, setArcs] = useState([0.5, 0.3, 0.2])




// let a 



// if(productionDashAdherence>=0){

//   return (a = productionDashAdherence/100)
// }
























  

	useEffect(() => {
		const timer = setTimeout(() => {
      setCurrentPercent(Math.random());
      setArcs([0.1, 0.5, 0.4])
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	});


	const chartStyle = {
		height: 250,
	}











 

























  return (
   
      <div style={{backgroundColor:'#282c34'}}>
        <Row style={{marginBottom:'0px'}}>
          <Col xs={12} lg={9} md={10}>
            <h1 className='mt-1 mb-0 mr-5 meter'  style={{textAlign:'center',marginLeft:"0%"}}>Key Plant Objective </h1>
          </Col>
          <Col xs={12} lg={3} md={2}>
            <div className='mt-3 mb-5 mr-5'>
          <DatePicker  onChange={(e) => {
            setMeDdate(e);
          }}
          selected={medate}
          className="select"
          dateFormat="dd MMM yyyy" relativeSize={true} 
          
          style={{Color:'red'}}/></div>

          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={3} >
            <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary">Plan Adherence</span></h4>
            <GaugeChart
							style={chartStyle}
							nrOfLevels={20}
							percent={productionDashAdherence/100}
              needleColor="#345243"
              fontSize="12px"
              
						/>
      
            <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-120px',left:'80px',maxWidth:'150px'}}  >Actual Weight = {productionDashActual}</div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-120px',left:'80px',maxWidth:'150px'}} >Plan  Weight = {productionDashPlan}</div>
          </Col>
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary">Accident</span></h4>
            <GaugeChartTwo
							style={chartStyle}
							nrOfLevels={20}
							percent={accident()}
              needleColor="#345243"
              fontSize="12px"
						/>
            <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-120px',left:'80px',maxWidth:'150px'}}  >RA = {hrDashRA}</div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-120px',left:'80px',maxWidth:'150px'}} >NRA = {hrDashNRC} </div>
          </Col>
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary">BERLC</span></h4>
          <GaugeChartTwo
              id="gauge-chart6"
							style={chartStyle}
              animate={false}
              nrOfLevels={15}
              percent={qualityDashBerlc}
              needleColor="#345243"
            />
            <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-159px',left:'80px',maxWidth:'150px'}}  >B = {qualityDashB}%</div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-159px',left:'80px',maxWidth:'150px'}} >R = {qualityR}%</div>
          </Col>
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary">Absent</span></h4>
            <GaugeChartTwo
							id="gauge-chart4"
							style={chartStyle}
							nrOfLevels={10}
							arcPadding={0.1}
							cornerRadius={3}
							percent={absent()}
						/>
             <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-129px',left:'80px',maxWidth:'150px'}}  >AI ={hrDashAI} </div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-129px',left:'80px',maxWidth:'150px'}} >ANI = {hrDashANI}</div>
          </Col>
        </Row>
        <Row>
          
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge bd badge-secondary">Mixing Adherence</span></h4>
          <div className='under'>
          <GaugeChart
              id="gauge-chart6"
							style={chartStyle}
              animate={false}
              nrOfLevels={15}
              percent={ mixingDashTonnage/mixingDashTonnagePlan}
              needleColor="#345243"
            /></div>
             <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-250px',left:'65px',maxWidth:'190px'}}  >Mixing Weight Actual ={mixingDashTonnage} </div>
          <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-250px',left:'65px',maxWidth:'190px'}} >Mixing Weight Plan = {mixingDashTonnagePlan}</div>
           </Col>
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary" style={{textAlign:'center' ,color:'white',position:'relative',top:'-100px',left:'0px',maxWidth:'150px'}}> Bead Adherence</span></h4>

          <div className='under'>
            <GaugeChart
              id="gauge-chart1"
							style={chartStyle}
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
             
              percent={beadDashBead/beadDashBeadPlan}
              arcPadding={0.02}
            /></div>
            <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-210px',left:'80px',maxWidth:'150px'}}  >Actual ={beadDashBead} </div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-210px',left:'80px',maxWidth:'150px'}} >Plan = {beadDashBeadPlan} </div>
          </Col>
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary" style={{textAlign:'center' ,color:'white',position:'relative',top:'-100px',left:'0px',maxWidth:'150px'}}>Break Down</span></h4>

          <div className='under'>
            <GaugeChartTwo
              id="gauge-chart5"
							style={chartStyle}
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={engDashBreakDown/6.67}
              arcPadding={0.02}
            /></div>
             <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-210px',left:'80px',maxWidth:'150px'}}  >Energy Rate ={engDashEnergyCostRate} </div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-210px',left:'80px',maxWidth:'150px'}} >Fuel Rate = {engDashFuelRate} </div>
          </Col>
          <Col xs={12} lg={3}>
          <h4 style={{textAlign:'center' ,color:'white'}}><span className="badge badge-secondary" style={{textAlign:'center' ,color:'white',position:'relative',top:'-100px',left:'0px',maxWidth:'150px'}}>Planning</span></h4>
          <div className='under'>
          <GaugeChart
              id="gauge-chart2"
							style={chartStyle}
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
             
              percent={0.9}
              arcPadding={0.02}
            /></div>
            <div className="badge badge-secondary d-block mb-1" style={{textAlign:'center' ,color:'white',position:'relative',top:'-210px',left:'80px',maxWidth:'150px'}}  >Actual = </div>
            <div className="badge badge-secondary d-block" style={{textAlign:'center' ,color:'white',position:'relative',top:'-210px',left:'80px',maxWidth:'150px'}} >Plan = </div>
          </Col>
        </Row>
        <Row>
          
          
         
        </Row>
				<Row>
         
          
        </Row>
        <Row>
         
        </Row>          
      </div>
   
  )
};

export default MeterDash
