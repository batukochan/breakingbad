import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./bbSlice/charactersSlice";
import quotesSlice from "./bbSlice/quotesSlice";

const store = configureStore({
    reducer:{
        characters:charactersSlice,
        quotes:quotesSlice,
    },
})

export default store