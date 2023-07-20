import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import Body from "./src/Component/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./src/Component/ErrorPage";
import AddNewTAsk from "./src/Component/AddNewTAsk";
import { Provider } from "react-redux";
import store from "./src/Store/Store";
import Delete from "./src/Component/Delete";
import Edit from "./src/Component/Edit";
import EditStatus from "./src/Component/EditStatus";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading.....?</div>}></Suspense>
      <Outlet />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/task/:id",
        element: <Delete />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/addtask",
        element: <AddNewTAsk />,
        // errorElement:<ErrorPage/>
      },
      {
        path: "/task",
        errorElement: <ErrorPage />,
        children:[
          {
            path: "/task/edit/:id",
            element: <Edit />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/task/editstatus/:id",
            element: <EditStatus />,
            errorElement: <ErrorPage />,
          },
        ]
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);
