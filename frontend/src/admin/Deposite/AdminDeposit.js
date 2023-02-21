
import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { getAllDeposits} from "../../actions/userAction";
import {useSelector } from 'react-redux';
import Loader from '../../All-Component/Loader';
import store from "../../store"
import "../AdminUser.css"
import { useEffect } from 'react';
import { Avatar} from '@mui/material';

const columns = [
    { field: 'sn', headerName: 'SNo', width: 20 },
    { field: 'imgs', headerName: 'IMG', width: 60 ,
    renderCell: () => <Avatar src="/Profile.png"  />,
    sortable:false,
    filterable:false
  
    } ,
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'userid', headerName: 'User ID', width: 250 },
    { field: 'bankname', headerName: 'Bank name', width: 170 },
    { field: 'paymentmethod', headerName: 'Payment Method',  width: 150 },
    {
      field: 'damount',
      headerName: 'Deposit Amount',
      width: 150,
    },
    { field: 'dstatus', headerName: 'Deposit status', width: 210 },

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

  ];
  
  

const AdminDeposit = () => {

    const { loading, deposits} = useSelector((state)=> state.AdminDeposits);
    const rows = []

    deposits && deposits.forEach((deposits, index)=>{
      rows.push({
        sn: index+1,
        id: deposits._id,
        userid: deposits.user,
        bankname: deposits.bankName,
        paymentmethod: deposits.PaymentMethod,
        damount: "₹ "+deposits.DAmount,
        dstatus: deposits.DStatus,
        date: new Date(deposits.createdAt).toLocaleDateString(),
        time: String(new Date(deposits.createdAt).toLocaleTimeString()).substr(0, 11),

      })
    })

    useEffect(() => {
      store.dispatch(getAllDeposits());
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
    <h2>All Deposit Information</h2> 
  

    
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
  )
}

export default AdminDeposit