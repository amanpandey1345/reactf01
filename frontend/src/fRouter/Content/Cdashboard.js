import React from 'react'

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const Cdashboard = ({history}) => {

      const handleRowClick=(params)=>{
        history.push(`/student/${params.row.id}`)

      }
    
      const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
      ];

  return (
    <>
    <div className="flex flex-col items-center justify-between w-[105%] box-0 md:h-40 md:flex-row bg-inherit">
        <div className="flex flex-col justify-center w-64 h-32 p-5 text-center bg-white box-1 ring-gray-100 rounded-xl bg-inherit">
          <h2 className="text-xl font-bold">Total Students</h2>
          <h2 className="text-2xl font-extrabold">0</h2>
        </div>
        <div className="flex flex-col justify-center w-64 h-32 p-5 m-1 text-center bg-white box-2 ring-gray-100 rounded-xl">
          <h2 className="text-xl font-bold">Total Fees</h2>
          <h2 className="text-2xl font-extrabold">0</h2>
        </div>
        <div className="flex flex-col justify-center w-64 h-32 p-5 m-1 text-center bg-white box-3 ring-gray-100 rounded-xl">
          <h2 className="text-xl font-bold">Paid Fees</h2>
          <h2 className="text-2xl font-extrabold">0</h2>
        </div>
        <div className="flex flex-col justify-center w-64 h-32 p-5 m-1 text-center bg-white box-4 ring-gray-100 rounded-xl">
          <h2 className="text-xl font-bold">Pending Fees</h2>
          <h2 className="text-2xl font-extrabold">0</h2>
        </div>
      </div>
            <div
          className="h-screen pt-20 pb-16 md:w-full md:p-5 rounded-xl backdrop-blur-md bg-white/30"
            style={{
              height: "100vh",
              width: "105%",
              // marginTop: "20px",
              // marginLeft: "20px",
              // marginRight: "20px",
              // marginBottom: "20px",
              margin:"10px",
              // backgroundColor: "white",
              fontSize:"45px",
              color:"black",
              fontWeight:"bolder"  
            }}
          >
            <h1 className="text-xl font-bold" >Classes List</h1>
            <DataGrid
            className=""
              rows={rows}
              columns ={columns}
              pageSize={50}
              sx={{fontSize:"17px",color:"black",fontFamily:"-moz-initial" ,padding:"0px",borderBlockColor:"black"}}
              rowsPerPageOptions={[50]}
              // checkboxSelection
              onRowClick={handleRowClick}
              components={{ Toolbar: GridToolbar }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
            />
          </div>
    </>
  )
}

export default Cdashboard