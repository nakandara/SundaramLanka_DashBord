import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProductionDash from 'src/views/Production/ProductionDash';
import {Link} from 'react-router-dom'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    padding: theme.spacing(3),
    
  }
}));

const ProductionLineWise = () => {
  const classes = useStyles();
 // let history = useHistory();
//console.log({useHistory});

const productionClick =()=>{

 // history.push(`/home`)

}



  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}
              direction="row"
           justify="space-around"
           alignItems="center">
        <Grid
          container
          spacing={4}
        >
         
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <ProductionDash foot=''  division='Line One ' onClick={productionClick} endIcon={<Link to='/app/productionlinewise'><ArrowRightIcon/></Link>}/> 
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
             <ProductionDash  foot=''  division='Line Two'  endIcon={<Link to='/app/qualityLinewise'><ArrowRightIcon/></Link>}/> 
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
           <ProductionDash foot=''  division='Line Three'  endIcon={<Link to='/app/mixingdashboard'><ArrowRightIcon/></Link>}/> 
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <ProductionDash  foot=''  division='Line Four' endIcon={<Link to='/app/engdashboard'><ArrowRightIcon/></Link>}/> 
          </Grid>
          {/* <Grid
            item
            lg={3}
            md={12}
            xl={9}
            xs={12}
          >
           <ProductionDash  foot=''  division='Bead' endIcon={<Link to='/app/beaddashboard'><ArrowRightIcon/></Link>}/>  
          </Grid> 
           <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <ProductionDash  foot=''  division='HR'  endIcon={<Link to='/app/hrdashboard'><ArrowRightIcon/></Link>}/> 
          </Grid>
          <Grid
            item
            lg={3}
            md={12}
            xl={9}
            xs={12}
          ><ProductionDash  foot=''  division='Safety'  endIcon={<Link to='/app/safetydashboard'><ArrowRightIcon/></Link>}/> 
            
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <ProductionDash foot=''  division='Mold' endIcon={<Link to='/app/molddashboard'><ArrowRightIcon/></Link>}/> 
            
          </Grid>

          <Grid
            item
            lg={3}
            md={12}
            xl={9}
            xs={12}
          >
           <ProductionDash  foot=''  division='Planning' endIcon={<Link to='/app/planningdashboard'><ArrowRightIcon/></Link>}/>  
          </Grid> 
           <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <ProductionDash/> 
          </Grid>
          <Grid
            item
            lg={3}
            md={12}
            xl={9}
            xs={12}
          ><ProductionDash/> 
            
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xl={3}
            xs={12}
          >
            <ProductionDash/> 
            
          </Grid> */}
          
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductionLineWise;

