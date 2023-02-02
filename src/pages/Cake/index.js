import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RCard from "../../components/RCard";
import Wedding_cake from "../../assets/Wedding_cake.jpg";
import cake_square from "../../assets/cake_square.jpg";
import Snowman_cake from "../../assets/Snowman_cake.jpg";
import special_valsad_cake from "../../assets/special_valsad_cake.jpg";
import vegan_strawberry_cake from "../../assets/vegan_strawberry_cake.jpg";
import chocolate_funfetti from "../../assets/chocolate_funfetti.jpg";
import cocomelon_cake from "../../assets/cocomelon_cake.jpg";
import Eggless_chocolate_cake from "../../assets/Eggless_chocolate_cake.jpg";
import Fondant_wedding_cake from "../../assets/Fondant_wedding_cake.jpg";
import Funfetti_cupcakes from "../../assets/Funfetti_cupcakes.jpg";
import Number_Cakes_Recipe from "../../assets/Number_Cakes_Recipe.jpg";
import Rainbow_cake from "../../assets/Rainbow_cake.jpg";
import Snicker_fuse_chocolate_cake from "../../assets/Snicker_fuse_chocolate_cake.jpg";
import { ordered } from "../../features/Cake/CakeSlice";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CakeIcon from '@mui/icons-material/Cake';

const cakeList = [
  {
    title: " Wedding cake ",
    subheader: "Made from heart",
    cardmedia: Wedding_cake,
    currency: "₹",
    discountedPrice: 549,
    actualPrice: 759,
    sellingStatus: "bestSeller",
    delivery:'Today'
  },
  {
    title: "Cake square",
    subheader: "Indulge In The Sweetness.",
    cardmedia: cake_square,
    currency: "₹",
    discountedPrice: 599,
    actualPrice: 799,
    sellingStatus: "bestSeller",
    delivery:'Today'
  },
  {
    title: " Snowman cake ",
    subheader: "the secret ingredient : love",
    cardmedia: Snowman_cake,
    currency: "₹",
    discountedPrice: 649,
    actualPrice: 749,
    sellingStatus: "New!!",
    delivery:'Tommorrow',
  },
  {
    title: "Special valsad cake ",
    subheader: "i sugar coat everything",
    cardmedia: special_valsad_cake,
    currency: "₹",
    discountedPrice: 749,
    actualPrice: 849,
    sellingStatus: "Freshly baked",
    delivery:'Today'
  },
  {
    title: "Strawberry cake",
    subheader: "life is short make it sweet",
    cardmedia: vegan_strawberry_cake,
    currency: "₹",
    discountedPrice: 599,
    actualPrice: 649,
    sellingStatus: "Todays deal",
    delivery:'Today',
  },
  {
    title: "Chocolate funfetti",
    subheader: "all you need is love and cake",
    cardmedia: chocolate_funfetti,
    currency: "₹",
    discountedPrice: 649,
    actualPrice: 749,
    sellingStatus: "New!!",
    delivery:'Tommorrow',
  },
  {
    title: "Cocomelon cake",
    subheader: "cake is always a good idea",
    cardmedia: cocomelon_cake,
    currency: "₹",
    discountedPrice: 899,
    actualPrice: 949,
    sellingStatus: "bestseller",
    delivery:'Tommorrow',
  },
  {
    title: "Chocolate cake",
    subheader: "baked with love",
    cardmedia: Eggless_chocolate_cake,
    currency: "₹",
    discountedPrice: 699,
    actualPrice: 749,
    sellingStatus: "Todays deal",
    delivery:'Tommorrow',
  },
  {
    title: "Fondant cake",
    subheader: "cakes, cakes and more cakes",
    cardmedia: Fondant_wedding_cake,
    currency: "₹",
    discountedPrice: 899,
    actualPrice: 1000,
    sellingStatus: "New!!",
    delivery:'Tommorrow',
  },
  {
    title: "Funfetti cupcakes",
    subheader: "bake someone happy",
    cardmedia: Funfetti_cupcakes,
    currency: "₹",
    discountedPrice: 689,
    actualPrice: 849,
    sellingStatus: "Top product",
    delivery:'Today',
  },
  {
    title: "Number Cake",
    subheader: "love at first bite",
    cardmedia: Number_Cakes_Recipe,
    currency: "₹",
    discountedPrice: 549,
    actualPrice: 649,
    sellingStatus: "New!!",
    delivery:'Tommorrow',
  },
  {
    title: "Rainbow cake",
    subheader: "life is better with sprinkles",
    cardmedia: Rainbow_cake,
    currency: "₹",
    discountedPrice: 599,
    actualPrice: 649,
    sellingStatus: "best seller",
    delivery:'Today'
  },
];
//import CakeIcon from '@mui/icons-material/Cake';
export default function Cake() {
  //let titleimg=['https://cdn1.vectorstock.com/i/1000x1000/64/10/birthday-cake-icon-simple-style-vector-22836410.jpg']
  //let cakesimg=["https://www.fnp.com/images/pr/l/v20221118185135/chocolate-cream-cake-1kg_1.jpg"];
  //let cakenames=["Chocolate Cake"]
  // let noOfCakes = useSelector((state)=>state.cake.numOfCakes);
  // const cakes = useSelector((state)=>state.cake.noOfCakes);
  // const dispatch = useDispatch();

  return (
    <>
      <Box >
        <Grid
          container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ backgroundColor: "#FADBD8" }}>
          {cakeList.map((item, index) => {
            return (
                <Grid display="flex" justifyContent="center" xs={4} sm={4} md={4} pt={4}>
                <RCard
                  title={item.title}
                  discountedPrice={item.discountedPrice}
                  subheader={item.subheader}
                  photo={item.cardmedia}
                  actualPrice={item.actualPrice}
                  sellingStatus={item.sellingStatus}
                  currency={item.currency}
                  delivery={item.delivery}
                  titleIcon={<CakeIcon/>}
                  
                  order={ordered}
                  
                ></RCard>
              </Grid>
            );
          })}
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
        </div> 
      </Box>  */}
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
  );
}
