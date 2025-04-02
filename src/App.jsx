import React from "react";
import Routers from "./routers/Routers";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Routers />
    </div>
  );
};

export default App;
