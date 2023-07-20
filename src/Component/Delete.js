import React from "react";
import {useNavigate, useParams} from "react-router-dom"
 
const Delete = ({ onCancel }) => {
    const {id}=useParams()
    const navigate=useNavigate()
    const handleCancel = () => {
        navigate("/")
      };
    const handleDeleteSubmit = async () => {
        // let
        // console.log(params.id);
        let result = await fetch(
          `http://localhost:5000/task/${id}`,
          {
            method: "delete",
          }
        );
        result = await result.json();
        if (result) {
        //   navigate("/addtask")
          navigate("/")
          console.log(result)
          // window.location.reload()
        }
      };
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-white rounded p-8 w-96">
        <h1 className="text-xl font-bold mb-4">Are you sure to delete the task .? </h1>
        <div className="flex justify-end">
          <button
            onClick={()=>handleDeleteSubmit()}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
          >
            Yes Delete
          </button>
          <button
            onClick={()=>handleCancel()}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
