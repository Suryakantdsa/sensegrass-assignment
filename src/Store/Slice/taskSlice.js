import { createSlice } from "@reduxjs/toolkit";
const taskSlice=createSlice({
    name:"Task",
    initialState:[],
    reducers:{
        setTask:(state, action) => {
            return action.payload; // This will replace the existing data in the store with the fetched data
          }
    }
})


export const {setTask}=taskSlice.actions;
export default taskSlice.reducer;