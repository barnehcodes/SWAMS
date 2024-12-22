import React, { useState, useEffect, createContext, useContext } from 'react';
import '../css/styles.css';

// Create a context for the notification system
const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

const NotificationSystem = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translations = {
    en: {
      threshold_exceeded: 'Water consumption exceeded at',
      task_assigned: 'New task assigned',
      maintenance_reminder: 'Maintenance due for',
      weather_alert: 'Weather alert'
    },
    fr: {
      threshold_exceeded: 'Consommation d\'eau dépassée à',
      task_assigned: 'Nouvelle tâche assignée',
      maintenance_reminder: 'Maintenance prévue pour',
      weather_alert: 'Alerte météo'
    },
    es: {
      threshold_exceeded: 'Consumo de agua excedido en',
      task_assigned: 'Nueva tarea asignada',
      maintenance_reminder: 'Mantenimiento debido para',
      weather_alert: 'Alerta meteorológica'
    },
    ar: {
      threshold_exceeded: 'تجاوز استهلاك المياه في',
      task_assigned: 'تم تعيين مهمة جديدة',
      maintenance_reminder: 'موعد الصيانة',
      weather_alert: 'تنبيه الطقس'
    }
  };

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }

    const voicePref = localStorage.getItem('voiceNotificationsEnabled');
    setVoiceEnabled(voicePref === 'true');
  }, []);

  const addNotification = (notification) => {
    notification.timestamp = notification.timestamp || new Date().toISOString();
    setNotifications((prevNotifications) => [notification, ...prevNotifications]);

    if (Notification.permission === 'granted') {
      new Notification(translations[currentLanguage][notification.type] || 'Notification', {
        body: notification.message,
      });
    }
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const value = {
    notifications,
    addNotification,
    clearAllNotifications,
    setLanguage: setCurrentLanguage,
    setVoiceEnabled: (enabled) => {
      setVoiceEnabled(enabled);
      localStorage.setItem('voiceNotificationsEnabled', enabled);
    }
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="notifications" id="notifications">
        <i className="fas fa-bell"></i>
        <span className="notification-count" id="notificationCount">{notifications.length}</span>
        <div className="notifications-dropdown">
          <ul id="notificationItems">
            {notifications.length === 0 ? (
              <li>No notifications</li>
            ) : (
              notifications.map((notification, index) => (
                <li key={index} className="notification-item">
                  <div className="notification-message">
                    <strong>{translations[currentLanguage][notification.type] || 'Notification'}</strong>: {notification.message}
                  </div>
                  <div className="notification-time">{new Date(notification.timestamp).toLocaleTimeString(currentLanguage, { hour: '2-digit', minute: '2-digit' })}</div>
                </li>
              ))
            )}
          </ul>
          <button id="clearNotifications" className="btn btn-secondary" onClick={clearAllNotifications}>Clear All</button>
        </div>
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationSystem;