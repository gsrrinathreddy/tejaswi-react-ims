import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import RAutocomplete from '../RAutoComplete';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import RBadge from '../RBadge';
import { useSelector } from 'react-redux';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import Dialogbox from '../Dialogbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';


//const pages = ['Products', 'Pricing', 'Blog'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function RNavbar(props) {
    let pages=props.pages;
    let settings=props.settings;
    let OrderedCakes = useSelector((state)=>state.cake.noOfOrderedCakes);
    let OrderedIcecreams = useSelector((state)=>state.icecream.noOfOrderedIcecreams);
    let OrderedChocolates = useSelector((state)=>state.chocolate.noOfOrderedChocolates);
    let OrderedFlowers = useSelector((state)=>state.flower.noOfOrderedFlowers);
    let OrderedGifts = useSelector((state)=>state.gift.noOfOrderedGifts);
    let order = OrderedCakes + OrderedIcecreams + OrderedChocolates + OrderedFlowers + OrderedGifts;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navLinkStyles = ({ isActive }) => {
     return {
       fontWeight: isActive ? "bold" : "normal",
       textDecoration: "none",
       textTransform: "none",
        my: 2,
         fontSize: isActive ? "18px" : "16px",
          display: "block",
           color: isActive ? "black" : "white",
           fontWeight: isActive ? "bold" : "normal",
            marginRight: "10px",
            marginLeft: "10px",
          };
        };

  return (
    <AppBar position="static" >
      <Container  maxWidth="xl" sx={{ backgroundImage : 'linear-gradient(to right , maroon , brown ,  pink )' }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link to='/' style={{textDecoration:"none"}}/>
          <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/bakery-logo-food-business-template-branding-design-vector_53876-136255.jpg" />
                
              </IconButton>
            </Tooltip>
           <Link to="/" style={{textDecoration:"none"}}> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'initial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            BAKE HOUSE
          </Typography>
          </Link>

           <Box sx={{bgcolor:'white'}} style={{borderRadius:'10px'}}>
            <RAutocomplete/>
          </Box> 
          <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none'  } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page} style={{textDecoration:'none'}} >
                  
                  
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1 ,display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <NavLink to={page} 
                style={navLinkStyles}
                 onClick={handleCloseNavMenu}  >
              {/* <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button> */}
              {page}
              </NavLink>
            ))}
            
          </Box>

          <Box>
            <Dialogbox icon={<LocationOnIcon/>} 
            dtitle="Enter Delivery pincode" 
            label='Pincode' b1='cancel' b2='ok'/>
          </Box>
          
          <Box>
            <Link to='cart'>
              <IconButton aria-label='cart'>
            <RBadge badgeContent={order} 
            cartIcon={<ShoppingCartIcon/>}/>
            </IconButton>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://static.thenounproject.com/png/3268783-200.png" />
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to = {setting}>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default RNavbar;