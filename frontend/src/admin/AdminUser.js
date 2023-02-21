import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { getAllUsers} from "../actions/userAction";
import {useSelector } from 'react-redux';
import Loader from '../All-Component/Loader';
import store from "../store"
import "./AdminUser.css"
import { useEffect } from 'react';
import { Avatar} from '@mui/material';
// import { ListItem } from '@mui/material';

const columns = [
  { field: 'sn', headerName: 'SNo', width: 20 },
  { field: 'imgs', headerName: 'IMG', width: 60 ,
  renderCell: () => <Avatar src="/Profile.png"  />,
  sortable:false,
  filterable:false

  } ,
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'fullname', headerName: 'Full name', width: 170 },
  { field: 'email', headerName: 'Email',  width: 250 },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 190,
  },
  { field: 'userrole', headerName: 'User role', width: 100 },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 140,
  },
  {
    field: 'referCode',
    headerName: 'Refer Code',
    width: 140,
  },
  {
    field: 'date',
    headerName: 'Date',
    type:"date",
    width: 140,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 140,
  },
,
];




export default function AdminUser() {
    const { loading, users} = useSelector((state)=> state.AdminUsers);
    const rows = []

    users && users.forEach((users, index)=>{
      rows.push({
        sn: index+1,
        id: users._id,
        fullname: users.fname[0].toUpperCase()+users.fname.substring(1),
        email: users.email,
        mobile: "+91 "+users.mobile,
        userrole: users.role,
        balance: "₹ "+users.balance,
        referCode:users.referCode,
        date: new Date(users.createdAt).toLocaleDateString(),
        time: String(new Date(users.createdAt).toLocaleTimeString()).substr(0, 11),

      })
    })

    useEffect(() => {
      store.dispatch(getAllUsers());
      // if (isAuthenticated === false) {
      //   history.push("/login");
      //   alert.error("login to access...");
      // }
    }, []);

  return (
    <>
      
    {loading ? <Loader/> : (
    <> 
    <div className="header1">
    <h2>All Users Information</h2> 
  

    
    <div style={{ height:"100vh", width: '95%',marginTop:"20px",marginLeft:"20px" ,marginRight:"20px",  marginBottom:"20px" ,backgroundColor:"white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        // checkboxSelection
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
 
    </div>

    </>
    )}
    </>
  );
}
