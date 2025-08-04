import { createSlice } from "@reduxjs/toolkit";
import { getGalleryDetails } from "../action/galleryDetails";

const galleryDetailsSlice = createSlice({
    name: "galleryDetails",
    initialState: {
        galleryDetails: null,
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGalleryDetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getGalleryDetails.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.galleryDetails = action.payload;
            })
            .addCase(getGalleryDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default galleryDetailsSlice.reducer;