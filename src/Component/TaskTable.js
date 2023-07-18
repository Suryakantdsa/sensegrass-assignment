import React, { useEffect, useState } from "react";
import Edit from "./Edit";
import useGetTaskFromDb from "../helper/useGetTaskFromDb";

const TaskTable = () => {
  useEffect(()=>{
    useGetTaskFromDb()
  },[])
  const [isClick,setClick]=useState(false)
  const handelUpdate=()=>{
    setClick(true)
  }
  const handleCancel=()=>{
    setClick(false)
  }
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
            <tr>
              <td className="border border-slate-700 w-[13%]">css</td>
              <td className="border border-slate-700 text-left">
                Css is for styling the raw HTML page
                lkxnbdsjvxskhl;baldbcodvusoLNclxdacsevdrbftgnyhgftderaewfargthyjt
              </td>
              <td className="border border-slate-700 w-[13%]">10-07-2023</td>
              <td className="border border-slate-700 w-[13%]">
                <span>
                  <i className="fa-solid px-2 text-green-600 fa-circle-check"></i>
                  completed
                </span>
              </td>
              <td className="border border-slate-700 w-[13%]">
                <button onClick={handelUpdate}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="bg-red px-2">
                  <i className="text-red-600 fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 w-[13%]">css</td>
              <td className="border border-slate-700 text-left">
                Css is for styling the raw HTML page
                lkxnbdsjvxskhl;baldbcodvusoLNclxdacsevdrbftgnyhgftderaewfargthyjt
              </td>
              <td className="border border-slate-700 w-[13%]">10-07-2023</td>
              <td className="border border-slate-700 w-[13%]">
                <span>
                  <i className="fa-solid px-2 text-green-600 fa-circle-check"></i>
                  completed
                </span>
              </td>
              <td className="border border-slate-700 w-[13%]">
                <button onClick={handelUpdate}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="bg-red px-2">
                  <i className="text-red-600 fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {isClick && <Edit onCancel={handleCancel}/>}
      </div>
    </div>
  );
};

export default TaskTable;
