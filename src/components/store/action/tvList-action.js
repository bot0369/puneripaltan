import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getTvList = createAsyncThunk("get-tvList", async (cat_id) => {
  const res = await apiClient.get(`/puneri_tv_list?cat_id=${cat_id}`);

  let data = res.data;

  if (typeof data === "string") {
    const scriptIndex = data.indexOf('<script');
    if (scriptIndex !== -1) {
      data = data.substring(0, scriptIndex);
    }

    data = JSON.parse(data);
  }

  return data.reverse();
});