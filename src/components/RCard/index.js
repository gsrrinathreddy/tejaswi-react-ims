import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import CakeView from '../../features/Cake/CakeView';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useDispatch } from 'react-redux';
import { ordered } from '../../features/Cake/CakeSlice';
import { textAlign, width } from '@mui/system';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Snackbar } from '@mui/material';
import { ordered as cakeorder } from '../../features/Cake/CakeSlice';
import { ordered as icecreamorder } from '../../features/Icecream/IcecreamSlice';
import { ordered as chocolateorder } from '../../features/Chocolate/ChocolateSlice';
// import { ordered as giftorder } from '../../features/'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RCard(props) {


  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  const [value, setValue] = React.useState(2);

    //let img=props.img;
    let title=props.title;
    let subheader = props.subheader;
    let photo = props.photo;
    let cakeimg=props.cakeimg;
    let actualPrice=props.actualPrice;
    let sellingStatus=props.sellingStatus;
    let  discountedPrice=props.discountedPrice;
    let discount=actualPrice-discountedPrice;
    let dp=Math.floor((discount/actualPrice)*100)+"% off";
    let currency=props.currency;
    let ordername=props.ordername;

  const [expanded, setExpanded] = React.useState(false);
  const [active,setActive] = React.useState();
  const handleClick=()=>{
    setActive(!active);
  };

 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let [qty,setQty] = React.useState(1);
  let dispatch = useDispatch()

  const [count,setCount]=React.useState(0);

  let params = {
    title:title,
    actualPrice:actualPrice,
    discountedPrice:discountedPrice,
    qty:parseInt(qty)}


 
  return (
    
    <Card  sx={{ maxWidth: 500 , marginLeft :'40px', bgcolor:'beige', marginRight:'40px' }}>
      <div style={{position : "relative"}}>
      <CardMedia style={{height : "250px", }}
      component="img"
      height="200"
      image={photo} 
      /> 
      <div style={{position:"absolute", alignItems:"flex-end" , color:"white",top:10,right:"2%",
           transform:"translatex()-50%",}}>
        <Chip  label={sellingStatus} color="success"/>
      </div>
      </div>
      
      
    <CardHeader align='left' 
          title= {title}
          subheader={subheader}
          />
    
    <CardActions disableSpacing  >
     <Stack direction="row" spacing={1}>
        <Chip variant="outlined" label={dp} color="error" sx={{shapeOutside:"content-box"}}  />
      </Stack>
      <Typography variant='h6' color='black'  fontWeight='bold' >
          {currency}{discountedPrice} 
          </Typography>
          <Typography  variant='' color='GrayText'   style={{textDecorationLine: 'line-through'}}>
             {currency}{actualPrice}
          </Typography>
          {/* <Typography   variant="body3" color="text.secondary" fontStyle='oblique' >
          <LocalShippingIcon /> Today
        </Typography> */}

          {/* <Stack marginLeft={0.5} spacing={0} alignItems='flex-end' sx={{minWidth:220}} >
            <Chip label="best seller" color="success" variant="outlined"  />
          </Stack> */}
    </CardActions>

      <CardContent   >
         <Typography  variant="body3" color="text.secondary" fontStyle='oblique'   >
          <LocalShippingIcon /> Earliest Delivery : Today
        </Typography>
        <Typography variant="body2" color="text.secondary">
  
        </Typography> 
        <Typography component="line"> 
         <Rating name="customized-10" defaultValue={4} max={5} /></Typography>
      </CardContent>
    <CardActions spacing={0} >
      <p>{count}</p>
        <IconButton aria-label="add to favorites" onClick={()=>setCount(count+1) }
        style={{color:active?"red": "GrayText"}} >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" color='inherit'  >
          <ShareIcon />
        </IconButton>
      <Box spacing={2}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '8ch' },
      }}
      noValidate
      autoComplete="off"
      >
      </Box>
      <TextField label='qty' sx={{width:'120px'}} size="small" id="outlined-basic" variant="outlined" 
      defaultValue={1} onChange={(e)=>setQty(e.currentTarget.value)}/>
      
      <Box>
      <IconButton  aria-label="cart " size='small'   sx={{color:'black' ,   }} onClick={()=>{
        if (ordername=="cake"){
          dispatch(cakeorder(params))
        }
        else if (ordername=="icecream"){
          dispatch(icecreamorder(params))
        } 
        else if (ordername=="chocolate"){
          dispatch(chocolateorder(params))
        }
        

      }}>

       <Stack direction="row" spacing={2}>
       <Button variant="contained" endIcon={<LocalMallOutlinedIcon />}>
        Add
       </Button>
       </Stack>
      </IconButton>
     </Box>
     
     
     
    </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
    
      </Collapse>
    </Card>
    
  );
}