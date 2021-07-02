import React, { useContext, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ListSubheader from '@material-ui/core/ListSubheader';
import {reportContext} from '../../../context/ContextProvider'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Filter5Icon from '@material-ui/icons/Filter5';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import GavelIcon from '@material-ui/icons/Gavel';
const user = {
  avatar: '',
  jobTitle: '',
  name: 'SUN-TWS'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: SettingsIcon,
    title: 'OEE'
  },
  {
    href: '/app/dataflow',
    icon: AccountTreeIcon,
    title: 'IPR'
  },
  {
    href: '/app/productiondashboard',
    icon: SpeakerNotesIcon,
    title: 'Line Report'
  },
  {
    href: '/app/cost',
    icon: LoyaltyIcon,
    title: 'Cost'
  },
  {
    href: '/aks',
    icon: SpeakerNotesIcon,
    title: 'PKO Online'
  },
  {
    href: '/register',
    icon: AssessmentIcon,
    title: 'WPR'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Other'
  }
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }, button: {
    marginLeft: '-8px'
  }, nestedmain: {
    marginLeft: '-18px',
  }, nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {





  const{ddate,setDdate} =useContext(reportContext)


  var newd =  new Date(ddate);
    let monthNumber = newd.getMonth() + 1;    

  const classes = useStyles();
  const location = useLocation();


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };




  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/momdpr"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}><Button
            color=""
            component="button"
            // href='https://docs.google.com/spreadsheets/d/1cORjLbMFJOXUfKTEmG3WKAd-uJuJPxmwaULLAIEzICk/edit#gid=2093608797'
            variant="outline"
            className={classes.button}
            onClick={() => window.open('https://docs.google.com/spreadsheets/d/1cORjLbMFJOXUfKTEmG3WKAd-uJuJPxmwaULLAIEzICk/edit#gid=2093608797')}

           
          >
            <SpeakerNotesIcon /> <span className='ml-2 justify-content-start'>PKO</span>
          </Button>

            <Button
              color=""
              component='button'
              variant="outline"
              className={classes.button}
              onClick={() => window.open('https://docs.google.com/spreadsheets/d/1ls-Lvz95rEls2RFu9MB0ZRkr6vhgF7hOOW-8yLdbitA/edit#gid=1047554916')}
            >
              <TransferWithinAStationIcon /> <span className='ml-2'>EDP</span>
            </Button>

            <Button
              color=""
              component='button'
              variant="outline"
              className={classes.button}
              onClick={() => window.open((monthNumber ===1)?'https://docs.google.com/spreadsheets/d/1rQ75EveyAWhPVY-qR_zyXccpGUBPufIDyauMS61UBf0/edit#gid=265877892':(monthNumber ===2)?'https://docs.google.com/spreadsheets/d/1_lfDxE-XZmtqKR6MyLtqWIf-Zb2nOLX3XC9KIGk3A1s/edit#gid=1436419379':(monthNumber ===3)?'https://docs.google.com/spreadsheets/d/1UM_uayjrEaBBHUflZswWpGP_ZgXyWYO9Yv0I4ZNfx7M/edit#gid=1541233601':(monthNumber ===4)?'https://docs.google.com/spreadsheets/d/11c2KuIFqQl6ZYWEEKwzTNh7cMRQrkmxi1kuwpRsCjvk/edit#gid=1450881799':(monthNumber ===5)?'https://docs.google.com/spreadsheets/d/1jjgXTGE_UqJQusIyBhXm0587K-VPqoiZbWRsdqyzPSg/edit#gid=1249626179':(monthNumber ===6)?'https://docs.google.com/spreadsheets/d/1zbWkbJz6nzjkNRHm28yQaOrXxGsdkT9tDtqkW1b9Kq0/edit#gid=1636713844':(monthNumber ===7)?'':'')}
            >
              <DraftsIcon /> <span className='ml-2'>DPR</span>
            </Button>


            <Button
              color=""
              component='button'
              variant="outline"
              className={classes.button}
              onClick={() => window.open('')}
            >
              <SendIcon /> <span className='ml-2'>LOST ANALYSIS</span>
            </Button>
          </div>

          <div style={{ marginLeft: '-10px' }}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
            //subheader={
            //   <ListSubheader component="div" id="nested-list-subheader">
            //     Nested List Items
            //   </ListSubheader>
            // }

            >


              <ListItem button onClick={handleClick} >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText secondary="SYSTEM" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Button >
                      <ListItemIcon >
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText secondary="TEI" />
                    </Button>
                  </ListItem>
                </List>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Button >
                      <ListItemIcon>
                        <Filter5Icon />
                      </ListItemIcon>
                      <ListItemText secondary="5S" />
                    </Button>
                  </ListItem>
                </List>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Button >
                      <ListItemIcon>
                        <RecentActorsIcon />
                      </ListItemIcon>
                      <ListItemText secondary="QCC" />
                    </Button>
                  </ListItem>

                </List>

                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <Button href='https://docs.google.com/spreadsheets/d/1ZDxEVS77S60KWRLDVKdJJ1S8clt8VUnLxNkZcxUwxk0/edit#gid=0'>
                      <ListItemIcon>
                        <GavelIcon />
                      </ListItemIcon>
                      <ListItemText secondary="KAIZEN" />
                    </Button>
                  </ListItem>

                </List>
              </Collapse>
            </List>

          </div>



        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >

        {/* <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href='https://docs.google.com/spreadsheets/d/1cORjLbMFJOXUfKTEmG3WKAd-uJuJPxmwaULLAIEzICk/edit#gid=2093608797'
            variant="contained"
          >
            RCCM
          </Button>
        </Box> */}
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
