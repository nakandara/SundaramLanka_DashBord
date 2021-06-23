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
   if (person === 2222) {
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
        <Avatar onClick={handleClickOpen}  style={{marginRight:'15px'}}/> <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          Mr INDIKA
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
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Absent Non Inform</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Kaizen</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Near Miss</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Reportable Accident</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Non Reportable Accident</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Training</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>hrs</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
    </tr>


    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>T & D</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>HR Admin</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>

    <tr>
     
    <td  width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Dot</td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td   width='12%' ></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>Mr Malinda</td>
      <td  width='3%'></td>
      
    </tr>
    </tbody>
  
  
</table></div>


<div className=' bo'
        
        style ={{marginRight:'10px',borderShadow:'0px 3px 10px rgb(0, 0, 0,0.5)',marginTop:'70px',marginLeft:'10px'}}
        >
 <Typography variant="h2" className={classes.title}>
            Management  SOP
            </Typography>
            

        <table className="table  table-bordered table-hover mb-0 ">
  <thead className="thead" style ={{backgroundColor:'#B3EAB5'}}>
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='12%'>KPI</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='3%'>UOM</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='29%'>DUTY</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   WHO TAKE MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   HOW TO MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1"  width='8%'>TIME FREQ</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">RESPON/CONTROL</th>
      
    </tr></thead>
    <tbody>
    <tr>
     
      <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Absent Inform /Non Inform</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily reviewing departmental attendance</li>
         <li> Level 3 - Authorization leave app./ Gate Passes</li>
         <li>Preparation of department wise reports</li>
         <li>Recommends actions against deviations</li>
        <li>Recommends awarenesses/ trainings</li>
         <li>Evaluating/ Feedback</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AM - HRD/ HREx</li>
         <li> AM - HRD/ HREx</li>
         <li>AM - HRD/ HREx</li>
         <li>AM - HRD/ HREx</li>
        <li>AM - HRD/ HREx</li>
         <li>AM - HRD/ HREx</li>
         <li></li>
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
      <ul>
         <li>Manual/ System Gen Attendance Report</li>
         <li> Leave Applications/ Gate Passes</li>
         <li>Weekly review info</li>
         <li>Weekly review info/ Advice Letters</li>
        <li>Training Records</li>
         <li>Review reports</li>
         <li></li>
         </ul>
         
         
         
         
         </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Daily/ Weekly</div></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}>AM-HRD/ HREx</div></td>
      
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>KAIZEN</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Weekly/ Daily reviewing the progress of KAIZEN </li>
         <li> Member of the KAIZEN steering committee</li>
         <li>Keeping departmental wise records</li>
         <li>Responsibilty on execution of KAIZEN/ Maintaining KAIZEN Pits off</li>
         <li>Organizing events/ apprciations</li>
         <li>Preparation of budgets/ capex</li>
         <li>Recommends actions against deviations</li>
         <li>Recommends awarenesses/ trainings</li>
        <li>Overlooking/ Reviewing department level reportings/ routings in regular basis</li>
         <li>Evaluating/ Feedback</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AM - HRD</li>
         <li> AM - HRD</li>
         <li>HOD/ AM - HRD</li>
         <li>AM - HRD</li>
        <li>AM - HRD</li>
       <li>AM - HRD/ HREx</li>
         <li>AM - HRD</li>
         <li>AM - HRD/ HREx</li>
         <li></li>
         </ul>
         </td>
      <td   width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      <ul>
         <li> Weekly Kaizen records </li>
         <li> Kaizen Committee List</li>
         <li>Departmental Kaizen Register</li>
         <li>Kaizen Pits off</li>
         <li>Kaizen Appeciation Cards issued</li>
         <li>No of implemented Kaizens with Budgets</li>
         <li></li>
         <li>Kaizen Training/ Simulations Records</li>
          <li>Kaizen Audit Reports on Weekly Basis</li>
        <li>Steering Committee Meeting minutes</li>
         </ul>
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li> Daily/ Weekly </li>
         <li> Daily/ Weekly</li>
         <li>Daily/ Weekly</li>
         <li>Weekly</li>
         <li>Daily/ Weekly</li>
         <li>Weekly</li>
         <li></li>
         <li>Daily/ Weekly</li>
          <li>Weekly</li>
        <li>Weekly</li>
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><div style={{padding:'30px'}}>AM-HRD</div></td>
      
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Safety</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily reviewing the departmental safety status/ Keeping records and making MIS</li>
         <li> Responsibilty to arranging the sfety committee meetings in regular basis/ Launch the decisions immediately</li>
         <li>Responsibilty of necessary budget/ capex approvals</li>
         <li>Investigating and recommending the necessary actions / precausions against the safety matters</li>
         <li> Responsibilty on Maintaining the H&S corner</li>
         <li>Organizing and conducting in-house/ out side trainings</li>
         <li>Monitoring an arranging of the In house/ outside safety audits/ inspections/ calibrations on time</li>
         <li>Organizing events (i.e. Safety week)</li>
         <li>Responsibility on safety compliance of the department</li>
         <li>Recommends actions against deviations</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AM - HRD </li>
         <li> AM - HRD </li>
         <li>AM - HRD </li>
         <li>AM - HRD </li>
        <li>AM - HRD </li>
         <li>AM - HRD </li>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
        <li>HOD/ AM - HRD</li>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      
      
      <ul>
         <li>Safety Dash Board records</li>
         <li> Safety committee meeting minutes </li>
         <li>Safety committee meeting minutes </li>
         <li>H&S Pits off </li>
        <li>training records</li>
         <li>Safety Audit Reports</li>
         <li>Events records</li>
         <li>PPE Adhearence</li>
        <li>Daily Safety Audit records</li>
         <li>Training records</li>
         
         </ul>
      
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>Daily</li>
         <li> Weekly </li>
         <li>Weekly</li>
         <li>Weekly </li>
        <li>Weekly</li>
         <li>Daily</li>
         <li>Regular & need Basis</li>
         <li>Regular & need Basis</li>
        <li>Daily Basis</li>
         <li>Daily</li>
         
         </ul>
      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>AM-HRD</li>
         <li> AM-HRD </li>
         <li>AM-HRD</li>
         <li>AM-HRD </li>
        <li>AM-HRD</li>
         <li>AM-HRD</li>
         <li>AM-HRD</li>
         <li>AM-HRD</li>
        <li>HOD/ AM-HRD</li>
         <li>AM-HRD</li>
         
         </ul></td>
 
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>T & D</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily reviewing the departmental training hours status/ Reporting</li>
         <li> Preparation, Conducting and guiding annual training plan</li>
         <li>Preparation and maintaining the training calendar/ Organizing In-house and out-side trainings as per the plan/ Conducting Induction </li>
         <li>Responsibilty on Maintaining the T & D Pits off</li>
         <li>Periodic post training evaluation and measuring the ROI</li>
        <li>Preparation and maintaining the skill matrix of the department/ Launch and continuation of Multiskill program</li>
         <li>Identify and develop the "Train on trainer" program</li>
         <li>Identify, Assign and Develop the Coachers/ Mentors and onboarding new comers as per it.</li>
         <li>Makesure the covering of every employee under "30 min per employee per month"</li>
         <li>Identify the skill gaps and recommend the the Tr programs.</li>
         <li>Preparation and implementation of Individual Development Plan to grooming for next step</li>
         <li>Recommends actions against deviations.</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} > <ul>
         <li>AM - HRD </li>
         <li> AM - HRD </li>
         <li>AM - HRD </li>
         <li>AM - HRD </li>
        <li>AM - HRD </li>
         <li>AM - HRD </li>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
         <li>HOD/ AM - HRD</li>
         <li>HOD/ AM - HRD</li>
         <li>AM - HRD</li>
         </ul></td>
      <td   width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}> <ul>
         <li>30 mins / General Training records EDP etc </li>
         <li> Annual Training Plan </li>
         <li>Annual Training Plan </li>
         <li>T&D Pits off  </li>
        <li>Post Training Evaluation Records</li>
         <li>Multi Skill Training Records/ Skill Matrix updates </li>
         <li>Program records</li>
         <li>Training Records</li>
         <li>Training Records (Manual/ EDP)</li>
         <li>Training Need identification forms</li>
         <li>Review records</li>
         
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>Daily </li>
         <li> Once in year</li>
         <li>Daily/ Weekly </li>
         <li>Weekly </li>
        <li>On requirement</li>
         <li>Daily/ Weekly </li>
         <li>Weekly</li>
         <li>Weekly</li>
         <li>Daily</li>
         <li>Need Basis</li>
         <li>Daily/ Weekly</li>
         
         </ul>
      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AM-HRD </li>
         <li> AGM-HRD/ AM-HRD</li>
         <li>AM-HRD </li>
         <li>AM-HRD </li>
        <li>AM-HRD</li>
         <li>HOD/ AM-HRD </li>
         <li>HOD/ AM-HRD</li>
         <li>HOD/ AM-HRD</li>
         <li>HOD/ AM-HRD</li>
         <li>HOD/ AM-HRD</li>
         <li>HOD/ AM-HRD</li>
         
         </ul></td>
     
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>DOT</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily reviewing departmental DOT usage</li>
         <li> Level 3 - Authorization DOT approvals</li>
         <li>Preparation of department wise DOT reports</li>
         <li>Recommends actions against deviations</li>
        <li>Recommends awarenesses/ trainings</li>
         <li>Evaluating/ Feedback</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AM - HRD/ HREx</li>
         <li> HOD/ AM - HRD </li>
         <li>AM - HRD/ HREx </li>
         <li>AM - HRD/ HREx </li>
        <li>HOD/ AM - HRD </li>
         <li>HOD/ AM - HRD</li>
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}> <ul>
         <li>DOT records by DRM</li>
         <li> DOT approval Forms </li>
         <li>DRM records </li>
         <li> Weekly review minutes</li>
        <li>Training records </li>
         <li>MPR/ Weekly Review minutes</li>
         
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         <li> Daily </li>
         <li>Daily </li>
         <li> Weekly</li>
        <li> Daily/ Weekly</li>
         <li>Daily/ Weekly</li>
         
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>AM-HRD/ HREx</li>
         <li> HOD/ AM - HRD </li>
         <li>HOD/ AM - HRD</li>
         <li> HOD/ AM - HRD</li>
        <li> HOD/ AM - HRD</li>
         <li>HOD/ AM - HRD</li>
         
         </ul></td>
     
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>IR Mgt</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Handling the Staff & and employee level grievances/ Redress them with sustainable solutions/ Recording</li>
         <li> Heading of the CSR activities while taking the maximum employee contribution</li>
         <li>Managing and regularily reviewing the employee involvement flatforms i.e. welfare society, JCC, Food committee, communication </li>
         <li>Arranging the annual motivational events on time (trip/ cricket match/ pirith chanting ceremony)</li>
        <li>Recommends actions against deviations</li>
        <li>Recommends awarenesses/ trainings</li>
        <li>Record keeping</li>
        <li>Evaluating/ Feedback</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
        
        <li>AM - HRD </li>
        <li>AM - HRD</li>
         <li>AM - HRD </li>
         <li>AM - HRD</li>
        <li>AM - HRD </li>
         <li>AM - HRD</li>
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
         <ul>
         <li>Grievance/ Councelling records</li>
         <li>No of CSR activities proposed & implemented</li>
        
        <li>Meeting minutes </li>
        <li>No of events planned vs Actual/ % of employee participation</li>
         <li>Weekly/ MPR review highlights</li>
         <li>Training records</li>
        <li>IR Pits Off </li>
         <li>Monthly IR review minutes</li>
         
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>Daily/ Weekly</li>
         <li>Daily/ Weekly</li>
        
        <li>Monthly </li>
        <li>Monthly</li>
         <li>Monthly</li>
         <li>Daily/ Weekly</li>
        <li>Daily/ Weekly </li>
         <li>Monthly </li>
         
         </ul>
      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>


      <ul>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
        
        <li>AM - HRD </li>
        <li>AM - HRD</li>
         <li>AM - HRD</li>
         <li>AM - HRD</li>
        <li>AM - HRD </li>
         <li>AM - HRD</li>
         
         </ul>
      </td>
      
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Performance Management</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Regularily planning and doing the staff/ worker level performance appraisals/ employee grading</li>
         <li> Weekly/ monthly measuring the plant performance and taking actions against deviations</li>
         <li>Keeping the sensitive information and confidentially managing them relate to the IR</li>
         <li>Plan and follow the individual development plan depending on the performance level</li>
        <li>Goal setting for the sections/ staff/ leaders and regular reveiwing the plan vs acheivements/ feedback and recording.</li>
         <li>Identify the skill gaps and recommend for the Tr programs.</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >       
          <ul>
         <li>AM - HRD</li>
         <li>AM - HRD/ HREx</li>
        
        <li>AM - HRD </li>
        <li>HOD/ AM - HRD</li>
         <li>HOD/ AM - HRD </li>
        
         
         </ul></td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>

      <ul>
         <li>PA Forms filled/ Annual PA Plan</li>
         <li>Monthly efficiency report</li>
        
        <li>IDP </li>
        <li>Individual KPI/ Job Descriptions</li>
         <li>Training Plan </li>
        
         
         </ul>


      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>Annually/ When necessary</li>
         <li>Monthly</li>
        
        <li>Anually </li>
        <li>Quarterly</li>
         <li>Anually </li>
        
         
         </ul>

      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>


      <ul>
         <li>HOD/ AM - HRD</li>
         <li>AM - HRD/ HREx</li>
        
        <li>HOD/ AM - HRD</li>
        <li>HOD/ AM - HRD</li>
         <li>AM-HRD </li>
        
         
         </ul>
      </td>
      
    </tr>


    

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>HR Admin</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Regularily (Week / Day) monitoring the success level of the operational activities/ Finding the solutions for deviations</li>
         <li> Execute the employee satisfaction survey/ doing the spot feedback and taking the corrective actions</li>
         <li>Consulting and introducing cost reduction and quaity improvement tools for the every activity/ evaluation</li>
         <li>Conducting the employee suggession scheme/ presenting the outcomes to the higher level</li>
        <li>Setting the employee involvement mechanism and monitoring and guiding the smooth functioning</li>
         <li>Fulfilling the manpower requirement by administering the recruitment and selection process/ Induction & On-boarding (Staff and Below)</li>
         <li>Giving necessary trainings and awarenesses</li>
      
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} > 
         <ul>
         <li>HREx</li>
         <li>HREx</li>
        
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>

      <ul>
         <li>DRM Documents</li>
         <li>Survey results</li>
        
        <li>No of feedback and suggessions</li>
        <li>TEI Index </li>
        <li>Recruitment records/ Induction records</li>
        <li>Training Records</li>
        
         
         </ul>


      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>Daily/ Weekly</li>
         <li>Quarterly</li>
        
        <li>Daily/ Weekly</li>
        <li>Daily/ Weekly </li>
        <li>Daily/ Weekly</li>
        <li>Daily/ Weekly </li>
         
         </ul>




      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>AM-HRD/ HREx</li>
         <li>AM-HRD/ HREx</li>
        
        <li>AM-HRD/ HREx</li>
        <li>AM-HRD/ HREx </li>
        <li>AM-HRD/ HREx</li>
        <li>AM-HRD </li>
         
         </ul>
</td>
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>TEI</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Core responsibility to create and maintain the Plant TEI corners</li>
         <li> Setting the objectives and deligating subordinates for the TEI excellence</li>
         <li>Auditing and proposing the corrective and preventive measures for the TEI process</li>
         <li>Setting the employee involvement mechanism and monitoring and guiding the smooth functioning</li>
        <li>Presenting the related information to higher management<li>
           </li>Preparation of weekly/ monthly reports for the management</li>
         <li>Preparation of weekly/ monthly reports for the management</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >


         <ul>
         <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}> <ul>
         <li>TEI Pits Offs </li>
        <li>Training Records</li>
        <li>Audit reports </li>
        <li>TEI implementation plan </li>
        <li>TEI Index  </li>
        
         
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Daily </li>
        <li>Daily/ Weekly</li>
        <li>Weekly </li>
        <li>Weekly </li>
        <li>Weekly/ monthly</li>
        
         
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        <li>AM - HRD </li>
        
         
         </ul></td>
      
      
    </tr>
    </tbody>
  
  
</table></div>
      </Dialog>
    </div>
    
    
    
    </div>
  );
}
