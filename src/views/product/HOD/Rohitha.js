import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Avatar } from '@material-ui/core';

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

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {


   var person = prompt("Please enter your password");
   if (person === 1111) {
      setOpen(true);
   }
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <div>
      
        <div className='d-flex align-items-center justify-content-center'>
        <Avatar onClick={handleClickOpen}  style={{marginRight:'15px',height:'30px',width:'30px'}}/> <Typography
          className={classes.name}
          color="textPrimary"
          variant="h6"
        >
          Mr Rohitha
        </Typography></div>
        
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Avatar  style={{marginRight:'15px'}}/> <Typography variant="h3" className={classes.title}>
            INDIVIDUAL KPI DASHBOARD
            </Typography>
            
          </Toolbar>
        </AppBar><div className=' bo'
        
        style ={{margin:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)'}}
        >
        <table className="table  table-bordered table-hover mb-0 ">
  <thead className="thead-dark">
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='22%'>INDICATOR</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='9%'>UOM</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='12%'>TARGET</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='12%'>ACTUAL</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">RESP</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">CONT</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='3%'>RCCM</th>
    </tr></thead>
    <tbody>
    <tr>
     
      <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Absent Inform</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Absent Non Inform</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Kaizen</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Near Miss</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Reportable Accident</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Non Reportable Accident</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Training</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>hrs</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>T & D</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>HR Admin</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Dot</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  width='3%'></td>
      
    </tr>
    </tbody>
  
  
</table></div>


<div className=' bo'
        
        style ={{marginRight:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)',marginTop:'70px',marginLeft:'10px'}}
        >
 <Typography variant="h2" className={classes.title}>
             MANAGEMENT SOP
            </Typography>
            

        <table className="table  table-bordered table-hover mb-0 ">
  <thead className="thead" style ={{backgroundColor:'#B3EAB5'}}>
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='5%'>KPI</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='3%'>UOM</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='25%'>DUTY</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   WHO TAKE MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   HOW TO MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='9%'>TIME FREQ</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">RESPON/CONTROL</th>
     
    </tr></thead>
    <tbody>
    <tr>
     
      <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Absent Inform /Non Inform</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level acheivement</li>
         <li> Recommendations for further improvements/ actions</li>
         <li>Presenting the related information to higher management</li>
         <li>Strategic management involvement</li>
        
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AGM - HRD </li>
         <li> AGM - HRD </li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
        
         <li>AGM - HRD</li>
         </ul>
         
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
      <ul>
         <li>Sum of 4 weeks summaries </li>
         <li> Sum of 4 weeks summaries </li>
         <li>No of improvement ideas issued at the month</li>
         <li>MPR/ APR and sum of weekly reviews</li>
        
         
         </ul>
         
         
         
         
         </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div>Monthly</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
      
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>KAIZEN</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Monthly (Regularly) Reviewing/ overlooking plant level acheivement  </li>
         <li> Heading the KAIZEN Steering committee/ Regular meetings</li>
         <li>Responsibilty of necessary budget/ capex approvals</li>
         <li>Evaluating/ Feedback</li>
         <li>Recommendations for further improvements/ actions</li>
         <li>Presenting the related information to higher management</li>
         <li>Strategic decision guide</li>

         
         </ul></td>

         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>AGM - HRD </li>
         <li> AGM - HRD </li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         </ul>
         </td>
      <td   width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      <ul>
         <li> Sum of weekly summaries </li>
         <li> Monthly Kaizen steering committee meeting records</li>
         <li>No of approvals/ rejects within the specific month</li>
         <li>No of feedbacks granted</li>
         <li></li>
         <li>MPR/ APR Information</li>
         <li></li>

         
         </ul>
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
     
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Safety</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level acheivement</li>
         <li> Monitoring the regular functioning of safety committee meetings</li>
         <li>Responsibilty of necessary budget/ capex approvals</li>
         <li>Evaluating/ Feedback</li>
         <li> Recommendations for further improvements/ actions</li>
         <li>Presenting the related information to higher management/ Regulatory bodies</li>
         <li>Strategic decision guide</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      
      
      <ul>
         <li>Monthly safety dash board</li>
         <li> Monthly safety committee meeting minutes</li>
         <li>No of approvals produced and approvals recieved</li>
         <li></li>
         <li> No of approvals produced and approvals recieved</li>
         <li></li>
         <li>No of approvals produced and approvals recieved</li>
         <li>No of approvals produced and approvals recieved</li>
         </ul>
      
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
     
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>T & D</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level acheivement</li>
         <li> Monitoring on following of the plant annual training plan</li>
         <li>Evaluating/ Feedback</li>
         <li>Recommendations for further improvements/ actions</li>
         <li>Presenting the related information to higher management/ Regulatory bodies</li>
        <li>Strategic decision guide</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>AGM - HRD </li>
         <li>AGM - HRD </li>
         <li> AGM - HRD </li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         </ul>
         </td>
      <td   width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><div style={{padding:'30px'}}></div>
      
      <ul>
         <li>Plan Vs Actual (No of trainings/ Total hrs/ No of heads covered) </li>
         <li>Training Calendar Reviews </li>
         <li> Annual Training Budget approved/ Approvals for budgets for the particular trainings </li>
         <li>Post Training evaluation/ ROI Measures</li>
         <li>Post Training evaluation/ ROI Measures</li>
         <li>MPR/ APR presentations</li>
         <li></li>
         </ul>
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
     
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>DOT</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level acheivement</li>
         <li> Level - 4 authorization of DOT as per the requirement/ Evaluating/ Feedback</li>
         <li>Recommendations for further improvements/ actions</li>
         <li>Presenting the related information to higher management</li>
        <li>Strategic management involvement</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>AGM - HRD </li>
         <li>AGM - HRD </li>
         <li> AGM - HRD </li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><div style={{padding:'30px'}}>
         
      <ul>
         <li>Monthly DOT Cost/ Report with section wise headcount </li>
         <li>No of DOT requests approved for the particular month and Head count  </li>
         <li> DOT reduction plans </li>
         <li>DOT reduction plans</li>
         <li>Alternatives for the DOT Reductions/ Utilization</li>
         
         </ul>
         
         
         
         </div></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
      
    </tr>


   

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>IR Mgt</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level acheivement</li>
         <li> Directly involving and redressing the Grivances relate to the Managerial/ Staff grade.</li>
         <li>Keeping the sensitive information and confidentially managing them relate to the IR</li>
         <li>Advicing for sustainable CSR initiatives</li>
        <li>Presenting the related information to higher management</li>
         <li>Strategic management involvement</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AGM - HRD</li>
         <li> AGM - HRD/ VP - OPS</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD/ VP - OPS</li>
        <li></li>
         <li></li>
         </ul>



         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><div style={{padding:'30px'}}>
         
         
      <ul>
         <li>Food Committee meeting status/ Safety Committee meeting status/ Intiation for In-house employee association</li>
         <li> Grievance records</li>
         <li>N/A</li>
         <li>No of CSR projects proposed/ Initiated</li>
        <li>MPR/ APR</li>
         <li></li>
         </ul>

         
         
         </div></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
      
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Performance Management</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level performance</li>
         <li> Setting the objectives for managerial level/ departmental level</li>
         <li>Annually appraising the objectives vs acheivements of the managers and introducing the individual </li>
         <li>Presenting the related information to higher management</li>
        <li>Strategic decision guide</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AGM - HRD </li>
         <li>AGM - HRD/ VP - OPS </li>
         <li> AGM - HRD </li>
         <li>AGM - HRD/ VP - OPS</li>
         <li>AGM - HRD</li>
         
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>

      <ul>
         <li>Annual PA reviews</li>
         <li>Objective settings </li>
         <li> Annual PA for the Managers/ Executives/ Staff</li>
         <li>AGM - HRD/ VP - OPS</li>
         <li>MPR/ APR</li>
         <li></li>
         
         </ul>
     
      
      
     
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul></td>
     
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>HR Admin</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level performance</li>
         <li> Observing the daily operational dashboards maintaining by the particular departments</li>
         <li>Consulting and introducing cost reduction and quaity improvement tools for the every activity/ evaluation</li>
         <li>Handling the employee satisfaction survey</li>
        <li>Preparation of annual manpower plan for the plant</li>
         <li>Discuss and finalize annual departmental budget</li>
         <li>Presenting the related information to higher management</li>
         <li>Strategic decision guide</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AGM - HRD</li>
         <li> AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
        <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>SAGM - HRD</li>
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      <ul>
         <li>Monthly Salary Reports/ Welfare Expenses/ Supplier Payments analysis</li>
         <li> Weekly Review</li>
         <li>Advisory functions to the A3/ QCC</li>
         <li>ESS - outcomes</li>
        <li>Annual Manpower Budget Vs Acheivement</li>
         <li>Meeting Minutes</li>
         <li>MPR/ APR</li>
         <li></li>
         </ul>
         </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>AGM - HRD</li>
         <li> AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
        <li>AGM - HRD<li>
           </li>AGM - HRD</li>
         
         </ul></td>
     
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>TEI</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Monthly (Regularly) Reviewing/ overlooking plant level achievement of TEI by the TEI Index</li>
         <li> Regular observations and feedbacks on TEI corners</li>
         <li>Awareness to the Managers/ Staff/ Employees on TEI and its importance in need basis</li>
         <li>Necessary periodic evaluations and make revisoins as per the requirements</li>
        <li>Presenting the related information to higher management<li>
           </li>Strategic decision guide</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >


         <ul>
         <li>AGM - HRD</li>
         <li> AGM - HRD</li>
         <li>AGM - HRD</li>
         <li>AGM - HRD</li>
        <li>AGM - HRD<li>
           </li>AGM - HRD</li>
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>

      <ul>
         <li>Monthly TEI Index review meeting minute</li>
         <li> GENBA Walk records</li>
         <li>Training records on TEI</li>
         <li>Audit Results/ GENBA Walk feedbacks</li>
        <li>MPR/ APR<li>
           </li></li>
         
         </ul>
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}></div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>

         
      <ul>
         <li>AGM - HRD/ AM - HRD</li>
         <li> AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
         <li>AGM - HRD/ AM - HRD</li>
        <li>AGM - HRD/ AM - HRD<li>
           </li>AGM - HRD/ AM - HRD</li>
         
         </ul>
      </td>
   
      
    </tr>
    </tbody>
  
  
</table></div>
      </Dialog>
    </div>
    
    
    
    </div>
  );
}
