import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfGifts : 100,
    noOfOrderedGifts : 0,
}
 
const giftSlice = createSlice({
    name : 'gifts',
    initialState,
    reducers : {
        ordered : (state,action)=>{
            state.numOfGifts -= action.payload.qty;
            state.noOfOrderedGifts += parseInt(action.payload.qty)
        },
        restocked : (state,action)=>{
            state.numOfGifts += action.payload.qty;
        }
    },
})

export default giftSlice.reducer;
export const {ordered,restocked}=giftSlice.actions;