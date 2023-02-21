import * as React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { getAllUsers} from "/../../actions/userAction";
import { getStudents } from "./../../actions/userAction";

import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import store from "../../store";
import Loader from "../../Conpo/Loader";
import { useParams } from "react-router-dom";

const columns = [
  { field: "sn", headerName: "SNo.", width: 70 },
  { field: "sId", headerName: "Student Id", width: 140 },
  { field: "name", headerName: "Name", width: 140 },

  {
    field: "Cname",
    headerName: "Class",
    width: 110,
    // editable: true,
  },
  {
    field: "Csubject",
    headerName: "Subject",
    width: 110,
    // editable: true,
  },
  {
    field: "Cmedium",
    headerName: "Medium",
    width: 120,
    // styled: Button,
    //   editable: true,
  },
  {
    field: "Cteacher",
    headerName: "Class Teacher",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 160,
  },
];


const CAccStudent = ({history}) => {
    const {id} = useParams()
    const dispatch = useDispatch(); 
    const handleRowClick=(params)=>{
        history.push(`/account/class/${params.row.SYear}_${params.row.Cname}`)
        // router.push("/")
      }
    const handleBackClick = ()=>{
        history.push("/account")
    }
  const { loading, getStudent } = useSelector((state) => state.getStudent);

  const rows = [];

  getStudent &&
  getStudent.addstudent &&
  getStudent.addstudent.forEach((student, index) => {
      rows.push({
        id: student._id,
        sn: index + 1,
        // Cname: classs.Cname,
        // Csubject: classs.Csubject,
        // Cmedium: `${classs.Cmedium}`,
        // Cteacher: classs.Cteacher,
        // ClassId: classs.ClassId,
        // Discount: classs.Dpercent,
        // CAnnualF: classs.PFee.AnnualFee,
        // PAnnualF: classs.CFee.AnnualFee,
        // PMTF: classs.PFee.MTfee,
        // CMTF: classs.CFee.MTfee,
        // PExamF: classs.PFee.ExamFee,
        // CExamF: classs.CFee.ExamFee,
        // SYear: classs.Syear,
        // EYear: classs.Eyear,
        // Tmonths: classs.Tmonths,
        // Texam: classs.Texam,
        // TFeeObj: classs.TFeeObj,
        // T3FeeS: classs.T3FeeS,
        // T2FeeS: classs.T2FeeS,
        // T1FeeS: classs.T1FeeS,
        // LateFee: classs.LateFee,
      });
    });
  // console.log(rows);

  useEffect(() => {
    store.dispatch(getStudents());
  }, [dispatch]);

  return (
    <>
      <div
        className="h-screen pt-20 md:w-full md:p-5 rounded-xl"
        style={{
          height: "100vh",
          width: "105%",
          // marginTop: "20px",
          // marginLeft: "20px",
          // marginRight: "20px",
          marginBottom: "20px",
          margin: "2px",
          backgroundColor: "white",
          fontSize: "45px",
          color: "black",
          fontWeight: "bolder",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Class {id} Student List</h1> 
          <Button variant="outlined" onClick={handleBackClick} className="mb-2" >Back</Button>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={50}
            sx={{
              fontSize: "17px",
              color: "black",
              fontFamily: "-moz-initial",
              padding: "0px",
              backgroundColor: "white",
            }}
            rowsPerPageOptions={[50]}
            // checkboxSelection
            onRowClick={handleRowClick}
            onCellClick={handleRowClick}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default CAccStudent;
