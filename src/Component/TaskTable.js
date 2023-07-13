import React from "react";

const TaskTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>css</td>
            <td>Css is for styleing the raw html page</td>
            <td>10-07-2023</td>
            <td>completed</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>css</td>
            <td>Css is for styleing the raw html page</td>
            <td>10-07-2023</td>
            <td>completed</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>css</td>
            <td>Css is for styleing the raw html page</td>
            <td>10-07-2023</td>
            <td>completed</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>css</td>
            <td>Css is for styleing the raw html page</td>
            <td>10-07-2023</td>
            <td>completed</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;
