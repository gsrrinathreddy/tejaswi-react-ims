import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import cakeReducer from '../features/Cake/CakeSlice';
import icecreamReducer from '../features/Icecream/IcecreamSlice';
import chocolateReducer from '../features/Chocolate/ChocolateSlice';
import flowerReducer from '../features/Flower/FlowerSlice';
import cartreducer from '../features/Cart/cartSlice'

const store = configureStore({
    reducer:{
        cake : cakeReducer,
        icecream : icecreamReducer,
        chocolate : chocolateReducer,
        flower : flowerReducer,
        cart:cartreducer
        
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store;