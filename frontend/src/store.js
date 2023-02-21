import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
  allUsersReducer,
  useReqReducer,
  userRisgReducer,
  deleteUsersReducer,
  classReducer,
  getClassReducer,
  admissionReducer,
  sessionReducer,
  getSessionReducer,
  updateClassReducer,
  getClasReducer,
  studetntReducer,
  getStudentReducer,
  updatesessionReducer,
  deleteSessionReducer,
  deleteClassReducer,
  deleteStudentReducer,
  getStudentddReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,
  deleteuser: deleteUsersReducer,
  userRisg: userRisgReducer,
  userreq: useReqReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  classes: classReducer,
  admission: admissionReducer,
  session:sessionReducer,
  getClasses: getClassReducer,
  getSessions:getSessionReducer,
  AdminUsers: allUsersReducer,
  UpdateClass:updateClassReducer,
  clas : getClasReducer,
  NewStudent : studetntReducer,
  getStudent:getStudentReducer,
  getsStudent:getStudentddReducer,
  updateSession : updatesessionReducer,
  deleteSession : deleteSessionReducer,
  deleteClass : deleteClassReducer,
  deleteStudent : deleteStudentReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
