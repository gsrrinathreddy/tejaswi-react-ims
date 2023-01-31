import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfChocolates : 50,
    noOfOrderedChocolates : 0
}

const ChocolateSlice = createSlice ({
    name : 'chocolate',
    initialState,
    reducers : {
        ordered :(state,action)=>{
            state.numOfChocolates -= action.payload.qty;
            state.noOfOrderedChocolates += parseInt(action.payload.qty)
        },
        restocked :(state,action)=>{
            state.numOfChocolates += action.payload.qty;
        }
    }
})
export default ChocolateSlice.reducer;
export const { ordered, restocked } = ChocolateSlice.actions;