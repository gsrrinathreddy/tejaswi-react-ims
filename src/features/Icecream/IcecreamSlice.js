import {createSlice } from "@reduxjs/toolkit";

const initialState ={
    numOfIcecreams : 80,
    noOfOrderedIcecreams : 0
}
const IcecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state,action)=>{
            state.numOfIcecreams -= action.payload.qty;
            state.noOfOrderedIcecreams += parseInt(action.payload.qty)
        },
        restocked : (state,action)=>{
            state.numOfIcecreams += action.payload.qty
        }
    },
    extraReducers:{
        ['cake/ordered']:(state,action)=>{
            if(action.payload>=2){
                state.numOfIcecreams--;
                state.noOfOrderedIcecreams++;
                
            }
        }
    }
})
export default IcecreamSlice.reducer;
export const { ordered , restocked } = IcecreamSlice.actions;