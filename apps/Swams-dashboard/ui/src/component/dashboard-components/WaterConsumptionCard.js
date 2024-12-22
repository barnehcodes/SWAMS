import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Opacity } from "@mui/icons-material";

const WaterConsumptionCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">
        <Opacity sx={{ mr: 1 }} /> Water Consumption
      </Typography>
      <Box sx={{ height: 200, mt: 2 }}>
        <Typography>Chart will be rendered here</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default WaterConsumptionCard;
