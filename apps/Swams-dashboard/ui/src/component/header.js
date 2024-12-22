import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../css/styles.css';

const Header = () => (
  <header className="top-bar">
    <div className="search-bar">
      <SearchIcon />
      <input type="text" placeholder="Search..." />
    </div>
    <div className="top-bar-right">
      {/* Language Selector */}
      <div className="language-selector">
        <select id="languageSelect">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      {/* Voice Notifications */}
      <button id="voiceNotifications" className="icon-button" title="Toggle Voice Notifications">
        <VolumeUpIcon />
      </button>
      {/* Take Photo */}
      <button id="takePhoto" className="icon-button" title="Report an Issue">
        <CameraAltIcon />
      </button>
      {/* Notifications */}
      <div className="notifications" id="notifications">
        <NotificationsIcon />
        <span className="notification-count" id="notificationCount">0</span>
      </div>
    </div>
  </header>
);

export default Header;