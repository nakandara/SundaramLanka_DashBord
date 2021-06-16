import React,{useState,useContext} from 'react';
import { Link as RouterLink, useNavigate,useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Logo from 'src/components/Logo';
import DatePick from '../../views/Wpr/DatePick'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Grid,Paper,InputLabel,NativeSelect,FormControl,Select
} from '@material-ui/core';
import {reportContext} from '../../context/ContextProvider'
import Production from 'src/views/Wpr/Production';
import Quality from 'src/views/Wpr/Quality';
import Mixing from 'src/views/Wpr/Mixing';
import Eng from 'src/views/Wpr/Eng';
import Hr from 'src/views/Wpr/Hr';
import Bead from 'src/views/Wpr/Bead';
import Ftr from 'src/views/Wpr/qualityAnalyis/Ftr';
import Flash from 'src/views/Wpr/qualityAnalyis/Flash';
import Ber from 'src/views/Wpr/qualityAnalyis/Ber';
import Reject from 'src/views/Wpr/qualityAnalyis/Reject';
import Hold from 'src/views/Wpr/qualityAnalyis/Hold';
import { Navigate } from 'react-router-dom';
import './main.css'
import ProductionA from 'src/views/Wpr/ProductionAnalayisi/ProductionA';
import MixingA from 'src/views/Wpr/MixingAnalysis/MixingA';
import EngA from 'src/views/Wpr/EngAnalaysis/EngA';
import HrA from 'src/views/Wpr/HrAnalaysis/HrA';
const drawerWidth = 200;

const useStyles = makeStyles(theme=>({
  root: {display: 'flex',},
  toolbar: {
    height: 64
  },formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 2,
    flexShrink: 0,
    backgroundColor:'rgb(90,199,237)',
    objectFit: 'contain ',
  backgroundRepeat:' no-repeat ',
  backgroundSize: 'cover'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#218bc9',
    objectFit: 'contain ',
  backgroundRepeat:' no-repeat ',
  backgroundSize: 'cover',
 
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const TopBar = ({ className, ...rest }) => {

  const {kpi,dispatch,dateOne,dateTwo,lineChartData,setLineChartData,stateSelect, setStateSelect} =useContext(reportContext)


  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  
const [change,setChange]=useState(false)


  const handleChange = (e) => {
    
    e.preventDefault();
    setStateSelect(e.target.value);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  ////////////////////

  // const handleChange = (e) => {
    
  //   e.preventDefault();
  //   setStateSelect(e.target.value);
  // };

  //console.log(stateSelect);
  var z = kpi.firstKpi
  ///////////////////////
  const changeComp =()=>{

    switch(stateSelect){
      case 'production':
    return<Production/>
       case 'quality':
      return<Quality/>
      case 'mixing':
        return<Mixing/>
        case 'eng':
          return<Eng/>
          case 'hr':
            return<Hr/>
            case 'bead':
              return<Bead/>
      default:
      return <Production/>
    
    }
    
      
    
  }


  ///////////////

  const changeComSecond =()=>{

switch(z){
  case 'ftr':
return<Ftr/>
   case 'flash':
  return<Flash/>
  case 'berlc':
    return<Ber/>
    case 'hold_compound':
      return<Hold/>
      case 'reject_compound':
        return<Reject/>
        case 'plan_adherence':
        return<ProductionA/>
        case 'plant_utilization':
          return<ProductionA/>
          case 'plan_vs_actual':
            return<ProductionA/>
            case 'productivity':
              return<ProductionA/>

              case 'compound_weight_actual':
                return<MixingA/>
                case 'mixing_break_dow':
                  return<MixingA/>
                  case 'mixing_productivity':
                    return<MixingA/>
                    case 'mixing_man_power':
                      return<MixingA/>


                      case 'energy_cost_kg':
                return<EngA/>
                case 'break_down':
                  return<EngA/>
                  case 'energy_consumed':
                    return<EngA/>
                    case 'firewood_cost_rate':
                      return<EngA/>


                      case 'absent_inform':
                return<HrA/>
                case 'absent_non_inform':
                  return<HrA/>
                  case 'late':
                    return<HrA/>
                    case 'man_power':
                      return<HrA/>
                      case 'dot':
                        return<HrA/>
                        case 'nearMiss':
                          return<HrA/>
                          case 'kaizen':
                            return<HrA/>
                            case 'training':
                              return<HrA/>


        
  default:
  return <h4>Analysis</h4>

}

  }

   
  //const [count,dispatch]  =  useReducer(reducer,initialState)
const handleRccm =(e)=>{
// console.log('ok');
e.preventDefault();
 navigate('/other')

}

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
            <RouterLink to="/">
          <Logo />
        </RouterLink>
          </IconButton>
          <Typography variant="h4" noWrap>
            SUN-TWS WEEKLY PERFORMANCE REVIEW
          </Typography>
          <Typography>
            <DatePick/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }} style={{ backgroundImage: `url(./image/he.jpg)` }} 
      >
        <div className={classes.drawerHeader} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <FormControl className={classes.formControl} >
        <InputLabel htmlFor="age-native-helper" style={{fontSize:'14px',fontWeight:'bold'}}>Division</InputLabel>
        <NativeSelect
          value={stateSelect}
          onChange={handleChange}
          style={{fontSize:'18px',fontWeight:'bold'}}
          
        >
         
          <option value={'production'} style={{fontSize:'14px',fontWeight:'bold'}}>Production</option>
          <option value={'quality'} style={{fontSize:'14px',fontWeight:'bold'}}>Quality</option>
          <option value={'mixing'} style={{fontSize:'14px',fontWeight:'bold'}}>Mixing</option>
          <option value={'eng'} style={{fontSize:'14px',fontWeight:'bold'}}>Engineering</option>
          <option value={'hr'} style={{fontSize:'14px',fontWeight:'bold'}}>HR</option>
          <option value={'bead'} style={{fontSize:'14px',fontWeight:'bold'}}>Bead</option>
        </NativeSelect>
        
      </FormControl>


      <div>{ changeComp()}</div>
      <div className='rcc'><Box
          display="flex"
          justifyContent=""
          mt={2}
        >
          <Button 
            color="primary"
            component="a"
            onClick={handleRccm}
            variant="contained"
          >
            RCCM
          </Button>
        </Box></div>
      <div className='secondChange'>{changeComSecond()}</div>


        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
         
        </Typography>
        <Typography paragraph>
         
        </Typography>
      </main>
    </div>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;




{/* <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <div><DatePick/>
        </div>
      </Toolbar>
    </AppBar> */}