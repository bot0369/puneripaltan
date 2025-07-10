import { createSlice } from "@reduxjs/toolkit";
import { getTvList} from "../action/tvList-action";

const initialState ={
    tvList : [],
    state : "idle",
    error : ""
}

const tvListSlice = createSlice({
    name : 'tvList',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(getTvList.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getTvList.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.tvList = action.payload;
        })
        .addCase(getTvList.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        
    }
})

export default tvListSlice.reducer;