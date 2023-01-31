import CakeOutlined from "@mui/icons-material/CakeOutlined";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ordered , restocked } from "../../Chocolate/ChocolateSlice";

export default function ChocolateView(){
    const dispatch = useDispatch();
    let noOfChocolates = useSelector((state)=>state.chocolate.numOfChocolates);
    console.log('no of cakes', noOfChocolates);
    let order=1;
    return(
        <>
        <h3>Number of Chocolates : {(noOfChocolates<order) ? 'Out of Stock' : noOfChocolates } </h3>
        <Button variant="contained" 
        
        onClick={()=>{
            dispatch(ordered(8))
        }}>
            Ordered Chocolates
        </Button>

        <Button variant="contained"
        onClick={()=>{
            dispatch(restocked(5))
        }}>
            Restocked Chocolates
        </Button>
        </>
    )
}