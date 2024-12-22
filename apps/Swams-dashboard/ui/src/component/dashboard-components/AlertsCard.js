import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Warning } from "@mui/icons-material";

const AlertsCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">
        <Warning sx={{ mr: 1 }} /> Alerts
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography>No active alerts</Typography>
      </Box>
      <Button variant="contained" sx={{ mt: 2 }}>
        Configure Alerts
      </Button>
    </CardContent>
  </Card>
);

export default AlertsCard;
