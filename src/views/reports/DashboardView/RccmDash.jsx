import React,{useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './rccm.css'
import api from '../../../api/api'
import {reportContext} from '../../../context/ContextProvider'
import moment from 'moment'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    justify:'center',
    alignItems:"flex-start",
    margin:theme.spacing(3),
    backgroundColor:theme.palette.background.dark,
    height:'100%'
   
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  
];

export default function DenseTable() {
  const classes = useStyles();


  const {kpi,dispatch,ddate,dateTwo,rccmData,setRccmData} =useContext(reportContext)
   
////////////////////

var newd =  new Date(ddate); 
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();

    var paramDateOne =yearNumber +'-'+monthNumber +'-'+ dateNumber;
    ///////////////////////////////////////////////////////

    var newdTwo =  new Date(dateTwo);
    let monthNumberTwo = newdTwo.getMonth() + 1;                                       
    let yearNumberTwo = newdTwo.getFullYear() ;
    let dateNumberTwo = newdTwo.getDate();

    var paramDateTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo;










var category =kpi.firstKpi

console.log(category);




  const fetchDataRccm = async () => {
    try {
      const response = await api.get(`/reporting/rccm/${kpi.divrccm}/${category}/${paramDateOne}/${paramDateOne}`);
      //console.log(response);
      setRccmData(response.data.data.data)
    // console.log(response.data.data.mfg);

     //const responseTwo = await apiTwo.get(`/v2/${kpi.secondKpi}/${paramDateOne}/${paramDateTwo}`);
  
     //console.log(responseTwo.data.data.mfg);



    }
      catch(err){
          console.log(err);
      }

    }



    useEffect(()=>{
      fetchDataRccm()
  },[kpi.divrccm,paramDateOne])





console.log(rccmData);












const t=`RCCM ${kpi.titleOne} from ${paramDateOne} to ${paramDateTwo}` 





  return (
<div className=' bo'
        
        style ={{margin:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)'}}
        >
        <table className="table  table-bordered table-hover mb-0 ">
  <thead className="thead-dark">
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" >Date</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" >Accountability</th>
      <th scope="col-md-1 col-sm-1 col-lg-1"  width='4%'>Metrix</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >Target Date</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">Actual</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">RNA</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >Root Cause</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">Counter</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">Resp</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >Com  Date</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >Status</th>
    </tr></thead>
    <tbody>

      {rccmData.map((row)=>(
        <tr key={row.id}>
<td scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> { moment(row.in_date).format('YY MMM D')}</td>


<td scope="col-md-2 col-sm-2 col-lg-2" width='6%' style={{fontSize:'12px',fontWeight:'bold'}}>{row.accountability}</td>
     <td  width='4%'style={{fontSize:'12px',fontWeight:'bold'}}>{row.metix}</td>
     <td   width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>{row.target_date}</td>
     <td   style={{fontSize:'12px',fontWeight:'bold'}}>{row.actual}</td>
     <td  style={{fontSize:'12px',fontWeight:'bold'}}>{row.reason_achive_not_target}</td>
     <td  style={{fontSize:'12px',fontWeight:'bold'}}>{row.root_cause}</td>
     <td  style={{fontSize:'12px',fontWeight:'bold'}}>{row.counter_measure}</td>
     <td  style={{fontSize:'12px',fontWeight:'bold'}}>{row.resp}</td>
     <td  style={{fontSize:'12px',fontWeight:'bold'}}>{row.target}</td>
     <td  style={{fontSize:'12px',fontWeight:'bold'}}>{row.status}</td>
     </tr> 
      ))


     
     
     
    
      }
    
    

   
    </tbody>
  
  
</table></div>

  );
}