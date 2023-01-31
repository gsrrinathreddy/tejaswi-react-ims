import RCard from "../../components/RCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Almond_surprise_truffle_chocolates from "../../assets/Almond_surprise_truffle_chocolates.jpg";
import Basket_of_ferrero_rocher from "../../assets/Basket_of_ferrero_rocher.jpg";
import Box_of_assorted_chocolates from "../../assets/Box_of_assorted_chocolates.jpg";
import Cadbury_5star_chocolate from "../../assets/Cadbury_5star_chocolate.jpg";
import Cadbury_celebrations from "../../assets/Cadbury_celebrations.jpg";
import Chocolate_galore from "../../assets/Chocolate_galore.jpg";
import Dairymilk_handmade_chocolates from "../../assets/Dairymilk_handmade_chocolates.jpg";
import Galaxy_milk_chocolate from "../../assets/Galaxy_milk_chocolate.jpg";
import Hersheys_kisses from "../../assets/Hersheys_kisses.jpg";
import Snickers_peanut_chocolate_bar from "../../assets/Snicker_fuse_chocolate_cake.jpg";
import Square_chocolates from "../../assets/Square_chocolates.jpg";
import Dairymilk_chocolairs from "../../assets/Dairymilk_chocolairs.jpg";
import Chocolate_vase from "../../assets/Chocolate_vase.jpg";
import { ordered } from "../../features/Chocolate/ChocolateSlice";

const chocolateList = [
  {
    title: " Almond truffle chocolates ",
    subheader: "A foretaste of heaven.",
    cardmedia: Almond_surprise_truffle_chocolates,
    currency: "₹",
    discountedPrice: 65.25,
    actualPrice: 70.25,
    sellingStatus: "best seller",
  },
  {
    title: " Dairymilk chocolairs ",
    subheader: "A piece worth existing for.",
    cardmedia: Dairymilk_chocolairs,
    currency: "₹",
    discountedPrice: 105.78,
    actualPrice: 128.0,
    sellingStatus: "best seller",
  },
  {
    title: " Basket of ferrero rocher ",
    subheader: "Be happy, eat chocolate.",
    cardmedia: Basket_of_ferrero_rocher,
    currency: "₹",
    discountedPrice: 298.25,
    actualPrice: 340.78,
    sellingStatus: "New!!",
  },
  {
    title: " Box of assorted chocolates ",
    subheader: "Chocolate is my lifeline.",
    cardmedia: Box_of_assorted_chocolates,
    currency: "₹",
    discountedPrice: 499.0,
    actualPrice: 549.0,
    sellingStatus: "Todays deal",
  },
  {
    title: " Cadbury 5star chocolate ",
    subheader: "Chocolate needs no reason",
    cardmedia: Cadbury_5star_chocolate,
    currency: "₹",
    discountedPrice: 35.15,
    actualPrice: 40.0,
    sellingStatus: "New!!",
  },
  {
    title: " Cadbury celebrations ",
    subheader: "Chocolate runs in my veins",
    cardmedia: Cadbury_celebrations,
    currency: "₹",
    discountedPrice: 100.0,
    actualPrice: 120.0,
    sellingStatus: "best seller",
  },
  {
    title: " Chocolate galore ",
    subheader: "Cure for a bad day.",
    cardmedia: Chocolate_galore,
    currency: "₹",
    discountedPrice: 699.29,
    actualPrice: 849.59,
    sellingStatus: "Special sale",
  },
  {
    title: " Dairymilk handmade chocolates ",
    subheader: "Craving for chocolate!",
    cardmedia: Dairymilk_handmade_chocolates,
    currency: "₹",
    discountedPrice: 98.0,
    actualPrice: 110.0,
    sellingStatus: "best seller",
  },
  {
    title: " Galaxy milk chocolate ",
    subheader: "Dipped in chocolate.",
    cardmedia: Galaxy_milk_chocolate,
    currency: "₹",
    discountedPrice: 40.0,
    actualPrice: 45.0,
    sellingStatus: "Special sale",
  },
  {
    title: " Hersheys kisses ",
    subheader: "Edible happiness.",
    cardmedia: Hersheys_kisses,
    currency: "₹",
    discountedPrice: 79.25,
    actualPrice: 90.0,
    sellingStatus: "Premium",
  },
  {
    title: " Chocolate vase ",
    subheader: "Every day is chocolate day!",
    cardmedia: Chocolate_vase,
    currency: "₹",
    discountedPrice: 20.0,
    actualPrice: 22.0,
    sellingStatus: "best seller",
  },
  {
    title: " Square chocolates ",
    subheader: "Good chocolate, good mood",
    cardmedia: Square_chocolates,
    currency: "₹",
    discountedPrice: 60.49,
    actualPrice: 65.15,
    sellingStatus: "New for you",
  },
];

export default function Chocolate() {
  // let chocoimg=["https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"];
  // let choconames=["Chocolates"]
  // let noOfChocolates = useSelector((state)=>state.chocolate.numOfChocolates);
  return (
    <>
      <Box sx={{ margin: "25px" }}>
        <Grid
          container
          spacing={{ xs: 4, sm: 8, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ backgroundColor: "#BAC2C1" }}
        >
          {chocolateList.map((item, index) => {
            return (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                key={index}
                justifyContent="center"
              >
                <RCard
                  title={item.title}
                  discountedPrice={item.discountedPrice}
                  subheader={item.subheader}
                  photo={item.cardmedia}
                  actualPrice={item.actualPrice}
                  sellingStatus={item.sellingStatus}
                  currency={item.currency}
                  order={ordered}
                ></RCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
