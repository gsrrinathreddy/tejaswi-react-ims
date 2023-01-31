import { Button, Grid, Stack, Typography } from "@mui/material";
import {useDispatch , useSelector} from "react-redux";
import RBadge from "../../../components/RBadge";
import { ordered ,restocked } from "../CakeSlice";

import * as React from 'react';

// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });


export default function CakeView(){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      dispatch(ordered(4))
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    
    const dispatch = useDispatch();
    let noOfCakes = useSelector((state)=>state.cake.numOfCakes);
    console.log('no of cakes', noOfCakes);
    let order=1;

    return(
        <>
            <h3>Number of Cakes : {(noOfCakes<order) ? 'Out of Stock' : noOfCakes } </h3>

            
      <Button variant="contained" onClick={handleClick}>
        Order Cakes
      </Button>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Cakes are added to Cart
        </Alert>
      </Snackbar> */}
  

            
            

            <Button variant="contained" 
            onClick={()=>{
                dispatch(restocked(10))
            }}
            >
                Restocked Cakes

            </Button>
           
           
            


        </>
    )
}