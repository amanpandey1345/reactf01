import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { getAllUsers} from "/../../actions/userAction";
import { getStudents } from "./../../actions/userAction";

import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";
import store from "../../store";
import Loader from "../../Conpo/Loader";
import { Link, useParams } from "react-router-dom";
import AddClassdailog from "../../Conpo/AddClassdailog";
import DailogStudentDelete from "../../Conpo/DailogStudentDelete";
import AddStudentdailog from "../../Conpo/AddStudentdailog";


const handleclick = (e)=>{
  e.stopPropagation();
  e.preventDefault();
}

const columns = [
  { field: "sn", headerName: "SNo.", width: 70 },
  { field: "studentId", headerName: "Student Id", width: 190 },
  { field: "scholerNo", headerName: "Scholer No", width: 110 },
  { field: "name", headerName: "Student Name", width: 170 },

  {
    field: "fname",
    headerName: "Father Name",
    width: 170,
    // editable: true,
  },
  {
    field: "term1",
    headerName: "Term 1st",
    width: 110,
    // editable: true,
  },
  {
    field: "term2",
    headerName: "Term 2nd",
    width: 110,
    // styled: Button,
    //   editable: true,
  },
  {
    field: "term3",
    headerName: "Term 3rd",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 110,
  },
  {
    field: "open",
    headerName: "Open",
    description: "This column has a value getter and is not sortable.",

    width: 90,
    styled: Button,
    renderCell: (params ) => {

      return ( 
      <>
      <div><Link to={`/admintools/class/student/fee/${params.row.id}`}><Button variant="contained"  >Open</Button></Link></div>
      {/* <ComEditClass icons={<EditIcon color="prmary" />} id={params.row.id} onClick={params.handleClick} /> */}
      </>
      )
    }
  },
  {
    field: "delete",
    headerName: "Delete",

    description: "This column has a value getter and is not sortable.",
    sortable: false,
    filterable: false,
    width: 90,
    renderCell: (params ) => {

      return (

        <DailogStudentDelete

        OnClick = {(e)=>{handleclick(e)}}
      key={params.row.id}
        icons={<DeleteIcon color="warning"/>}
        title={`Delete Student`}
        ids={`${params.row.id}`}
        sY={`${params.row.SYear}`}
      />

      )
    }

  },

];


const CAdStudent = ({history}) => {
    const {id} = useParams()
    const dispatch = useDispatch(); 
    const handleRowClick=(params)=>{
        history.push(`/account/class/${params.row.SYear}_${params.row.Cname}`)
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
        studentId :student.StudentId,
        name: student.Sname,
        fname:student.Fname,
        term1:student.term1,
        term2:student.term2,
        term3:student.term3,
        scholerNo:student.ScholerNo,
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
    store.dispatch(getStudents(id));
  }, [dispatch]);

  return (
    <>
      <div
        className="h-screen pt-20 md:w-full md:p-5 rounded-xl backdrop-blur-md bg-white/30"
        style={{
          height: "100vh",
          width: "105%",
          // marginTop: "20px",
          // marginLeft: "20px",
          // marginRight: "20px",
          marginBottom: "20px",
          margin: "2px",
          // backgroundColor: "white",
          fontSize: "45px",
          color: "black",
          fontWeight: "bolder",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold"> Student List</h1> 
          <AddStudentdailog
            title={"Add Student"}
            icons={
              <AddCircleIcon className="text-blue-500 " fontSize="large" />
            }
          />
          {/* <Button variant="outlined" onClick={handleBackClick} className="mb-2" >Back</Button> */}
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className=""  style={{ height:"90%", width: '100%'  }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={50}
            sx={{
              fontSize: "17px",
              color: "black",
              fontFamily: "-moz-initial",
              padding: "0px",
              // backgroundColor: "white",
            }}
            rowsPerPageOptions={[50]}
            // checkboxSelection
            // onRowClick={handleRowClick}
            // onCellClick={handleRowClick}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
           </div>
        )}
      </div>
    </>
  );
};

export default CAdStudent;
