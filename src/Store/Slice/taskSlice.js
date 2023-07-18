import { createSlice } from "@reduxjs/toolkit";
const taskData={
    title:"",
    description:"",
    dueDate:"",
    isCompleted:false,
    isInprogress:false,
    isYettoDo:true,
}
const taskSlice=createSlice({
    name:"Task",
    initialState:[taskData],
    reducers:{
        addTask:(state,action)=>[
            state.push(action.payload)
        ]
    }
})


export const {addTask}=taskSlice.actions;
export default taskSlice.reducer;