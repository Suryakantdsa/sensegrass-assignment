import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice";

const store=configureStore({
    reducer:{
        Task:taskSlice
    }
})
export default store