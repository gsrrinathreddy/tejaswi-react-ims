import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    numOfCakes : 90,
    noOfOrderedCakes : 0
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers :{
        ordered : (state,action)=>{
            state.numOfCakes -= action.payload.qty;
            state.noOfOrderedCakes += parseInt(action.payload.qty);
        },
        restocked :(state,action)=>{
            state.numOfCakes += action.payload.qty;
        }
    },
    
})

export default cakeSlice.reducer;
export const {ordered , restocked} = cakeSlice.actions;