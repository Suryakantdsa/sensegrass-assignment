import ReactDOM from "react-dom/client"
import React from "react";
import Body from "./src/Component/Body";

const AppRouter = () => {
  return <Body/>
};

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppRouter/>)