import * as React from "react";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { getAllBets } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../All-Component/Loader";
import store from "../store";
import { useEffect } from "react";
import Table from "@mui/material/Table";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import "./AdminUser.css";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";


const Adminbgcar = () => {
  const { loading, bets} = useSelector((state)=> state.AdminBets);
    const rows = []
    // console.log(useParams);

    bets && bets.forEach((bets, index)=>{
        if(bets.betName === "Car"){ 
            rows.push({
              sn: index+1,
              imgs:bets.image.mUrl,
              amt:bets.betAmount,
              id: bets._id,
              userid: bets.user,
              beton: bets.betName,
              betamount: "₹ "+bets.betAmount,
              betstatus: bets.betStatus,
              result: bets.result,
              date: new Date(bets.createdAt).toLocaleDateString(),
              time: String(new Date(bets.createdAt).toLocaleTimeString()).substr(0, 11),  
      
            })
        }
    })


    const columns = [
      { field: 'sn', headerName: 'SNo', width: 20 },
      { field: 'imgs', headerName: 'IMG', width: 60 ,
      renderCell: () => <Avatar src={"/Profile.png"}  />,
      sortable:false,
      filterable:false
    
      } ,
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'userid', headerName: 'User Id', width: 170 },
      { field: 'beton', headerName: 'Bet On',  width: 250 },
      {
        field: 'betamount',
        headerName: 'Bet Amount',
        width: 190,
      },
      { field: 'betstatus', headerName: 'Bet Status', width: 100 },   
      {
        field: 'result',
        headerName: 'Result',
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
    

    function subtotal(bets) {
        return rows.map(({ amt }) => amt).reduce((sum, i) => sum + i, 0); 
      }
    

    useEffect(() => {
      store.dispatch(getAllBets());
      // if (isAuthenticated === false) {
      //   history.push("/login");
      //   alert.error("login to access...");
      // }
    }, []);

  return (
    <>
      
    {loading ? <Loader/> : (
    <> 

    <div className='header1'>
    <h2>All bets Information</h2> 
    <div style={{ height:"100vh", width: '95%',marginTop:"20px",marginLeft:"20px" ,marginRight:"20px", textAlign:"center", marginBottom:"20px" ,backgroundColor:"white" }}>

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
          <TableContainer sx={{Width: "300px", borderBottomLeftRadius:"35px" ,borderBottomRightRadius:"35px"}} component={Paper}>
      <Table sx={{Width: "300px" }} aria-label="spanning table">
          <TableRow>
            <TableCell colSpan={2}>{<h4>Total Betting Amount</h4>}</TableCell>
            <TableCell align="right">{<h4>₹ {subtotal(bets)}</h4>}</TableCell>
          </TableRow>
          </Table>
    </TableContainer>
      
    </div>

    </>
    )}
    </>
  );
}


export default Adminbgcar;
