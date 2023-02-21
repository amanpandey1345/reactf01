import React from "react";
// import "./Loader.css";

const Loader = () => {
  return (
    <div className="w-full min-h-screen bg-transparent grid justify-center items-center ">
      <div className="animate-bounce flex " >
        <img src="/artboard1.png" className="w-44 h-44 animate-ping flex"  />
      </div>
    </div>
  );
};

export default Loader;