import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RCard from "../../components/RCard";
import hello_sunshine_3_sunflowers_bouquet_1 from "../../assets/hello_sunshine_3_sunflowers_bouquet_1.webp";
import hypnotic_nature_floralvase_1 from "../../assets/hypnotic_nature_floralvase_1.webp";
import lux_love_purple_orchids_bouquet_1 from "../../assets/lux_love_purple_orchids_bouquet_1.webp";
import magical_story_orchids_bouquet_1 from "../../assets/magical_story_orchids_bouquet_1.webp";
import mesmerizing_love_pink_roses_bouquet_1 from "../../assets/mesmerizing_love_pink_roses_bouquet_1.webp";
import MIxed_flowers_bouquet from "../../assets/MIxed_flowers_bouquet.jpg";
import Orchid_bouquet from "../../assets/Orchid_bouquet.jpg";
import Pink_Lillies_Bouquet from "../../assets/Pink_Lillies_Bouquet.jpg";
import premium_red_roses_double_wrapped_bouquet_1 from "../../assets/premium_red_roses_double_wrapped_bouquet_1.webp";
import serenity_of_green_floral_arrangement_1 from "../../assets/serenity_of_green_floral_arrangement_1.webp";
import spellworking_floral_bouquet_1 from "../../assets/spellworking_floral_bouquet_1.webp";
import sweet_expression_floral_arrangement_1 from "../../assets/sweet_expression_floral_arrangement_1.webp";
import Yellow_Roses_bouquet from "../../assets/Yellow_Roses_bouquet.jpg";
import { ordered } from "../../features/Flower/FlowerSlice";

const flowerList = [
  {
    title: " Sunflower bouquet ",
    subheader: "Live life in full bloom.",
    cardmedia: hello_sunshine_3_sunflowers_bouquet_1,
    currency: "₹",
    discountedPrice: 799,
    actualPrice: 849,
    sellingStatus: "best seller",
  },
  {
    title: "Floralvase",
    subheader: "Ok, bloomer",
    cardmedia: hypnotic_nature_floralvase_1,
    currency: "₹",
    discountedPrice: 949,
    actualPrice: 1050,
    sellingStatus: "Blossoming",
  },
  {
    title: "Purple orchids bouquet",
    subheader: "Bloom baby, Bloom",
    cardmedia: lux_love_purple_orchids_bouquet_1,
    currency: "₹",
    discountedPrice: 700,
    actualPrice: 720,
    sellingStatus: "Fresh",
  },
  {
    title: "Ochids bouquet",
    subheader: "Flowers? I say yes!",
    cardmedia: magical_story_orchids_bouquet_1,
    currency: "₹",
    discountedPrice: 849,
    actualPrice: 720,
    sellingStatus: "efflorescence.",
  },
  {
    title: "Pink roses bouquet",
    subheader: "Bloom with kindness",
    cardmedia: mesmerizing_love_pink_roses_bouquet_1,
    currency: "₹",
    discountedPrice: 1099,
    actualPrice: 1199,
    sellingStatus: "best seller",
  },
  {
    title: "Mixed flowers bouquet",
    subheader: "When in doubt, add flowers",
    cardmedia: MIxed_flowers_bouquet,
    currency: "₹",
    discountedPrice: 699,
    actualPrice: 799,
    sellingStatus: "Blossoming",
  },
  {
    title: "Orchid bouquet",
    subheader: "Take it or leaf it",
    cardmedia: Orchid_bouquet,
    currency: "₹",
    discountedPrice: 899,
    actualPrice: 949,
    sellingStatus: "best seller",
  },
  {
    title: "Pink lillies",
    subheader: "Always look for the flowers.",
    cardmedia: Pink_Lillies_Bouquet,
    currency: "₹",
    discountedPrice: 1599,
    actualPrice: 1799,
    sellingStatus: "best seller",
  },
  {
    title: " Red roses bouquet ",
    subheader: "Let your dreams blossom.",
    cardmedia: premium_red_roses_double_wrapped_bouquet_1,
    currency: "₹",
    discountedPrice: 1259,
    actualPrice: 1300,
    sellingStatus: "Fresh",
  },
  {
    title: "Green floral arrangement ",
    subheader: "Naturally beautiful.",
    cardmedia: serenity_of_green_floral_arrangement_1,
    currency: "₹",
    discountedPrice: 769,
    actualPrice: 829,
    sellingStatus: "best seller",
  },
  {
    title: " Floral bouquet",
    subheader: "When it rains, it flowers.",
    cardmedia: spellworking_floral_bouquet_1,
    currency: "₹",
    discountedPrice: 879,
    actualPrice: 929,
    sellingStatus: "Blossoming",
  },
  {
    title: "Floral arrangement",
    subheader: "Flowers are happiness.",
    cardmedia: sweet_expression_floral_arrangement_1,
    currency: "₹",
    discountedPrice: 1259,
    actualPrice: 1300,
    sellingStatus: "Fresh",
  },
  {
    title: "Yellow roses bouquet",
    subheader: "You made my daisy.",
    cardmedia: Yellow_Roses_bouquet,
    currency: "₹",
    discountedPrice: 1199,
    actualPrice: 1259,
    sellingStatus: "efflorescence.",
  },
];

export default function Flowers() {
  return (
    <>
      <Box sx={{ margin: "25px" }}>
        <Grid
          container
          spacing={{ xs: 4, sm: 8, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ backgroundColor: "#BAC2C1" }}
        >
          {flowerList.map((item, index) => {
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
