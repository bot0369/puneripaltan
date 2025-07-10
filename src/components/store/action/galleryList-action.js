import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const getGalleryList = createAsyncThunk("get-galleryList", async () => {
  const res = await apiClient.get(`/gallary_list?cat_id=7`);

  let data = res.data;

  // If it's a string, parse it; otherwise, use as-is
  if (typeof data === "string") {
    // Remove trailing <script> if present
    const scriptIndex = data.indexOf('<script');
    if (scriptIndex !== -1) {
      data = data.substring(0, scriptIndex);
    }

    data = JSON.parse(data); // safely parse the cleaned string
  }

  return data.reverse(); // reverse the array (if it's an array)
});
