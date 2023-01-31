import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Add items to cart',
  'Make Payment',
  'Order Placed .. Enjoy!!',
];

export default function RStepper() {
  return (
    <Box sx={{ width: '100%' , }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><h4>{label}</h4></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}