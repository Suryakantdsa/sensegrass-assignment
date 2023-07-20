import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [newTask, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    isCompleted: false,
    isInprogress: false,
    isYettoDo: true,
  });
  useEffect(()=>{
    getTaskTOEdit()
  },[])
  const getTaskTOEdit=async()=>{
    let result= await fetch(`http://localhost:5000/task/edit/${id}`);
    result=await result.json()
    if(result){
      setTask(result)
    }
  }
  const handleUpdateSubmit=async()=>{
    let result = await fetch(`http://localhost:5000/task/edit/${id}`, {
      method: "put",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await result.json();
    if (data) {
      console.log(data);
      navigate("/");
    }
  }
  const handleUpdateCancle=()=>{
    navigate("/")
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded p-8 w-96">
        <h1 className="text-xl font-bold mb-4">Update task</h1>
        <label htmlFor="title" className="mb-2 block">
          Title:
          <input
            type="text"
            placeholder="Enter the new title"
            id="title"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={newTask.title}
            onChange={(e) => {
              setTask({ ...newTask, title: e.target.value });
            }}
          />
        </label>
        <label htmlFor="desc" className="mb-2 block">
          Description:
          <textarea
            name="desc"
            id="desc"
            className="w-full border border-gray-300 rounded-md py-2 px-3 h-40 resize-none mb-4"
            placeholder="Write description..."
            value={newTask.description}
            onChange={(e) => {
              setTask({ ...newTask, description: e.target.value });
            }}
          />
        </label>
        <label htmlFor="date" className="mb-2 block">
          Due date:
          <input
            type="date"
            id="date"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={newTask.dueDate}
            onChange={(e) => {
              setTask({ ...newTask, dueDate: e.target.value });
            }}
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={()=>handleUpdateSubmit()}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
          >
            Update task
          </button>
          <button
            onClick={()=>handleUpdateCancle()}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
