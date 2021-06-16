import React,{useEffect,useState,useContext} from 'react'
import api from '../../../src/api/api'
import {reportContext} from '../../context/ContextProvider'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import './wpr.css'
import moment from 'moment'




const BarChartOne = () => {

    const {kpi,dispatch,dateOne,dateTwo,barChartData,setBarChartData} =useContext(reportContext)


   

    var newd =  new Date(dateTwo);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();

    var paramDateOne =yearNumber +'-'+monthNumber +'-'+ dateNumber;
    ///////////////////////////////////////////////////////

    var ddate =  newd.setDate(newd.getDate() - 150)

    var newdTwo =  new Date(ddate);

     let monthNumberTwo = newdTwo.getMonth() + 1;                                       
    let yearNumberTwo = newdTwo.getFullYear() ;
     let dateNumberTwo = newdTwo.getDate();

    var paramDateTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo;

    //const  kpi = 'actual_weight'
    ///const  kpiplan = 'plan_weight'
   console.log(paramDateOne);
   console.log(paramDateTwo);

//console.log(kpi.firstKpi);

const z = kpi.firstKpi
    const fetchData = async () => {
        console.log('ok');


        try {
          const response = await api.get(`/reporting/mtdsum/${kpi.condition}/${kpi.firstKpi}/${kpi.secondKpi}/${kpi.division}/${paramDateTwo}/${paramDateOne}`);
          console.log(response);
          setBarChartData(response.data.data.data)

console.log(response);
        }
          catch(err){
              console.log(err);
          }
    
        }

    


        
useEffect(()=>{

    fetchData()
  
  },[kpi.firstKpi,dateOne,dateTwo,kpi.condition,kpi.secondKpi,paramDateTwo,paramDateOne,kpi.division])
        //////////////////
        

console.log(barChartData);

const data =[barChartData[barChartData.length-3],barChartData[barChartData.length-2],barChartData[barChartData.length-1]]

console.log(data);


function formatXAxis(tickItem) {
    // If using moment.js
    return moment(tickItem).format('MMM y')
    }


    return (
       
             <BarChart
        width={280}
        height={280}
        data={data}
        margin={{
          top: 50, right: 0, left:0, bottom: 0,
        }}
      >
        
        <XAxis dataKey="summ"  tickFormatter={formatXAxis}    fontSize={14} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="actual" fill="rgb(31,54,189)"  radius={[25, 25, 0, 0]} />
        <Bar dataKey="plan" fill="rgb(244,67,54)"  radius={[25, 25, 0, 0]} />
      </BarChart>
        
    )
}

export default BarChartOne
















//tick={{stroke: 'black'}}