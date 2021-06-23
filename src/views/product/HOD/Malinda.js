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
        <Avatar onClick={handleClickOpen}  style={{marginRight:'9px'}}/> <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          MR MALINDA
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
             Management SOP
            </Typography>
            

        <table className="table  table-bordered table-hover mb-0 ">
  <thead className="thead" style ={{backgroundColor:'#B3EAB5'}}>
    <tr>
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='3%'>KPI</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='3%'>UOM</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='22%'>DUTY</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   WHO TAKE MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   HOW TO MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">TIME FREQ</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">RESPON/CONTROL</th>
      
    </tr></thead>
    <tbody>
    <tr>
     
      <td width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Absent Inform /Non Inform</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Daily monitoring of shift level attendance while maintaining the daily attendance reports (including Late in/ Early out)</li>
         <li> Preparation of monthly leave plan/ leading it accordingly</li>
         <li>Presenting the related information to higher management</li>
         <li>Preparation of monthly leave plan/ leading it accordinglyt</li>
        <li>Closely monitoring individual attendance behaviour/ act when necessary</li>
        <li>Overlooking the employee availability in section within the working hours</li> 
        
        <li>Evaluating/ Feedback</li>     
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li> Shift In-Charge</li>
         <li> Shift In-Charge </li>
         <li></li>
         <li>Shift I-charge/ HREx</li>
         <li> Shift In-charge </li>
         <li></li>
         <li>Shift In-charge</li>
        
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
      <ul>
         <li> Manual/ Electronic attendance report- daily</li>
         <li>  Monthly shift wise leave plan</li>
         <li></li>
         <li>Attendance sheets</li>
         <li> Manual Records/ Finger print reports </li>
         <li></li>
         <li>Weekly Reports/ RCCM</li>
        
         
         </ul>
         
         
         
         
         </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Daily </li>
         <li> Monthly </li>
         <li></li>
         <li>Weekly</li>
         <li> Daily </li>
         <li></li>
         <li>Weekly</li>
        
         
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li> Shift In-charge/ HREx</li>
         <li> Shift In-charge/ Leaders </li>
         <li></li>
         <li>Shift In-charge</li>
         <li> Shift In-charge/ Leaders </li>
         <li></li>
         <li></li>
        
         
         </ul></td>
  
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>KAIZEN</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Daily/ Weekly monitoring of shift level employee involvement for KAIZEN proposals/ encouraging employees </li>
         <li>Responsibilty of necessary budget/ capex approvals</li>
         <li>Keeping records on shift level KAIZENs</li>
        <li>Evaluating/ Feedback</li>
         
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ></td>
      <td   width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      <ul>
         <li>  Shift In-charge </li>
         <li> Shift In-charge </li>
         <li> Shift In-charge</li>
         <li>Shift In-charge </li>
        
         
         </ul>
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>  Shift wise Kaizen report </li>
         <li> Shift wise Kaizen report </li>
         <li> Shift wise Kaizen report</li>
         <li>No of collected/ Implemented kaizens </li>
        
         
         </ul>

      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>  Weekly </li>
         <li> Weekly </li>
         <li> Daily</li>
         <li>Weekly </li>
        
         
         </ul>
      </td>
     
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Safety</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily reviewing the every level safety status/ Keeping records and making MIS</li>
         <li> Sole responsibilty to arranging the sfety committee meetings in regular basis/ Launch the decisions immediately/ keeping the recommended represantaion/ reporting to </li>
         <li>Maintaining Fire/ First aid teams</li>
         <li>Checking of the safety check lists Daily/ weekly/ in regular intervals</li>
         <li> Investigating and recommending the necessary actions / precausions against the safety matters/ Maintaining safety log book</li>
         <li>Responsibilty on Maintaining the H&S corner.</li>
         <li>Organizing and conducting in-house/ out side trainings.</li>
         <li>Raise the the PO for PPE's and maintaining the sufficient stocks/ Responsibity on sick room functions & </li>
         <li>Updating and actions related General Register</li>
         <li>Monitoring an arranging of the In house/ outside safety audits/ inspections/ calibrations on time</li>
         <li>Organizing events (i.e. Safety week)</li>
         <li>Responsibility on safety compliance of the whole plant</li>
         <li>Immediate actions against deviations</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ></td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      
      
      <ul>
         <li>Shift In-charge</li>
         <li> Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge </li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         <li> Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         <li> Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         
         </ul>
      
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>

      <ul>
         <li>No of NRA/ RA/ Nearmiss</li>
         <li> Safety committee member list/ Minutes</li>
         <li>Shift wise Safety/ Fire team records</li>
         <li>Safety check lists reviews</li>
         <li>Safety Cards/ Safety Cross</li>
         <li>H&S Corner daily updates</li>
         <li>Training Records- Shift</li>
         <li>PPE requests / MRN</li>
         <li>Accident/ Nearmiss forms</li>
         <li>Training Records- Shift/ Check lists</li>
         <li> Events photos</li>
         <li>PPE adherance reports</li>
         <li>Safety Cards/ Safety Cross</li>
         
         </ul>
      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Daily</li>
         <li> Weekly</li>
         <li>Annually</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li> Daily</li>
         <li>When Necessary</li>
         <li>Daily</li>
         <li> When Necessary</li>
         <li>Daily</li>
         <li>Daily</li>
         
         </ul></td>
      <td  width='3%'> <ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         
         </ul></td>
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>T & D</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily updating and maintaining training data in necessary locations</li>
         <li> Identify and recommend the training programs for employees.</li>
         <li>Identify and directing employees for multiskill upgrading programs</li>
         <li>Directing employees for the scheduled/ Ad-hoc training programmes on time</li>
         <li>Inform and discuss skill gaps of the particular employees/ Record keeping</li>
        <li>Updating skill inventory of the shift employees</li>
         <li>Updating skill inventory of the shift employees</li>
         <li>Undergoing the new comers for the basic trainings with the Sectional Coachers and keeping record</li>
         <li>Responsibility to cover each employee with the "30 min per employee per month"/ Keeping records</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>Shift In-charge</li>
         <li> Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge </li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         <li> Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         
         
         </ul>
         </td>
      <td   width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>

      <ul>
         <li>Training pits off - 30 min Tr calendar</li>
         <li> Training proposals</li>
         <li>Multi skill records</li>
         <li>Training Records - Shift</li>
         <li>Individual Skill Inventory </li>
         <li>Individual Skill Inventory</li>
         <li></li>
         <li> Training Records</li>
         <li>30 min employee training records (Manual/ EDP)</li>
         <li>Training Needs</li>
         
         
         </ul>
      </td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}>
      <ul>
         <li>Daily</li>
         <li> When necessary</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily </li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>When necessary</li>
         
         
         </ul>
      </td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}>
      <ul>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         
         
         </ul>
      </td>
      
      
    </tr>

    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>DOT</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Daily monitoring of shift level DOT consumption while maintaining the daily reports/ Updating at the DRM Centres.</li>
         <li> Preparation of Weekly DOT report</li>
         <li>Level - 2 authorizing of DOT request form</li>
         <li>Calculation of daily/ weekly/ monthly DOT cost Plant/ Shift/ Section wis and producing the analysis to management</li>
        <li>Recommends awarenesses/ trainings</li>
        <li>Evaluating/ Feedback</li>
         
         </ul></td>
         <td  width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >

         <ul>
         <li>Shift In-chrage</li>
         <li>Shift In-chrage </li>
         <li>Shift In-chrage</li>
         <li>Shift In-chrage</li>
        <li>Shift In-chrage</li>
        <li>Shift In-chrage</li>
         
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Daily DOT data</li>
         <li> DRM Data</li>
         <li>DOT Approval form</li>
        <li>Weekly reports</li>
        <li>Training Rcords</li>
        <li></li>
         
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         <li> Weekly</li>
         <li>Daily</li>
         <li>Weekly</li>
        <li>Daily</li>
        <li></li>
         
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ HREx</li>
        <li>Shift In-charge/ HREx</li>
        <li></li>
         
         </ul></td>
      
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>IR Mgt</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Daily reporting and representing to the management of employee grievances/ following for the final action</li>
         <li> Direting the employees for paricipation for the company events/ meetings/ forums</li>
         <li>Record keeping on individual employee participation for the above events (100%)</li>
         <li>Keeping records on employee complaints on IR related matters and immediately inform them them to the next level for the suitable actions</li>
        <li>Proposing the awarenesses/ trainings</li>
         <li>Evaluating/ Feedback</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>Shift In-chrage</li>
         <li>Shift In-chrage </li>
         <li>Shift In-chrage</li>
         <li>Shift In-chrage</li>
        <li>Shift In-chrage</li>
         <li>Shift In-chrage</li>
         </ul>


         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}> <ul>
         <li>Shift employees'grievance records</li>
         <li> Attendance register for the event</li>
         <li>Attendance register for the event</li>
         <li>Employee complaints records</li>
        <li>Training records</li>
         <li></li>
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Daily</li>
         <li>When necessary </li>
         <li>When necessary</li>
         <li>Daily</li>
        <li>Daily</li>
         <li>Daily</li>
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Shift In-charge/ HREx</li>
         <li> Shift In-charge/ HREx</li>
         <li>Shift In-charge/ HREx</li>
         <li>Shift In-charge/ HREx</li>
        <li>Shift In-charge/ HREx</li>
         <li>Shift In-charge/ Leader</li>
         </ul></td>
 
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Performance Management</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily preparation of performance/ efficiency reports</li>
         <li> Daily updating and circulation of plant performance dashboards.</li>
         <li>Daily updating DRM centers with necessary information</li>
         <li>Take part of the annual performance appraisal meetings with the individual perofrmance information.</li>
        <li>Daily feedback on performance deviations/ Recording/ inform to the higher level with figures</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td  width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ><ul>
         <li>Shift In-charge</li>
         <li> Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
        <li>Shift In-charge</li>
         <li></li>
         </ul></td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Employee history records/ Individual efficiency & Skill records</li>
         <li> updates</li>
         <li>DRM data </li>
         <li>PA gradings</li>
        <li>Individual performance records - shift wise</li>
         <li></li>
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Annually</li>
        <li>Daily</li>
         <li></li>
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
         <li></li>
         </ul></td>
  
    </tr>


    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>HR Admin</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>On time prepartion of employee salary, validation of leave, Crediting the statutory payments, suppliers payments, Salary advance etc..</li>
         <li> Daily collection of leave applications and updating.</li>
      
         <li>Collection of employee suggessions on existing welfare facilities/ Reporting</li>
        <li>Administration of employee satisfaction survey in quarterly basis</li>
        <li>Facilitating for the meetings related to the employee welfare</li>
        <li> Administration of employee transport/ General transport facilities/ Sick room etc..</li>
         <li> Personal files/ Recruitment Register/ employee on-boarding as per the requested</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>Shift In-charge</li>
       
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
        <li>Shift In-charge</li>
        <li>Shift In-charge</li>
        <li> Shift In-charge</li>
         <li>Shift In-charge </li>
         <li>Shift In-charge</li>
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}> <ul>
         <li>Employee Leave forms/ Time sheet validation</li>
         <li> Employee Leave forms/ Time sheet validation</li>
         <li>Suggessions/ Complaints</li>
         <li>Survey forms</li>
        <li>No of shift employee partcipation</li>
        <li>Maintaining employee concerns report</li>
        <li> Employee onboarding records</li>
         <li>Traning Records </li>
         
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Daily</li>
         <li>Daily </li>
         <li>Daily</li>
         <li>When necessary</li>
        <li>When necessary</li>
        <li>Daily</li>
         <li>Daily </li>
         <li>Daily</li>
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}> <ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
        <li> Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         
         </ul></td>
      
      
    </tr>

    
    <tr>
     
    <td  width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>TEI</div></td>
      <td  width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td  width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Managing sectional employees as per the code of ethics of the Sun-Tws</li>
         <li> Keping individual reports on violations/ compliance/ supports</li>
      
         <li>Updating the TEI corners with correct information</li>
        <li>Managing the records/ signature lists of participation for the corporate events<li>
           </li>Supporting the management to achieve TEI goals every times</li>
         <li>Sharing information with management on time with correct facts and figures</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>Shift In-charge</li>
         
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
        <li>Shift In-charge<li>
           </li>Shift In-charge</li>
         <li>Shift In-charge</li>
         <li>Shift In-charge</li>
         </ul>
         </td>
      <td   width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Records on shift employees mis behaviours</li>
         
         <li>Individual employee records</li>
         <li>TEI Index Data</li>
        <li>Attendance registers on every events - Own shift<li>
           </li>Employee involvement records</li>
         <li>TEI Index Data</li>
         <li>Traning Records</li>
         </ul></td>
      <td   style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         
         <li>Daily</li>
         <li>Daily</li>
        <li>Daily<li>
           </li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         </ul></td>
      <td  style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader</li>
         
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader<li>
           </li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         </ul></td>

      
    </tr>
    </tbody>
  
  
</table></div>
      </Dialog>
    </div>
    
    
    
    </div>
  );
}
