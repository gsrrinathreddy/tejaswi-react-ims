import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

export default function Dialogbox(props) {
    let dtitle=props.dtitle;
    let label=props.label;
    let b1=props.b1;
    let b2=props.b2;
    let icon=props.icon;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title="Select city">

      <IconButton variant="outlined" onClick={handleClickOpen}>
        {icon}
      </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dtitle}</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
           
            
            label={label}
            
            fullWidth
            variant="standard"
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>{b1}</Button>
          <Button onClick={handleClose}>{b2}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}