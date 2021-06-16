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
    setOpen(true);
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
          SUPERVISOR
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
     
      <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Absent Inform</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Absent Non Inform</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Kaizen</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
    </tr>


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Near Miss</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Reportable Accident</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
    </tr>


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Non Reportable Accident</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
    </tr>


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Training</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>hrs</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
    </tr>


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>T & D</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Rohitha</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>Mr Indika</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>HR Admin</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='22%' style={{fontSize:'14px',fontWeight:'bold'}}>Dot</td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}>Nos</td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold'}}>0</td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' ></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'></td>
      
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
     
      <th scope="col-md-3 col-sm-3 col-lg-3" width='4%'>KPI</th>
      <th scope="col-md-2 col-sm-2 col-lg-2" width='3%'>UOM</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='25%'>DUTY</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   WHO TAKE MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" >   HOW TO MEASURE</th>
      <th scope="col-md-1 col-sm-1 col-lg-1" width='5%'>TIME FREQ</th>
      <th scope="col-md-1 col-sm-1 col-lg-1">RESPON/CONTROL</th>
      
    </tr></thead>
    <tbody>
    <tr>
     
      <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Absent Inform /Non Inform</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Daily monitoring of shift level attendance while maintaining the daily attendance reports (including Late in/ Early out)</li>
         <li> Preparation of monthly leave plan/ leading it accordingly</li>
         <li>Level - 2 authorizing of any mode of leave applications/ Gate Passes</li>
         <li>Closely monitoring individual attendance behaviour/ act when necessary</li>
         <li>Overlooking the employee availability in section within the working hours</li>
         <li>Recommends awarenesses/ trainings</li>
         <li>Evaluating/ Feedback</li>
        
         
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ><ul>
         <li> Leader</li>
         <li>Leader </li>
         <li>Leader</li>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         <li>Leader</li>
        
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
      <ul>
         <li> Manual Attendance Sheet</li>
         <li> Monthly leave plan</li>
         <li>Leave forms/ Gate passes</li>
         <li>Individual leave records</li>
         <li> Movements Records/ Gate Passes</li>
         <li>Training Records</li>
         <li>Training Records</li>
        
         
         </ul>
         
         
         
         
         </td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Daily</li>
        
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader </li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        
         
         </ul></td>

      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>KAIZEN</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Daily/ Weekly monitoring of shift level employee involvement for KAIZEN proposals/ encouraging employees </li>
         <li> Keeping records on shift level KAIZENs</li>
         <li>Maintaining and updating of KAIZEN Pits off in regular basis</li>
         <li>. Recommends awarenesses/ trainings</li>
         <li>Evaluating/ Feedback</li>
        

         
         </ul></td>
         
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      <ul>
         <li> Leader</li>
         <li>Leader </li>
         <li>Leader</li>
         <li>Leader</li>
         <li> Leader</li>
         
        
         
         </ul>
      </td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>
      <ul>
         <li> KAIZEN records - Sectional</li>
         <li>KAIZEN records - Sectional </li>
         <li>KaIZEN Pits off updating - Section</li>
         <li>Training Records</li>
         <li> Training Records</li>
   
         
         </ul>
      </td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Daily</li>
         <li>Daily </li>
         <li>Daily</li>
         <li>Daily</li>
         <li> Daily</li>
         
        
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'><ul>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         
        
         
         </ul></td>
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Safety</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily reviewing the every level safety status/ Keeping records and making MIS</li>
         <li> Sole responsibilty to arranging the sfety committee meetings in regular basis/ Launch the decisions immediately/ keeping the recommended represantaion/ reporting to the management</li>
         <li>Maintaining Fire/ First aid teams</li>
         <li>Checking of the safety check lists Daily/ weekly/ in regular intervals</li>
         <li> Investigating and recommending the necessary actions / precausions against the safety matters/ Maintaining safety log book</li>
         <li>Responsibilty on Maintaining the H&S corner.</li>
         <li>Organizing and conducting in-house/ out side trainings.</li>
         <li>Raise the the PO for PPE's and maintaining the sufficient stocks/ Responsibity on sick room functions & Emergency vehicle</li>
         <li>Updating and actions related General Register</li>
         <li>Monitoring an arranging of the In house/ outside safety audits/ inspections/ calibrations on time</li>
         <li>Organizing events (i.e. Safety week)</li>
         <li>Responsibility on safety compliance of the whole plant</li>
         <li>Immediate actions against deviations</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
        
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>
      
      
      <ul>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         
         
         </ul>
      
      </td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Sectional daily safety records/ DRM</li>
         <li> Safety committee member participation - Section</li>
         <li>Fire/ First Aid Team - Section list</li>
         <li>Safety Cross/ Records</li>
         <li> Safety Cross/ Accidenfs & NM Records</li>
         <li>H&S Corner updates</li>
         <li>Training Records</li>
         <li> MRN/ PPE Adhearence records</li>
         <li>Accidenfs & NM Records</li>
         <li>Safety Audit records - Section</li>
         <li> Sectional Participation records</li>
         <li>Section Records</li>
         <li>Safety records</li>
         <li></li>
         
         </ul>
      </td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         
         
         </ul>
      </td>

      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         
         
         </ul>
      </td>
      
    </tr>


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>T & D</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Weekly/ Daily updating and maintaining training data in necessary locations</li>
         <li> Identify and recommend the training programs for employees to the next level.</li>
         <li>Identify and directing employees for multiskill upgrading programs</li>
         <li>Directing employees for the scheduled/ Ad-hoc training programmes on time.</li>
         <li>Inform and discuss skill gaps of the particular employees/ Record keeping</li>
        <li>Updating skill inventory of the section employees</li>
         <li>Act as the Coacher/ Mentor</li>
         <li>Undergoing the new comers for the basic trainings</li>
         <li>Responsibility to cover each employee with the "30 min per employee per month"/ Keeping records</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ><ul>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li>Leader</li>
        <li>Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         <li>Leader</li>
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%'  style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Training Data updates</li>
         <li>Employee Training Need  </li>
         <li>Sectional Skill Matrix</li>
         <li>Training Records</li>
         <li>Individual records</li>
        <li>Skill inventory</li>
         <li>Coaching/ mentoring records</li>
         <li>Training Records</li>
         <li>Training Records</li>
         <li>Training Records</li>
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         <li>Daily </li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
        <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         <li>Daily</li>
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         </ul></td>
      
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>DOT</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Assessing and requesting daily DOT requirement and raising the request form to shift in charge</li>
         <li> Maintaining sectional DOT level within the given limit/ Maintaining the cost</li>
         <li>Identify the patern of the DOT and recommends the actions to the next levels</li>
         <li>Daily updating the data at the DRM centres on time</li>
        <li>Maintaining of individual DOT records</li>
        <li>Recommends awarenesses/ trainings</li>
         
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>Leader</li>
         <li>Leader </li>
         <li>Leader</li>
         <li>Leader</li>
        <li>Leader</li>
        <li>Leader</li>
         
         </ul>
         </td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}>  <ul>
         <li>DOT Approval Form/ AB Records</li>
         <li>DOT Approval Form/ AB Records </li>
         <li>DRM Records/ Weekly Reviews</li>
         <li>DRM Records</li>
        <li>Individual DOT records</li>
        <li>Training Records</li>
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>  <ul>
         <li>Daily</li>
         <li>Daily </li>
         <li>Daily</li>
         <li>Daily</li>
        <li>Daily</li>
        <li>Daily</li>
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}>  <ul>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li>Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
         
         </ul></td>
     
    </tr>


    


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>IR Mgt</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Responsibility to directing the employees for the total employee participation on events/ motivational activities/ committees</li>
         <li> Immediately inform/ directing the employee to the management regarding their grievances.</li>
         <li>Regularily maintaining the records as per the given formats</li>
         
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ><ul>
         <li>Leader</li>
         <li> Leader</li>
         <li>Leader</li>
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Employee signature lists</li>
         <li> No of Grivances recieved</li>
         <li>No of Grivances recieved</li>
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily</li>
         <li> Daily</li>
         <li>Daily</li>
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
         
         </ul></td>
      
    </tr>


    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>Performance Management</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Setting the operator level targets for the sectional employees.</li>
         <li> Daily/ hourly monitoring the acheivements of the sectional targets</li>
         <li>Inform to higher level about the deviations </li>
         <li>Updating DRM centers with necessary information/ updating chek lists.</li>
        <li>Recommends further awarenesses/ trainings</li>
         
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} >
         <ul>
         <li>Leader </li>
         <li>Leader </li>
         <li>Leader </li>
         <li>Leader</li>
        <li>Leader</li>
         
         </ul>
         </td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Individual Targets Vs Achievements</li>
         <li> Operational Log/ 3 hrs review</li>
         <li> PA Interview records</li>
         <li>DRM boards</li>
        <li>Training Records</li>
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li>Daily </li>
         <li> Daily</li>
         <li> Daily</li>
         <li>Daily</li>
        <li>Daily</li>
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
         
         </ul></td>
     
      
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>HR Admin</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Taking the employee concerns/ recording and communicate to the higher level for the suitable actions.</li>
         <li> On time submitting of leave forms/ Zero invalid attendance of the section</li>
         <li> Inform transport issues to the next level.</li>
         <li> Raise the sectional recruitment requests to the management.</li>
        <li> Recommends further awarenesses/ trainings</li>
         
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ><ul>
         <li> Leader</li>
         <li> Leader</li>
         <li> Leader</li>
         <li>Leader</li>
        <li>Leader</li>
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Special Incident reports/ NCR</li>
         <li> Time sheets/ Leave forms</li>
         <li>Employee suggessions </li>
         <li>Sectional Recruitment Requests form</li>
        <li>Training records</li>
         
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Daily</li>
         <li> Daily</li>
         <li> Daily</li>
         <li>When necessary</li>
        <li>Daily</li>
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader </li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='3%'><div style={{padding:'30px'}}></div></td>
    </tr>

    <tr>
     
    <td scope="col-md-3 col-sm-3 col-lg-3" width='3%' style={{fontSize:'14px',fontWeight:'bold',verticalAlign:'center '}}><div style={{padding:'30px'}}>TEI</div></td>
      <td scope="col-md-2 col-sm-2 col-lg-2" width='9%' style={{fontSize:'14px',fontWeight:'bold'}}> <div style={{padding:'30px'}}>Nos</div></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" width='12%'style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li>Managing sectional employees as per the code of ethics of the Sun-Tws</li>
         <li> Keping individual reports on violations/ compliance/ supports</li>
         <li>Updating the TEI corners with correct informations</li>
         <li>Managing the records/ signature lists of participation for the corporate events</li>
        <li>Supporting the management to achieve TEI goals every times<li>
           </li>Sharing information with management on time with correct facts and figures</li>
         <li>Recommends further awarenesses/ trainings</li>
         </ul></td>
         <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}} ><ul>
         <li> Leader</li>
         <li> Leader</li>
         <li> Leader</li>
         <li>Leader</li>
        <li>Leader</li>
        <li>Leader</li>
        <li>Leader</li>
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1 " width='12%' style={{fontSize:'14px',fontWeight:'bold',textAlign:'start'}}><ul>
         <li> Individual disciplinary records</li>
         <li> Individual disciplinary records</li>
         <li> TEI Index </li>
         <li>Signature lists </li>
        <li>Efficiency Reports/ Problem Cards</li>
         <li>Special Incident Reports/ Log entries/ Whatsapp</li>
         <li>Training Records</li>
         </ul></td>
      <td  scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Daily</li>
         <li> Daily</li>
         <li> Daily</li>
         <li>Daily</li>
        <li>Daily</li>
        <li>Daily</li>
        <li>Daily</li>
         
         </ul></td>
      <td scope="col-md-1 col-sm-1 col-lg-1" style={{fontSize:'14px',fontWeight:'bold'}}><ul>
         <li> Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li> Shift In-charge/ Leader</li>
         <li>Shift In-charge/ Leader</li>
        <li>Shift In-charge/ Leader</li>
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
