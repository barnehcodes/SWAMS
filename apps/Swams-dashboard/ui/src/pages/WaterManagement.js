import React from 'react';
import { Container, Typography } from '@mui/material';
import MapWithMarker from '../component/Map.jsx';

const WaterManagement = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Water Management
      </Typography>
      <div className="map-container">
        <MapWithMarker />
      </div>
    </Container>
  );
};

export default WaterManagement;