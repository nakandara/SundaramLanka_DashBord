import React from 'react'

import {FullScreenDialogDiliveryOne,FullScreenDialogDiliveryTwo,FullScreenDialogDiliveryThree} from './Dilivery'












const AllKpiSummary = () => {


   




















   return (
      <div className=' bo'
        
      style ={{margin:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)'}}
      >
      <table className="table  table-bordered table-hover mb-0 ">
<thead className="thead-dark">
  <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3"  className='text-center' >KFO</th>
    <th scope="col-md-2 col-sm-2 col-lg-2" colSpan='3'  className='text-center'>Financial Year</th>
    
    
  </tr></thead>
  <tbody>

 
  <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >Dilivery</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}><FullScreenDialogDiliveryOne/></th>
    <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}} > <FullScreenDialogDiliveryTwo/></th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}><FullScreenDialogDiliveryThree/></th>
    
    
  </tr>

  <tr>
   
   <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >Quality</th>
   <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2019/2020</th>
   <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 2020/2021</th>
   <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2021/2022</th>
   
   
 </tr>

 <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >Safety</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2019/2020</th>
    <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 2020/2021</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2021/2022</th>
    
    
  </tr>
  <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >Morale</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2019/2020</th>
    <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 2020/2021</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2021/2022</th>
    
    
  </tr>
  <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >Critical Machine - OEE%</th>
    <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 2020/2021</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2021/2022</th>
    
    
  </tr>
  <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >COST</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2019/2020</th>
    <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 2020/2021</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2021/2022</th>
    
    
  </tr>
  <tr>
   
    <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}   >New  Product Development</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2019/2020</th>
    <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 2020/2021</th>
    <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>2021/2022</th>
    
    
  </tr>
  </tbody>


</table></div>
   )
}

export default AllKpiSummary