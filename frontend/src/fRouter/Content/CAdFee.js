import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { SiVirustotal } from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Avatar } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getsStudents } from "./../../actions/userAction"; 
import { useEffect } from "react";
import store from "../../store"
import { useSelector, useDispatch } from "react-redux";
import PayFeeDailog from '../../Conpo/PayFeeDailog';


const CAdFee = ({history}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { loading, getStudent } = useSelector((state) => state.getsStudent);
    console.log(getStudent);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    store.dispatch(getsStudents(id)); 
  }, [dispatch,id]);

  return (
    <>
      <div className="flex flex-col w-full h-auto p-10 ">
        <div className="flex flex-col items-center w-full box-0 md:h-40 md:justify-around md:flex-row ">
          <div className="flex items-center w-64 h-32 p-3 m-1 text-center bg-white justify-self-end box-1 ring-gray-100 rounded-xl ">
            <Link to={`/admintools/class/student/profile/${id}`} >
            <a className='flex items-center  h-32 p-1 m-1 text-center bg-white justify-self-end box-1 ring-gray-100 rounded-xl '>
            <Avatar
              alt="Aman pandey"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
              className="mr-1 bg-orange-500"
            />
            <h2 className="flex items-center justify-center text-xl font-bold text-center ">
              {getStudent ? getStudent.addstudent.Sname:"0000"}
              <IoMdArrowDropright className="mr-1 text-3xl text-gray-300 " />
            </h2>
            </a>
            </Link>
            
          </div>
          <div className="flex flex-col justify-center w-64 h-32 p-5 m-1 text-center bg-white box-2 ring-gray-100 rounded-xl">
            <h2 className="flex items-center justify-center text-xl font-bold text-center ">
              <SiVirustotal className="mr-1 text-3xl text-blue-500 " />
              Total Fees
            </h2>
            <h2 className="flex items-center justify-center text-2xl font-extrabold text-center ">
              <FaRupeeSign className="mr-1 text-xl text-blue-500 " />
              {getStudent ? getStudent.totalFee:"0000"}
            </h2>
          </div>
          <div className="flex flex-col justify-center w-64 h-32 p-5 m-1 text-center bg-white box-3 ring-gray-100 rounded-xl">
            <h2 className="flex items-center justify-center text-xl font-bold text-center ">
              <AiOutlineFileDone className="mr-1 text-3xl text-green-500 " />
              Paid Fees
            </h2>
            <h2 className="flex items-center justify-center text-2xl font-extrabold text-center">
              <FaRupeeSign className="mr-1 text-xl text-green-500 " />
              {getStudent ? getStudent.paidFee:"0000"}
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center w-64 h-32 p-5 m-1 text-center bg-white box-4 ring-gray-100 rounded-xl">
            <h2 className="flex items-center text-xl font-bold text-center">
              <MdOutlinePendingActions className="mr-1 text-3xl text-yellow-500 " />
              Pending Fees
            </h2>
            <h2 className="flex items-center justify-center text-2xl font-extrabold text-center">
              <FaRupeeSign className="mr-1 text-xl text-yellow-500 " />
              {getStudent ? getStudent.pendingFee:"0000"}
            </h2>
          </div>

          <div className="flex flex-col justify-center w-64 h-32 p-5 m-1 text-center bg-white box-4 ring-gray-100 rounded-xl">
            <h2 className="mb-1 text-xl font-bold">Fee</h2>
            <PayFeeDailog icons={"Pay"} title={"Fee"}/>

          </div>
                    
        </div>  
        <div className="flex flex-col justify-center w-full h-auto p-0 m-0 rounded-lg md:flex-row backdrop-blur-md bg-white/10">
          <div className="w-full h-auto m-2 md:w-full md:p-5 rounded-3xl">
            <h1 className="text-xl font-bold">1st Term </h1>
            <div className="flex w-full m-2 md:w-full md:p-5 rounded-3xl">
              <div className="flex flex-col items-center justify-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.jul:"0000"}</div>
                <h2 className="font-bold text-sl">July</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.aug:"0000"}</div>
                <h2 className="font-bold text-sl ">Aug</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.sap:"0000"}</div>
                <h2 className="font-bold text-sl ">Sep</h2>
              </div>
            </div>
            <div className="flex w-full m-2 mt-0 md:w-full md:p-5 rounded-3xl">
              <div className="flex flex-col justify-center h-32 p-2 m-1 text-center bg-white w-44 box-3 ring-gray-100 rounded-2xl">
                <div className="flex flex-col justify-center w-full h-full bg-gray-50 rounded-xl">
                  <h2 className="font-bold text-sl">1st Term Exam Fee</h2>
                  <h2 className="text-2xl font-extrabold">{getStudent ? getStudent.ex1:"0000"}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-center h-32 p-2 m-1 text-center bg-white w-44 box-3 ring-gray-100 rounded-2xl">
                <div className="flex flex-col justify-center w-full h-full bg-gray-50 rounded-xl">
                  <h2 className="font-bold text-sl">Annual Fee</h2>
                  <h2 className="text-2xl font-extrabold">{getStudent ? getStudent.anfee:"0000"}</h2>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold">2nd Term </h1>
            <div className="flex w-full m-2 md:w-full md:p-5 rounded-3xl">
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.oct:"0000"}</div>
                <h2 className="font-bold text-sl ">Oct</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.nov:"0000"}</div>
                <h2 className="font-bold text-sl ">Nov</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.dec:"0000"}</div>
                <h2 className="font-bold text-sl ">Dec</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.apr:"0000"}</div>
                <h2 className="font-bold text-sl ">April</h2>
              </div>
            </div>
            <div className="flex w-full m-2 mt-0 md:w-full md:p-5 rounded-3xl">
              <div className="flex flex-col justify-center h-32 p-2 m-1 text-center bg-white w-44 box-3 ring-gray-100 rounded-2xl">
                <div className="flex flex-col justify-center w-full h-full bg-gray-50 rounded-xl">
                  <h2 className="font-bold text-sl">2nd Term Exam Fee</h2>
                  <h2 className="text-2xl font-extrabold">{getStudent ? getStudent.ex2:"0000"}</h2>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold">3rd Term </h1>
            <div className="flex w-full m-2 md:w-full md:p-5 rounded-3xl ">
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.Jan:"0000"}</div>
                <h2 className="font-bold text-sl ">Jan</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.fub:"0000"}</div>
                <h2 className="font-bold text-sl ">Feb</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.mar:"0000"}</div>
                <h2 className="font-bold text-sl ">March</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.may:"0000"}</div>
                <h2 className="font-bold text-sl ">May</h2>
              </div>
              <div className="flex flex-col items-center m-2 bg-white w-44 h-28 rounded-3xl">
                <div className="w-full h-full text-center bg-gray-50 rounded-t-3xl">{getStudent ? getStudent.jun:"0000"}</div>
                <h2 className="font-bold text-sl ">Jun</h2>
              </div>
            </div>
            <div className="flex w-full m-2 mt-0 md:w-full md:p-5 rounded-3xl">
              <div className="flex flex-col justify-center h-32 p-2 m-1 text-center bg-white w-44 box-3 ring-gray-100 rounded-2xl">
                <div className="flex flex-col justify-center w-full h-full bg-gray-50 rounded-xl">
                  <h2 className="font-bold text-sl">3rd Term Exam Fee</h2>
                  <h2 className="text-2xl font-extrabold">{getStudent ? getStudent.ex3:"0000"}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CAdFee;
