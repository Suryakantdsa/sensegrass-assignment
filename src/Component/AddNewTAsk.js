import React from "react";

const AddNewTAsk = ({ onCancel, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded p-8 w-96">
        <h1 className="text-xl font-bold mb-4">ADD task</h1>
        <label htmlFor="title" className="mb-2 block">
          Title:
          <input
            type="text"
            placeholder="Enter the title"
            id="title"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </label>
        <label htmlFor="desc" className="mb-2 block">
          Description:
          <textarea
            name="desc"
            id="desc"
            className="w-full border border-gray-300 rounded-md py-2 px-3 h-40 resize-none mb-4"
            placeholder="Write description..."
          />
        </label>
        <label htmlFor="date" className="mb-2 block">
          Due date:
          <input
            type="date"
            id="date"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={onSubmit}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mr-2"
          >
            Add task
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewTAsk;
