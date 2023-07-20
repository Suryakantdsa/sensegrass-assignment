import React, { useState } from "react";
import AddNewTAsk from "./AddNewTAsk";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isClick,setClick]=useState(false)
    const navigate=useNavigate()
    function handleCreate() {
        setClick(prevState => !prevState);
        console.log("hi")
        navigate("/addtask")
      }
  return (
    <>
      <div
        className="container w-2/3 flex bg-sky-500 justify-between items-center
      mx-auto min-h-[5rem] px-4"
      >
        <h1 className="text-white md:text-2xl font-bold ">
          Task management App
        </h1>
        <button onClick={()=>{handleCreate()}} className=" bg-white border-2 text-sky-600 border-sky-950 md:py-2 md:px-3 p-1 rounded-md font-bold shadow-lg">
          <span className="pr-1 font-bold">
            <i className="fa-solid fa-plus"></i>
          </span>
          Create task
        </button>
      </div>
     

    </>
  );
};

export default Header;
