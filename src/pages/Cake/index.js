import  Grid  from "@mui/material/Grid";
import  Box  from "@mui/material/Box";
import RCard from "../../components/RCard";
import Wedding_cake from '../../assets/Wedding_cake.jpg';
import cake_square from '../../assets/cake_square.jpg';
import Snowman_cake from '../../assets/Snowman_cake.jpg';
import special_valsad_cake from '../../assets/special_valsad_cake.jpg';
import vegan_strawberry_cake from '../../assets/vegan_strawberry_cake.jpg';
import chocolate_funfetti from '../../assets/chocolate_funfetti.jpg'
import cocomelon_cake from '../../assets/cocomelon_cake.jpg';
import Eggless_chocolate_cake from '../../assets/Eggless_chocolate_cake.jpg';
import Fondant_wedding_cake from '../../assets/Fondant_wedding_cake.jpg';
import Funfetti_cupcakes from '../../assets/Funfetti_cupcakes.jpg';
import Number_Cakes_Recipe from '../../assets/Number_Cakes_Recipe.jpg';
import Rainbow_cake from '../../assets/Rainbow_cake.jpg';
import Snicker_fuse_chocolate_cake from '../../assets/Snicker_fuse_chocolate_cake.jpg'
import { ordered } from "../../features/Cake/CakeSlice";


const cakeList = [
    
    {
        title : " Wedding cake ",
        subheader : "Made from heart",
        cardmedia : Wedding_cake,
        currency : "₹",
        discountedPrice : 549,
        actualPrice : 759 ,
        sellingStatus : "bestSeller",
    },
    {
        title:"Cake square",
        subheader : "sweet tooth is tingling? order now",
        cardmedia : cake_square,
        currency : "₹",
        discountedPrice : 599,
        actualPrice : 799,
        sellingStatus : "bestSeller",
    },
    {
        title : " Snowman cake ",
        subheader : "the secret ingredient is always love",
        cardmedia : Snowman_cake,
        currency : "₹",
        discountedPrice : 649,
        actualPrice : 749,
        sellingStatus : "New!!"
    },
    {
        title : "Special valsad cake ",
        subheader : "i sugar coat everything",
        cardmedia : special_valsad_cake,
        currency : "₹",
        discountedPrice : 749,
        actualPrice : 849,
        sellingStatus : "Freshly baked"
    },
    {
        title : "vegan strawberry cake",
        subheader : "life is short make it sweet",
        cardmedia : vegan_strawberry_cake,
        currency : "₹",
        discountedPrice : 599,
        actualPrice : 649,
        sellingStatus : "Todays deal"
        
    },
    {
        title : "Chocolate funfetti",
        subheader : "all you need is love and cake",
        cardmedia : chocolate_funfetti,
        currency : "₹",
        discountedPrice : 649,
        actualPrice : 749,
        sellingStatus : "New!!"
    },
    {
        title : "Cocomelon cake",
        subheader : "cake is always a good idea",
        cardmedia : cocomelon_cake,
        currency : "₹",
        discountedPrice : 899,
        actualPrice : 949,
        sellingStatus : "bestseller",
    },
    {
        title : "Eggless chocolate cake",
        subheader : "baked with love",
        cardmedia : Eggless_chocolate_cake,
        currency : "₹",
        discountedPrice : 699,
        actualPrice : 749,
        sellingStatus : "Todays deal",
    },
    {
        title : "Fondant wedding cake",
        subheader : "happiness is cakes and more cakes",
        cardmedia : Fondant_wedding_cake,
        currency : "₹",
        discountedPrice : 899,
        actualPrice : 1000,
        sellingStatus : "New!!",
    },
    {
        title : "Funfetti cupcakes",
        subheader : "bake someone happy",
        cardmedia : Funfetti_cupcakes,
        currency : "₹",
        discountedPrice : 689,
        actualPrice : 849,
        sellingStatus : "Top product",
    },
    {
        title : "Number Cakes Recipe",
        subheader : "love at first bite",
        cardmedia : Number_Cakes_Recipe,
        currency : "₹",
        discountedPrice : 549,
        actualPrice : 649,
        sellingStatus : "New!!",
    },
    {
        title : "Rainbow cake",
        subheader : "life is better with sprinkles",
        cardmedia : Rainbow_cake,
        currency : "₹",
        discountedPrice : 599,
        actualPrice : 649,
        sellingStatus : "best seller"
    },
    
    
]

export default function Cake(){
    
    //let cakesimg=["https://www.fnp.com/images/pr/l/v20221118185135/chocolate-cream-cake-1kg_1.jpg"];
    //let cakenames=["Chocolate Cake"]
    // let noOfCakes = useSelector((state)=>state.cake.numOfCakes);
    // const cakes = useSelector((state)=>state.cake.noOfCakes);
    // const dispatch = useDispatch();

    

    return(
        <>
        <Box sx={{margin:"25px"}}>
        <Grid  container spacing={{ xs: 4, sm: 8, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'#BAC2C1'}}  >
         {

                cakeList.map((item,index)=>{
                   return(
                    <Grid  item xs={4} sm={4} md={4} key={index}  justifyContent='center'>
                        <RCard  title={item.title}
                                discountedPrice={item.discountedPrice}
                                subheader={item.subheader}
                                photo={item.cardmedia}
                                actualPrice={item.actualPrice}
                                sellingStatus={item.sellingStatus}
                                currency={item.currency}
                                order={ordered}
                                
                                
                        >
                            
                        </RCard>
                    </Grid>
                   ) 
                })
                
            }
            
            
            </Grid>
            
        
        </Box>
        {/* <Box 
      sx={{
        width: "100%",
        height: 300,
        backgroundColor:'rosybrown',
        // '&:hover': {
        //   backgroundColor: 'rosybrown',
        //   opacity: [0.9, 0.8, 0.7],
        // },
        
      }}>
        
        <div className="col">
            <h4>get to know us</h4>
            <ul className="list-unstyled">
            <li>about us</li>
            <li>careers</li>
            <li>press releases</li>
            <li>amazon science</li>
            </ul>
        </div> */}
         {/* <div className="col">
            <h4>get to know us</h4>
            <ul className="list-unstyled">
            <li>about us</li>
            <li>careers</li>
            <li>press releases</li>
            <li>amazon science</li>
            </ul>
        </div> */}
        
      {/* </Box> */}
      

        
        </>
    )
}