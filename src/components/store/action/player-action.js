import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getPlayers = createAsyncThunk("get-players", async () => {
    const res = await apiClient.get(`/player_list?cat_id=1`);
    const res1 = await apiClient.get(`/player_list?cat_id=2`);
    const res2 = await apiClient.get(`/player_list?cat_id=3`);
    return [...res.data, ...res1.data, ...res2.data];
});
