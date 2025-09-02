import { configureStore } from "@reduxjs/toolkit";
import FilmsReduser from "./redusers/FilmsRedusers";

const store = configureStore({
    reducer: {
        FilmsReduserService: FilmsReduser,
    },
});

export default store;