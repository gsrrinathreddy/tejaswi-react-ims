import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ordered , restocked } from "../../Flower/FlowerSlice";

export default function ChocolateView(){
    const dispatch = useDispatch();
    let noOfFlowers = useSelector((state)=>state.chocolate.numOfFlowers);
    console.log('no of flowers', noOfFlowers);
    let order=1;
    return(
        <>
        <h3>Number of Flowers : {(noOfFlowers<order) ? 'Out of Stock' : noOfFlowers } </h3>
        <Button variant="contained" 
        
        onClick={()=>{
            dispatch(ordered(8))
        }}>
            Ordered Flowers
        </Button>

        <Button variant="contained"
        onClick={()=>{
            dispatch(restocked(5))
        }}>
            Restocked Flowers
        </Button>
        </>
    )
}