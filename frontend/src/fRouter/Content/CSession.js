import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getSess} from "./../../actions/userAction";

import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";
import store from "../../store";
import Loader from "../../Conpo/Loader";
import DailogNew from "../../Conpo/dailogNew";
import PreStaffDailog from "../../Conpo/PreStaffDailog";
import EditeStaffDailog from "../../Conpo/EditeStaffDailog";
import AddSessiondailog from "../../Conpo/AddSessiondailog";
import { Link } from "react-router-dom";
import DailogSessionDelete from "../../Conpo/DailogSessionDelete";
// const deleteh = () => {
//   alert.warn("delete");
// };
// const edith = () => {
//   alert("Edit");
// };
const handleclick = (e)=>{
  e.stopPropagation();
  e.preventDefault();
}
const columns = [
  { field: "sn", headerName: "SNo.", width: 70 },
  { field: "id", headerName: "Session Id", width: 240 },

  {
    field: "SessionName",
    headerName: "Session",
    width: 110,
    // editable: true,
  },
  {
    field: "Start",
    headerName: "Start Session",
    width: 110,
    // editable: true,
  },
  {
    field: "End",
    headerName: "End Session",
    width: 120,
    // styled: Button,
    //   editable: true,
  },
  {
    field: "ByName",
    headerName: "Staff Name",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 160,
  },
  {
    field: "ById",
    headerName: "Staff Id",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 160,
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

        <DailogSessionDelete

        OnClick = {(e)=>{handleclick(e)}}
      key={params.row.id}
        icons={<DeleteIcon color="warning" />}
        title={`Delete Session`}
        id={`${params.row.id} `}



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
      <div><Link to={`/admintools/Class/${params.row.Start}`}><Button variant="contained"  >Open</Button></Link></div>
      {/* <ComEditClass icons={<EditIcon color="prmary" />} id={params.row.id} onClick={params.handleClick} /> */}
      </>
      )
    }
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   description: "This column has a value getter and is not sortable.",

  //   width: 90,
  //   styled: Button,
  //   renderCell: (params ) => {

  //     return ( 
  //     <>
  //     {params.row.status === true ?(<Button variant="outlined" color="success" >Active</Button>):(<Button variant="outlined" color="error"  >Inactive</Button>)}
  //     </>
  //     )
  //   }
  // },
  // {
  //   field: "edit",
  //   headerName: "Edit",

  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   filterable: false,
  //   width: 90,
  //   renderCell: (params ) => {

  //     return (

  //       <EditeStaffDailog
  //       OnClick = {(e)=>{handleclick(e)}}
  //     key={params.row.id}
  //       icons={<EditIcon color="primary" />}
  //       title={`${params.row.name} Information `}
  //       id={`${params.row.id} `}
  //       names={params.row.name} 
  //       emails={params.row.email} 
  //       mobiles={params.row.mobile} 
  //       roles={params.row.role}  
  //       statuss={params.row.status}  
          


  //     />

  //     )
  //   }
  // },
 

];


const CSession = ({history}) => {
  const dispatch = useDispatch();
  const handleRowClick=(params)=>{
    history.push(`/admintools/Class/${params.row.Start}`)
    // router.push("/")
  }

  const { loading, getSession} = useSelector((state) => state.getSessions);
  // const {  sessions } = useSelector((state) => state.getSessions.getSession);
  const rows = [];
  // console.log(sessions);
  getSession && getSession.sessions &&
  getSession.sessions.forEach((sessions, index) => {
      rows.push({
        id: sessions._id, 
        sn: index + 1,      
        SessionName: `${sessions.startYear}-${`${sessions.endYear}`.slice(2,4)}`,
        Start:sessions.startYear,
        End:sessions.endYear,
        ById:sessions.Createdby.id,
        ByName:sessions.Createdby.name

      });
    });
  // console.log(rows);

  useEffect(() => {

    store.dispatch(getSess());
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
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-bold">Session List</h1>
          <AddSessiondailog
            title={"Create New Session"}

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

export default CSession;
