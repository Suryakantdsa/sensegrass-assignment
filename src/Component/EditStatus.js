import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStatus = () => {
  const {id}=useParams()
  const navigate = useNavigate();
  const closePopup = () => {
    navigate("/");
  };

  const handleStatusChange = async (status) => {
    let payload;
    if (status === "Completed") {
      payload = { isCompleted: true, isInprogress: false, isYettoDo: false };
    } else if (status === "inProgress") {
      payload = { isInprogress: true, isYettoDo: false, isCompleted: false };
    } else {
      payload = { isYettoDo: true, isCompleted: false, isInprogress: false };
    }
    // console.log("Selected status:", status);
    try {
      let result = await fetch(`http://localhost:5000/task/edit/${id}`, {
        method: "put",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await result.json();
      //   toast.success("Status Changed successfully");
      navigate("/");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div>
      {
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-white rounded p-10 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Change Status</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleStatusChange("Completed")}
                className="flex items-center justify-center bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Completed
              </button>
              <button
                onClick={() => handleStatusChange("inProgress")}
                className="flex items-center justify-center bg-orange-500 text-white font-bold py-2 px-4 rounded"
              >
                In Progress
              </button>
              <button
                onClick={() => handleStatusChange("yetToto")}
                className="flex items-center justify-center bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
                Yet to do
              </button>
            </div>
            <button
              onClick={closePopup}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default EditStatus;
