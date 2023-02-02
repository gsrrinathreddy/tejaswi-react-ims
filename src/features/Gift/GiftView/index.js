import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ordered , restocked } from "../../Gift/GiftSlice";

export default function ChocolateView(){
    const dispatch = useDispatch();
    let noOfGifts = useSelector((state)=>state.chocolate.numOfGifts);
    console.log('no of gifts', noOfGifts);
    let order=1;
    return(
        <>
        <h3>Number of Gifts : {(noOfGifts<order) ? 'Out of Stock' : noOfGifts } </h3>
        <Button variant="contained" 
        
        onClick={()=>{
            dispatch(ordered(8))
        }}>
            Ordered Gifts
        </Button>

        <Button variant="contained"
        onClick={()=>{
            dispatch(restocked(5))
        }}>
            Restocked Gifts
        </Button>
        </>
    )
}