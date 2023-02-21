import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { getAllWithdrawals} from "../../actions/userAction";
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
  

const AdminWithdrawal = () => {
    const { loading, withdrawals} = useSelector((state)=> state.AdminWithdrawals);
    const rows = []

    withdrawals && withdrawals.forEach((withdrawals, index)=>{
      rows.push({
        sn: index+1,
        id: withdrawals._id,
        userid: withdrawals.user,
        bankname: withdrawals.bankName,
        paymentmethod: withdrawals.PaymentMethod,
        damount: "₹ "+withdrawals.WAmount,
        dstatus: withdrawals.WStatus,
        date: new Date(withdrawals.createdAt).toLocaleDateString(),
        time: String(new Date(withdrawals.createdAt).toLocaleTimeString()).substr(0, 11),

      })
    })

    useEffect(() => {
      store.dispatch(getAllWithdrawals());
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
    <h2>All Withdrawal Information</h2> 
  

    
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

export default AdminWithdrawal