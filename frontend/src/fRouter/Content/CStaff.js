import * as React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { getAllUsers} from "/../../actions/userAction";
import { getAllUsers } from "./../../actions/userAction";

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

import Addstaffdailog from "../../Conpo/Addstaffdailog";
import PreStaffDailog from "../../Conpo/PreStaffDailog";
import EditeStaffDailog from "../../Conpo/EditeStaffDailog";
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
  { field: "staffId", headerName: "Staff Id", width: 130 },

  {
    field: "name",
    headerName: "Name",
    width: 170,
    // editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    // editable: true,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    type: "number",
    width: 160,
    // styled: Button,
    //   editable: true,
  },
  {
    field: "role",
    headerName: "Role",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 110,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",

    width: 90,
    styled: Button,
    renderCell: (params ) => {

      return ( 
      <>
      {params.row.status === true ?(<Button variant="outlined" color="success" >Active</Button>):(<Button variant="outlined" color="error"  >Inactive</Button>)}
      </>
      )
    }
  },
  {
    field: "edit",
    headerName: "Edit",

    description: "This column has a value getter and is not sortable.",
    sortable: false,
    filterable: false,
    width: 90,
    renderCell: (params ) => {

      return (

        <EditeStaffDailog
        OnClick = {(e)=>{handleclick(e)}}
      key={params.row.id}
        icons={<EditIcon color="primary" />}
        title={`${params.row.name} Information `}
        id={`${params.row.id} `}
        names={params.row.name} 
        emails={params.row.email} 
        mobiles={params.row.mobile} 
        roles={params.row.role}  
        statuss={params.row.status}  
          


      />

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

        <DailogNew
        OnClick = {(e)=>{handleclick(e)}}
      key={params.row.id}
        icons={<DeleteIcon color="warning" />}
        title={`Delete User`}
        id={`${params.row.id} `}
        name={params.row.name}


      />

      )
    }

  },
  {
    field: "view",
    headerName: "View",

    description: "This column has a value getter and is not sortable.",
    sortable: false,
    filterable: false,
    styled: Button,
    width: 90,
    renderCell: (params ) => {

      return (

        <PreStaffDailog
        OnClick = {(e)=>{handleclick(e)}}
      key={params.row.id}
        icons={<RemoveRedEyeIcon color="info" />}
        title={`${params.row.name} Information `}
        id={`${params.row.id} `}
        names={params.row.name} 
        emails={params.row.email} 
        mobiles={params.row.mobile} 
        roles={params.row.role}  
        staffIds={params.row.staffId}  
          


      />

      )
    }
  },
];

const handleRowClick=(params,e)=>{
  // e.stopPropagation();
  e.preventDefault();
  // router.push("/")
}
const CStaff = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.AdminUsers);
  const rows = [];
  
  users &&
    users.forEach((users, index) => {
      rows.push({
        id: users._id,
        sn: index + 1,
        name: users.name,
        email: users.email,
        mobile: `${users.mobile}`,
        role: users.role,
        status: users.status,
        staffId: users.staffId,
      });
    });
  // console.log(rows);

  useEffect(() => {

    store.dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <div
        className="h-screen pt-20 md:w-full md:p-5 rounded-xl backdrop-blur-md bg-white/30 "
        style={{
          height: "100vh",
          width: "105%",
          // marginTop: "20px",
          // marginLeft: "20px",
          // marginRight: "20px",
          // marginBottom: "20px",
          margin: "2px",
          // backgroundColor: "white",
          fontSize: "45px",
          color: "black",
          fontWeight: "bolder",
        }}
      >
        <div className="flex items-center justify-between  ">
          <h1 className="text-xl font-bold">Staff List</h1>
          <Addstaffdailog
            title={"Add Staff"}

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
                    </div>
        )}
      </div>
    </>
  );
};

export default CStaff;
