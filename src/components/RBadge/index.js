import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import { Icon } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function RBadge(props) {
    let badgeContent=props.badgeContent;
    let cartIcon=props.cartIcon;
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={badgeContent} color="secondary">
        <ShoppingCartIcon/>
        </StyledBadge>
    </IconButton>
  );
}