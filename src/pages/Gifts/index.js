import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RCard from "../../components/RCard";
import { ordered } from "../../features/Gift/GiftSlice";
import pebble_elite_pro_wireless_headphone from '../../assets/pebble_elite_pro_wireless_headphone.webp';
import premium_look_sunglasses from '../../assets/premium_look_sunglasses.webp';
import line_pearl_necklace_earring_set from '../../assets/line_pearl_necklace_earring_set.webp';
import ayurvedic_facial_kit_with_free_pouch from '../../assets/ayurvedic_facial_kit_with_free_pouch.jpg';
import bagsy_malone_n_tote_combo_bags_walnut_brown from '../../assets/bagsy_malone_n_tote_combo_bags_walnut_brown.webp';
import bandhan_couple_watch_set from '../../assets/bandhan_couple_watch_set.webp';
import big_hugs_teddy_bear from '../../assets/big_hugs_teddy_bear.webp';
import calming_senses_gift_hamper from '../../assets/calming_senses_gift_hamper.webp';
import couple_hanging_legs from '../../assets/couple_hanging_legs.webp';
import fragrant_votive_glass_candles_set from '../../assets/fragrant_votive_glass_candles_set.webp';
import inext_wireless_headphone_brown_bt_version from '../../assets/inext_wireless_headphone_brown_bt_version.webp';
import lying_in_peace_buddha_idol_light_grey from '../../assets/lying_in_peace_buddha_idol_light_grey.webp';
import musician_lady_n_showpiece from '../../assets/musician_lady_n_showpiece.webp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const giftList = [
    {
      title: "Wireless headphone ",
      subheader: "A better gift.",
      cardmedia: pebble_elite_pro_wireless_headphone,
      currency: "₹",
      discountedPrice: 999,
      actualPrice: 1299,
      sellingStatus: "best seller",
      delivery:'Today',
    },
    {
      title: "Sunglasses",
      subheader: "A gift for you",
      cardmedia: premium_look_sunglasses,
      currency: "₹",
      discountedPrice: 899,
      actualPrice: 1050,
      sellingStatus: "Styled",
      delivery:'Today',
    },
    {
      title: "Pearl set",
      subheader: "Gifts for all time",
      cardmedia: line_pearl_necklace_earring_set,
      currency: "₹",
      discountedPrice: 800,
      actualPrice: 900,
      sellingStatus: "Wrapped",
      delivery:'Tommorrow',
    },
    {
      title: "Ayurvedic facial kit",
      subheader: "Be a gift to someone.",
      cardmedia: ayurvedic_facial_kit_with_free_pouch,
      currency: "₹",
      discountedPrice: 849,
      actualPrice: 940,
      sellingStatus: "Wrapped.",
      delivery:'Today',
    },
    {
      title: "Bagsy combo bags",
      subheader: "Smart. Beautiful. Gifts.",
      cardmedia: bagsy_malone_n_tote_combo_bags_walnut_brown,
      currency: "₹",
      discountedPrice: 1599,
      actualPrice: 1659,
      sellingStatus: "Styled",
      delivery:'Tommorrow',
    },
    {
      title: "Couple watch",
      subheader: "The gifts For All Ages.",
      cardmedia: bandhan_couple_watch_set,
      currency: "₹",
      discountedPrice: 2099,
      actualPrice: 2299,
      sellingStatus: "Wrapped",
      delivery:'Today',
    },
    {
      title: "Teddy bear",
      subheader: "Show them you care.",
      cardmedia: big_hugs_teddy_bear,
      currency: "₹",
      discountedPrice: 1999,
      actualPrice: 2249,
      sellingStatus: "Styled",
      delivery:'Today',
    },
    {
      title: "Gift hamper",
      subheader: "Gifts to make you smile.",
      cardmedia: calming_senses_gift_hamper,
      currency: "₹",
      discountedPrice: 1599,
      actualPrice: 1799,
      sellingStatus: "best seller",
      delivery:'Tommorrow',
    },
    {
      title: "Couple gift ",
      subheader: "Unique Personalized Gifts.",
      cardmedia: couple_hanging_legs,
      currency: "₹",
      discountedPrice: 1259,
      actualPrice: 1300,
      sellingStatus: "Wrapped",
      delivery:'Tommorrow',
    },
    {
      title: "Glass candles",
      subheader: "Gifts that inspire.",
      cardmedia: fragrant_votive_glass_candles_set,
      currency: "₹",
      discountedPrice: 869,
      actualPrice: 999,
      sellingStatus: "Styled",
      delivery:'Today',
    },
    {
      title: "Wireless headphone",
      subheader: "Gifting made easy.",
      cardmedia: inext_wireless_headphone_brown_bt_version,
      currency: "₹",
      discountedPrice: 2500,
      actualPrice: 2800,
      sellingStatus: "Wrapped",
      delivery:'Today',
    },
    {
      title: "Buddha idol",
      subheader: "Celebrate Together.",
      cardmedia: lying_in_peace_buddha_idol_light_grey,
      currency: "₹",
      discountedPrice: 1259,
      actualPrice: 1300,
      sellingStatus: "best seller",
      delivery:'Tommorrow',
    },
    {
      title: "Showpiece",
      subheader: "Make Them Feel Special.",
      cardmedia: musician_lady_n_showpiece,
      currency: "₹",
      discountedPrice: 899,
      actualPrice: 950,
      sellingStatus: "Wrapped.",
      delivery:'Today',
    },
  ];




  export default function Gifts() {
    return (
      <>
        <Box >
        <Grid
          container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ backgroundColor: "#FADBD8" }}>
            {giftList.map((item, index) => {
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
                    titleIcon={<CardGiftcardIcon/>}
                    order={ordered}
                  ></RCard>
                </Grid>
              );
            })}
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
    );
  }



