import RCard from "../../components/RCard";
import  Grid  from "@mui/material/Grid";
import  Box  from "@mui/material/Box";
import Blackcurrent_icecream from '../../assets/Blackcurrent_icecream.jpg';
import Butterscotch_Icecream from '../../assets/Butterscotch_Icecream.jpg';
import Cookie_icecream from '../../assets/Cookie_icecream.webp';
import Gelato_icecream from '../../assets/Gelato_icecream.webp';
// import Amul_chocolate_brownie from '../../assets/Amul_chocolate_brownie.jpg';
// import Amul_fruit_n_nut_fantasy from '../../assets/Amul_fruit_n_nut_fantasy.jpg';
// import Amul_gold_vanilla_cream from '../../assets/Amul_gold_vanilla_cream.jpg';
// import Amul_rajbhog_icecream from '../../assets/Amul_rajbhog_icecream.jpg';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import IcecreamIcon from '@mui/icons-material/Icecream';


const icecreamList = [
    {
        title : "Brownie icecream",
        subheader : "everything works with icecream",
        cardmedia : Blackcurrent_icecream,
        currency : "₹",
        discountedPrice : 79,
        actualPrice : 89 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
    {
        title : "Fruit N Nut Fantasy ",
        subheader : "Fruit N Fun",
        cardmedia : Butterscotch_Icecream,
        currency : "₹",
        discountedPrice : 149,
        actualPrice : 159 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Gold Vanilla cream",
        subheader : "Stay chill, sweetie!!",
        cardmedia : Cookie_icecream,
        currency : "₹",
        discountedPrice : 249,
        actualPrice : 260 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Rajbhog icecream ",
        subheader : "Scoop with me",
        cardmedia : Gelato_icecream,
        currency : "₹",
        discountedPrice : 289,
        actualPrice : 300 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
    {
        title : "Creamy kulfi icecream",
        subheader : "Ice ice baby!!",
        cardmedia : Brooklyn_creamery_kulfi_icecream,
        currency : "₹",
        discountedPrice : 99,
        actualPrice : 109 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Chocochip icecream",
        subheader : "Moms fav flavour",
        cardmedia : Chocochip_icecream,
        currency : "₹",
        discountedPrice : 349,
        actualPrice : 369 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Lychee icecream",
        subheader : "Scream for ice cream",
        cardmedia : Lychee_icecream,
        currency : "₹",
        discountedPrice : 49,
        actualPrice : 52 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
    {
        title : "Mango icecream",
        subheader : "Stay cool. Eat ice cream",
        cardmedia : Mango_icecream,
        currency : "₹",
        discountedPrice : 79,
        actualPrice : 89 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Mint brownie fudge",
        subheader : "Follow me to the ice cream",
        cardmedia : MInt_brownie_fudge,
        currency : "₹",
        discountedPrice : 129,
        actualPrice : 135 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
    {
        title : "Oreo tub icecream ",
        subheader : "It’s ice cream o’clock!",
        cardmedia : Oreo_tub_icecream,
        currency : "₹",
        discountedPrice : 79,
        actualPrice : 85 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Roses icecream",
        subheader : "Ice cream is my therapy",
        cardmedia : Queen_of_roses_icecream,
        currency : "₹",
        discountedPrice : 139,
        actualPrice : 150 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
    {
        title : "Strawberry icecream",
        subheader : "Bite the flavour of summer",
        cardmedia : Strawberyy_icecream,
        currency : "₹",
        discountedPrice : 99,
        actualPrice : 129 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
    {
        title : "3 cheers chocolate Tub",
        subheader : "This home runs on ice cream",
        cardmedia : three_cheers_chocolateTub,
        currency : "₹",
        discountedPrice : 239,
        actualPrice : 259 ,
        sellingStatus : "bestSeller",
        delivery:'Today',
    },
    {
        title : "Tricone butterscotch icecream",
        subheader : "My brain is 90% ice cream",
        cardmedia : Tricone_butterscotch_icecream,
        currency : "₹",
        discountedPrice : 439,
        actualPrice : 500 ,
        sellingStatus : "bestSeller",
        delivery:'Tommorrow',
    },
]

export default function Icecream(){

    
    // let icecreamimg=["https://rumkisgoldenspoon.com/wp-content/uploads/2022/05/Gulkand-icecream.jpg"];
    // let icecreamname=["Icecream"]
    // let noOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams);

    return (
        <>
        <Box >
        <Grid
          container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ backgroundColor: "#FADBD8" }}>
       
           {

                icecreamList.map((item,index)=>{
                   return(
                    <Grid display="flex" justifyContent="center" xs={4} sm={4} md={4} pt={4}>
                    
                        <RCard  title={item.title}
                                discountedPrice={item.discountedPrice}
                                subheader={item.subheader}
                                photo={item.cardmedia}
                                actualPrice={item.actualPrice}
                                sellingStatus={item.sellingStatus}
                                currency={item.currency}
                                delivery={item.delivery}
                                titleIcon={<IcecreamIcon/>}
                                order={ordered}
                                
                                
                        >
                            
                        </RCard>
                    </Grid>
                   ) 
                })
                
            }
            </Grid>
        </Box>
        <Box style={{backgroundColor: 'rosybrown'  }}  >
      
      <h2>Connect with us</h2>
      <FacebookIcon/>
     <YouTubeIcon/>
     <InstagramIcon/> 
     
     <h4>About us</h4>
     <h4>Careers</h4>  
     <h4>Help</h4>
     <h4>Policy</h4>
     <h4>Social</h4>
     
     
   </Box>
        </>
    )


}