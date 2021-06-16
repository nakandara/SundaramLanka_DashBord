import React from 'react'
import './machinecost.css'


const MachineCost = ({machineName,pmCostDaily,bdCostDaily,proCostDaily,pmCostMtd,bdCostMtd,proCostMtd,allpmCostDaily,allbdCostDaily,allproCostDaily,allpmCostMtd,allbdCostMtd,allproCostMtd}) => {

   return (
      <div className='cost' >
         <div className='cost-day-mom' style={{backgroundColor:'#65AAE7',fontWeight:'bold'}}>  
         <div className='cost-day'>{machineName}</div>
         <div className='cost-day'>PM Cost</div>
         <div className='cost-day'>BD Cost</div>
         <div className='cost-day'>Pro Cost</div>
         <div className='cost-day'>Total</div>
         </div>
         <div className='cost-day-mom'>  
         <div className='cost-day' style={{fontWeight:'bold'}}>Day</div>
         <div className='cost-day'>{pmCostDaily}</div>
         <div className='cost-day'>{bdCostDaily}</div>
         <div className='cost-day'>{proCostDaily}</div>
         <div className='cost-day'>{pmCostDaily+bdCostDaily+proCostDaily}</div>
         </div>
         <div className='cost-day-mom'>
            <div className='cost-day' style={{fontWeight:'bold'}}>MTD</div>
            <div className='cost-day'>{pmCostMtd}</div>
            <div className='cost-day'>{bdCostMtd}</div>
            <div className='cost-day'>{proCostMtd}</div>
            <div className='cost-day'>{pmCostMtd+bdCostMtd+proCostMtd}</div>
         </div>
         <div className='cost-day-mom'>
            <div className='cost-day' style={{fontWeight:'bold'}}>Total %</div>
            <div className='cost-day'>{pmCostMtd? ((pmCostMtd/allpmCostMtd)*100).toFixed(2):0}%</div>
            <div className='cost-day'>{bdCostMtd? ((bdCostMtd/allbdCostMtd)*100).toFixed(2):0}%</div>
            <div className='cost-day'>{proCostMtd? ((proCostMtd/allproCostMtd)*100).toFixed(2):0}%</div>
            <div className='cost-day'> {(pmCostMtd+bdCostMtd+proCostMtd)? (((pmCostMtd+bdCostMtd+proCostMtd)/(allpmCostMtd+allbdCostMtd+allproCostMtd))*100).toFixed(2):0}%  </div>
         </div>
      </div>
   )
}

export default MachineCost
