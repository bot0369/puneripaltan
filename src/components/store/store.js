import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/player-slice";
import galleryListReducer from "./slice/galleryList-slice";
import tvListReducer from "./slice/tvLIst-slice"


const store = configureStore({
    reducer: {
        player: playerReducer,
        galleryList: galleryListReducer,
        tvList : tvListReducer,
    }
})

export default store;