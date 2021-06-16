import React,{useEffect,useState,useContext} from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import api from '../../../../src/api/api'
import {reportContext} from '../../../context/ContextProvider'
import moment from 'moment'
const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, ...rest }) => {



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


      }
        catch(err){
            console.log(err);
        }
  
      }

  
      console.log(barChartData.actual);

      
useEffect(()=>{

  fetchData()

},[kpi.firstKpi,dateOne,dateTwo,kpi.condition,kpi.secondKpi,paramDateTwo,paramDateOne,kpi.division])
      //////////////////
      

console.log(barChartData);

const dataBar =[barChartData[barChartData.length-3],barChartData[barChartData.length-2],barChartData[barChartData.length-1]]

console.log(dataBar);


function formatXAxis(tickItem) {
  // If using moment.js
  return moment(tickItem).format('MMM y')
  }

















  const classes = useStyles();
  const theme = useTheme();




  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'This year'
      },
      {
        backgroundColor: colors.grey[200],
        data: [11, 20, 12, 29, 30, 25, 13],
        label: 'Last year'
      }
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
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

  return (
   
        <Box
          height={280}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
