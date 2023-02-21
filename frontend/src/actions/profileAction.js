// import axios from "axios";
// import { ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, CLEAR_ERRORS } from "../constants/profileConstants"

// export const getUser = ()=> async (dispatch)=>{
//     try {
//         dispatch({ type: ALL_USER_REQUEST });

//         const { data } = await axios.get("/api/v1/user");

//         dispatch({
//             type: ALL_USER_SUCCESS,
//             payload:data,
//         })
//     } catch (error) {
//         dispatch({
//             type: ALL_USER_FAIL,
//             payload: error.response.data.message,   
//         })
//     }
// }

// export const ClearErrors = ()=> async (dispatch)=>{
//     dispatch({ type:CLEAR_ERRORS });
// }