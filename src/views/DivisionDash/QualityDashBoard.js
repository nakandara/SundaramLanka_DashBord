import React, { useContext,useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,Avatar
} from '@material-ui/core';
import api from '../../../src/api/api'
import {reportContext} from '../../../src/context/ContextProvider'
import { green } from '@material-ui/core/colors'; 


const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#fffff',
  minHeight: '100%',
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
  margin: theme.spacing(3),
  maxWidth: '50%',},
  actions: {
    justifyContent: 'flex-end'},avatar: {
      backgroundColor: green[500]}
  
}));

const QualityDashBoard = ({ className, ...rest }) => {
  const classes = useStyles();
  const {mfgData,setMfgData,ddate,setDdate,mfgDataFirst,setMfgDataFirst,mfgDataSecond,setMfgDataSecond,mfgDataThird,setMfgDataThird
   ,mfgDataFourth,setMfgDataFourth,mfgDataFive,setMfgDataFive,mfgDataSix,setMfgDataSix,mfgDataSeven,setMfgDataSeven,mfgDataEight,setMfgDataEight,mfgDataCount,setMfgDataCount,mfgDataFirstCount,setMfgDataFirstCount,mfgDataSecondCount,setMfgDataSecondCount,mfgDataThirdCount,setMfgDataThirdCount
   ,mfgDataFourthCount,setMfgDataFourthCount,mfgDataFiveCount,setMfgDataFiveCount,mfgDataSixCount,setMfgDataSixCount,mfgDataSevenCount,setMfgDataSevenCount,mfgDataEightCount,setMfgDataEightCount,mfgDataMTD,setMfgDataMTD,mfgDataCountMTD,setMfgDataCountMTD,QualityCountA,setQualityCountA,
   QualitySumWeightA,setQualitySumWeightA, QualitySumWeightAPlus,setQualitySumWeightAPlus,QualityCountAPlus,setQualityCountAPlus, QualitySumWeightB,setQualitySumWeightB,QualityCountB,setQualityCountB, QualitySumWeightE,setQualitySumWeightE,QualityCountE,setQualityCountE, QualitySumWeightR,setQualitySumWeightR,QualityCountR,setQualityCountR, QualitySumWeightL,setQualitySumWeightL,QualityCountL,setQualityCountL,qualityDataAMTD,setQualityDataAMTD,
   qualityDataCountAMTD,setQualityDataCountAMTD,qualityDataBMTD,setQualityDataBMTD,qualityDataCountBMTD,setQualityDataCountBMTD,
   qualityDataEMTD,setQualityDataEMTD,qualityDataCountEMTD,setQualityDataCountEMTD,qualityDataRMTD,setQualityDataRMTD,
   qualityDataCountRMTD,setQualityDataCountRMTD,qualityDataLMTD,setQualityDataLMTD,qualityDataCountLMTD,setQualityDataCountLMTD,qualityDataAPlusMTD,setQualityDataAPlusMTD,qualityDataCountAPlusMTD,setQualityDataCountAPlusMTD
    } =useContext(reportContext)



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
  

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="QUALITY" avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Q
          </Avatar>} />
      <Divider />
      <PerfectScrollbar>
        <Box maxWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  KPI
                </TableCell>
                <TableCell>
                  A
                </TableCell>
                <TableCell >
                  
                    
                     B
                   
                </TableCell>
                <TableCell>
                 E
                </TableCell> 
                <TableCell>
                 R
                </TableCell>
                <TableCell>
                 L
                </TableCell>  
                <TableCell>
                 BERLC%
                </TableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow
                 
                >
                  <TableCell>
                    {'Weight'}
                  </TableCell>
                  <TableCell>
                  {QualitySumWeightA}
                  </TableCell>
                  <TableCell>
                    {QualitySumWeightB}
                  </TableCell>
                  <TableCell>
                    {QualitySumWeightE}
                  </TableCell>
                  <TableCell>
                    {QualitySumWeightR}
                  </TableCell>
                  <TableCell>
                    {QualitySumWeightL}
                  </TableCell>
                  <TableCell>
                    {}
                  </TableCell>
                </TableRow>

             <TableRow
                 
                >
                  <TableCell>
                    {'Pices'}
                  </TableCell>
                  <TableCell>
                  {QualityCountA}
                  </TableCell>
                  <TableCell>
                    {QualityCountB}
                  </TableCell>
                  <TableCell>
                    {QualityCountE}
                  </TableCell>
                  <TableCell>
                    {QualityCountR}
                  </TableCell>
                  <TableCell>
                    {QualityCountL}
                  </TableCell>
                  <TableCell>
                    {}
                  </TableCell>
                </TableRow>
                <TableRow
                 
                 >
                   <TableCell>
                     {'MTD(Kg)'}
                   </TableCell>
                   <TableCell>
                   {qualityDataAMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataBMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataEMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataRMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataLMTD}
                   </TableCell>
                   <TableCell>
                     {}
                   </TableCell>
                 </TableRow>
                 <TableRow
                 
                 >
                   <TableCell>
                     {'MTD(Pcs)'}
                   </TableCell>
                   <TableCell>
                   {qualityDataCountAMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataCountBMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataCountEMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataCountRMTD}
                   </TableCell>
                   <TableCell>
                     {qualityDataCountLMTD}
                   </TableCell>
                   <TableCell>
                     {}
                   </TableCell>
                 </TableRow>
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {/* <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );
};

QualityDashBoard.propTypes = {
  className: PropTypes.string
};

export default QualityDashBoard;
