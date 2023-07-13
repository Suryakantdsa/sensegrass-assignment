import React from "react";

const Header = () => {
  return (
    <div
      className="w-2/3 flex bg-sky-500 justify-between items-center
 mx-auto min-h-[5rem] px-4"
    >
      <h1 className="text-white text-2xl font-bold ">Task management App</h1>
      <button className=" bg-white border-2 text-sky-600 border-sky-950 py-2 px-3 rounded-md font-bold shadow-lg">
        <span className="pr-1 font-bold">
          <i class="fa-solid fa-plus"></i>
        </span>
        Create task
      </button>
    </div>
  );
};

export default Header;
