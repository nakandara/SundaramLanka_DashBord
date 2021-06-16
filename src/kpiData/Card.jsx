import React,{useContext, useEffect, useState} from 'react'
import '../components/card.css'
import {reportContext} from '../context/ContextProvider'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import api from '../api/api'
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';






const Card = (props) => {

  const {mfgData,setMfgData,ddate,setDdate,mfgDataFirst,setMfgDataFirst,mfgDataSecond,setMfgDataSecond,mfgDataThird,setMfgDataThird
    ,mfgDataFourth,setMfgDataFourth,mfgDataFive,setMfgDataFive,mfgDataSix,setMfgDataSix,mfgDataSeven,setMfgDataSeven,mfgDataEight,setMfgDataEight,mfgDataCount,setMfgDataCount,mfgDataFirstCount,setMfgDataFirstCount,mfgDataSecondCount,setMfgDataSecondCount,mfgDataThirdCount,setMfgDataThirdCount
    ,mfgDataFourthCount,setMfgDataFourthCount,mfgDataFiveCount,setMfgDataFiveCount,mfgDataSixCount,setMfgDataSixCount,mfgDataSevenCount,setMfgDataSevenCount,mfgDataEightCount,setMfgDataEightCount,mfgDataMTD,setMfgDataMTD,mfgDataCountMTD,setMfgDataCountMTD,QualityCountA,setQualityCountA,
    QualitySumWeightA,setQualitySumWeightA, QualitySumWeightAPlus,setQualitySumWeightAPlus,QualityCountAPlus,setQualityCountAPlus, QualitySumWeightB,setQualitySumWeightB,QualityCountB,setQualityCountB, QualitySumWeightE,setQualitySumWeightE,QualityCountE,setQualityCountE, QualitySumWeightR,setQualitySumWeightR,QualityCountR,setQualityCountR, QualitySumWeightL,setQualitySumWeightL,QualityCountL,setQualityCountL,qualityDataAMTD,setQualityDataAMTD,
    qualityDataCountAMTD,setQualityDataCountAMTD,qualityDataBMTD,setQualityDataBMTD,qualityDataCountBMTD,setQualityDataCountBMTD,
    qualityDataEMTD,setQualityDataEMTD,qualityDataCountEMTD,setQualityDataCountEMTD,qualityDataRMTD,setQualityDataRMTD,
    qualityDataCountRMTD,setQualityDataCountRMTD,qualityDataLMTD,setQualityDataLMTD,qualityDataCountLMTD,setQualityDataCountLMTD,qualityDataAPlusMTD,setQualityDataAPlusMTD,qualityDataCountAPlusMTD,setQualityDataCountAPlusMTD} =useContext(reportContext)

  var newd =  new Date(ddate);
  let monthNumber = newd.getMonth() + 1;                                       
  let yearNumber = newd.getFullYear() ;
  let dateNumber = newd.getDate();

  var parmData =yearNumber +'-'+monthNumber +'-'+ dateNumber

  var date = new Date(ddate)

// Add a day
date.setDate(date.getDate() + 1)

let monthNumberTwo = date.getMonth() + 1;                                       
  let yearNumberTwo = date.getFullYear() ;
  let dateNumberTwo = date.getDate();



  var parmDataTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo

  var parmDataThree= yearNumber +'-'+monthNumber +'-'+ 1

console.log(parmDataThree);
console.log(parmDataTwo)

// const a =[{total:'0'},{value:'7'}]


// console.log(a[1].value);






  const fetchData = async () => {
  
    try {
      const response = await api.get(`/mfg/builder/${parmData}/${parmDataTwo}`);
  
      setMfgData(response.data.data.data[0].total);

      ///////////////////////////////////
      const responseCount = await api.get(`/mfg/builder/count/${parmData}/${parmDataTwo}`);
  
      setMfgDataCount(responseCount.data.data.data[0].total);
      //////////////////////////////////////
      const responseMTD = await api.get(`/mfg/builder/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setMfgDataMTD(responseMTD.data.data.data[0].total);

      /////////////////////////////////////
      const responseCountMTD = await api.get(`/mfg/builder/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setMfgDataCountMTD(responseCountMTD.data.data.data[0].total);

      ///////////////////////////
      const responseQualityCountA = await api.get(`mfg/quality/count/a/${parmData}/${parmDataTwo}`);
  
      setQualityCountA(responseQualityCountA.data.data.data[0].total);
      ///////////////////////////////////////////////////////
      const responseQualitySumA = await api.get(`mfg/quality/sum/a/${parmData}/${parmDataTwo}`);
  
      setQualitySumWeightA(responseQualitySumA.data.data.data[0].total);
      ////////////////////////////////////


      const responseOne = await api.get(`/mfg/builder/one/${parmData}`);
  
      setMfgDataFirst(responseOne.data.data.data[0].total);

      //////////////////////////////
      const responseTwo = await api.get(`/mfg/builder/two/${parmData}`);
  
      setMfgDataSecond(responseTwo.data.data.data[0].total);

      ////////////////////////////////////////////
      const responseThree = await api.get(`/mfg/builder/three/${parmData}`);
  
      setMfgDataThird(responseThree.data.data.data[0].total);
      ////////////////////////////////////////

      const responseFour = await api.get(`/mfg/builder/four/${parmData}`);
  
      setMfgDataFourth(responseFour.data.data.data[0].total);

      /////////////////////////////////////////////

      const responseFive = await api.get(`/mfg/builder/five/${parmData}`);
  
      setMfgDataFive(responseFive.data.data.data[0].total);

      ///////////////////////////////////////
      const responseSix = await api.get(`/mfg/builder/six/${parmData}/${parmDataTwo}`);
  
      setMfgDataSix(responseSix.data.data.data[0].total);

      //////////////////////////////////////////
      const responseSeven= await api.get(`/mfg/builder/seven/${parmDataTwo}`);
  
      setMfgDataSeven(responseSeven.data.data.data[0].total);

      /////////////////////////////////////
      const responseEight = await api.get(`/mfg/builder/eight/${parmDataTwo}`);
  
      setMfgDataEight(responseEight.data.data.data[0].total)


      ///////////////////////////////////////
      ///////////////////////////
      const responseQualityCountAPlus = await api.get(`mfg/quality/count/apl/${parmData}/${parmDataTwo}`);
  
      setQualityCountAPlus(responseQualityCountAPlus.data.data.data[0].total);
      ///////////////////////////////////////////////////////
      const responseQualitySumAPlus = await api.get(`mfg/quality/sum/apl/${parmData}/${parmDataTwo}`);
  
      setQualitySumWeightAPlus(responseQualitySumAPlus.data.data.data[0].total);
      ////////////////////////////////////
      ///////////////////////////
      const responseQualityCountB = await api.get(`mfg/quality/count/b/${parmData}/${parmDataTwo}`);
  
      setQualityCountB(responseQualityCountB.data.data.data[0].total);
      ///////////////////////////////////////////////////////
      const responseQualitySumB = await api.get(`mfg/quality/sum/b/${parmData}/${parmDataTwo}`);
  
      setQualitySumWeightB(responseQualitySumB.data.data.data[0].total);
      ////////////////////////////////////
      ///////////////////////////
      const responseQualityCountE = await api.get(`mfg/quality/count/e/${parmData}/${parmDataTwo}`);
  
      setQualityCountE(responseQualityCountE.data.data.data[0].total);
      ///////////////////////////////////////////////////////
      const responseQualitySumE = await api.get(`mfg/quality/sum/e/${parmData}/${parmDataTwo}`);
  
      setQualitySumWeightE(responseQualitySumE.data.data.data[0].total);
      ////////////////////////////////////
      ///////////////////////////
      const responseQualityCountR = await api.get(`mfg/quality/count/r/${parmData}/${parmDataTwo}`);
  
      setQualityCountR(responseQualityCountR.data.data.data[0].total);
      ///////////////////////////////////////////////////////
      const responseQualitySumR = await api.get(`mfg/quality/sum/r/${parmData}/${parmDataTwo}`);
  
      setQualitySumWeightR(responseQualitySumR.data.data.data[0].total);
      ////////////////////////////////////
      ///////////////////////////
      const responseQualityCountL = await api.get(`mfg/quality/count/l/${parmData}/${parmDataTwo}`);
  
      setQualityCountL(responseQualityCountL.data.data.data[0].total);
      ///////////////////////////////////////////////////////
      const responseQualitySumL = await api.get(`mfg/quality/sum/l/${parmData}/${parmDataTwo}`);
  
      setQualitySumWeightL(responseQualitySumL.data.data.data[0].total);
      ////////////////////////////////////

      //////////////////////////////////////////////////////mtd quality

      ///////////////////////////////////
      const responseCountQAMTD = await api.get(`/mfg/quality/a/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setQualityDataCountAMTD(responseCountQAMTD.data.data.data[0].total);
      //////////////////////////////////////
      const responseQAMTD = await api.get(`/mfg/quality/a/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setQualityDataAMTD(responseQAMTD.data.data.data[0].total);

      /////////////////////////////////////

       ///////////////////////////////////
       const responseCountQAPlusMTD = await api.get(`/mfg/quality/apl/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
       setQualityDataCountAPlusMTD(responseCountQAPlusMTD.data.data.data[0].total);
       //////////////////////////////////////
       const responseQAPlusMTD = await api.get(`/mfg/quality/apl/mtd/${parmDataThree}/${parmDataTwo}`);
   
       setQualityDataAPlusMTD(responseQAPlusMTD.data.data.data[0].total);
 
       /////////////////////////////////////
        ///////////////////////////////////
      const responseCountQBMTD = await api.get(`/mfg/quality/b/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setQualityDataCountBMTD(responseCountQBMTD.data.data.data[0].total);
      //////////////////////////////////////
      const responseQBMTD = await api.get(`/mfg/quality/b/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setQualityDataBMTD(responseQBMTD.data.data.data[0].total);

      /////////////////////////////////////
       ///////////////////////////////////
       const responseCountQEMTD = await api.get(`/mfg/quality/e/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
       setQualityDataCountEMTD(responseCountQEMTD.data.data.data[0].total);
       //////////////////////////////////////
       const responseQEMTD = await api.get(`/mfg/quality/e/mtd/${parmDataThree}/${parmDataTwo}`);
   
       setQualityDataEMTD(responseQEMTD.data.data.data[0].total);
 
       /////////////////////////////////////
        ///////////////////////////////////
      const responseCountQRMTD = await api.get(`/mfg/quality/r/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setQualityDataCountRMTD(responseCountQRMTD.data.data.data[0].total);
      //////////////////////////////////////
      const responseQRMTD = await api.get(`/mfg/quality/r/mtd/${parmDataThree}/${parmDataTwo}`);
  
      setQualityDataRMTD(responseQRMTD.data.data.data[0].total);

      /////////////////////////////////////
       ///////////////////////////////////
       const responseCountQLMTD = await api.get(`/mfg/quality/l/count/mtd/${parmDataThree}/${parmDataTwo}`);
  
       setQualityDataCountLMTD(responseCountQLMTD.data.data.data[0].total);
       //////////////////////////////////////
       const responseQLMTD = await api.get(`/mfg/quality/l/mtd/${parmDataThree}/${parmDataTwo}`);
   
       setQualityDataLMTD(responseQLMTD.data.data.data[0].total);
 
       /////////////////////////////////////

     

     
        
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [parmData,parmDataTwo,parmDataThree]);


  var y=[mfgDataFirst,mfgDataSecond,mfgDataThird,mfgDataFourth,mfgDataFive,mfgDataSix,mfgDataSeven,mfgDataEight]


  const data = [  {},
    {
      name: '1st', uv: y[0],pv: y[0]
    },
    {
      name: '2nd ', uv: y[1],pv: y[0]+y[1]
    },
    {
      name: '3rd', uv: y[2],pv: y[0]+y[1]+y[2]
    },
    {
      name: '4th', uv: y[3],pv: y[0]+y[1]+y[2]+y[3]
    },
    {
      name: '5th', uv: y[4],pv: y[0]+y[1]+y[2]+y[3]+y[4]
    },
    {
      name: '6th', uv: y[5],pv: y[0]+y[1]+y[2]+y[3]+y[4]+y[5]
    },
    {
      name: '7th', uv: y[6],pv:y[0]+y[1]+y[2]+y[3]+y[4]+y[5]+y[6]
    },{
      name: '8th', uv: y[7],pv:y[0]+y[1]+y[2]+y[3]+y[4]+y[5]+y[6]+y[7]
    },
  ];

console.log(mfgDataMTD);

//var sum = mfgData[0].Total



    return (
      <div className='mainContainer'><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="division">
        
            <div className='title'><h1 className='titleHead'>OPERATIONAL REPORT SUN-TWS</h1></div>
         
        
      </div>
     {/* <div className="datepicker">
        <DatePicker
          onChange={(e) => {
            setDatem(e);
          }}
          selected={datem}
          className="select"
          dateFormat="dd MMM yyyy"
        />
      </div> */}
      <div>
        <DatePicker
          onChange={(e) => {
            setDdate(e);
          }}
          selected={ddate}
          className="select"
          dateFormat="dd MMM yyyy"
        />
      </div> 
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <div className="dmargin"></div>
        </ul>
      </div>
    </nav>
    
     <div className="container">
    <div className="block-1">
    <h1 className='head'>Production</h1>
    <table className="table table-bordered table-dark" >
  <thead>
    
    <tr>
     
      <th scope="col">KPI</th>
      <th scope="col">Actual</th>
      <th scope="col">MTD</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      
      <td scope="row">Weight</td>
      <td>{mfgData}</td>
      <td>{mfgDataMTD}</td>
    </tr>
    <tr>
      
      <td>Pices</td>
      <td>{mfgDataCount}</td>
      <td>{mfgDataCountMTD}</td>
    </tr>
    {/* <tr>
      
      <td colspan="1"></td>
      <td></td>
      <td></td>
    </tr> */}
  </tbody>
</table>
<div className="block-1-chart">


</div>

    </div>
    <div className="block-2">
    <h1 className='head'>Quality</h1>
    <table className="table table-bordered table-dark">
  <thead>
 
    <tr>
      <th scope="col">KPI</th>
     
      <th scope="col">A</th>
      <th scope="col">B</th>
      <th scope="col">E</th>
      <th scope="col">R</th>
      <th scope="col">L</th>
      <th scope="col">BERL(%)</th>
      
      
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">Weight</th>
      
      <td>{QualitySumWeightA}</td>
      <td>{QualitySumWeightB}</td>
      <td>{QualitySumWeightE}</td>
      <td>{QualitySumWeightR}</td>
      <td>{QualitySumWeightL}</td>
      <td rowspan="2"></td>
    </tr>
  <tr>
    
      <th scope="row">Pices</th>
      
      {/* <td>{QualityCountAPlus}</td> */}
      <td>{QualityCountA}</td>
      <td>{QualityCountB}</td>
      <td>{QualityCountE}</td>
      <td>{QualityCountR}</td>
      <td>{QualityCountL}</td>
    </tr>
    <tr>
      <th scope="row">MTD(kg)</th>
      {/* <td>{qualityDataAPlusMTD}</td> */}
      <td>{qualityDataAMTD}</td>
      <td>{qualityDataBMTD}</td>
      <td>{qualityDataEMTD}</td>
      <td>{qualityDataRMTD}</td>
      <td>{qualityDataLMTD}</td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <th scope="row">MTD(Pcs)</th>
      
      {/* <td>{qualityDataCountAPlusMTD}</td> */}
      <td>{qualityDataCountAMTD}</td>
      <td>{qualityDataCountBMTD}</td>
      <td>{qualityDataCountEMTD}</td>
      <td>{qualityDataCountRMTD}</td>
      <td>{qualityDataCountLMTD}</td>
    </tr>
    {/* <tr>
      <th scope="row">B</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">E</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">R</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">BERL(%)</th>
      <td colspan="2"></td>
      <td></td>
      
    </tr> */}
    
  </tbody>
</table>
<div className="block-2-chart">
<div className="block-flex"></div>
<div className="block-flex"></div>

</div>
    </div>
     </div>
 
</div>
     
 
    )
}

export default Card






{/* <div className={'head'}><h1>{mfgData}</h1></div> */}






{/* <div  className={'line'} style={{ width: '50%', height: 300 }}>
    <ResponsiveContainer>
      <ComposedChart
         width={200}
         height={400}
         data={data}
         margin={{
           top: 8, right: 15, left: 1, bottom: 79,
         }}
      >
        <CartesianGrid strokeDasharray="3 4" />
        <XAxis dataKey="name"  interval={0} dx={1} 
       />
        <YAxis  type="number" domain={[0, 3000]} dy={0}/>
        <Tooltip />
         <Legend /> 
        <Area type="monotone" dataKey="uv" fill="#8884d8" stroke="#8884d8" />
         <Bar dataKey="uv" barSize={20} fill="#413ea0"   />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
     </ComposedChart>
    </ResponsiveContainer>
 </div>  */}

 