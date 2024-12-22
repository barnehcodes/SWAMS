import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { History } from "@mui/icons-material";

const HistoricalDataCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">
        <History sx={{ mr: 1 }} /> Historical Data
      </Typography>
      <Box sx={{ height: 200, mt: 2 }}>
        <Typography>Chart will be rendered here</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default HistoricalDataCard;
