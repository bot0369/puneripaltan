import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getPlayerDetails = createAsyncThunk(
    "playerDetails/getPlayerDetails",
    async (id) => {
        const res = await apiClient.get(`/single_player?id=${id}`);
        return res.data[0];
    }
);

