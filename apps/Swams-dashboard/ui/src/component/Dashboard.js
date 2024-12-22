import React from 'react';
import Charts from './Charts';
// import Map from './Map';
import '../css/styles.css';
import {
  WaterConsumptionCard,
  AlertsCard,
  HistoricalDataCard,
  PredictiveAnalyticsCard,
  RealTimeMonitoringCard,
} from './dashboard-components/';
import '../css/styles.css';


const Dashboard = () => (
  <div id="dashboardContent" className="content-section active">
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <h3><i className="fas fa-tint"></i> Water Consumption</h3>
        <Charts />
      </div>
      <div className="dashboard-card">
        <h3><i className="fas fa-exclamation-triangle"></i> Alerts</h3>
        <div id="alertsList" className="alerts-container">
          <ul id="alertItems">
            <li>No active alerts</li>
          </ul>
        </div>
        <button id="configureAlerts" className="btn">Configure Alerts</button>
      </div>
      {/* Uncomment and update the following if you have a Map component */}
      {/* <div className="dashboard-card full-width">
        <h3><i className="fas fa-map-marked-alt"></i> Campus Map</h3>
        <Map />
      </div> */}
      <div className="dashboard-card">
        <h3><i className="fas fa-history"></i> Historical Data</h3>
        <Charts />
      </div>
      <div className="dashboard-card">
        <h3><i className="fas fa-chart-pie"></i> Predictive Analytics</h3>
        <div id="predictiveAnalytics" className="analytics-container">
          <p>Loading predictive analytics...</p>
        </div>
      </div>
      <div className="dashboard-card">
        <WaterConsumptionCard />
      </div>
      <div className="dashboard-card">
        <AlertsCard />
      </div>
      
      <div className="dashboard-card">
        <HistoricalDataCard />
      </div>
      <div className="dashboard-card">
        <PredictiveAnalyticsCard />
      </div>
      <div className="dashboard-card full-width">
        <RealTimeMonitoringCard />
      </div>
    </div>
  </div>
);

export default Dashboard;