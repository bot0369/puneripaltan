import { createSlice } from "@reduxjs/toolkit";
import { getGalleryList } from "../action/galleryList-action";

const initialState = {
    galleryList: [],
    status: "idle",
    error: ""
};

const galleryListSlice = createSlice({
    name: "galleryList",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getGalleryList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getGalleryList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.galleryList = action.payload;
            })
            .addCase(getGalleryList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default galleryListSlice.reducer;



