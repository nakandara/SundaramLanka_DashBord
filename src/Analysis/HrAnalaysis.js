import React,{useEffect,useContext,useRef} from 'react'
import api from '../api/api'
import {reportContext} from '../context/ContextProvider'
import './wpr.css'
import moment from 'moment'
import ChartJS from "chart.js";
import chartTrendline from "chartjs-plugin-trendline";
import { Bar } from 'react-chartjs-2';
import {
  Box,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core'










ChartJS.plugins.register(chartTrendline);










const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),minHeight: '100%'

    },
  },
}));



  
  /////////////////
 

const HrAnalaysis = () => {
    
    const theme = useTheme();
    const {kpi, weekDate,weekDateTwo,weekChartData,setWeekChartData,weekChartDataTwo,setWeekChartDataTwo,weekDateThree,weekDateFour,
      weekDateFive,weekDateSix,weekDateSeven,weekDateEight,weekChartDataThree,setWeekChartDataThree,
      weekChartDataFour,setWeekChartDataFour
    } =useContext(reportContext)
   
//console.log(dateOne);
//console.log(dateTwo);
////////////////////////////////
var newd =  new Date(weekDate);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();

    var paramDateOne =yearNumber +'-'+monthNumber +'-'+ dateNumber;
    ///////////////////////////////////////////////////////

    var newdTwo =  new Date(weekDateTwo);
    let monthNumberTwo = newdTwo.getMonth() + 1;                                       
    let yearNumberTwo = newdTwo.getFullYear() ;
    let dateNumberTwo = newdTwo.getDate();

    var paramDateTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo;


    ////////////////////////////////////////////

////////////////////////////////
var newdThree =  new Date(weekDateThree);
    let monthNumberThree = newdThree.getMonth() + 1;                                       
    let yearNumberThree = newdThree.getFullYear() ;
    let dateNumberThree = newdThree.getDate();

    var paramDateThree =yearNumberThree +'-'+monthNumberThree +'-'+ dateNumberThree;
    ///////////////////////////////////////////////////////

    var newdFour =  new Date(weekDateFour);
    let monthNumberFour = newdFour.getMonth() + 1;                                       
    let yearNumberFour = newdFour.getFullYear() ;
    let dateNumberFour = newdFour.getDate();

    var paramDateFour =yearNumberFour +'-'+monthNumberFour +'-'+ dateNumberFour;


    ////////////////////////////////////
    var newdFive =  new Date(weekDateFive);
    let monthNumberFive = newdFive.getMonth() + 1;                                       
    let yearNumberFive = newdFive.getFullYear() ;
    let dateNumberFive = newdFive.getDate();

    var paramDateFive=yearNumberFive +'-'+monthNumberFive +'-'+ dateNumberFive;
    ///////////////////////////////////////////////////////

    var newdSix =  new Date(weekDateSix );
    let monthNumberSix  = newdSix.getMonth() + 1;                                       
    let yearNumberSix  = newdSix.getFullYear() ;
    let dateNumberSix  = newdSix.getDate();

    var paramDateSix  =yearNumberSix  +'-'+monthNumberSix  +'-'+ dateNumberSix ;

////////////////////////////////////////////////////////////////////////////

var newdSeven =  new Date(weekDateSeven);
    let monthNumberSeven = newdSeven.getMonth() + 1;                                       
    let yearNumberSeven = newdSeven.getFullYear() ;
    let dateNumberSeven = newdSeven.getDate();

    var paramDateSeven=yearNumberSeven +'-'+monthNumberSeven +'-'+ dateNumberSeven;
    ///////////////////////////////////////////////////////

    var newdEight =  new Date(weekDateEight );
    let monthNumberEight  = newdEight.getMonth() + 1;                                       
    let yearNumberEight  = newdEight.getFullYear() ;
    let dateNumberEight  = newdEight.getDate();

    var paramDateEight  =yearNumberEight  +'-'+monthNumberEight  +'-'+ dateNumberEight ;


//console.log(paramDateOne);
//console.log(paramDateTwo);


    const fetchData = async () => {
        try {
          const response = await api.get(`/reporting/piechart/${kpi.condition}/${kpi.firstKpi}/${kpi.division}/${paramDateOne}/${paramDateTwo}`);
          //console.log(response);
          setWeekChartData(response.data.data.data)
        // console.log(response.data.data.mfg);

         //const responseTwo = await apiTwo.get(`/v2/${kpi.secondKpi}/${paramDateOne}/${paramDateTwo}`);
      
         //console.log(responseTwo.data.data.mfg);



        }
          catch(err){
              console.log(err);
          }
    
        }

////////////////////////////////////////////////////////////

const fetchDataTwo = async () => {
  try {
    const responseTwo = await api.get(`/reporting/piechart/${kpi.condition}/${kpi.firstKpi}/${kpi.division}/${paramDateThree}/${paramDateFour}`);
    //console.log(response);
    setWeekChartDataTwo(responseTwo.data.data.data)
  // console.log(response.data.data.mfg);

   //const responseTwo = await apiTwo.get(`/v2/${kpi.secondKpi}/${paramDateOne}/${paramDateTwo}`);

   //console.log(responseTwo.data.data.mfg);



  }
    catch(err){
        console.log(err);
    }

  }



  const fetchDataThree = async () => {
    try {
      const responseThree = await api.get(`/reporting/piechart/${kpi.condition}/${kpi.firstKpi}/${kpi.division}/${paramDateFive}/${paramDateSix}`);
      //console.log(response);
      setWeekChartDataThree(responseThree.data.data.data)
    // console.log(response.data.data.mfg);
  
     //const responseTwo = await apiTwo.get(`/v2/${kpi.secondKpi}/${paramDateOne}/${paramDateTwo}`);
  
     //console.log(responseTwo.data.data.mfg);
  
  
  
    }
      catch(err){
          console.log(err);
      }
  
    }



    /////////////////////

    const fetchDataFour = async () => {
      try {
        const responseFour = await api.get(`/reporting/piechart/${kpi.condition}/${kpi.firstKpi}/${kpi.division}/${paramDateSeven}/${paramDateEight}`);
        //console.log(response);
        setWeekChartDataFour(responseFour.data.data.data)
      // console.log(response.data.data.mfg);
    
       //const responseTwo = await apiTwo.get(`/v2/${kpi.secondKpi}/${paramDateOne}/${paramDateTwo}`);
    
       //console.log(responseTwo.data.data.mfg);
    
    
    
      }
        catch(err){
            console.log(err);
        }
    
      }



/////////////////////////
useEffect(()=>{
  fetchData()
  fetchDataTwo()
  fetchDataThree()
  fetchDataFour()
},[kpi.firstKpi,paramDateOne,paramDateTwo,paramDateThree,paramDateFour,paramDateFive,paramDateSix,paramDateSeven,paramDateEight])









  
  const dataOne =weekChartData[0]?.total

  const dataTwo =weekChartDataTwo[0]?.total

  const dataThree =weekChartDataThree[0]?.total

  const dataFour =weekChartDataFour[0]?.total



  const x = [dataOne,dataTwo,dataThree,dataFour]

  console.log(x);
//////////////////////////////////////////////
const data = {
  datasets: [
    {
      backgroundColor: colors.indigo[500],
      data: x,
      
    }
  ],labels: ['Gap 01', 'Gap 02', 'Gap 03', 'Gap 04' ]
};

const options = {
  animation: false,
  cornerRadius: 20,
  layout: { padding: 0 },
  legend: { display: false },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ]
  },
  tooltips: {
    backgroundColor: theme.palette.background.default,
    bodyFontColor: theme.palette.text.secondary,
    borderColor: theme.palette.divider,
    borderWidth: 1,
    enabled: true,
    footerFontColor: theme.palette.text.secondary,
    intersect: false,
    mode: 'index',
    titleFontColor: theme.palette.text.primary
  }
};
//////////////////////////////////////////







       



    
//////////////x//////////////////////////
//     const x =
//     data &&
//     data.map((d) => {
//       return new Date(d.date).toLocaleDateString();
//     });

// //console.log(x);

// /////////////////y//////////////////////////////
// var z = kpi.firstKpi


// const y =
// data &&
// data.map((d) => {
//   if(z=== 'ftr'){ return (d.ftr)}
//     if(z=== 'flash'){ return (d.flash)}
//     if (z==='berlc'){return (d.berlc)}
//     if(z== 'actual_weight'){ return (d.actual_weight)}
//     if(z== 'plant_utilization'){ return (d.plant_utilization)}
//     if(z== 'plan_adherence'){ return (d.plan_adherence)}
//     if(z== 'productivity'){ return (d.productivity)}
//     if(z== 'hold_compound'){ return (d.hold_compound)}
//     if (z=='reject_compound'){return (d.reject_compound)}
//     if(z== 'nm_dirty_tires'){ return (d.nm_dirty_tires)}
//     if (z=='plan_adherence_plan'){return (d.plan_adherence_plan)}
    
//     if(z== 'compound_weight_actual'){ return (d.compound_weight_actual)}
//     if (z=='mixing_break_down'){return (d.mixing_break_down)}
//     if(z== 'mixing_productivity'){ return (d.mixing_productivity)}
//     if(z== 'mixing_man_power'){ return (d.mixing_man_power)}
//     if(z== 'mixing_energy'){ return (d.mixing_energy)}
//     if(z== 'energy_cost_kg'){ return (d.energy_cost_kg)}
//     if(z== 'energy_consumed'){ return (d.energy_consumed)}
//     if (z=='break_down'){return (d.break_down)}
//     if(z== 'firewood_cost_rate'){ return (d.firewood_cost_rate)}
//     if (z=='oil'){return (d.oil)}

//     if(z== 'pm_actual'){ return (d.pm_actual)}
//     if (z=='absent_inform'){return (d.absent_inform)}
//     if(z== 'absent_non_inform'){ return (d.absent_non_inform)}
//     if(z== 'man_power'){ return (d.man_power)}
//     if(z== 'late'){ return (d.late)}
//     if(z== 'dot'){ return (d.dot)}
//     if(z== 'reportable_accident'){ return (d.reportable_accident)}
//     if (z=='near_miss'){return (d.near_miss)}
//     if(z== 'kaizen'){ return (d.kaizen)}
//     if (z=='training'){return (d.training)}

//     if(z== 'creel_bead_actual'){ return (d.creel_bead_actual)}
//     if (z=='reject_bead'){return (d.reject_bead)}
//     if(z== 'non_reportable_accident'){ return (d.non_reportable_accident)}
//     if(z== 'bead_energy'){ return (d.bead_energy)}
//     if(z== 'bead_breakdown'){ return (d.bead_breakdown)}
//     if(z== 'bead_productivity_actual'){ return (d.bead_productivity_actual)}
//     if(z== 'bead_manpower_actual'){ return (d.bead_manpower_actual)}
    
 
// });

// console.log(y);

 /////////////////
//  var g =Math.max(...y)
//  var sca= g+g*0.5

///////////////////////
// useEffect(() => {
//     if (chartRef && chartRef.current ) {
      
//       const chartInstance = new Chartjs(chartRef.current,  {
//           type: 'line',
//           data: {
//               labels:x,
//               datasets: [{
//                   label: `${z}`,
//                   data:y,
//                   borderColor:  "blue",
//                   borderWidth: 3,
//                   trendlineLinear: {
//                       style: "black",
//                       lineStyle: "dotted|solid",
//                       width: 3
//                   }
//             //   },{
//             //       label: "plan",
//             //       data: yplan,
//             //       borderColor: "red",
//             //       borderWidth: 3,
//             //        trendlineLinear: {
//             //         style: "rgb(43 ,66 ,255, 0.3)",
//             //         lineStyle: "solid",
//             //         width: 1,
                   
//             //     }
//                  }]
//           },
//           options: {animation: true,
//               layout: {padding:6},
//               legend: {
//                   display:true ,
//                 },
//                 stroke: {
//                   width: [5, 7, 5],
//                   curve: 'straight',
//                   dashArray: [0, 8, 5]
//                 },responsive:true,
//                 markers: {
//                   size: 0,
//                   hover: {
//                     sizeOffset:4
//                   }
//                 },grid: {
//                   borderColor: 'yellow',
//                 },fill: {
//                   type: 'gradient',
//                   gradient: {
//                     shade: 'dark',
//                     gradientToColors: [ '#FDD835'],
//                     shadeIntensity: 1,
//                     type: 'horizontal',
//                     opacityFrom: 1,
//                     opacityTo: 1,
//                     stops: [0, 100, 100, 100]
//                   }},
//                 datasetFill: true, title: {
//                   display: true,padding:0,
//                   text: `${z}`
//               } ,
//                 tooltips: {
//                   mode: 'nearest'
//               },
//                 elements: { line:{borderColor:'green',tension:0},
//                   point: {
//                     borderColor:'#027dc4',
//                     bordeWidth:1,
//                     backgroundColor:'white',
//                     radius: 0,
//                     hoverRadius:2
//                   },
//                 },
//                 maintainAspectRatio: false,
//                 tooltips: {
//                   mode: "index",
//                   intersect: false,
//                   callbacks: {
//                     label: function (tooltipItem, data) {
//                       return numeral(tooltipItem.value).format("+0,0");
//                     }},
                  
//                 },
//               scales: {xAxes: [
//                 {
//                   type: "time",
//                   time: {
//                     format: "MM/DD/YY",
//                     tooltipFormat: "l"
//                   },
//                 },
//               ],
//                   yAxes: [{ gridLines: {
//                       borderDash: [1],
//                  borderDashOffset: [22],
//                 //  color: blue,
//                  drawBorder: true,
//                  zeroLineBorderDash: [2],
//                  zeroLineBorderDashOffset: [2],
//                 //  zeroLineColor: theme.palette.divider,lineWidth:1
//                    },
//                       ticks: {
//                         padding:1,
//                         suggestedMin: 0,
//                         suggestedMax:sca,
                       
                        
//                         // callback: function(value) {
//                         //   return `£${value+value*5}k`}
//                       },
//                     }],
//               }
//           }
//       }
//       )}})
///////////////
function formatXAxis(tickItem) {
    // If using moment.js
    return moment(tickItem).format('MMM D')
    }


    return (
    
      
      // <LineChart width={800} height={280} data={data} 
      // margin={{top:50, right: 100, left: 0, bottom: 0,}}
      //   >
        
      //   <XAxis dataKey="date"    tickFormatter={formatXAxis} padding={{ left: 30, right: 50 ,top:40}}   fontSize={12}      allowDataOverflow={false} tickCount={10} angle={0} textAnchor="end"
      //      />
      //   <YAxis />
      //   <Tooltip />
      //   <Line connectNulls type="monotone" dataKey={kpi.firstKpi} stroke="rgb(31,54,189)" activeDot={{ r: 8 }} />
      //   <Line  connectNulls type="monotone" dataKey={kpi.secondKpi} stroke="rgb(244,67,54)" />
      // </LineChart>
      
 
      
      <Box
      height={280}
      position="relative"
    >
      <Bar
        data={data}
        options={options}
      />
    </Box>
 

       
    )
}

export default HrAnalaysis
                                       