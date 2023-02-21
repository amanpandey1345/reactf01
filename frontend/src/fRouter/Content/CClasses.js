import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getClasses } from "./../../actions/userAction";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useParams } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useEffect } from "react";
import store from "../../store";
import Loader from "../../Conpo/Loader";
import DailogClassDelete from "../../Conpo/DailogClassDelete";

import DeleteIcon from "@mui/icons-material/Delete";

import AddClassdailog from "../../Conpo/AddClassdailog";


const handleclick = (e)=>{
  e.stopPropagation();
  e.preventDefault();
}

const columns = [
  { field: "sn", headerName: "SNo.", width: 70 },
  { field: "ClassId", headerName: "Class Id", width: 140 },

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
  
  {
    field: "edit",
    headerName: "Edit",
    description: "This column has a value getter and is not sortable.",

    width: 90,
    styled: Button,
    renderCell: (params ) => {

      return ( 
      <>
      <div key={params.row.id} ><Link to={`/class/${params.row.id},${params.row.SYear}`}><Button variant="outlined" color="success"  ><EditIcon color="prmary" /></Button></Link></div>
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

        <DailogClassDelete

        OnClick = {(e)=>{handleclick(e)}}
      key={params.row.id}
        icons={<DeleteIcon color="warning" />}
        title={`Delete Session`}
        id={`${params.row.id} `}
        sY={`${params.row.SYear} `}



      />

      )
    }

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
      <div key={params.row.id}><Link to={`/admintools/class/student/${params.row.id}`}><Button variant="contained"  >Open</Button></Link></div>
      {/* <ComEditClass icons={<EditIcon color="prmary" />} id={params.row.id} onClick={params.handleClick} /> */}
      </>
      )
    }
  },
  

  
];


const CClasses = ({history}) => {
  // const id = 2022
  const {id} = useParams()
  const handleRowClick=(params)=>{  
    history.push(`/account/${params.row.Start}`)
    // router.push("/")
  }
  const handleClick = ()=>{
    history.push(`/class/${id}`)
}
  


  const dispatch = useDispatch();
  const { loading, getClass } = useSelector((state) => state.getClasses);

  const rows = [];
  
   getClass &&getClass.classs &&
   getClass.classs.forEach((classs, index) => {
      rows.push({
        id: classs._id,
        sn: index + 1,
        Cname: classs.Cname,
        Csubject: classs.Csubject,
        Cmedium: classs.Cmedium,
        Cteacher: classs.Cteacher,
        ClassId: classs.ClassId,
        Discount: classs.Dpercent,
        CAnnualF: classs.PFee.AnnualFee,
        PAnnualF: classs.CFee.AnnualFee,
        PMTF: classs.PFee.MTfee,
        CMTF: classs.CFee.MTfee,
        PExamF: classs.PFee.ExamFee,
        CExamF: classs.CFee.ExamFee,
        SYear:classs.Syear,
        EYear:classs.Eyear,
        Tmonths:classs.Tmonths,
        Texam:classs.Texam,
        TFeeObj:classs.TFeeObj,
        T3FeeS:classs.T3FeeS,
        T2FeeS:classs.T2FeeS,
        T1FeeS:classs.T1FeeS,
        LateFee:classs.LateFee,
      });
    });
  // console.log(rows);

  useEffect(() => {

    store.dispatch(getClasses(id));
  }, [dispatch]);

  return (
    <>
      <div
        className="h-screen pt-20 md:w-full md:p-5 rounded-xl backdrop-blur-md bg-white/30"
        style={{
          height: "100vh",
          width: "105%",
          marginBottom: "20px",
          margin: "2px",
          // backgroundColor: "white",
          fontSize: "45px",
          color: "black",
          fontWeight: "bolder",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Classes List</h1>
          <AddClassdailog
            title={"Add Class"}

            icons={
              <AddCircleIcon className="text-blue-500 " fontSize="large" />
            }
          />
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
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 100 },
              },
            }}
          />
           </div>
        )}
      </div>
    </>
  );
};

export default CClasses;
