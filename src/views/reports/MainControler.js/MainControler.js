import React from 'react'
import GaugeChart from '../lib'
import './mainContoler.css'




const chartStyle = {
   height:19,
   width:150
}


const MainControler = ({valueDash}) => {

   console.log(valueDash);
   return (
      <div>
        <GaugeChart
        id="gauge-chart6"
        style={chartStyle}
        animate={false}
        nrOfLevels={15}
        percent={valueDash}
        needleColor="grey"
        />
      </div>
   )
}

export default MainControler
