import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/icons-material";

const PredictiveAnalyticsCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">
        <PieChart sx={{ mr: 1 }} /> Predictive Analytics
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography>Loading predictive analytics...</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default PredictiveAnalyticsCard;
