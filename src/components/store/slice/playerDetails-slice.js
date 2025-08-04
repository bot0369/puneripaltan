import { createSlice } from "@reduxjs/toolkit";
import { getPlayerDetails } from "../action/playerDetails";

const playerDetailsSlice = createSlice({
    name: "playerDetails",
    initialState: {
        playerDetails: null,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlayerDetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getPlayerDetails.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.playerDetails = action.payload;
            })
            .addCase(getPlayerDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default playerDetailsSlice.reducer;
