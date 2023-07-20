import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TaskTable = () => {
  const [param, getParam] = useState("");
  const navigate=useNavigate()

  const AllTask = useSelector((store) => store.Task);
  console.log(AllTask);

  const handelUpdate = (id) => {
    getParam(id);
    navigate(`/task/edit/${id}`)
  };
  const handleEditStatus = (id) => {
    getParam(id);
    navigate(`/task/editstatus/${id}`)
  };
  const handleDelete = (id) => {
    getParam(id);
    navigate(`/task/${id}`)
  };

  return (
    <div className="container mx-auto w-2/3">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-slate-500 mx-auto mt-5 text-sm">
          <thead className="bg-blue-300 p-2">
            <tr>
              <th className="border border-slate-600">Title</th>
              <th className="border border-slate-600">Description</th>
              <th className="border border-slate-600">Due date</th>
              <th className="border border-slate-600">Status</th>
              <th className="border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 text-center">
            {AllTask.length > 0 ? (
              AllTask.map((data) => {
                let status,bgCol;
                if(data.isCompleted){
                  status="Completed";
                  bgCol="rgb(34 197 94)"
                }
                else if(data.isInprogress){
                  status="In progress"
                  bgCol=" rgb(234 179 8 )"
                }
                else{
                    status="Yet to do"
                    bgCol="rgb(239 68 68)"
                }

                return (
                  <React.Fragment key={data._id}>
                    <tr key={data._id} className="h-10">
                      <td className="border border-slate-700 w-[13%]">
                        {data?.title}
                      </td>
                      <td className="border border-slate-700 text-left">
                        {data?.description}
                      </td>
                      <td className="border border-slate-700 w-[13%]">
                        {data?.dueDate}
                      </td>
                      <td className="border border-slate-700 w-[15%]">
                        <button onClick={()=>handleEditStatus(data._id)} style={{backgroundColor:`${bgCol}`}} className="text-white font-bold  text-sm my-auto py-1 px-1 rounded">
                          {status}
                        </button>
                      </td>
                      <td className="border border-slate-700 w-[13%]">
                        <button onClick={()=>handelUpdate(data._id)}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(data._id)}
                          className="bg-red px-2"
                        >
                          <i className="text-red-600 fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td>No record found ?</td>
              </tr>
            )}
          </tbody>
        </table>
    
      </div>
    </div>
  );
};

export default TaskTable;
