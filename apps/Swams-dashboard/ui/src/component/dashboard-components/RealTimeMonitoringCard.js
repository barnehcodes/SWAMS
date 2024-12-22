import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Speed, Opacity, Download } from "@mui/icons-material";

const RealTimeMonitoringCard = () => (
  <Card sx={{ gridColumn: "span 3" }}>
    <CardContent>
      <Typography variant="h5">
        <Speed sx={{ mr: 1 }} /> Real-time Monitoring
        <Typography variant="body2" sx={{ ml: 1, color: "green" }} component="span">
          Live
        </Typography>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Box>
          <Opacity sx={{ fontSize: 40 }} />
          <Typography>Current Usage: 0 m³/h</Typography>
          <Typography>+2.3%</Typography>
        </Box>
        <Box>
          <Opacity sx={{ fontSize: 40 }} />
          <Typography>Pressure: 4.2 bar</Typography>
          <Typography>Stable</Typography>
        </Box>
        <Box>
          <Opacity sx={{ fontSize: 40 }} />
          <Typography>Last Update</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="outlined" startIcon={<Download />}>
          Export Data
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default RealTimeMonitoringCard;
