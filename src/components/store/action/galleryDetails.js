import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getGalleryDetails = createAsyncThunk(
    "galleryDetails/getGalleryDetails",
    async (id) => {
        const res = await apiClient.get(`/single_gallary?id=${id}`);
        return res.data;
    }
)