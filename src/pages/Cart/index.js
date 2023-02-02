import { Button, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux"
import RStepper from "../../components/RStepper";
import { useNavigate } from "react-router-dom";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function Cart(){
    // let noOfCakes = useSelector((state)=>state.cake.noOfOrderedCakes);
    // let noOfIcecreams=useSelector((state)=>state.icecream.noOfOrderedIcecreams);
    // let noOfChocolates = useSelector((state)=>state.chocolate.noOfOrderedChocolates);

    const cartList=useSelector((state)=>state.cart.cartList);
    console.log(cartList)
    const navigate=useNavigate();
    let sum=0;
    let currency="₹"


    return(
        <>
        <RStepper/> 
        
        <Box>
            <h1>Order Details</h1>
            
            
            <Grid container>

                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight : 'bold'}}>
                        Name 
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.title}
                                </Typography>
                            )
                        })
                    }
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight : 'bold'}}>
                        Actual Price 
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.actualPrice}
                                </Typography>
                            )
                        })
                    }
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight : 'bold'}}>
                        Discounted Price 
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.discountedPrice}
                                </Typography>
                            )
                        })
                    }
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight : 'bold'}}>
                        Quantity 
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.qty}
                                </Typography>
                            )
                        })
                    }
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight : 'bold'}}>
                        Price 
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.qty*item.discountedPrice}
                                </Typography>
                            )
                        })
                    }
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight : 'bold'}}>
                        Total 
                    </Typography>
                    {
                        cartList.map((item)=>{
                            sum+=(item.qty*item.discountedPrice)
                            return(
                                <Typography>
                                    {item.qty*item.discountedPrice}
                                </Typography>
                            )
                        })
                    }
                    <h3> Total amount : {currency}{sum} </h3>
                    <Button  sx={{color:"green"}} endIcon={<CardGiftcardIcon/>} >
                Apply coupon
            </Button>
                </Grid>
            </Grid >

           </Box>
           
         <Button variant="outlined" onClick={()=>navigate('Checkout')}>
            Place Order
        </Button> 
        
        
        </>
    )
}