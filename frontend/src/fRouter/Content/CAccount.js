import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { getSess} from "./../../actions/userAction";

import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import store from "../../store";
import Loader from "../../Conpo/Loader";




const columns = [
  { field: "sn", headerName: "SNo.", width: 70 },
  { field: "id", headerName: "Session Id", width: 240 },

  {
    field: "SessionName",
    headerName: "Session",
    width: 180,
    // editable: true,
  },
  {
    field: "Start",
    headerName: "Start Session",
    width: 130,
    // editable: true,
  },
  {
    field: "End",
    headerName: "End Session",
    width: 130,
    // styled: Button,
    //   editable: true,
  },
  {
    field: "ByName",
    headerName: "Staff Name",
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 180,
  },
  {
    field: "ById",
    headerName: "Staff Id",
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 200,
  },


];


const CAccount = ({history}) => {
  const dispatch = useDispatch();
  const handleRowClick=(params)=>{
    history.push(`/account/${params.row.Start}`)
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
          <h1 className="text-xl font-bold">Session List</h1>

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

export default CAccount;
