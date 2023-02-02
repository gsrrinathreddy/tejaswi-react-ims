import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function LoginRegister() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="sm"> */}
        
        <Box marginTop='20px' marginLeft='250px' marginRight='250px' 
        sx={{ bgcolor: '#F5B7B1', height: '80vh', borderRadius:'20px' }} >
            <br/>
            <Typography variant='h3' fontWeight='bold'>Login</Typography>
            <Box sx={{ width: '100%', }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Email I'd" />
        <Tab label="Phone number" />
      </Tabs>
    </Box>
        </Box>
        
      {/* </Container> */}
    </React.Fragment>
  );
}