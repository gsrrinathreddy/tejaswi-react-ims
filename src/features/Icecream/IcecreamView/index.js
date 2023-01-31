import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { ordered , restocked } from "../IcecreamSlice";
import * as React from 'react';

export default function IcecreamView(){
    const dispatch = useDispatch();
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
    return(
        <>
        <Button variant="contained" onClick={handleClick}>
        Order Icecreams
      </Button>

        <Button variant="contained"
        onClick={()=>{
            dispatch((restocked(10)))
        }}>
            Restocked Icecreams

        </Button>
        </>
    )
}