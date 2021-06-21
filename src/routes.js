import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/LineView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/Wpr/LoginView';
import NotFoundView from 'src/views/other/NotFoundView';
import FlowData from 'src/views/product/FlowData';
import RegisterView from 'src/views/Wpr/WprView';
import SettingsView from 'src/views/settings/SettingsView';
import Rccm from 'src/views/Wpr/Rccm'
import ProductionDashBoard from './views/DivisionDash/ProductionDashBoard';
import QualityDashBoard from './views/DivisionDash/QualityDashBoard';
import MixingDashBoard from './views/DivisionDash/MixingDashBoard';
import BeadDashBoard from './views/DivisionDash/BeadDashBoard';
import PlanningDashBoard from './views/DivisionDash/PlanningDashBoard';
import HRDashBoard from './views/DivisionDash/HRDashBoard';
import ENGDashBoard from './views/DivisionDash/ENGDashBoard';
import SafetyDashBoard from './views/DivisionDash/SafetyDashBoard';
import MoldDashBoard from './views/DivisionDash/MoldDashBoard';
import ProductionLineWise from './views/LineWise/ProductionLineWise';
import QualityLineWise from './views/LineWise/QualityLineWise';
import BeadSizeWise from './views/LineWise/BeadSizeWise';
import RccmDash from './views/reports/DashboardView/RccmDash'
import Analaysis from '../src/Analysis/Analaysis'
import DashBoardSummary from './views/reports/DashboardView/DashBoardSummary'
import Dpr from './Pages/Dpr'
import MeterDash from './meterDash/MeterDash' 
import LineOne from './views/DivisionDash/LineReport/LineOne';
import LineTwo from './views/DivisionDash/LineReport/LineTwo';
import LineThree from './views/DivisionDash/LineReport/LineThree';
import DprMom from './MOM/DprMom';
import AllKpiSummary from './Pages/AllKpiSummary/AllKpiSummary';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />, 
    children: [
      { path: 'line', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <Dpr /> },
      { path: 'dataflow', element: <FlowData /> },
      { path: 'cost', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'productiondashboard', element: <ProductionDashBoard /> },
      { path: 'qualitydashboard', element: <QualityDashBoard/> },
      { path: 'mixingdashboard', element: <MixingDashBoard /> },
      { path: 'planningdashboard', element: <PlanningDashBoard /> },
      { path: 'molddashboard', element: <MoldDashBoard /> },
      { path: 'beaddashboard', element: <BeadDashBoard /> },
      { path: 'hrdashboard', element: <HRDashBoard /> },
      { path: 'engdashboard', element: <ENGDashBoard /> },
      { path: 'safetydashboard', element: <SafetyDashBoard /> },
      { path: 'productionlinewise', element: <ProductionLineWise/> },
      { path: 'qualitylinewise', element: <QualityLineWise /> },
      { path: 'beadsizewize', element: <BeadSizeWise/> },
      { path: 'DashBoardSummary', element: <DashBoardSummary/> },
      { path: 'Dpr', element: <DashboardView/> },
      { path: 'lineone', element: <LineOne/> },
      { path: 'linetwo', element: <LineTwo/> },
      { path: 'linethree', element: <LineThree/> },
     
      

 
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'rccm', element: <Rccm/> }
    ]
  },
  {
    path: '/other',
    element: <Rccm />,
    children: [
      { path: 'daily', element: <RccmDash/> }
      
    ]
  }, {
    path: '/daily',
    element: <RccmDash />,
    children: [
      {  }
      
    ]
  }, {
    path: '/analysis',
    element: <Analaysis />,
    children: [
      {  }
      
    ]
  },{
    path: '/meterdash',
    element: <MeterDash />,
    children: [
      {  }
      
    ]
  },{
    path: '/momdpr',
    element: <DprMom/>,
    children: [
      { path: 'aks', element: <AllKpiSummary/> }
      
    ]
  },{
    path: '/aks',
    element: <AllKpiSummary/>,
    children: [
      {  }
      
    ]
  }
];

export default routes;
