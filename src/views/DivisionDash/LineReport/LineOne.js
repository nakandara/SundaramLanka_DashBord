import React,{useContext, useState} from 'react'
import './line.css'
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import moment from 'moment'
import {reportContext} from '../../../context/ContextProvider'
import api from '../../../../src/api/api'
import Page from 'src/components/Page';



const LineOne = () => {
   const {productionDashData,setProductionDashData,ddate,setMfgData,qualityDashData,setQualityDashData,productionDashActual,setProductionDashActual,productionDashPlan,setProductionDashPlan,productionDashAdherence,setProductionDashAdherence,productionDashUtilization,setProductionDashUtilization,productionDashProductivity,setProductionDashProductivity,
      qualityDashFtr,setQualityDashFtr,qualityDashBerlc,setQualityDashBerlc,qualityDashB,setQualityDashB,qualityDashE,setQualityDashE,qualityR,setQualityR,qualityL,setQualityL,qualityC,setQualityC,qualityDashFlash,setQualityDashFlash,qualityDashRejectCompound,setQualityDashRejectCompound,qualityDashHold,setQualityDashHold,
      mixingDashTonnage,setMixingDashTonnage,mixingDashTonnagePlan,setMixingDashTonnagePlan,mixingDashProductivity,setMixingDashProductivity,mixingDashBreakDown,setMixingDashBreakDown,mixingDashEnergy,setMixingDashEnergy,beadDashEnergy,setBeadDashEnergy,
      beadDashBead,setBeadDashBead,beadDashBeadPlan,setBeadDashBeadPlan,beadDashRejectBead,setBeadDashRejectBead,beadDashBreakDown,setBeadDashBreakDown,
      hrDashNearMiss,setHRDashNearMis,hrDashKaizen,setHRDashKaizen,hrDashNRC,setHRDashNRC,hrDashRA,setHRDashRA,hrDashdOT,setHRDashDot,hrDashAI,setHRDashAI,hrDashANI,setHRDashANI,
      engDashBreakDown,setENGDashBreakDown,engDashFuelRate,setENGDashFuelRate,engDashFuelConsumption,setENGDashFuelConsumption,engDashEnergyCostRate,setENGDashEnergyCostRate,engDashPowerConsumption,setENGDashPowerConsumption,qualityDashNM,setQualityDashNM,setHRDashManpower,hrDashManpower,kpi,dispatch,
      setPressNumberOne,pressNumberOne,shift,setShift} =useContext(reportContext)
  


      const navigate = useNavigate();
     


      const handleOptionOne =(e)=>{
                 setShift(e.target.value)
                
            }


            


      var newd =  new Date(ddate);
      let monthNumber = newd.getMonth() + 1;                                       
      let yearNumber = newd.getFullYear() ;
      let dateNumber = newd.getDate();
      
      var dateone =yearNumber +'-'+monthNumber +'-'+ dateNumber

      var nextDay;
      
      
      nextDay = new Date(ddate);
      nextDay.setDate(nextDay.getDate() + 1);
    
    
      let monthNumberTwo = nextDay.getMonth()+1 
    let yearNumberTwo = nextDay.getFullYear()
    let dateNumberTwo =  nextDay.getDate()
    
    var datetwo = yearNumberTwo +'-'+ monthNumberTwo +'-'+ dateNumberTwo



///////////////////////////



var pressno ='502'
var type ='SRT'


      const fetchDataPressOne = async () => {
    
         try {
     
     
     
     //       ///////////////////////////////////////////////////Qulaity
     
     
           const responsePressOne = await api.get(`/presswisedata/presswisesumshift/${dateone}/${datetwo}/${pressno}/${shift}/${type}`);
       
           setPressNumberOne(responsePressOne.data.data.data.flash);
     
     
          
          
     
     
        
             
         } catch (err) {
           console.log(err);
         }
       };
     





































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
      <div className='thm' >


      <div className='row dhead bo'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center '>
            
      
         <table className="table  table-bordered table-hover mb-0 ">
        <thead className="thead-dark trmain">
          <tr className='trmain'>
            <th scope="col-md-12 col-sm-12 col-lg-12" width='60%' height='1% ' style={{maxHeight:'1px'}}> LINE ONE REPORT - SLTL</th>
            
            <th scope="col-md-1 col-sm-1 col-lg-1" width='10%' style={{maxHeight:'1px'}}> <div className="col">
          <select className="col form-control " aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
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
            <td scope="col-md-3 col-sm-3 col-lg-3"  colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>press 01</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> press 02</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>press 03</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>press 04</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>press 05</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>press 06</td>
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Weight</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
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
      
      
      
      
      
      <h4 style={{textAlign:'center',marginTop:'28px',marginBottom:'20px'}}>CATEGORY WISE WEIGHT & PCS</h4>


      <div className='row mr-1 ml-1 mt-2 bo'>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
            
      
         <table className="table  table-bordered table-hover ttt">
       
        <tbody>
          <tr>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='17%' colspan='2'  style={{fontWeight:'bold'}} >KPI</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" width='15%' colspan='2' style={{fontWeight:'bold'}}  onClick={(e)=>pressOne(e)}>Press 01</td>
          
            <td scope="col-md-2 col-sm-2 col-lg-2" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressTwo(e)}> Press 02</td>
            
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressThree(e)}>Press 03</td>
        
            <td scope="col-md-1 col-sm-1 col-lg-1" width='15%' colspan='2'  style={{fontWeight:'bold'}} onClick={(e)=>pressFour(e)}>Press 04</td>
            
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
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Act</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'12px'}}>Plan</td>
            
            
            
          </tr>
          <tr>
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px',textAlign:'center'}} rowspan='2'>SRT</td>
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} >Nos</td>
            
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
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>POB</td>
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
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>APW</td>
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
         
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>SKS</td>
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
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}} rowspan='2'>PBB</td>
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
          
            <td scope="col-md-3 col-sm-3 col-lg-3" style={{fontSize:'14px'}}>Ton</td>
            
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
          <td scope="col-md-3 col-sm-3 col-lg-3" colspan='2'>SUMMARY</td>
          
            
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

export default LineOne