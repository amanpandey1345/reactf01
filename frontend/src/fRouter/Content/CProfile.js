import { Avatar } from "@mui/material";
import React from "react";
import { deepOrange, green } from '@mui/material/colors';
const CProfile = () => {
  function HideScrollbar() {
    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
  }
  return (
    <>
      {/* Atributes */}
      <div className="h-auto w-full ">
        <div
          className="flex  flex-col  space-y-5 
        font-semibold bg-gray-100  p-5 rounded-md items-center"
        >
          <h1 className=" flex font-extrabold text-2xl justify-center h-16">
            Student Information
          </h1>
          <Avatar sx={{ bgcolor: deepOrange[500] ,width:150,height:150 }} className=""  variant="square">v</Avatar>
          <div className="flex  items-center w-full justify-between my-8">

            <div className="space-y-4">
              <ul>Student id</ul>
              <ul>Father Name</ul>
              <ul>Mother Name</ul>
              <ul>Guardian Name/Parent Name</ul>
              <ul>Last School Name</ul>
              <ul>Previous Class</ul>
              <ul>Mobile Number/Phone Number </ul>
              <ul>Gmail Id</ul>
              <ul>Scholar No/Admission Number</ul>
              <ul>Admission Class</ul>
              <ul>Gender</ul>
              <ul>Mobile Number</ul>
            </div>
            {/* value */}
            <div className="value space-y-4 mx-10">
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              
             
            </div>
            <div className="space-y-4 mx-10">
              <ul>Student id</ul>
              <ul>Father Name</ul>
              <ul>Mother Name</ul>
              <ul>Guardian Name/Parent Name</ul>
              <ul>Last School Name</ul>
              <ul>Previous Class</ul>
              <ul>Mobile Number/Phone Number </ul>
              <ul>Gmail Id</ul>
              <ul>Scholar No/Admission Number</ul>
              <ul>Admission Class</ul>
              <ul>Gender</ul>
              <ul>Mobile Number</ul>
            </div>
            {/* value */}
            <div className="space-y-4 mx-10">
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
              <ul>Value</ul>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CProfile;
