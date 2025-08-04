import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player-slice";
import galleryListReducer from "./slice/galleryList-slice";
import tvListReducer from "./slice/tvLIst-slice"
import playerDetailsReducer from "./slice/playerDetails-slice"
import galleryDetailsReducer from "./slice/galleryDetails-slice";

const store = configureStore({
    reducer: {
        player: playerReducer,
        galleryList: galleryListReducer,
        tvList: tvListReducer,
        playerDetails: playerDetailsReducer,
        galleryDetails:galleryDetailsReducer,
    }
})

export default store;