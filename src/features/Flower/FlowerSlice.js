import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfFlowers : 100,
    noOfOrderedFlowers : 0,
}
 
const flowerSlice = createSlice({
    name : 'flower',
    initialState,
    reducers : {
        ordered : (state,action)=>{
            state.numOfFlowers  -= action.payload.qty;
            state.noOfOrderedFlowers += parseInt(action.payload.qty);
        },
        restocked : (state,action)=>{
            state.numOfFlowers += action.payload;
        }
    },
})

export default flowerSlice.reducer;
export const {ordered,restocked}=flowerSlice.actions;