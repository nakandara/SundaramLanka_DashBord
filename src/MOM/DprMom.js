import React, { useEffect, useState } from 'react'
import api from '../../src/api/api';
import moment from 'moment'









const DprMom = () => {






const[fourMMan,setFourMMan]=useState([])

const[fourMMachine,setFourMMachine]=useState([])

const[fourMMaterial,setFourMMaterial]=useState([])

const[fourMLogistic,setFourMLogistic]=useState([])








   const fetchData = async () => {
    
      try {
        
        /////////////////////////////
  
        const responsePone = await api.get(`/momdpr/mom/fourm/Man`);
    
      
          setFourMMan(responsePone.data.data.data);
        
        
  
        const responsePtwo = await api.get(`/momdpr/mom/fourm/Material`);
    
        setFourMMaterial(responsePtwo.data.data.data);
  
  
        const responsePthree = await api.get(`/momdpr/mom/fourm/Machine`);
           setFourMMachine(responsePthree.data.data.data);
  
  
        const responsePfour = await api.get(`/momdpr/mom/fourm/Logistic`);
    
        setFourMLogistic(responsePfour.data.data.data)
  
  
       
  
  
     
          
      } catch (err) {
        console.log(err);
      }
    };
  



useEffect(()=>{
   fetchData()
},[])


console.log(fourMMan);























   return (
      <div className='ml-4 mr-4'>
     



<div className='thm' >


<div className='row dhead bo mt-3'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center '>
      

   <table className="table  table-bordered table-hover mb-0 table-striped ">
  <thead className="thead-dark tableFixHead table-striped mr-5" style={{position:'fixed',top:'0px',zIndex:'100' }}>
    <tr>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='4%'> 4M</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='1%'>SN</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%'>Initiated</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%'>DisDate</th>
      <th scope="col-md-1 col-sm-1 col-lg-1"  width='12%'>Issue</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='44%' >Discussed Point</th> 
      <th scope="col-md-1 col-sm-1 col-lg-1" width='12%'>RES</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='12%'>Target Date</th>
      
    </tr>
  </thead>
  
</table>


         </div>


         
</div>  
         
      
      </div>
      
      
      
      
      <div className='row mr-1 ml-1 mt-5 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">

  <tbody>
    

       {fourMMan && fourMMan.map(
        (d,index)=>( <tr key={index}>
           <td scope="col-md-1 col-sm-1 col-lg-1"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>{d.four_m}</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='3%' style={{fontSize:'12px',fontWeight:'bold'}} >{d.id}</td>
           <td scope="col-md-3 col-sm-3 col-lg-3" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{moment(d.in_date).format('YY MMM D')}</td>
           <td scope="col-md-2 col-sm-2 col-lg-2" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{ moment(d.disc_date).format('YY MMM D')}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.issue}</td>
           
           <td  scope="col-md-1 col-sm-1 col-lg-1" width='44%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.disc_point}</td>
           <td  scope="col-md-1 col-sm-1 col-lg-1"  width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.res}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start',backgroundColor: d.status>=80?'green':d.status>=50?'yellow':'red'}}>{d.target_date}</td>
           </tr>
        ) 
       )}
     
   
    
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>   
      
      
      
      
      
<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    

  {fourMMaterial && fourMMaterial.map(
        (d,index)=>( <tr key={index}>
           <td scope="col-md-1 col-sm-1 col-lg-1"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>{d.four_m}</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='3%' style={{fontSize:'12px',fontWeight:'bold'}} >{d.id}</td>
           <td scope="col-md-3 col-sm-3 col-lg-3" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{moment(d.in_date).format('YY MMM D')}</td>
           <td scope="col-md-2 col-sm-2 col-lg-2" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{ moment(d.disc_date).format('YY MMM D')}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.issue}</td>
           
           <td  scope="col-md-1 col-sm-1 col-lg-1" width='44%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.disc_point}</td>
           <td  scope="col-md-1 col-sm-1 col-lg-1"  width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.res}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start',backgroundColor: d.status>=80?'green':d.status>=50?'yellow':'red'}}>{d.target_date}</td>
           </tr>
        ) 
       )}
     
   
    
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>   
         
      
      
      
      
<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    

  {fourMMachine && fourMMachine.map(
        (d,index)=>( <tr key={index}>
           <td scope="col-md-1 col-sm-1 col-lg-1"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>{d.four_m}</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='3%' style={{fontSize:'12px',fontWeight:'bold'}} >{d.id}</td>
           <td scope="col-md-3 col-sm-3 col-lg-3" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{moment(d.in_date).format('YY MMM D')}</td>
           <td scope="col-md-2 col-sm-2 col-lg-2" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{ moment(d.disc_date).format('YY MMM D')}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.issue}</td>
           
           <td  scope="col-md-1 col-sm-1 col-lg-1" width='44%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.disc_point}</td>
           <td  scope="col-md-1 col-sm-1 col-lg-1"  width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.res}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start',backgroundColor: d.status>=80?'green':d.status>=50?'yellow':'red'}}>{d.target_date}</td>
           </tr>
        ) 
       )}
   
    
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>   
          
      
      
<div className='row mr-1 ml-1 mt-2 bo'>
   <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
      

   <table className="table  table-bordered table-hover ttt">
 
  <tbody>
    

  {fourMLogistic && fourMLogistic.map(
        (d,index)=>( <tr key={index}>
           <td scope="col-md-1 col-sm-1 col-lg-1"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>{d.four_m}</td>
            <td scope="col-md-1 col-sm-1 col-lg-1"  width='3%' style={{fontSize:'12px',fontWeight:'bold'}} >{d.id}</td>
           <td scope="col-md-3 col-sm-3 col-lg-3" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{moment(d.in_date).format('YY MMM D')}</td>
           <td scope="col-md-2 col-sm-2 col-lg-2" width='7%' style={{fontSize:'12px',fontWeight:'bold'}}>{ moment(d.disc_date).format('YY MMM D')}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.issue}</td>
           
           <td  scope="col-md-1 col-sm-1 col-lg-1" width='44%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.disc_point}</td>
           <td  scope="col-md-1 col-sm-1 col-lg-1"  width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start'}}>{d.res}</td>
           <td scope="col-md-1 col-sm-1 col-lg-1" width='12%' style={{fontSize:'12px',fontWeight:'bold',textAlign:'start',backgroundColor: d.status>=80?'green':d.status>=50?'yellow':'red'}}>{d.target_date}</td>
           </tr>
        ) 
       )}
     
   
    
  </tbody>
</table>

<table className="table">
 
</table>
         </div>


         
</div>   
          
      
      
      
      
      
      
      
      </div>
   )
}

export default DprMom
