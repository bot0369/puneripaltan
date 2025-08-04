import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getGalleryList = createAsyncThunk("get-galleryList", async () => {
  const res = await apiClient.get(`/gallary_list?cat_id=7`);

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
