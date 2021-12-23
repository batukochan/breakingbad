import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./bbSlice/charactersSlice";

const store = configureStore({
    reducer:{
        characters:charactersSlice,
    },
})

export default store