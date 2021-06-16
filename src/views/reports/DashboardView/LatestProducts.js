import React,{useEffect,useState,useContext} from 'react'
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import api from '../../../../src/api/api'
import {reportContext} from '../../../context/ContextProvider'



const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles();
  const {QualitySumWeightA,QualitySumWeightB,QualitySumWeightE,QualitySumWeightR,QualitySumWeightL,QualityCountA,QualityCountB,QualityCountE,QualityCountR,QualityCountL,
    qualityDataAMTD,qualityDataBMTD,qualityDataEMTD,qualityDataRMTD,qualityDataLMTD,qualityDataCountAMTD,qualityDataCountBMTD,qualityDataCountEMTD,qualityDataCountRMTD,qualityDataCountLMTD} =useContext(reportContext)

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="QUALITY" />
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

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;