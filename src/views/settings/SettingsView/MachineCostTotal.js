import React from 'react'
import './machinecost.css'

const MachineCostTotal = ({machineName,pmCostDaily,bdCostDaily,proCostDaily,pmCostMtd,bdCostMtd,proCostMtd}) => {
   return (
      <div className='costt' style={{backgroundColor:'yellow',fontWeight:'bold'}}>
          <div className='cost-day-mom' style={{backgroundColor:'#65AAE7',fontWeight:'bold'}} >  
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
      </div>
   )
}

export default MachineCostTotal
