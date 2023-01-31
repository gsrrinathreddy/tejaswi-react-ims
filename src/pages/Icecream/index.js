import RCard from "../../components/RCard";
import  Grid  from "@mui/material/Grid";
import  Box  from "@mui/material/Box";
import Amul_chocolate_brownie from '../../assets/Amul_chocolate_brownie.jpg';
import Amul_fruit_n_nut_fantasy from '../../assets/Amul_fruit_n_nut_fantasy.jpg';
import Amul_gold_vanilla_cream from '../../assets/Amul_gold_vanilla_cream.jpg';
import Amul_rajbhog_icecream from '../../assets/Amul_rajbhog_icecream.jpg';
import Brooklyn_creamery_kulfi_icecream from '../../assets/Brooklyn_creamery_kulfi_icecream.jpg';
import Chocochip_icecream from '../../assets/Chocochip_icecream.jpg';
import Lychee_icecream from '../../assets/Lychee_icecream.jpg';
import Mango_icecream from '../../assets/Mango_icecream.jpg';
import MInt_brownie_fudge from '../../assets/MInt_brownie_fudge.jpg';
import Oreo_tub_icecream from '../../assets/Oreo_tub_icecream.jpg';
import Queen_of_roses_icecream from '../../assets/Queen_of_roses_icecream.jpg';
import Strawberyy_icecream from '../../assets/Strawberyy_icecream.jpg';
import three_cheers_chocolateTub from '../../assets/three_cheers_chocolateTub.jpg';
import Tricone_butterscotch_icecream from '../../assets/Tricone_butterscotch_icecream.jpg';
import { ordered } from "../../features/Icecream/IcecreamSlice";

const icecreamList = [
    {
        title : "Chocolate Brownie icecream",
        subheader : "everything works with icecream",
        cardmedia : Amul_chocolate_brownie,
        currency : "₹",
        discountedPrice : 79,
        actualPrice : 89 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Fruit N Nut Fantasy ",
        subheader : "Fruit N Fun",
        cardmedia : Amul_fruit_n_nut_fantasy,
        currency : "₹",
        discountedPrice : 149,
        actualPrice : 159 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Gold Vanilla cream",
        subheader : "Stay chill, sweetie!!",
        cardmedia : Amul_gold_vanilla_cream,
        currency : "₹",
        discountedPrice : 249,
        actualPrice : 260 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Rajbhog icecream ",
        subheader : "Scoop with me",
        cardmedia : Amul_rajbhog_icecream,
        currency : "₹",
        discountedPrice : 289,
        actualPrice : 300 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Creamy kulfi icecream",
        subheader : "Ice ice baby!!",
        cardmedia : Brooklyn_creamery_kulfi_icecream,
        currency : "₹",
        discountedPrice : 99,
        actualPrice : 109 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Chocochip icecream",
        subheader : "Moms fav flavour",
        cardmedia : Chocochip_icecream,
        currency : "₹",
        discountedPrice : 349,
        actualPrice : 369 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Lychee icecream",
        subheader : "Scream for ice cream",
        cardmedia : Lychee_icecream,
        currency : "₹",
        discountedPrice : 49,
        actualPrice : 52 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Mango icecream",
        subheader : "Stay cool. Eat ice cream",
        cardmedia : Mango_icecream,
        currency : "₹",
        discountedPrice : 79,
        actualPrice : 89 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Mint brownie fudge",
        subheader : "Follow me to the ice cream",
        cardmedia : MInt_brownie_fudge,
        currency : "₹",
        discountedPrice : 129,
        actualPrice : 135 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Oreo tub icecream ",
        subheader : "It’s ice cream o’clock!",
        cardmedia : Oreo_tub_icecream,
        currency : "₹",
        discountedPrice : 79,
        actualPrice : 85 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Queen of roses icecream",
        subheader : "Ice cream is my therapy",
        cardmedia : Queen_of_roses_icecream,
        currency : "₹",
        discountedPrice : 139,
        actualPrice : 150 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Strawberry icecream",
        subheader : "Bite the flavour of summer",
        cardmedia : Strawberyy_icecream,
        currency : "₹",
        discountedPrice : 99,
        actualPrice : 129 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "3 cheers chocolate Tub",
        subheader : "This home runs on ice cream",
        cardmedia : three_cheers_chocolateTub,
        currency : "₹",
        discountedPrice : 239,
        actualPrice : 259 ,
        sellingStatus : "bestSeller",
    },
    {
        title : "Tricone butterscotch icecream",
        subheader : "My brain is 90% ice cream",
        cardmedia : Tricone_butterscotch_icecream,
        currency : "₹",
        discountedPrice : 439,
        actualPrice : 500 ,
        sellingStatus : "bestSeller",
    },
]

export default function Icecream(){

    
    // let icecreamimg=["https://rumkisgoldenspoon.com/wp-content/uploads/2022/05/Gulkand-icecream.jpg"];
    // let icecreamname=["Icecream"]
    // let noOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams);

    return (
        <>
        <Box sx={{margin:"25px"}}>
        <Grid  container spacing={{ xs: 4, sm: 8, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'#BAC2C1'}}  >
         {

                icecreamList.map((item,index)=>{
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
        </>
    )


}