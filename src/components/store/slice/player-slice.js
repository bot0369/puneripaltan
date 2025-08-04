import { createSlice } from "@reduxjs/toolkit";
import { getPlayers } from "../action/player-action";

const initialState = {
    players: [],
    status: "idle",
    error: ""
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPlayers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getPlayers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.players = action.payload;
            })
            .addCase(getPlayers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default playerSlice.reducer;



