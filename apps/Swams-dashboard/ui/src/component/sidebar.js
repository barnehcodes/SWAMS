import React from 'react';
import '../css/styles.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TaskIcon from '@mui/icons-material/Task';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => (
  <nav className="sidebar">
    <div className="logo">
      <WaterDropIcon /> SWAMS AUI
    </div>
    <div className="user-info" id="userInfo">
      <AccountCircleIcon />
      <span id="userName">User</span>
      <ExpandMoreIcon />
      <ul className="user-dropdown" id="userDropdown" style={{ display: 'none' }}>
        <li><a href="#profile"><AccountCircleIcon /> Profile</a></li>
        <li><a href="#settings"><SettingsIcon /> Settings</a></li>
        <li><a href="#logout"><ExitToAppIcon /> Logout</a></li>
      </ul>
    </div>
    <ul className="nav-menu">
      <li><a href="#dashboard" className="nav-link active"><DashboardIcon /> <span className="nav-text">Dashboard</span></a></li>
      <li><a href="WaterManagement" className="nav-link"><WaterDropIcon /> <span className="nav-text">Water Management</span></a></li>
      <li><a href="Tasks" className="nav-link"><TaskIcon /> <span className="nav-text">Tasks</span></a></li>
      <li><a href="#analytics" className="nav-link"><BarChartIcon /> <span className="nav-text">Analytics</span></a></li>
      <li><a href="#reports" className="nav-link"><DescriptionIcon /> <span className="nav-text">Reports</span></a></li>
      <li><a href="#feedback" className="nav-link"><FeedbackIcon /> <span className="nav-text">Feedback</span></a></li>
      <li><a href="#support" className="nav-link"><SupportAgentIcon /> <span className="nav-text">Support</span></a></li>
    </ul>
  </nav>
);

export default Sidebar;