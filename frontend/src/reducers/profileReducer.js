// import { ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, CLEAR_ERRORS } from "../constants/profileConstants"


// export const profileReducer = (state={ users:[] }, action) =>{
//     switch (action.type) {
//         case ALL_USER_REQUEST:
//             return {
//                 loading: true,
//                 user:[]
//             }
//         case ALL_USER_SUCCESS:
//             return {
//                 loading: false,
//                 users:action.payload.users
//             }
//         case ALL_USER_FAIL:
//             return {
//                 loading: true,
//                 error: action.payload,
//             }
    
//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null,
//             }
    
//         default:
//             return state;
//     }
// }