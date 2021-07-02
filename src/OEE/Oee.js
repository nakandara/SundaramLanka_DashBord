import React,{useContext, useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import {reportContext} from '../context/ContextProvider'
import api from '../api/api'
import moment from 'moment'




const Oee = () => {

   const {  ddate,  shift, setShift,
      pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks,
      pressCountA,setPressCountA,
      pressSumB ,setPressSumB,pressSumE ,setPressSumE,pressSumR ,setPressSumR,pressSumL ,setPressSumL,pressSumC ,setPressSumC,
      pressSumKaizen ,setPressSumKaizen,pressSumNearmiss,setPressSumNearmiss,pressSumRa ,setPressSumRa,pressSumNra ,setPressSumNra,pressSumBd ,setPressSumBd,pressState,setPressState } = useContext(reportContext)
    
  
  
   const navigate = useNavigate();


const [pressSumBdOne,setPressSumBdOne] =useState([])
const [pressSumBdTwo,setPressSumBdTwo] =useState([])
const [pressSumBdThree,setPressSumBdThree] =useState([])
const [pressSumBdFour,setPressSumBdFour] =useState([])
const [pressSumBdFive,setPressSumBdFive] =useState([])
const [pressSumBdSix,setPressSumBdSix] =useState([])
const [pressSumBdSeven,setPressSumBdSeven] =useState([])
const [pressSumBdEight,setPressSumBdEight] =useState([])
const [pressSumBdNine,setPressSumBdNine] =useState([])
const [pressSumBdTen,setPressSumBdTen] =useState([])
const [pressSumBdEleven,setPressSumBdEleven] =useState([])
const [pressSumBdTwelve,setPressSumBdTwelve] =useState([])
const [pressSumBdThirteen,setPressSumBdThirteen] =useState([])
const [pressSumBdFourteen,setPressSumBdFourteen] =useState([])
const [pressSumBdFifteen,setPressSumBdFifteen] =useState([])
const [pressSumBdSixteen,setPressSumBdSixteen] =useState([])
const [pressSumBdSeventeen,setPressSumBdSeventeen] =useState([])
const [pressSumBdEighteen,setPressSumBdEighteen] =useState([])



const [pressSumBdNineteen,setPressSumBdNineteen] =useState([])
const [pressSumBdTwenty,setPressSumBdTwenty] =useState([])
const [pressSumBdTwentyOne,setPressSumBdTwentyOne] =useState([])
const [pressSumBdTwentyTwo,setPressSumBdTwentyTwo] =useState([])
const [pressSumBdTwentyThree,setPressSumBdTwentyThree] =useState([])
const [pressSumBdTwentyFour,setPressSumBdTwentyFour] =useState([])
const [pressSumBdTwentyFive,setPressSumBdTwentyFive] =useState([])
const [pressSumBdTwentySix,setPressSumBdTwentySix] =useState([])
const [pressSumBdTwentySeven,setPressSumBdTwentySeven] =useState([])
const [pressSumBdTwentyEight,setPressSumBdTwentyEight] =useState([])
const [pressSumBdTwentyNine,setPressSumBdTwentyNine] =useState([])
const [pressSumBdThirty ,setPressSumBdThirty] =useState([])
const [pressSumBdThirtyOne,setPressSumBdThirtyOne] =useState([])



///timegap status

const [pressSumTimeGapOne,setPressSumTimeGapOne] =useState([])
const [pressSumTimeGapTwo,setPressSumTimeGapTwo] =useState([])
const [pressSumTimeGapThree,setPressSumTimeGapThree] =useState([])
const [pressSumTimeGapFour,setPressSumTimeGapFour] =useState([])
const [pressSumTimeGapFive,setPressSumTimeGapFive] =useState([])
const [pressSumTimeGapSix,setPressSumTimeGapSix] =useState([])
const [pressSumTimeGapSeven,setPressSumTimeGapSeven] =useState([])
const [pressSumTimeGapEight,setPressSumTimeGapEight] =useState([])
const [pressSumTimeGapNine,setPressSumTimeGapNine] =useState([])
const [pressSumTimeGapTen,setPressSumTimeGapTen] =useState([])
const [pressSumTimeGapEleven,setPressSumTimeGapEleven] =useState([])
const [pressSumTimeGapTwelve,setPressSumTimeGapTwelve] =useState([])
const [pressSumTimeGapThirteen,setPressSumTimeGapThirteen] =useState([])
const [pressSumTimeGapFourteen,setPressSumTimeGapFourteen] =useState([])
const [pressSumTimeGapFifteen,setPressSumTimeGapFifteen] =useState([])
const [pressSumTimeGapSixteen,setPressSumTimeGapSixteen] =useState([])
const [pressSumTimeGapSeventeen,setPressSumTimeGapSeventeen] =useState([])
const [pressSumTimeGapEighteen,setPressSumTimeGapEighteen] =useState([])



const [pressSumTimeGapNineteen,setPressSumTimeGapNineteen] =useState([])
const [pressSumTimeGapTwenty,setPressSumTimeGapTwenty] =useState([])
const [pressSumTimeGapTwentyOne,setPressSumTimeGapTwentyOne] =useState([])
const [pressSumTimeGapTwentyTwo,setPressSumTimeGapTwentyTwo] =useState([])
const [pressSumTimeGapTwentyThree,setPressSumTimeGapTwentyThree] =useState([])
const [pressSumTimeGapTwentyFour,setPressSumTimeGapTwentyFour] =useState([])
const [pressSumTimeGapTwentyFive,setPressSumTimeGapTwentyFive] =useState([])
const [pressSumTimeGapTwentySix,setPressSumTimeGapTwentySix] =useState([])
const [pressSumTimeGapTwentySeven,setPressSumTimeGapTwentySeven] =useState([])
const [pressSumTimeGapTwentyEight,setPressSumTimeGapTwentyEight] =useState([])
const [pressSumTimeGapTwentyNine,setPressSumTimeGapTwentyNine] =useState([])
const [pressSumTimeGapThirty ,setPressSumTimeGapThirty] =useState([])
const [pressSumTimeGapThirtyOne,setPressSumTimeGapThirtyOne] =useState([])



///counta


const [pressSumCountAOne,setPressSumCountAOne] =useState([])
const [pressSumCountATwo,setPressSumCountATwo] =useState([])
const [pressSumCountAThree,setPressSumCountAThree] =useState([])
const [pressSumCountAFour,setPressSumCountAFour] =useState([])
const [pressSumCountAFive,setPressSumCountAFive] =useState([])
const [pressSumCountASix,setPressSumCountASix] =useState([])
const [pressSumCountASeven,setPressSumCountASeven] =useState([])
const [pressSumCountAEight,setPressSumCountAEight] =useState([])
const [pressSumCountANine,setPressSumCountANine] =useState([])
const [pressSumCountATen,setPressSumCountATen] =useState([])
const [pressSumCountAEleven,setPressSumCountAEleven] =useState([])
const [pressSumCountATwelve,setPressSumCountATwelve] =useState([])
const [pressSumCountAThirteen,setPressSumCountAThirteen] =useState([])
const [pressSumCountAFourteen,setPressSumCountAFourteen] =useState([])
const [pressSumCountAFifteen,setPressSumCountAFifteen] =useState([])
const [pressSumCountASixteen,setPressSumCountASixteen] =useState([])
const [pressSumCountASeventeen,setPressSumCountASeventeen] =useState([])
const [pressSumCountAEighteen,setPressSumCountAEighteen] =useState([])



const [pressSumCountANineteen,setPressSumCountANineteen] =useState([])
const [pressSumCountATwenty,setPressSumCountATwenty] =useState([])
const [pressSumCountATwentyOne,setPressSumCountATwentyOne] =useState([])
const [pressSumCountATwentyTwo,setPressSumCountATwentyTwo] =useState([])
const [pressSumCountATwentyThree,setPressSumCountATwentyThree] =useState([])
const [pressSumCountATwentyFour,setPressSumCountATwentyFour] =useState([])
const [pressSumCountATwentyFive,setPressSumCountATwentyFive] =useState([])
const [pressSumCountATwentySix,setPressSumCountATwentySix] =useState([])
const [pressSumCountATwentySeven,setPressSumCountATwentySeven] =useState([])
const [pressSumCountATwentyEight,setPressSumCountATwentyEight] =useState([])
const [pressSumCountATwentyNine,setPressSumCountATwentyNine] =useState([])
const [pressSumCountAThirty ,setPressSumCountAThirty] =useState([])
const [pressSumCountAThirtyOne,setPressSumCountAThirtyOne] =useState([])

//count other



const [pressSumCountOtherOne,setPressSumCountOtherOne] =useState([])
const [pressSumCountOtherTwo,setPressSumCountOtherTwo] =useState([])
const [pressSumCountOtherThree,setPressSumCountOtherThree] =useState([])
const [pressSumCountOtherFour,setPressSumCountOtherFour] =useState([])
const [pressSumCountOtherFive,setPressSumCountOtherFive] =useState([])
const [pressSumCountOtherSix,setPressSumCountOtherSix] =useState([])
const [pressSumCountOtherSeven,setPressSumCountOtherSeven] =useState([])
const [pressSumCountOtherEight,setPressSumCountOtherEight] =useState([])
const [pressSumCountOtherNine,setPressSumCountOtherNine] =useState([])
const [pressSumCountOtherTen,setPressSumCountOtherTen] =useState([])
const [pressSumCountOtherEleven,setPressSumCountOtherEleven] =useState([])
const [pressSumCountOtherTwelve,setPressSumCountOtherTwelve] =useState([])
const [pressSumCountOtherThirteen,setPressSumCountOtherThirteen] =useState([])
const [pressSumCountOtherFourteen,setPressSumCountOtherFourteen] =useState([])
const [pressSumCountOtherFifteen,setPressSumCountOtherFifteen] =useState([])
const [pressSumCountOtherSixteen,setPressSumCountOtherSixteen] =useState([])
const [pressSumCountOtherSeventeen,setPressSumCountOtherSeventeen] =useState([])
const [pressSumCountOtherEighteen,setPressSumCountOtherEighteen] =useState([])



const [pressSumCountOtherNineteen,setPressSumCountOtherNineteen] =useState([])
const [pressSumCountOtherTwenty,setPressSumCountOtherTwenty] =useState([])
const [pressSumCountOtherTwentyOne,setPressSumCountOtherTwentyOne] =useState([])
const [pressSumCountOtherTwentyTwo,setPressSumCountOtherTwentyTwo] =useState([])
const [pressSumCountOtherTwentyThree,setPressSumCountOtherTwentyThree] =useState([])
const [pressSumCountOtherTwentyFour,setPressSumCountOtherTwentyFour] =useState([])
const [pressSumCountOtherTwentyFive,setPressSumCountOtherTwentyFive] =useState([])
const [pressSumCountOtherTwentySix,setPressSumCountOtherTwentySix] =useState([])
const [pressSumCountOtherTwentySeven,setPressSumCountOtherTwentySeven] =useState([])
const [pressSumCountOtherTwentyEight,setPressSumCountOtherTwentyEight] =useState([])
const [pressSumCountOtherTwentyNine,setPressSumCountOtherTwentyNine] =useState([])
const [pressSumCountOtherThirty ,setPressSumCountOtherThirty] =useState([])
const [pressSumCountOtherThirtyOne,setPressSumCountOtherThirtyOne] =useState([])



   const handleOptionOne = (e) => {
      setShift(e.target.value) }

      var newd = new Date(ddate);
      let monthNumber = newd.getMonth() + 1;
      let yearNumber = newd.getFullYear();
      let dateNumber = newd.getDate();
    
      var dateone = yearNumber + '-' + monthNumber + '-' + '1'



    
      var nextDay;
    
    
      nextDay = new Date(ddate);
      nextDay.setDate(nextDay.getDate() + 2);
    
    
      let monthNumberTwo = nextDay.getMonth() + 1
      let yearNumberTwo = nextDay.getFullYear()
      let dateNumberTwo = nextDay.getDate()

   

      //console.log( moment(new Date(dateone).setDate(new Date(dateone).getDate() + 2)).format('MMM DD'));


let date29 =new Date(new Date(dateone).setDate(new Date(dateone).getDate() + 28)) 


    let monthNumber29 = date29.getMonth() + 1
      let yearNumber29 = date29.getFullYear()
      let dateNumber29 = date29.getDate()



      let date30 =new Date(new Date(dateone).setDate(new Date(dateone).getDate() + 29)) 


    let monthNumber30 = date30.getMonth() + 1
      let yearNumber30 = date30.getFullYear()
      let dateNumber30 = date30.getDate()


      let date31 =new Date(new Date(dateone).setDate(new Date(dateone).getDate() + 30)) 


    let monthNumber31 = date31.getMonth() + 1
      let yearNumber31 = date31.getFullYear()
      let dateNumber31 = date31.getDate()






    
      var datetwo = yearNumber + '-' + monthNumber + '-' +  2
      var datethree = yearNumber + '-' + monthNumber + '-' + 3
      var datefour = yearNumber + '-' + monthNumber + '-' + 4
      var datefive = yearNumber + '-' + monthNumber + '-' + 5
      var datesix = yearNumber + '-' + monthNumber + '-' +  6
      var dateseven = yearNumber + '-' + monthNumber + '-' +  7
      var dateeight = yearNumber + '-' + monthNumber + '-' +  8
      var datenine = yearNumber + '-' + monthNumber + '-' +  9
      var dateten = yearNumber + '-' + monthNumber + '-' +  10
      var dateeleven = yearNumber + '-' + monthNumber + '-' + 11
      var datetweleve = yearNumber + '-' + monthNumber + '-' + 12
      var datethirteen = yearNumber + '-' + monthNumber + '-' +  13
      var datefourteen = yearNumber + '-' + monthNumber + '-' +  14
      var datefifteen = yearNumber + '-' + monthNumber + '-' +  15
      var datesixteen = yearNumber + '-' + monthNumber + '-' +  16
      var dateseventeen = yearNumber + '-' + monthNumber + '-' +  17
      var dateeighteen = yearNumber + '-' + monthNumber + '-' + 18
      var datenineteen = yearNumber + '-' + monthNumber + '-' + 19
      var datetwenty = yearNumber + '-' + monthNumber + '-' +  20
      var datetwentyone = yearNumber + '-' + monthNumber + '-' +  + 21
      var datetwentytwo = yearNumber + '-' + monthNumber + '-' + 22
      var datetwentythree = yearNumber + '-' + monthNumber + '-' + 23
      var datetwentyfour = yearNumber + '-' + monthNumber + '-' +  24
      var datetwentyfive = yearNumber + '-' + monthNumber + '-' + 25
      var datetwentysix = yearNumber + '-' + monthNumber + '-' + 26
      var datetwentyseven = yearNumber + '-' + monthNumber + '-' + 27
      var datetwentyeight = yearNumber + '-' + monthNumber + '-' +  28
      var datetwentynine = yearNumber29 + '-' + monthNumber29 + '-' + dateNumber29
      var datethirty = yearNumber30 + '-' + monthNumber30 + '-' + dateNumber30
      var datethirtyone = yearNumber31 + '-' + monthNumber31 + '-' + dateNumber31



      //console.log(datetwentynine);


//console.log(datetwo,datethree);







      const fetchDataShiftPressWiseKpiBdOne = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateone}/${datetwo}/${shift}`);
       
           setPressSumBdOne(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };
       


       const fetchDataShiftPressWiseKpiBdTwo = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwo}/${datethree}/${shift}`);
       
           setPressSumBdTwo(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };
       

//console.log(pressSumBdTwo);


       const fetchDataShiftPressWiseKpiBdThree = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datethree}/${datefour}/${shift}`);
       
           setPressSumBdThree(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };
       

       const fetchDataShiftPressWiseKpiBdFour = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datefour}/${datefive}/${shift}`);
       
           setPressSumBdFour(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdFive = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datefive}/${datesix}/${shift}`);
       
           setPressSumBdFive(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };

       const fetchDataShiftPressWiseKpiBdSix = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datefive}/${datesix}/${shift}`);
       
           setPressSumBdSix(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdSeven = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datesix}/${dateseven}/${shift}`);
       
           setPressSumBdSeven(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdEight = async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateeight}/${datenine}/${shift}`);
       
           setPressSumBdEight(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };

       const fetchDataShiftPressWiseKpiBdNine= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datenine}/${dateten}/${shift}`);
       
           setPressSumBdNine(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateten}/${dateeleven}/${shift}`);
       
           setPressSumBdTen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdEleven= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateeleven}/${datetweleve}/${shift}`);
       
           setPressSumBdEleven(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };

       const fetchDataShiftPressWiseKpiBdTwelve= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetweleve}/${datethirteen}/${shift}`);
       
           setPressSumBdTwelve(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdThirteen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datethirteen}/${datefourteen}/${shift}`);
       
           setPressSumBdThirteen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdFourteen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datefourteen}/${datefifteen}/${shift}`);
       
           setPressSumBdFourteen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdFifteen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datefifteen}/${datesixteen}/${shift}`);
       
           setPressSumBdFifteen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdSixteen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datesixteen}/${dateseventeen}/${shift}`);
       
           setPressSumBdSixteen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdSeventeen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateseventeen}/${dateeighteen}/${shift}`);
       
           setPressSumBdSeventeen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdEighteen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${dateeighteen}/${datenineteen}/${shift}`);
       
           setPressSumBdEighteen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };




       const fetchDataShiftPressWiseKpiBdNineteen= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datenineteen}/${datenineteen}/${shift}`);
       
           setPressSumBdNineteen(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTwenty= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwenty}/${datetwentyone}/${shift}`);
       
           setPressSumBdTwenty(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };




       const fetchDataShiftPressWiseKpiBdTwentyOne= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentyone}/${datetwentytwo}/${shift}`);
       
           setPressSumBdTwentyOne(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTwentyTwo= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentytwo}/${datetwentythree}/${shift}`);
       
           setPressSumBdTwentyTwo(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdTwentyThree= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentythree}/${datetwentyfour}/${shift}`);
       
           setPressSumBdTwentyThree(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



       const fetchDataShiftPressWiseKpiBdTwentyFour= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentyfour}/${datetwentyfive}/${shift}`);
       
           setPressSumBdTwentyFour(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTwentyFive= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentyfive}/${datetwentysix}/${shift}`);
       
           setPressSumBdTwentyFive(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTwentySix= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentysix}/${datetwentyseven}/${shift}`);
       
           setPressSumBdTwentySix(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTwentySeven= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentyseven}/${datetwentyeight}/${shift}`);
       
           setPressSumBdTwentySeven(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };

       const fetchDataShiftPressWiseKpiBdTwentyEight= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentyeight}/${datetwentynine}/${shift}`);
       
           setPressSumBdTwentyEight(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdTwentyNine= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datetwentynine}/${datethirty}/${shift}`);
       
           setPressSumBdTwentyNine(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdThirty= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datethirty}/${datethirtyone}/${shift}`);
       
           setPressSumBdThirty(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };


       const fetchDataShiftPressWiseKpiBdThirtyOne= async () => {

         try {
       
           //       ///////////////////////////////////////////////////
           const responsePressOne = await api.get(`/kpi/kpishift/bd/${datethirtyone}/${datethirtyone}/${shift}`);
       
           setPressSumBdThirtyOne(responsePressOne.data.data.data);
       
         } catch (err) {
           console.log(err);
         }
       };



////total


const fetchDataTotalPressWiseKpiBdOne = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${dateone}/${datetwo}`);
 
     setPressSumBdOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 


 const fetchDataTotalPressWiseKpiBdTwo = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwo}/${datethree}`);
 
     setPressSumBdTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 




 const fetchDataTotalPressWiseKpiBdThree = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datethree}/${datefour}`);
 
     setPressSumBdThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

 const fetchDataTotalPressWiseKpiBdFour = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datefour}/${datefive}`);
 
     setPressSumBdFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdFive = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datefive}/${datesix}`);
 
     setPressSumBdFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataTotalPressWiseKpiBdSix = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datefive}/${datesix}`);
 
     setPressSumBdSix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdSeven = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datesix}/${dateseven}`);
 
     setPressSumBdSeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdEight = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${dateeight}/${datenine}`);
 
     setPressSumBdEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataTotalPressWiseKpiBdNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datenine}/${dateten}`);
 
     setPressSumBdNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${dateten}/${dateeleven}`);
 
     setPressSumBdTen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdEleven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${dateeleven}/${datetweleve}`);
 
     setPressSumBdEleven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataTotalPressWiseKpiBdTwelve= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetweleve}/${datethirteen}`);
 
     setPressSumBdTwelve(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdThirteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datethirteen}/${datefourteen}`);
 
     setPressSumBdThirteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdFourteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datefourteen}/${datefifteen}`);
 
     setPressSumBdFourteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdFifteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datefifteen}/${datesixteen}`);
 
     setPressSumBdFifteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdSixteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datesixteen}/${dateseventeen}`);
 
     setPressSumBdSixteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdSeventeen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${dateseventeen}/${dateeighteen}`);
 
     setPressSumBdSeventeen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdEighteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${dateeighteen}/${datenineteen}`);
 
     setPressSumBdEighteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataTotalPressWiseKpiBdNineteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datenineteen}/${datenineteen}`);
 
     setPressSumBdNineteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTwenty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwenty}/${datetwentyone}`);
 
     setPressSumBdTwenty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataTotalPressWiseKpiBdTwentyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentyone}/${datetwentytwo}`);
 
     setPressSumBdTwentyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTwentyTwo= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentytwo}/${datetwentythree}`);
 
     setPressSumBdTwentyTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdTwentyThree= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentythree}/${datetwentyfour}`);
 
     setPressSumBdTwentyThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataTotalPressWiseKpiBdTwentyFour= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentyfour}/${datetwentyfive}`);
 
     setPressSumBdTwentyFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTwentyFive= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentyfive}/${datetwentysix}`);
 
     setPressSumBdTwentyFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTwentySix= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentysix}/${datetwentyseven}`);
 
     setPressSumBdTwentySix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTwentySeven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentyseven}/${datetwentyeight}`);
 
     setPressSumBdTwentySeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataTotalPressWiseKpiBdTwentyEight= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentyeight}/${datetwentynine}`);
 
     setPressSumBdTwentyEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdTwentyNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datetwentynine}/${datethirty}`);
 
     setPressSumBdTwentyNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdThirty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datethirty}/${datethirtyone}`);
 
     setPressSumBdThirty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataTotalPressWiseKpiBdThirtyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/kpi/kpiTotal/bd/${datethirtyone}/${datethirtyone}`);
 
     setPressSumBdThirtyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }}



/////////////////timegap





const fetchDataShiftPressWiseKpiTimeGapOne = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${dateone}/${datetwo}/${shift}`);
 
     setPressSumTimeGapOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 
 console.log(pressSumTimeGapOne);

 const fetchDataShiftPressWiseKpiTimeGapTwo = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwo}/${datethree}/${shift}`);
 
     setPressSumTimeGapTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

//console.log(pressSumTimeGapTwo);


 const fetchDataShiftPressWiseKpiTimeGapThree = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datethree}/${datefour}/${shift}`);
 
     setPressSumTimeGapThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

 const fetchDataShiftPressWiseKpiTimeGapFour = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datefour}/${datefive}/${shift}`);
 
     setPressSumTimeGapFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapFive = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datefive}/${datesix}/${shift}`);
 
     setPressSumTimeGapFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiTimeGapSix = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datefive}/${datesix}/${shift}`);
 
     setPressSumTimeGapSix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapSeven = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datesix}/${dateseven}/${shift}`);
 
     setPressSumTimeGapSeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapEight = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${dateeight}/${datenine}/${shift}`);
 
     setPressSumTimeGapEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiTimeGapNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datenine}/${dateten}/${shift}`);
 
     setPressSumTimeGapNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${dateten}/${dateeleven}/${shift}`);
 
     setPressSumTimeGapTen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapEleven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${dateeleven}/${datetweleve}/${shift}`);
 
     setPressSumTimeGapEleven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiTimeGapTwelve= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetweleve}/${datethirteen}/${shift}`);
 
     setPressSumTimeGapTwelve(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapThirteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datethirteen}/${datefourteen}/${shift}`);
 
     setPressSumTimeGapThirteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapFourteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datefourteen}/${datefifteen}/${shift}`);
 
     setPressSumTimeGapFourteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapFifteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datefifteen}/${datesixteen}/${shift}`);
 
     setPressSumTimeGapFifteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapSixteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datesixteen}/${dateseventeen}/${shift}`);
 
     setPressSumTimeGapSixteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapSeventeen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${dateseventeen}/${dateeighteen}/${shift}`);
 
     setPressSumTimeGapSeventeen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapEighteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${dateeighteen}/${datenineteen}/${shift}`);
 
     setPressSumTimeGapEighteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataShiftPressWiseKpiTimeGapNineteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datenineteen}/${datenineteen}/${shift}`);
 
     setPressSumTimeGapNineteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTwenty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwenty}/${datetwentyone}/${shift}`);
 
     setPressSumTimeGapTwenty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataShiftPressWiseKpiTimeGapTwentyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentyone}/${datetwentytwo}/${shift}`);
 
     setPressSumTimeGapTwentyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTwentyTwo= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentytwo}/${datetwentythree}/${shift}`);
 
     setPressSumTimeGapTwentyTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapTwentyThree= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentythree}/${datetwentyfour}/${shift}`);
 
     setPressSumTimeGapTwentyThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiTimeGapTwentyFour= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentyfour}/${datetwentyfive}/${shift}`);
 
     setPressSumTimeGapTwentyFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTwentyFive= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentyfive}/${datetwentysix}/${shift}`);
 
     setPressSumTimeGapTwentyFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTwentySix= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentysix}/${datetwentyseven}/${shift}`);
 
     setPressSumTimeGapTwentySix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTwentySeven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentyseven}/${datetwentyeight}/${shift}`);
 
     setPressSumTimeGapTwentySeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiTimeGapTwentyEight= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentyeight}/${datetwentynine}/${shift}`);
 
     setPressSumTimeGapTwentyEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapTwentyNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datetwentynine}/${datethirty}/${shift}`);
 
     setPressSumTimeGapTwentyNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapThirty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datethirty}/${datethirtyone}/${shift}`);
 
     setPressSumTimeGapThirty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiTimeGapThirtyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/presswiseline/presswisetimegap/shift/${datethirtyone}/${datethirtyone}/${shift}`);
 
     setPressSumTimeGapThirtyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



////total


const fetchDataTotalPressWiseKpiTimeGapOne = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${dateone}/${datetwo}`);

setPressSumTimeGapOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapTwo = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwo}/${datethree}`);

setPressSumTimeGapTwo(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};





const fetchDataTotalPressWiseKpiTimeGapThree = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datethree}/${datefour}`);

setPressSumTimeGapThree(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapFour = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datefour}/${datefive}`);

setPressSumTimeGapFour(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapFive = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datefive}/${datesix}`);

setPressSumTimeGapFive(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiTimeGapSix = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datefive}/${datesix}`);

setPressSumTimeGapSix(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapSeven = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datesix}/${dateseven}`);

setPressSumTimeGapSeven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapEight = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${dateeight}/${datenine}`);

setPressSumTimeGapEight(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiTimeGapNine= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datenine}/${dateten}`);

setPressSumTimeGapNine(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${dateten}/${dateeleven}`);

setPressSumTimeGapTen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapEleven= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${dateeleven}/${datetweleve}`);

setPressSumTimeGapEleven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiTimeGapTwelve= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetweleve}/${datethirteen}`);

setPressSumTimeGapTwelve(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapThirteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datethirteen}/${datefourteen}`);

setPressSumTimeGapThirteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapFourteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datefourteen}/${datefifteen}`);

setPressSumTimeGapFourteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapFifteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datefifteen}/${datesixteen}`);

setPressSumTimeGapFifteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapSixteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datesixteen}/${dateseventeen}`);

setPressSumTimeGapSixteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapSeventeen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${dateseventeen}/${dateeighteen}`);

setPressSumTimeGapSeventeen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapEighteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${dateeighteen}/${datenineteen}`);

setPressSumTimeGapEighteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};




const fetchDataTotalPressWiseKpiTimeGapNineteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datenineteen}/${datenineteen}`);

setPressSumTimeGapNineteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTwenty= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwenty}/${datetwentyone}`);

setPressSumTimeGapTwenty(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};




const fetchDataTotalPressWiseKpiTimeGapTwentyOne= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentyone}/${datetwentytwo}`);

setPressSumTimeGapTwentyOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTwentyTwo= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentytwo}/${datetwentythree}`);

setPressSumTimeGapTwentyTwo(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapTwentyThree= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentythree}/${datetwentyfour}`);

setPressSumTimeGapTwentyThree(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiTimeGapTwentyFour= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentyfour}/${datetwentyfive}`);

setPressSumTimeGapTwentyFour(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTwentyFive= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentyfive}/${datetwentysix}`);

setPressSumTimeGapTwentyFive(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTwentySix= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentysix}/${datetwentyseven}`);

setPressSumTimeGapTwentySix(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTwentySeven= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentyseven}/${datetwentyeight}`);

setPressSumTimeGapTwentySeven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiTimeGapTwentyEight= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentyeight}/${datetwentynine}`);

setPressSumTimeGapTwentyEight(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapTwentyNine= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datetwentynine}/${datethirty}`);

setPressSumTimeGapTwentyNine(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapThirty= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datethirty}/${datethirtyone}`);

setPressSumTimeGapThirty(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiTimeGapThirtyOne= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/presswiseline/presswisetimegap/total/${datethirtyone}/${datethirtyone}`);

setPressSumTimeGapThirtyOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}}


/////////COUNTA


const fetchDataShiftPressWiseKpiCountAOne = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateone}/${datetwo}/${shift}/A`);
 
     setPressSumCountAOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 


 const fetchDataShiftPressWiseKpiCountATwo = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwo}/${datethree}/${shift}/A`);
 
     setPressSumCountATwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

//console.log(pressSumCountATwo);


 const fetchDataShiftPressWiseKpiCountAThree = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datethree}/${datefour}/${shift}/A`);
 
     setPressSumCountAThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

 const fetchDataShiftPressWiseKpiCountAFour = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datefour}/${datefive}/${shift}/A`);
 
     setPressSumCountAFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountAFive = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datefive}/${datesix}/${shift}/A`);
 
     setPressSumCountAFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountASix = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datefive}/${datesix}/${shift}/A`);
 
     setPressSumCountASix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountASeven = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datesix}/${dateseven}/${shift}/A`);
 
     setPressSumCountASeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountAEight = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateeight}/${datenine}/${shift}/A`);
 
     setPressSumCountAEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountANine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datenine}/${dateten}/${shift}/A`);
 
     setPressSumCountANine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateten}/${dateeleven}/${shift}/A`);
 
     setPressSumCountATen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountAEleven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateeleven}/${datetweleve}/${shift}/A`);
 
     setPressSumCountAEleven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountATwelve= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetweleve}/${datethirteen}/${shift}/A`);
 
     setPressSumCountATwelve(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountAThirteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datethirteen}/${datefourteen}/${shift}/A`);
 
     setPressSumCountAThirteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountAFourteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datefourteen}/${datefifteen}/${shift}/A`);
 
     setPressSumCountAFourteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountAFifteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datefifteen}/${datesixteen}/${shift}/A`);
 
     setPressSumCountAFifteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountASixteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datesixteen}/${dateseventeen}/${shift}/A`);
 
     setPressSumCountASixteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountASeventeen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateseventeen}/${dateeighteen}/${shift}/A`);
 
     setPressSumCountASeventeen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountAEighteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${dateeighteen}/${datenineteen}/${shift}/A`);
 
     setPressSumCountAEighteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataShiftPressWiseKpiCountANineteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datenineteen}/${datenineteen}/${shift}/A`);
 
     setPressSumCountANineteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATwenty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwenty}/${datetwentyone}/${shift}/A`);
 
     setPressSumCountATwenty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataShiftPressWiseKpiCountATwentyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentyone}/${datetwentytwo}/${shift}/A`);
 
     setPressSumCountATwentyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATwentyTwo= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentytwo}/${datetwentythree}/${shift}/A`);
 
     setPressSumCountATwentyTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountATwentyThree= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentythree}/${datetwentyfour}/${shift}/A`);
 
     setPressSumCountATwentyThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountATwentyFour= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentyfour}/${datetwentyfive}/${shift}/A`);
 
     setPressSumCountATwentyFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATwentyFive= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentyfive}/${datetwentysix}/${shift}/A`);
 
     setPressSumCountATwentyFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATwentySix= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentysix}/${datetwentyseven}/${shift}/A`);
 
     setPressSumCountATwentySix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATwentySeven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentyseven}/${datetwentyeight}/${shift}/A`);
 
     setPressSumCountATwentySeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountATwentyEight= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentyeight}/${datetwentynine}/${shift}/A`);
 
     setPressSumCountATwentyEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountATwentyNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datetwentynine}/${datethirty}/${shift}/A`);
 
     setPressSumCountATwentyNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountAThirty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datethirty}/${datethirtyone}/${shift}/A`);
 
     setPressSumCountAThirty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountAThirtyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshift/count/${datethirtyone}/${datethirtyone}/${shift}/A`);
 
     setPressSumCountAThirtyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



////total


const fetchDataTotalPressWiseKpiCountAOne = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateone}/${datetwo}/A`);

setPressSumCountAOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountATwo = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwo}/${datethree}/A`);

setPressSumCountATwo(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};





const fetchDataTotalPressWiseKpiCountAThree = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datethree}/${datefour}/A`);

setPressSumCountAThree(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountAFour = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datefour}/${datefive}/A`);

setPressSumCountAFour(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountAFive = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datefive}/${datesix}/A`);

setPressSumCountAFive(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountASix = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datefive}/${datesix}/A`);

setPressSumCountASix(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountASeven = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datesix}/${dateseven}/A`);

setPressSumCountASeven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountAEight = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateeight}/${datenine}/A`);

setPressSumCountAEight(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountANine= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datenine}/${dateten}/A`);

setPressSumCountANine(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateten}/${dateeleven}/A`);

setPressSumCountATen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountAEleven= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateeleven}/${datetweleve}/A`);

setPressSumCountAEleven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountATwelve= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetweleve}/${datethirteen}/A`);

setPressSumCountATwelve(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountAThirteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datethirteen}/${datefourteen}/A`);

setPressSumCountAThirteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountAFourteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datefourteen}/${datefifteen}/A`);

setPressSumCountAFourteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountAFifteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datefifteen}/${datesixteen}/A`);

setPressSumCountAFifteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountASixteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datesixteen}/${dateseventeen}/A`);

setPressSumCountASixteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountASeventeen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateseventeen}/${dateeighteen}/A`);

setPressSumCountASeventeen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountAEighteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${dateeighteen}/${datenineteen}/A`);

setPressSumCountAEighteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};




const fetchDataTotalPressWiseKpiCountANineteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datenineteen}/${datenineteen}/A`);

setPressSumCountANineteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATwenty= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwenty}/${datetwentyone}/A`);

setPressSumCountATwenty(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};




const fetchDataTotalPressWiseKpiCountATwentyOne= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentyone}/${datetwentytwo}/A`);

setPressSumCountATwentyOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATwentyTwo= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentytwo}/${datetwentythree}/A`);

setPressSumCountATwentyTwo(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountATwentyThree= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentythree}/${datetwentyfour}/A`);

setPressSumCountATwentyThree(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

//console.log(pressSumCountATwentyThree);

const fetchDataTotalPressWiseKpiCountATwentyFour= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentyfour}/${datetwentyfive}/A`);

setPressSumCountATwentyFour(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATwentyFive= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentyfive}/${datetwentysix}/A`);

setPressSumCountATwentyFive(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATwentySix= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentysix}/${datetwentyseven}/A`);

setPressSumCountATwentySix(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATwentySeven= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentyseven}/${datetwentyeight}/A`);

setPressSumCountATwentySeven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountATwentyEight= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentyeight}/${datetwentynine}/A`);

setPressSumCountATwentyEight(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountATwentyNine= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datetwentynine}/${datethirty}/A`);

setPressSumCountATwentyNine(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountAThirty= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datethirty}/${datethirtyone}/A`);

setPressSumCountAThirty(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountAThirtyOne= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotal/count/${datethirtyone}/${datethirtyone}/A`);

setPressSumCountAThirtyOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}}



/////////COUNTother


const fetchDataShiftPressWiseKpiCountOtherOne = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${dateone}/${datetwo}/${shift}`);
 
     setPressSumCountOtherOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 


 const fetchDataShiftPressWiseKpiCountOtherTwo = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwo}/${datethree}/${shift}`);
 
     setPressSumCountOtherTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

//console.log(pressSumCountOtherTwo);


 const fetchDataShiftPressWiseKpiCountOtherThree = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datethree}/${datefour}/${shift}`);
 
     setPressSumCountOtherThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };
 

 const fetchDataShiftPressWiseKpiCountOtherFour = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datefour}/${datefive}/${shift}`);
 
     setPressSumCountOtherFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherFive = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datefive}/${datesix}/${shift}`);
 
     setPressSumCountOtherFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountOtherSix = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datefive}/${datesix}/${shift}`);
 
     setPressSumCountOtherSix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherSeven = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datesix}/${dateseven}/${shift}`);
 
     setPressSumCountOtherSeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherEight = async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${dateeight}/${datenine}/${shift}`);
 
     setPressSumCountOtherEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountOtherNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datenine}/${dateten}/${shift}`);
 
     setPressSumCountOtherNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${dateten}/${dateeleven}/${shift}`);
 
     setPressSumCountOtherTen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherEleven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${dateeleven}/${datetweleve}/${shift}`);
 
     setPressSumCountOtherEleven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountOtherTwelve= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetweleve}/${datethirteen}/${shift}`);
 
     setPressSumCountOtherTwelve(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherThirteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datethirteen}/${datefourteen}/${shift}`);
 
     setPressSumCountOtherThirteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherFourteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datefourteen}/${datefifteen}/${shift}`);
 
     setPressSumCountOtherFourteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherFifteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datefifteen}/${datesixteen}/${shift}`);
 
     setPressSumCountOtherFifteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherSixteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datesixteen}/${dateseventeen}/${shift}`);
 
     setPressSumCountOtherSixteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherSeventeen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${dateseventeen}/${dateeighteen}/${shift}`);
 
     setPressSumCountOtherSeventeen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherEighteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${dateeighteen}/${datenineteen}/${shift}`);
 
     setPressSumCountOtherEighteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataShiftPressWiseKpiCountOtherNineteen= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datenineteen}/${datenineteen}/${shift}`);
 
     setPressSumCountOtherNineteen(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTwenty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwenty}/${datetwentyone}/${shift}`);
 
     setPressSumCountOtherTwenty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };




 const fetchDataShiftPressWiseKpiCountOtherTwentyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentyone}/${datetwentytwo}/${shift}`);
 
     setPressSumCountOtherTwentyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTwentyTwo= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentytwo}/${datetwentythree}/${shift}`);
 
     setPressSumCountOtherTwentyTwo(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherTwentyThree= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentythree}/${datetwentyfour}/${shift}`);
 
     setPressSumCountOtherTwentyThree(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



 const fetchDataShiftPressWiseKpiCountOtherTwentyFour= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentyfour}/${datetwentyfive}/${shift}`);
 
     setPressSumCountOtherTwentyFour(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTwentyFive= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentyfive}/${datetwentysix}/${shift}`);
 
     setPressSumCountOtherTwentyFive(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTwentySix= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentysix}/${datetwentyseven}/${shift}`);
 
     setPressSumCountOtherTwentySix(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTwentySeven= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentyseven}/${datetwentyeight}/${shift}`);
 
     setPressSumCountOtherTwentySeven(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };

 const fetchDataShiftPressWiseKpiCountOtherTwentyEight= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentyeight}/${datetwentynine}/${shift}`);
 
     setPressSumCountOtherTwentyEight(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherTwentyNine= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datetwentynine}/${datethirty}/${shift}`);
 
     setPressSumCountOtherTwentyNine(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherThirty= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datethirty}/${datethirtyone}/${shift}`);
 
     setPressSumCountOtherThirty(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };


 const fetchDataShiftPressWiseKpiCountOtherThirtyOne= async () => {

   try {
 
     //       ///////////////////////////////////////////////////
     const responsePressOne = await api.get(`/qualitygrade/qualityshiftother/count/${datethirtyone}/${datethirtyone}/${shift}`);
 
     setPressSumCountOtherThirtyOne(responsePressOne.data.data.data);
 
   } catch (err) {
     console.log(err);
   }
 };



////total


const fetchDataTotalPressWiseKpiCountOtherOne = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${dateone}/${datetwo}`);

setPressSumCountOtherOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherTwo = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwo}/${datethree}`);

setPressSumCountOtherTwo(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};





const fetchDataTotalPressWiseKpiCountOtherThree = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datethree}/${datefour}`);

setPressSumCountOtherThree(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherFour = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datefour}/${datefive}`);

setPressSumCountOtherFour(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherFive = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datefive}/${datesix}`);

setPressSumCountOtherFive(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountOtherSix = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datefive}/${datesix}`);

setPressSumCountOtherSix(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherSeven = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datesix}/${dateseven}`);

setPressSumCountOtherSeven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherEight = async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${dateeight}/${datenine}`);

setPressSumCountOtherEight(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountOtherNine= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datenine}/${dateten}`);

setPressSumCountOtherNine(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${dateten}/${dateeleven}`);

setPressSumCountOtherTen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherEleven= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${dateeleven}/${datetweleve}`);

setPressSumCountOtherEleven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountOtherTwelve= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetweleve}/${datethirteen}`);

setPressSumCountOtherTwelve(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherThirteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datethirteen}/${datefourteen}`);

setPressSumCountOtherThirteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherFourteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datefourteen}/${datefifteen}`);

setPressSumCountOtherFourteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherFifteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datefifteen}/${datesixteen}`);

setPressSumCountOtherFifteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherSixteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datesixteen}/${dateseventeen}`);

setPressSumCountOtherSixteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherSeventeen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${dateseventeen}/${dateeighteen}`);

setPressSumCountOtherSeventeen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherEighteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${dateeighteen}/${datenineteen}`);

setPressSumCountOtherEighteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};




const fetchDataTotalPressWiseKpiCountOtherNineteen= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datenineteen}/${datenineteen}`);

setPressSumCountOtherNineteen(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTwenty= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwenty}/${datetwentyone}`);

setPressSumCountOtherTwenty(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};




const fetchDataTotalPressWiseKpiCountOtherTwentyOne= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentyone}/${datetwentytwo}`);

setPressSumCountOtherTwentyOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTwentyTwo= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentytwo}/${datetwentythree}`);

setPressSumCountOtherTwentyTwo(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherTwentyThree= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentythree}/${datetwentyfour}`);

setPressSumCountOtherTwentyThree(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};



const fetchDataTotalPressWiseKpiCountOtherTwentyFour= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentyfour}/${datetwentyfive}`);

setPressSumCountOtherTwentyFour(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTwentyFive= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentyfive}/${datetwentysix}`);

setPressSumCountOtherTwentyFive(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTwentySix= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentysix}/${datetwentyseven}`);

setPressSumCountOtherTwentySix(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTwentySeven= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentyseven}/${datetwentyeight}`);

setPressSumCountOtherTwentySeven(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};

const fetchDataTotalPressWiseKpiCountOtherTwentyEight= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentyeight}/${datetwentynine}`);

setPressSumCountOtherTwentyEight(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherTwentyNine= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datetwentynine}/${datethirty}`);

setPressSumCountOtherTwentyNine(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherThirty= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datethirty}/${datethirtyone}`);

setPressSumCountOtherThirty(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}
};


const fetchDataTotalPressWiseKpiCountOtherThirtyOne= async () => {

try {

//       ///////////////////////////////////////////////////
const responsePressOne = await api.get(`/qualitygrade/qualitytotalother/count/${datethirtyone}/${datethirtyone}`);

setPressSumCountOtherThirtyOne(responsePressOne.data.data.data);

} catch (err) {
console.log(err);
}}






useEffect(()=>{

   if (shift === 'A' || shift === 'B' || shift === 'C') {

      fetchDataShiftPressWiseKpiBdOne()
      fetchDataShiftPressWiseKpiBdTwo()  
      fetchDataShiftPressWiseKpiBdThree()
      fetchDataShiftPressWiseKpiBdFour()  
      fetchDataShiftPressWiseKpiBdFive()
      fetchDataShiftPressWiseKpiBdSix()  
      fetchDataShiftPressWiseKpiBdSeven()
      fetchDataShiftPressWiseKpiBdEight()  
      fetchDataShiftPressWiseKpiBdNine()
      fetchDataShiftPressWiseKpiBdTen()  
      fetchDataShiftPressWiseKpiBdEleven()
      fetchDataShiftPressWiseKpiBdTwelve()  
      
      fetchDataShiftPressWiseKpiBdThirteen()
      fetchDataShiftPressWiseKpiBdFourteen()  
      fetchDataShiftPressWiseKpiBdFifteen()
      fetchDataShiftPressWiseKpiBdSixteen()  
      fetchDataShiftPressWiseKpiBdSeventeen()
      fetchDataShiftPressWiseKpiBdEighteen()  
      fetchDataShiftPressWiseKpiBdNineteen()
      fetchDataShiftPressWiseKpiBdTwenty()  
      fetchDataShiftPressWiseKpiBdTwentyOne()
      fetchDataShiftPressWiseKpiBdTwentyTwo()  
      fetchDataShiftPressWiseKpiBdTwentyThree()
      fetchDataShiftPressWiseKpiBdTwentyFour()  

      
      fetchDataShiftPressWiseKpiBdTwentyFive()
      fetchDataShiftPressWiseKpiBdTwentySix()  
      fetchDataShiftPressWiseKpiBdTwentySeven()
      fetchDataShiftPressWiseKpiBdTwentyEight()  
      fetchDataShiftPressWiseKpiBdTwentyNine()
      fetchDataShiftPressWiseKpiBdThirty()  
      fetchDataShiftPressWiseKpiBdThirtyOne()






      ////////timegap


      fetchDataShiftPressWiseKpiTimeGapOne()
      fetchDataShiftPressWiseKpiTimeGapTwo()  
      fetchDataShiftPressWiseKpiTimeGapThree()
      fetchDataShiftPressWiseKpiTimeGapFour()  
      fetchDataShiftPressWiseKpiTimeGapFive()
      fetchDataShiftPressWiseKpiTimeGapSix()  
      fetchDataShiftPressWiseKpiTimeGapSeven()
      fetchDataShiftPressWiseKpiTimeGapEight()  
      fetchDataShiftPressWiseKpiTimeGapNine()
      fetchDataShiftPressWiseKpiTimeGapTen()  
      fetchDataShiftPressWiseKpiTimeGapEleven()
      fetchDataShiftPressWiseKpiTimeGapTwelve()  
      
      fetchDataShiftPressWiseKpiTimeGapThirteen()
      fetchDataShiftPressWiseKpiTimeGapFourteen()  
      fetchDataShiftPressWiseKpiTimeGapFifteen()
      fetchDataShiftPressWiseKpiTimeGapSixteen()  
      fetchDataShiftPressWiseKpiTimeGapSeventeen()
      fetchDataShiftPressWiseKpiTimeGapEighteen()  
      fetchDataShiftPressWiseKpiTimeGapNineteen()
      fetchDataShiftPressWiseKpiTimeGapTwenty()  
      fetchDataShiftPressWiseKpiTimeGapTwentyOne()
      fetchDataShiftPressWiseKpiTimeGapTwentyTwo()  
      fetchDataShiftPressWiseKpiTimeGapTwentyThree()
      fetchDataShiftPressWiseKpiTimeGapTwentyFour()  

      
      fetchDataShiftPressWiseKpiTimeGapTwentyFive()
      fetchDataShiftPressWiseKpiTimeGapTwentySix()  
      fetchDataShiftPressWiseKpiTimeGapTwentySeven()
      fetchDataShiftPressWiseKpiTimeGapTwentyEight()  
      fetchDataShiftPressWiseKpiTimeGapTwentyNine()
      fetchDataShiftPressWiseKpiTimeGapThirty()  
      fetchDataShiftPressWiseKpiTimeGapThirtyOne()



//COUNTA

fetchDataShiftPressWiseKpiCountAOne()
fetchDataShiftPressWiseKpiCountATwo()  
fetchDataShiftPressWiseKpiCountAThree()
fetchDataShiftPressWiseKpiCountAFour()  
fetchDataShiftPressWiseKpiCountAFive()
fetchDataShiftPressWiseKpiCountASix()  
fetchDataShiftPressWiseKpiCountASeven()
fetchDataShiftPressWiseKpiCountAEight()  
fetchDataShiftPressWiseKpiCountANine()
fetchDataShiftPressWiseKpiCountATen()  
fetchDataShiftPressWiseKpiCountAEleven()
fetchDataShiftPressWiseKpiCountATwelve()  

fetchDataShiftPressWiseKpiCountAThirteen()
fetchDataShiftPressWiseKpiCountAFourteen()  
fetchDataShiftPressWiseKpiCountAFifteen()
fetchDataShiftPressWiseKpiCountASixteen()  
fetchDataShiftPressWiseKpiCountASeventeen()
fetchDataShiftPressWiseKpiCountAEighteen()  
fetchDataShiftPressWiseKpiCountANineteen()
fetchDataShiftPressWiseKpiCountATwenty()  
fetchDataShiftPressWiseKpiCountATwentyOne()
fetchDataShiftPressWiseKpiCountATwentyTwo()  
fetchDataShiftPressWiseKpiCountATwentyThree()
fetchDataShiftPressWiseKpiCountATwentyFour()  


fetchDataShiftPressWiseKpiCountATwentyFive()
fetchDataShiftPressWiseKpiCountATwentySix()  
fetchDataShiftPressWiseKpiCountATwentySeven()
fetchDataShiftPressWiseKpiCountATwentyEight()  
fetchDataShiftPressWiseKpiCountATwentyNine()
fetchDataShiftPressWiseKpiCountAThirty()  
fetchDataShiftPressWiseKpiCountAThirtyOne()



//////////

//COUNTotal

fetchDataShiftPressWiseKpiCountOtherOne()
fetchDataShiftPressWiseKpiCountOtherTwo()  
fetchDataShiftPressWiseKpiCountOtherThree()
fetchDataShiftPressWiseKpiCountOtherFour()  
fetchDataShiftPressWiseKpiCountOtherFive()
fetchDataShiftPressWiseKpiCountOtherSix()  
fetchDataShiftPressWiseKpiCountOtherSeven()
fetchDataShiftPressWiseKpiCountOtherEight()  
fetchDataShiftPressWiseKpiCountOtherNine()
fetchDataShiftPressWiseKpiCountOtherTen()  
fetchDataShiftPressWiseKpiCountOtherEleven()
fetchDataShiftPressWiseKpiCountOtherTwelve()  

fetchDataShiftPressWiseKpiCountOtherThirteen()
fetchDataShiftPressWiseKpiCountOtherFourteen()  
fetchDataShiftPressWiseKpiCountOtherFifteen()
fetchDataShiftPressWiseKpiCountOtherSixteen()  
fetchDataShiftPressWiseKpiCountOtherSeventeen()
fetchDataShiftPressWiseKpiCountOtherEighteen()  
fetchDataShiftPressWiseKpiCountOtherNineteen()
fetchDataShiftPressWiseKpiCountOtherTwenty()  
fetchDataShiftPressWiseKpiCountOtherTwentyOne()
fetchDataShiftPressWiseKpiCountOtherTwentyTwo()  
fetchDataShiftPressWiseKpiCountOtherTwentyThree()
fetchDataShiftPressWiseKpiCountOtherTwentyFour()  


fetchDataShiftPressWiseKpiCountOtherTwentyFive()
fetchDataShiftPressWiseKpiCountOtherTwentySix()  
fetchDataShiftPressWiseKpiCountOtherTwentySeven()
fetchDataShiftPressWiseKpiCountOtherTwentyEight()  
fetchDataShiftPressWiseKpiCountOtherTwentyNine()
fetchDataShiftPressWiseKpiCountOtherThirty()  
fetchDataShiftPressWiseKpiCountOtherThirtyOne()








     
   }
   
   else{



      fetchDataTotalPressWiseKpiBdOne()
      fetchDataTotalPressWiseKpiBdTwo()  
      fetchDataTotalPressWiseKpiBdThree()
      fetchDataTotalPressWiseKpiBdFour()  
      fetchDataTotalPressWiseKpiBdFive()
      fetchDataTotalPressWiseKpiBdSix()  
      fetchDataTotalPressWiseKpiBdSeven()
      fetchDataTotalPressWiseKpiBdEight()  
      fetchDataTotalPressWiseKpiBdNine()
      fetchDataTotalPressWiseKpiBdTen()  
      fetchDataTotalPressWiseKpiBdEleven()
      fetchDataTotalPressWiseKpiBdTwelve()  
      
      fetchDataTotalPressWiseKpiBdThirteen()
      fetchDataTotalPressWiseKpiBdFourteen()  
      fetchDataTotalPressWiseKpiBdFifteen()
      fetchDataTotalPressWiseKpiBdSixteen()  
      fetchDataTotalPressWiseKpiBdSeventeen()
      fetchDataTotalPressWiseKpiBdEighteen()  
      fetchDataTotalPressWiseKpiBdNineteen()
      fetchDataTotalPressWiseKpiBdTwenty()  
      fetchDataTotalPressWiseKpiBdTwentyOne()
      fetchDataTotalPressWiseKpiBdTwentyTwo()  
      fetchDataTotalPressWiseKpiBdTwentyThree()
      fetchDataTotalPressWiseKpiBdTwentyFour()  

      
      fetchDataTotalPressWiseKpiBdTwentyFive()
      fetchDataTotalPressWiseKpiBdTwentySix()  
      fetchDataTotalPressWiseKpiBdTwentySeven()
      fetchDataTotalPressWiseKpiBdTwentyEight()  
      fetchDataTotalPressWiseKpiBdTwentyNine()
      fetchDataTotalPressWiseKpiBdThirty()  
      fetchDataTotalPressWiseKpiBdThirtyOne()

      ////////////timegap


      fetchDataTotalPressWiseKpiTimeGapOne()
      fetchDataTotalPressWiseKpiTimeGapTwo()  
      fetchDataTotalPressWiseKpiTimeGapThree()
      fetchDataTotalPressWiseKpiTimeGapFour()  
      fetchDataTotalPressWiseKpiTimeGapFive()
      fetchDataTotalPressWiseKpiTimeGapSix()  
      fetchDataTotalPressWiseKpiTimeGapSeven()
      fetchDataTotalPressWiseKpiTimeGapEight()  
      fetchDataTotalPressWiseKpiTimeGapNine()
      fetchDataTotalPressWiseKpiTimeGapTen()  
      fetchDataTotalPressWiseKpiTimeGapEleven()
      fetchDataTotalPressWiseKpiTimeGapTwelve()  
      
      fetchDataTotalPressWiseKpiTimeGapThirteen()
      fetchDataTotalPressWiseKpiTimeGapFourteen()  
      fetchDataTotalPressWiseKpiTimeGapFifteen()
      fetchDataTotalPressWiseKpiTimeGapSixteen()  
      fetchDataTotalPressWiseKpiTimeGapSeventeen()
      fetchDataTotalPressWiseKpiTimeGapEighteen()  
      fetchDataTotalPressWiseKpiTimeGapNineteen()
      fetchDataTotalPressWiseKpiTimeGapTwenty()  
      fetchDataTotalPressWiseKpiTimeGapTwentyOne()
      fetchDataTotalPressWiseKpiTimeGapTwentyTwo()  
      fetchDataTotalPressWiseKpiTimeGapTwentyThree()
      fetchDataTotalPressWiseKpiTimeGapTwentyFour()  

      
      fetchDataTotalPressWiseKpiTimeGapTwentyFive()
      fetchDataTotalPressWiseKpiTimeGapTwentySix()  
      fetchDataTotalPressWiseKpiTimeGapTwentySeven()
      fetchDataTotalPressWiseKpiTimeGapTwentyEight()  
      fetchDataTotalPressWiseKpiTimeGapTwentyNine()
      fetchDataTotalPressWiseKpiTimeGapThirty()  
      fetchDataTotalPressWiseKpiTimeGapThirtyOne()
     




      //COUNTA

fetchDataTotalPressWiseKpiCountAOne()
fetchDataTotalPressWiseKpiCountATwo()  
fetchDataTotalPressWiseKpiCountAThree()
fetchDataTotalPressWiseKpiCountAFour()  
fetchDataTotalPressWiseKpiCountAFive()
fetchDataTotalPressWiseKpiCountASix()  
fetchDataTotalPressWiseKpiCountASeven()
fetchDataTotalPressWiseKpiCountAEight()  
fetchDataTotalPressWiseKpiCountANine()
fetchDataTotalPressWiseKpiCountATen()  
fetchDataTotalPressWiseKpiCountAEleven()
fetchDataTotalPressWiseKpiCountATwelve()  

fetchDataTotalPressWiseKpiCountAThirteen()
fetchDataTotalPressWiseKpiCountAFourteen()  
fetchDataTotalPressWiseKpiCountAFifteen()
fetchDataTotalPressWiseKpiCountASixteen()  
fetchDataTotalPressWiseKpiCountASeventeen()
fetchDataTotalPressWiseKpiCountAEighteen()  
fetchDataTotalPressWiseKpiCountANineteen()
fetchDataTotalPressWiseKpiCountATwenty()  
fetchDataTotalPressWiseKpiCountATwentyOne()
fetchDataTotalPressWiseKpiCountATwentyTwo()  
fetchDataTotalPressWiseKpiCountATwentyThree()
fetchDataTotalPressWiseKpiCountATwentyFour()  


fetchDataTotalPressWiseKpiCountATwentyFive()
fetchDataTotalPressWiseKpiCountATwentySix()  
fetchDataTotalPressWiseKpiCountATwentySeven()
fetchDataTotalPressWiseKpiCountATwentyEight()  
fetchDataTotalPressWiseKpiCountATwentyNine()
fetchDataTotalPressWiseKpiCountAThirty()  
fetchDataTotalPressWiseKpiCountAThirtyOne()



/////////////

 //COUNTtotal

 fetchDataTotalPressWiseKpiCountOtherOne()
 fetchDataTotalPressWiseKpiCountOtherTwo()  
 fetchDataTotalPressWiseKpiCountOtherThree()
 fetchDataTotalPressWiseKpiCountOtherFour()  
 fetchDataTotalPressWiseKpiCountOtherFive()
 fetchDataTotalPressWiseKpiCountOtherSix()  
 fetchDataTotalPressWiseKpiCountOtherSeven()
 fetchDataTotalPressWiseKpiCountOtherEight()  
 fetchDataTotalPressWiseKpiCountOtherNine()
 fetchDataTotalPressWiseKpiCountOtherTen()  
 fetchDataTotalPressWiseKpiCountOtherEleven()
 fetchDataTotalPressWiseKpiCountOtherTwelve()  
 
 fetchDataTotalPressWiseKpiCountOtherThirteen()
 fetchDataTotalPressWiseKpiCountOtherFourteen()  
 fetchDataTotalPressWiseKpiCountOtherFifteen()
 fetchDataTotalPressWiseKpiCountOtherSixteen()  
 fetchDataTotalPressWiseKpiCountOtherSeventeen()
 fetchDataTotalPressWiseKpiCountOtherEighteen()  
 fetchDataTotalPressWiseKpiCountOtherNineteen()
 fetchDataTotalPressWiseKpiCountOtherTwenty()  
 fetchDataTotalPressWiseKpiCountOtherTwentyOne()
 fetchDataTotalPressWiseKpiCountOtherTwentyTwo()  
 fetchDataTotalPressWiseKpiCountOtherTwentyThree()
 fetchDataTotalPressWiseKpiCountOtherTwentyFour()  
 
 
 fetchDataTotalPressWiseKpiCountOtherTwentyFive()
 fetchDataTotalPressWiseKpiCountOtherTwentySix()  
 fetchDataTotalPressWiseKpiCountOtherTwentySeven()
 fetchDataTotalPressWiseKpiCountOtherTwentyEight()  
 fetchDataTotalPressWiseKpiCountOtherTwentyNine()
 fetchDataTotalPressWiseKpiCountOtherThirty()  
 fetchDataTotalPressWiseKpiCountOtherThirtyOne()
 

   }






},[shift,monthNumber])


//console.log(pressState);
const pressnumberSumBdOne= pressSumBdOne && pressSumBdOne.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwo= pressSumBdTwo && pressSumBdTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdThree= pressSumBdThree && pressSumBdThree.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdFour= pressSumBdFour && pressSumBdFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdFive= pressSumBdFive && pressSumBdFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdSix= pressSumBdSix && pressSumBdSix.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdSeven= pressSumBdSeven && pressSumBdSeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdEight= pressSumBdEight && pressSumBdTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdNine= pressSumBdNine && pressSumBdNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTen= pressSumBdTen && pressSumBdTen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdEleven= pressSumBdEleven && pressSumBdEleven.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTweleve= pressSumBdTwelve && pressSumBdTwelve.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdThirteen= pressSumBdThirteen && pressSumBdThirteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdFourteen= pressSumBdFourteen && pressSumBdFourteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdFifteen= pressSumBdFifteen && pressSumBdFifteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdSixteen= pressSumBdSixteen && pressSumBdSixteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdSeventeen= pressSumBdSeventeen && pressSumBdSeventeen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdEighteen= pressSumBdEighteen && pressSumBdEighteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdNineteen= pressSumBdNineteen && pressSumBdNineteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwenty= pressSumBdTwenty && pressSumBdTwenty.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyOne= pressSumBdTwo && pressSumBdTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyTwo= pressSumBdTwentyTwo && pressSumBdTwentyTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyThree= pressSumBdTwentyThree && pressSumBdTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyFour= pressSumBdTwentyFour && pressSumBdTwentyFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyFive= pressSumBdTwentyFive && pressSumBdTwentyFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentySix= pressSumBdTwentySix && pressSumBdTwentySix.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentySeven= pressSumBdTwentySeven && pressSumBdTwentySeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyEight= pressSumBdTwentyEight && pressSumBdTwentyEight.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdTwentyNine= pressSumBdTwentyNine && pressSumBdTwentyNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdThirty= pressSumBdThirty && pressSumBdThirty.filter((d) => { return d.press_no === pressState})
const pressnumberSumBdThirtyOne= pressSumBdThirtyOne && pressSumBdThirtyOne.filter((d) => { return d.press_no === pressState})






//////////timegap

const pressnumberSumTimeGapOne= pressSumTimeGapOne && pressSumTimeGapOne.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwo= pressSumTimeGapTwo && pressSumTimeGapTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapThree= pressSumTimeGapThree && pressSumTimeGapThree.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapFour= pressSumTimeGapFour && pressSumTimeGapFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapFive= pressSumTimeGapFive && pressSumTimeGapFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapSix= pressSumTimeGapSix && pressSumTimeGapSix.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapSeven= pressSumTimeGapSeven && pressSumTimeGapSeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapEight= pressSumTimeGapEight && pressSumTimeGapTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapNine= pressSumTimeGapNine && pressSumTimeGapNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTen= pressSumTimeGapTen && pressSumTimeGapTen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapEleven= pressSumTimeGapEleven && pressSumTimeGapEleven.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTweleve= pressSumTimeGapTwelve && pressSumTimeGapTwelve.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapThirteen= pressSumTimeGapThirteen && pressSumTimeGapThirteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapFourteen= pressSumTimeGapFourteen && pressSumTimeGapFourteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapFifteen= pressSumTimeGapFifteen && pressSumTimeGapFifteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapSixteen= pressSumTimeGapSixteen && pressSumTimeGapSixteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapSeventeen= pressSumTimeGapSeventeen && pressSumTimeGapSeventeen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapEighteen= pressSumTimeGapEighteen && pressSumTimeGapEighteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapNineteen= pressSumTimeGapNineteen && pressSumTimeGapNineteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwenty= pressSumTimeGapTwenty && pressSumTimeGapTwenty.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyOne= pressSumTimeGapTwo && pressSumTimeGapTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyTwo= pressSumTimeGapTwentyTwo && pressSumTimeGapTwentyTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyThree= pressSumTimeGapTwentyThree && pressSumTimeGapTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyFour= pressSumTimeGapTwentyFour && pressSumTimeGapTwentyFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyFive= pressSumTimeGapTwentyFive && pressSumTimeGapTwentyFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentySix= pressSumTimeGapTwentySix && pressSumTimeGapTwentySix.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentySeven= pressSumTimeGapTwentySeven && pressSumTimeGapTwentySeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyEight= pressSumTimeGapTwentyEight && pressSumTimeGapTwentyEight.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapTwentyNine= pressSumTimeGapTwentyNine && pressSumTimeGapTwentyNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapThirty= pressSumTimeGapThirty && pressSumTimeGapThirty.filter((d) => { return d.press_no === pressState})
const pressnumberSumTimeGapThirtyOne= pressSumTimeGapThirtyOne && pressSumTimeGapThirtyOne.filter((d) => { return d.press_no === pressState})




//////////counta

const pressnumberSumCountAOne= pressSumCountAOne && pressSumCountAOne.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwo= pressSumCountATwo && pressSumCountATwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAThree= pressSumCountAThree && pressSumCountAThree.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAFour= pressSumCountAFour && pressSumCountAFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAFive= pressSumCountAFive && pressSumCountAFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountASix= pressSumCountASix && pressSumCountASix.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountASeven= pressSumCountASeven && pressSumCountASeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAEight= pressSumCountAEight && pressSumCountATwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountANine= pressSumCountANine && pressSumCountANine.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATen= pressSumCountATen && pressSumCountATen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAEleven= pressSumCountAEleven && pressSumCountAEleven.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATweleve= pressSumCountATwelve && pressSumCountATwelve.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAThirteen= pressSumCountAThirteen && pressSumCountAThirteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAFourteen= pressSumCountAFourteen && pressSumCountAFourteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAFifteen= pressSumCountAFifteen && pressSumCountAFifteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountASixteen= pressSumCountASixteen && pressSumCountASixteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountASeventeen= pressSumCountASeventeen && pressSumCountASeventeen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAEighteen= pressSumCountAEighteen && pressSumCountAEighteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountANineteen= pressSumCountANineteen && pressSumCountANineteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwenty= pressSumCountATwenty && pressSumCountATwenty.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyOne= pressSumCountATwo && pressSumCountATwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyTwo= pressSumCountATwentyTwo && pressSumCountATwentyTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyThree= pressSumCountATwentyThree && pressSumCountATwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyFour= pressSumCountATwentyFour && pressSumCountATwentyFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyFive= pressSumCountATwentyFive && pressSumCountATwentyFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentySix= pressSumCountATwentySix && pressSumCountATwentySix.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentySeven= pressSumCountATwentySeven && pressSumCountATwentySeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyEight= pressSumCountATwentyEight && pressSumCountATwentyEight.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountATwentyNine= pressSumCountATwentyNine && pressSumCountATwentyNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAThirty= pressSumCountAThirty && pressSumCountAThirty.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountAThirtyOne= pressSumCountAThirtyOne && pressSumCountAThirtyOne.filter((d) => { return d.press_no === pressState})


//console.log(pressnumberSumCountATwentyThree);
//console.log(pressSumCountATwentyThree);

//countother


const pressnumberSumCountOtherOne= pressSumCountOtherOne && pressSumCountOtherOne.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwo= pressSumCountOtherTwo && pressSumCountOtherTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherThree= pressSumCountOtherThree && pressSumCountOtherThree.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherFour= pressSumCountOtherFour && pressSumCountOtherFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherFive= pressSumCountOtherFive && pressSumCountOtherFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherSix= pressSumCountOtherSix && pressSumCountOtherSix.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherSeven= pressSumCountOtherSeven && pressSumCountOtherSeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherEight= pressSumCountOtherEight && pressSumCountOtherTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherNine= pressSumCountOtherNine && pressSumCountOtherNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTen= pressSumCountOtherTen && pressSumCountOtherTen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherEleven= pressSumCountOtherEleven && pressSumCountOtherEleven.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTweleve= pressSumCountOtherTwelve && pressSumCountOtherTwelve.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherThirteen= pressSumCountOtherThirteen && pressSumCountOtherThirteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherFourteen= pressSumCountOtherFourteen && pressSumCountOtherFourteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherFifteen= pressSumCountOtherFifteen && pressSumCountOtherFifteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherSixteen= pressSumCountOtherSixteen && pressSumCountOtherSixteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherSeventeen= pressSumCountOtherSeventeen && pressSumCountOtherSeventeen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherEighteen= pressSumCountOtherEighteen && pressSumCountOtherEighteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherNineteen= pressSumCountOtherNineteen && pressSumCountOtherNineteen.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwenty= pressSumCountOtherTwenty && pressSumCountOtherTwenty.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyOne= pressSumCountOtherTwo && pressSumCountOtherTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyTwo= pressSumCountOtherTwentyTwo && pressSumCountOtherTwentyTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyThree= pressSumCountOtherTwentyThree && pressSumCountOtherTwo.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyFour= pressSumCountOtherTwentyFour && pressSumCountOtherTwentyFour.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyFive= pressSumCountOtherTwentyFive && pressSumCountOtherTwentyFive.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentySix= pressSumCountOtherTwentySix && pressSumCountOtherTwentySix.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentySeven= pressSumCountOtherTwentySeven && pressSumCountOtherTwentySeven.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyEight= pressSumCountOtherTwentyEight && pressSumCountOtherTwentyEight.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherTwentyNine= pressSumCountOtherTwentyNine && pressSumCountOtherTwentyNine.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherThirty= pressSumCountOtherThirty && pressSumCountOtherThirty.filter((d) => { return d.press_no === pressState})
const pressnumberSumCountOtherThirtyOne= pressSumCountOtherThirtyOne && pressSumCountOtherThirtyOne.filter((d) => { return d.press_no === pressState})

  
   
   return (<div style={{marginTop:'60px'}}>
      
            <div className='col-md-12 col-sm-12 col-lg-12 text-center '>


               <table className="table  table-bordered table-hover mb-0 ">
                  <thead className="thead-dark trmain">
                     <tr >
                        <th  width='80%' height='1% ' style={{ maxHeight: '1px' }}> MACHINE OEE REPORT - SLTL</th>

                        <th  width='20%' style={{ maxHeight: '1px' }}> <div className="col">
                           <select className="col form-control " aria-label="Default select example" onChange={(e) => handleOptionOne(e)}>
                              <option selected>Shift</option>
                              <option value="A"   >A</option>
                              <option value="B"   >B</option>
                              <option value="C"  >C </option>
                              <option value="TOTAL"  >TOTAL</option>
                           </select></div></th>
                     </tr>
                  </thead>

               </table>
 </div>
      
      
      
      <div className='row mr-1 ml-1 mt-2 '>
         <div className='col-md-12 col-sm-12 col-lg-12 text-center ' >
            
      
         <table className="table  table-bordered table-hover ">
       
         <thead className="thead-dark " style={{backgroundColor:'rgb(192,192,192)'}}>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',verticalAlign:'center',color:'rgb(241,42,42)'}} >DATE</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 0)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 1)).format('MMM DD')}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 2)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 3)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 4)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 5)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 6)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 7)).format('MMM DD')}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 8)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 9)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 10)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 11)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 12)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 13)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 14)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 15)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 16)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 17)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 18)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 19)).format('MMM DD')}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 20)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 21)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 22)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 23)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 24)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 25)).format('MMM DD')}</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 26)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 27)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 28)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 29)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 30)).format('MMM DD')}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'12px',color:'rgb(241,42,42)'}}  >{ moment(new Date(dateone).setDate(new Date(dateone).getDate() + 31)).format('MMM DD')}</td>


           
            
            
            
            
          </tr>
          </thead >


          <tbody>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(255,204,153)'}} >AVAILABILITY</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}} >{((1420/1440)*100).toFixed(2)}%</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >TOTAL TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >1440</td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >PLANNED DOWN TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Prescheduled Preventive</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Prescheduled Cleaning</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >20</td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Prescheduled Shut Downs</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >TOTAL AVAILABLE TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >1420</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(255,204,153)'}} >PERFORMANCE</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}} >{(((isNaN(1420-(pressnumberSumBdOne[0]?.total))?1420:1420-(pressnumberSumBdOne[0]?.total))/(1420))*100).toFixed(2)}%</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Change Over Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Break Downs</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >{pressnumberSumBdOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwo[0]?.total}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdSix[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdSeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdEight[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdEleven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTweleve[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdThirteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdFourteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdFifteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdSixteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdSeventeen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdEighteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdNineteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwenty[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyTwo[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentySix[0]?.total}</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentySeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyEight[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdTwentyNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdThirty[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumBdThirtyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >TOTAL RUNING TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >{isNaN(1420-(pressnumberSumBdOne[0]?.total))?1420:1420-(pressnumberSumBdOne[0]?.total)}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Inefficiencies + Machine Idle Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >{pressnumberSumTimeGapOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwo[0]?.total}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapSix[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapSeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapEight[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapEleven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTweleve[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapThirteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapFourteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapFifteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapSixteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapSeventeen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapEighteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapNineteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwenty[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyTwo[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentySix[0]?.total}</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentySeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyEight[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapTwentyNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapThirty[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumTimeGapThirtyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Absenteesm</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Morning Meeting</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Meal Time</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>
         


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',color:'blue'}} >NET OPERATING TIME</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >{(isNaN(1420-(pressnumberSumBdOne[0]?.total))?1420:1420-(pressnumberSumBdOne[0]?.total))-(isNaN(pressnumberSumTimeGapOne[0]?.total)?0:pressnumberSumTimeGapOne[0]?.total)}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>

          {/* <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Time for re</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr> */}


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(255,204,153)'}} >QUALITY</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}} >{isNaN(((pressnumberSumCountAOne[0]?.total)/(pressnumberSumCountOtherOne[0]?.total)*100).toFixed(2))?"":((pressnumberSumCountAOne[0]?.total)/(pressnumberSumCountOtherOne[0]?.total)*100).toFixed(2)}%</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(255,204,153)'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Good Tyres</td> 
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >{pressnumberSumCountAOne[0]?.total }</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwo[0]?.total}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountASix[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountASeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAEight[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountANine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAEleven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATweleve[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAThirteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAFourteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAFifteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountASixteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountASeventeen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAEighteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountANineteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwenty[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyTwo[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentySix[0]?.total}</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentySeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyEight[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountATwentyNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAThirty[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountAThirtyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>


           
            
            
            
            
          </tr>


          <tr>
          <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(204,255,204)'}} >Total Tyres</td>
          <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}} >{pressnumberSumCountOtherOne[0]?.total }</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwo[0]?.total}</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherSix[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherSeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherEight[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherEleven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTweleve[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherThirteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherFourteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherFifteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherSixteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherSeventeen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherEighteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherNineteen[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwenty[0]?.total}</td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyTwo[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyThree[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyFour[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyFive[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentySix[0]?.total}</td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentySeven[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyEight[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherTwentyNine[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherThirty[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  >{pressnumberSumCountOtherThirtyOne[0]?.total}</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px'}}  ></td>

           
            
            
            
            
          </tr>













          <tr>
            <td  width='17%' colspan='2'  style={{fontWeight:'bold',fontSize:'12px',backgroundColor:'rgb(153,115,191)'}} >OEE%</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}} >{((((isNaN(((pressnumberSumCountAOne[0]?.total)/(pressnumberSumCountOtherOne[0]?.total)*100).toFixed(2))?"":((pressnumberSumCountAOne[0]?.total)/(pressnumberSumCountOtherOne[0]?.total)*100).toFixed(2))*((((isNaN(1420-(pressnumberSumBdOne[0]?.total))?1420:1420-(pressnumberSumBdOne[0]?.total))/(1420))*100).toFixed(2))*(((1420/1440)*100).toFixed(2)))/10000)).toFixed(2)}%</td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  >{((((isNaN(((pressnumberSumCountATwo[0]?.total)/(pressnumberSumCountOtherTwo[0]?.total)*100).toFixed(2))?"":((pressnumberSumCountATwo[0]?.total)/(pressnumberSumCountOtherTwo[0]?.total)*100).toFixed(2))*((((isNaN(1420-(pressnumberSumBdTwo[0]?.total))?1420:1420-(pressnumberSumBdTwo[0]?.total))/(1420))*100).toFixed(2))*(((1420/1440)*100).toFixed(2)))/10000)).toFixed(2)}%</td>
          
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>

            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>


            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>
            <td  width='2%' colspan='2' style={{fontWeight:'bold',fontSize:'10px',backgroundColor:'rgb(153,115,191)'}}  ></td>


           
            
            
            
            
          </tr>

          








          </tbody>
          </table>
          </div>

          <div style={{display:'flex',padding:'15px',flexDirection:'column',backgroundColor:'rgb(204,255,255)',marginTop:'50px',marginLeft:'50px'}}>
          <div style={{fontWeight:'bold',margin:'5px'}}>OEE= Availability %  X   Performance %  X Quality %</div>

          <div style={{fontWeight:'bold',margin:'5px'}}>Availability = Run Time / Available Time %</div>
          <div style={{fontWeight:'bold',margin:'5px'}}>Performance = Net Operating Time / Runing Time %</div>
          <div style={{fontWeight:'bold',margin:'5px'}}>Quality = Effective Time /  Net Operating Time %</div>


          </div>
          </div>
      
      
      
      
      </div>
   )
}

export default Oee
