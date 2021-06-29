import React,{useContext, useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import {reportContext} from '../context/ContextProvider'
import api from '../api/api'
import moment from 'moment'




const Oee = () => {

   const {  ddate,  shift, setShift,
      pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,
      pressCountA,setPressCountA,
      pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC,
      pressSumKaizen ,setPressSumKaizen,pressSumNearmiss,setPressSumNearmiss,pressSumRa ,setPressSumRa,pressSumNra ,setPressSumNra,pressSumBd ,setPressSumBd,pressState,setPressState } = useContext(reportContext)
    
  
  
   const navigate = useNavigate();


const [pressSumBdOne,setPressSumBdOne] =useState([])
const [pressSumBdTwo,setPressSumBdTwo] =useState([])









   const handleOptionOne = (e) => {
      setShift(e.target.value) }

      var newd = new Date(ddate);
      let monthNumber = newd.getMonth() + 1;
      let yearNumber = newd.getFullYear();
      let dateNumber = newd.getDate();
    
      var dateone = yearNumber + '-' + monthNumber + '-' + '1'



    
      var nextDay;
    
    
      nextDay = new Date(ddate);
      nextDay.setDate(nextDay.getDate() + 2);
    
    
      let monthNumberTwo = nextDay.getMonth() + 1
      let yearNumberTwo = nextDay.getFullYear()
      let dateNumberTwo = nextDay.getDate()

   

      //console.log( moment(new Date(dateone).setDate(new Date(dateone).getDate() + 2)).format('MMM DD'));


let date29 =new Date(new Date(dateone).setDate(new Date(dateone).getDate() + 28)) 


    let monthNumber29 = date29.getMonth() + 1
      let yearNumber29 = date29.getFullYear()
      let dateNumber29 = date29.getDate()



      let date30 =new Date(new Date(dateone).setDate(new Date(dateone).getDate() + 29)) 


    let monthNumber30 = date30.getMonth() + 1
      let yearNumber30 = date30.getFullYear()
      let dateNumber30 = date30.getDate()


      let date31 =new Date(new Date(dateone).setDate(new Date(dateone).getDate() + 30)) 


    let monthNumber31 = date31.getMonth() + 1
      let yearNumber31 = date31.getFullYear()
      let dateNumber31 = date31.getDate()






    
      var datetwo = yearNumberTwo + '-' + monthNumberTwo + '-' +  2
      var datethree = yearNumberTwo + '-' + monthNumberTwo + '-' + 3
      var datefour = yearNumberTwo + '-' + monthNumberTwo + '-' + 4
      var datefive = yearNumberTwo + '-' + monthNumberTwo + '-' + 5
      var datesix = yearNumberTwo + '-' + monthNumberTwo + '-' +  6
      var dateseven = yearNumberTwo + '-' + monthNumberTwo + '-' +  7
      var dateeight = yearNumberTwo + '-' + monthNumberTwo + '-' +  8
      var datenine = yearNumberTwo + '-' + monthNumberTwo + '-' +  9
      var dateten = yearNumberTwo + '-' + monthNumberTwo + '-' +  10
      var dateeleven = yearNumberTwo + '-' + monthNumberTwo + '-' + 11
      var datetweleve = yearNumberTwo + '-' + monthNumberTwo + '-' + 12
      var datethirteen = yearNumberTwo + '-' + monthNumberTwo + '-' +  13
      var datefourteen = yearNumberTwo + '-' + monthNumberTwo + '-' +  14
      var datefifteen = yearNumberTwo + '-' + monthNumberTwo + '-' +  15
      var datesixteen = yearNumberTwo + '-' + monthNumberTwo + '-' +  16
      var dateseventeen = yearNumberTwo + '-' + monthNumberTwo + '-' +  17
      var dateeighteen = yearNumberTwo + '-' + monthNumberTwo + '-' + 18
      var datenineteen = yearNumberTwo + '-' + monthNumberTwo + '-' + 19
      var datetwenty = yearNumberTwo + '-' + monthNumberTwo + '-' +  20
      var datetwentyone = yearNumberTwo + '-' + monthNumberTwo + '-' +  + 21
      var datetwentytwo = yearNumberTwo + '-' + monthNumberTwo + '-' + 22
      var datetwentythree = yearNumberTwo + '-' + monthNumberTwo + '-' + 23
      var datetwentyfour = yearNumberTwo + '-' + monthNumberTwo + '-' +  24
      var datetwentyfive = yearNumberTwo + '-' + monthNumberTwo + '-' + 25
      var datetwentysix = yearNumberTwo + '-' + monthNumberTwo + '-' + 26
      var datetwentyseven = yearNumberTwo + '-' + monthNumberTwo + '-' + 27
      var datetwentyeight = yearNumberTwo + '-' + monthNumberTwo + '-' +  28
      var datetwentynine = yearNumber29 + '-' + monthNumber29 + '-' + dateNumber29
      var datethirty = yearNumber30 + '-' + monthNumber30 + '-' + dateNumber30
      var datetthirtyone = yearNumber31 + '-' + monthNumber31 + '-' + dateNumber31



      //console.log(datetwentynine);










      const fetchDataShiftPressWiseKpiBd = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateone}/${datetwo}/${shift}`);
       
           setPressSumBdOne(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };
       


       const fetchDataShiftPressWiseKpiBdTwo = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwo}/${datethree}/${shift}`);
       
           setPressSumBdTwo(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };
       







useEffect(()=>{
   fetchDataShiftPressWiseKpiBdTwo()
},[shift])


console.log(pressState);
const pressnumberSumBdTwo= pressSumBdTwo && pressSumBdTwo.filter((d) => { return d.press_no === pressState})


console.log(pressnumberSumBdTwo);
  
   
   return (<div style={{marginTop:'60px'}}>
      
            <div className='col-md-12 col-sm-12 col-lg-12 text-center '>


               <table className="table  table-bordered table-hover mb-0 ">
                  <thead className="thead-dark trmain">
                     <tr >
                        <th  width='80%' height='1% ' style={{ maxHeight: '1px' }}> MACHINE OEE REPORT - SLTL</th>

                        <th  width='20%' style={{ maxHeight: '1px' }}> <div className="col">
                           <select className="col form-control " aria-label="Default select example" onChange={(e) => handleOptionOne(e)}>
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
      
      
      
      <div className='row mr-1 ml-1 mt-2 '>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
            
      
         <table className="table  table-bordered table-hover ">
       
         <thead className="thead-dark " style={{backgroundColor:'rgb(192,192,192)'}}>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',verticalAlign:'center',color:'rgb(241,42,42)'}} >DATE</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 0)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 1)).format('MMM DD')}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 2)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 3)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 4)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 5)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 6)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 7)).format('MMM DD')}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 8)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 9)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 10)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 11)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 12)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 13)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 14)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 15)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 16)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 17)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 18)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 19)).format('MMM DD')}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 20)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 21)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 22)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 23)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 24)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 25)).format('MMM DD')}</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 26)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 27)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 28)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 29)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 30)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 31)).format('MMM DD')}</td>


           
            
            
            
            
          </tr>
          </thead >


          <tbody>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(255,204,153)'}} >AVAILABILITY</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >TOTAL TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >PLANNED DOWN TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Prescheduled Preventive</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Prescheduled Cleaning</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Prescheduled Shut Downs</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >TOTAL AVAILABLE TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >1420</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(255,204,153)'}} >PERFORMANCE</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Change Over Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Break Downs</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwo[0]?.total}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >TOTAL RUNING TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >1420</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Inefficiencies + Machine Idle Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Absenteesm</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Morning Meeting</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Meal Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          {/* <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Machine Idle Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
 */}


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >NET OPERATING TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          {/* <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Time for re</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr> */}


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(255,204,153)'}} >QUALITY</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >No of Rejects/Total</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>















          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(153,115,191)'}} >OEE%</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>


           
            
            
            
            
          </tr>

          








          </tbody>
          </table>
          </div>

          <div style={{display:'flex',padding:'15px',flexDirection:'column',backgroundColor:'rgb(204,255,255)',marginTop:'50px',marginLeft:'50px'}}>
          <div style={{fontWeight:'bold',margin:'5px'}}>OEE= Availability %  X   Performance %  X Quality %</div>

          <div style={{fontWeight:'bold',margin:'5px'}}>Availability = Run Time / Available Time %</div>
          <div style={{fontWeight:'bold',margin:'5px'}}>Performance = Net Operating Time / Runing Time %</div>
          <div style={{fontWeight:'bold',margin:'5px'}}>Quality = Effective Time /  Net Operating Time %</div>


          </div>
          </div>
      
      
      
      
      </div>
   )
}

export default Oee
