import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function FullScreenDialogDiliveryOne({}) {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <p  onClick={handleClickOpen}>
         2019/2020
       </p>
       <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
         <AppBar className={classes.appBar}>
           <Toolbar>
             <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
               <CloseIcon />
             </IconButton>
             <Typography variant="h6" className={classes.title}>
               Close
             </Typography>
             
           </Toolbar>
         </AppBar>
         <List>
         <div className=' bo'
         
         style ={{margin:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)'}}
         >
         <table className="table  table-bordered table-hover mb-0 ">
   <thead className="thead-dark">
     <tr>
      
       <th scope="col-md-3 col-sm-3 col-lg-3" width='1%' > NO</th>
       <th scope="col-md-2 col-sm-2 col-lg-2" >OBJECTIVES</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >Target</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >APR'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">MAY'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >JUN'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">JUL'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >AUG'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">SEP'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >OCT'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">NOV'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >DEC'19</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">JAN'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">FEB'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >MAR'20</th>
       
     </tr></thead>
     <tbody>
   
    
     <tr>
      
       <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}  width='1%' >1</th>
       <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 95% on time shipment as per first  committed ship date.( Allowable slack one day in every 30 days</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>95% </th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       
     </tr>
   
     <tr>
      
      <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}  width='1%' >1.1</th>
      <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> Lead time from PO received @ factory date to readiness for ship date</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>75% </th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      
    </tr>
     </tbody>
   
   
   </table></div>
         </List>
       </Dialog>
     </div>
   );
 }



 export function FullScreenDialogDiliveryTwo() {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
 
   return (
     <div>
       <p  onClick={handleClickOpen}>
         2020/2021
       </p>
       <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
         <AppBar className={classes.appBar}>
           <Toolbar>
             <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
               <CloseIcon />
             </IconButton>
             <Typography variant="h6" className={classes.title}>
               Close
             </Typography>
             
           </Toolbar>
         </AppBar>
         <List>
         <div className=' bo'
         
         style ={{margin:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)'}}
         >
         <table className="table  table-bordered table-hover mb-0 ">
   <thead className="thead-dark">
     <tr>
      
       <th scope="col-md-3 col-sm-3 col-lg-3" width='1%' > NO</th>
       <th scope="col-md-2 col-sm-2 col-lg-2" >OBJECTIVES</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >Target</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >APR'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">MAY'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >JUN'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">JUL'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >AUG'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">SEP'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >OCT'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">NOV'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >DEC'20</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">JAN'21</th>
       <th scope="col-md-1 col-sm-1 col-lg-1">FEB'21</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" >MAR'21</th>
       
     </tr></thead>
     <tbody>
   
    
     <tr>
      
       <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}  width='1%' >1</th>
       <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 95% on time shipment as per first  committed ship date.( Allowable slack one day in every 30 days</th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>95% </th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       
     </tr>
   
     <tr>
      
      <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}  width='1%' >1.1</th>
      <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> Lead time from PO received @ factory date to readiness for ship date</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>75% </th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
       <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      
    </tr>
     </tbody>
   
   
   </table></div>
         </List>
       </Dialog>
     </div>
   );
 }








export function FullScreenDialogDiliveryThree() {


   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
 

 const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p  onClick={handleClickOpen}>
        2021/2022
      </p>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Close
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>
        <div className=' bo'
        
        style ={{margin:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)'}}
        >
        <table className="table  table-bordered table-hover mb-0 ">
  <thead className="thead-dark">
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='1%' > NO</th>
      <th scope="col-md-2 col-sm-2 col-lg-2"  width='60%'>OBJECTIVES</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >Target</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >APR'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">MAY'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >JUN'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">JUL'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >AUG'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">SEP'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >OCT'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">NOV'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >DEC'21</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">JAN'22</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">FEB'22</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >MAR'22</th>
      
    </tr></thead>
    <tbody>
  
   
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}  width='1%' >1</th>
      <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> 95% on time shipment as per first  committed ship date.( Allowable slack one day in every 30 days</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>95% </th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      
    </tr>
  
    <tr>
     
     <th scope="col-md-3 col-sm-3 col-lg-3" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}  width='1%' >1.1</th>
     <th scope="col-md-2 col-sm-2 col-lg-2"  width='5%' style={{fontSize:'12px',fontWeight:'bold'}}> Lead time from PO received @ factory date to readiness for ship date</th>
     <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}>75% </th>
     <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
      <th scope="col-md-1 col-sm-1 col-lg-1"width='5%' style={{fontSize:'12px',fontWeight:'bold'}}></th>
     
   </tr>
    </tbody>
  
  
  </table></div>
        </List>
      </Dialog>
    </div>
  );
}