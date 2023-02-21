import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,

  UPDATE_BALANCE_REQUEST,
  UPDATE_BALANCE_SUCCESS,
  UPDATE_BALANCE_FAIL,
  CREATE_DEPOSIT_REQUEST,
  CREATE_DEPOSIT_SUCCESS,
  CREATE_DEPOSIT_FAIL,
  CREATE_WITHDRAWAL_REQUEST,
  CREATE_WITHDRAWAL_SUCCESS,
  CREATE_WITHDRAWAL_FAIL,
  ALL_DEPOSIT_REQUEST,
  ALL_DEPOSIT_SUCCESS,
  ALL_DEPOSIT_FAIL,
  ALL_WITHDRAWAL_REQUEST,
  ALL_WITHDRAWAL_SUCCESS,
  ALL_WITHDRAWAL_FAIL,
  ALL_BETS_REQUEST,
  ALL_BETS_SUCCESS,
  ALL_BETS_FAIL,
  ALL_DEPOSITS_REQUEST,
  ALL_DEPOSITS_SUCCESS,
  ALL_DEPOSITS_FAIL,
  ALL_WITHDRAWALS_REQUEST,
  ALL_WITHDRAWALS_SUCCESS,
  ALL_WITHDRAWALS_FAIL,
  ALL_NOTIFICATION_REQUEST,
  ALL_NOTIFICATION_SUCCESS,
  ALL_NOTIFICATION_FAIL,
  UPDATE_DEPOSIT_REQUEST,
  UPDATE_DEPOSIT_SUCCESS,
  UPDATE_DEPOSIT_FAIL,
  UPDATE_WITHDRAWAL_REQUEST,
  UPDATE_WITHDRAWAL_SUCCESS,
  UPDATE_WITHDRAWAL_FAIL,
  UPDATE_ADUSER_REQUEST,
  UPDATE_ADUSER_SUCCESS,
  UPDATE_ADUSER_FAIL,
  UPDATE_SHOWTIME_REQUEST,
  UPDATE_SHOWTIME_SUCCESS,
  UPDATE_SHOWTIME_FAIL,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
  GET_CLASS_FAIL,
  UPDATE_WINSET_REQUEST,
  UPDATE_WINSET_SUCCESS,
  UPDATE_WINSET_FAIL,
  CREATE_ADMISSION_REQUEST,
  CREATE_ADMISSION_SUCCESS,
  CREATE_ADMISSION_FAIL,
  ALL_SHOWTIME_REQUEST,
  ALL_SHOWTIME_SUCCESS,
  ALL_SHOWTIME_FAIL,
  ALL_BETDONE_REQUEST,
  ALL_BETDONE_SUCCESS,
  ALL_BETDONE_FAIL,
  CREATE_SHOWHISTORY_REQUEST,
  CREATE_SHOWHISTORY_SUCCESS,
  CREATE_SHOWHISTORY_FAIL,
  CREATE_SAY_REQUEST,
  CREATE_SAY_SUCCESS,
  CREATE_SAY_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,

  GET_SESSION_REQUEST,
  GET_SESSION_SUCCESS,
  GET_SESSION_FAIL,

  GET_SHOWHISTORY_FAIL,
  GET_SHOWHISTORY_SUCCESS,
  GET_SHOWHISTORY_REQUEST,
  LOGIN_REQ_REQUEST,
  LOGIN_REQ_SUCCESS,
  LOGIN_REQ_FAIL,
  CREATE_CLASS_REQUEST,
  CREATE_CLASS_FAIL,
  CREATE_CLASS_SUCCESS,
  CREATE_SESSION_REQUEST,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAIL,

  UPDATE_CLASS_REQUEST,
  UPDATE_CLASS_SUCCESS,
  UPDATE_CLASS_FAIL,

  GET_CLAS_REQUEST,
  GET_CLAS_SUCCESS,
  GET_CLAS_FAIL,

  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,

  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,

  SINGLE_STUDENT_REQUEST,
  SINGLE_STUDENT_SUCCESS,
  SINGLE_STUDENT_FAIL,


  DELETE_CLASS_FAIL,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_REQUEST,


  DELETE_SESSION_FAIL,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION_REQUEST,

  UPDATE_SESSION_FAIL,
  UPDATE_SESSION_RESET,
  UPDATE_SESSION_SUCCESS,
  UPDATE_SESSION_REQUEST,


  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_REQUEST,

  CLEAR_ERRORS,
  CLEAR_MESSAGE,
} from "../constants/userConstants";

import axios from "axios";

// Forgot Password
export const loginreq = (email) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQ_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/login`, email, config);

    dispatch({ type: LOGIN_REQ_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: LOGIN_REQ_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const login = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login/token`,
      token,
      password,
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register =
  (name, email, password, mobile, role) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = { header: { "Content-Type": "multipart/form-data" } };

      const { data } = await axios.post(
        `/api/v1/register`,
        name,
        email,
        password,
        mobile,
        role,
        config
      );
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const UserDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/delete/${id}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/v1/me`);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const updateProfile = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1//user/update/${id}`,
      userData,
      config
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword =
  (token, password, cpassword) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/password/forgot/token`,
        token,
        password,
        cpassword,
        config
      );

      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
export const clearMESSAGE = () => async (dispatch) => {
  dispatch({ type: CLEAR_MESSAGE });
};

export const createClass = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CLASS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/class/create`, betData, config);

    dispatch({
      type: CREATE_CLASS_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const createStudent = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_STUDENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/student/create`, betData, config);

    dispatch({
      type: CREATE_STUDENT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: CREATE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateClasses = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CLASS_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/class/update/${id}`,
      userData,
      config
    );
    dispatch({ type: UPDATE_CLASS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createSession = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SESSION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/Session/create`, betData, config);

    dispatch({
      type: CREATE_SESSION_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SESSION_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const createAdmiss =
  (
    sName,
    castCertiNO,
    scholarNo,
    SSSMID,
    sAdhaarNo,
    sTCno,
    ParentName,
    ParentMobilleNo,
    ParentWhatSappNO,
    rationCardNo,
    sLastSchool,
    sLastClass,
    sAdmissClass,
    nameofSiblingsInSchool,
    mAnnualIncome,
    fAnnualIncome,
    mIncomeCartif,
    fIncomeCartif,
    mMobileNo,
    fMobileNo,
    mOfficeAdre,
    fOfficeAdre,
    mProf,
    fProf,
    mName,
    fName,
    familyId,
    bankName,
    accountHolderName,
    accountNo,
    IFSCcode,
    State,
    pState,
    City,
    pCity,

    PinCode,
    pPinCode,
    AddressLine,
    pAddressLine,
    HouseNo,
    pHouseNo
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_ADMISSION_REQUEST });

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `/api/v1/Admission/create`,
        sName,
        castCertiNO,
        scholarNo,
        SSSMID,
        sAdhaarNo,
        sTCno,
        ParentName,
        ParentMobilleNo,
        ParentWhatSappNO,
        rationCardNo,
        sLastSchool,
        sLastClass,
        sAdmissClass,
        nameofSiblingsInSchool,
        mAnnualIncome,
        fAnnualIncome,
        mIncomeCartif,
        fIncomeCartif,
        mMobileNo,
        fMobileNo,
        mOfficeAdre,
        fOfficeAdre,
        mProf,
        fProf,
        mName,
        fName,
        familyId,
        bankName,
        accountHolderName,
        accountNo,
        IFSCcode,
        State,
        pState,
        City,
        pCity,

        PinCode,
        pPinCode,
        AddressLine,
        pAddressLine,
        HouseNo,
        pHouseNo,
        config
      );

      dispatch({
        type: CREATE_ADMISSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ADMISSION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const createDeposit = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_DEPOSIT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/user/deposit`, betData, config);

    dispatch({
      type: CREATE_DEPOSIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_DEPOSIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createWithdrawal = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_WITHDRAWAL_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/user/withdrawal`,
      betData,
      config
    );

    dispatch({
      type: CREATE_WITHDRAWAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_WITHDRAWAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get user bet
export const getClasses = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CLASS_REQUEST });

    const { data } = await axios.get(`/api/v1/class/${id}`);

    dispatch({
      type: GET_CLASS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getStudents = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_REQUEST });

    const { data } = await axios.get(`/api/v1/student/${id}`);

    dispatch({
      type: GET_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getsStudents = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_STUDENT_REQUEST });

    const { data } = await axios.get(`/api/v1/student/fee/${id}`);

    dispatch({
      type: SINGLE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getClas = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CLAS_REQUEST });

    const { data } = await axios.get(`/api/v1/class/${id}`);

    dispatch({
      type: GET_CLAS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CLAS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getSess = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SESSION_REQUEST });

    const { data } = await axios.get(`/api/v1/Session`);

    dispatch({
      type: GET_SESSION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SESSION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get user bet
export const getDepositUser = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DEPOSIT_REQUEST });

    const { data } = await axios.get(`/api/v1/mydeposit`);

    dispatch({
      type: ALL_DEPOSIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_DEPOSIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get user bet
export const getWithdrawalUser = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_WITHDRAWAL_REQUEST });

    const { data } = await axios.get(`/api/v1/mywithdrawal`);

    dispatch({
      type: ALL_WITHDRAWAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_WITHDRAWAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update balance
export const updateBalance = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BALANCE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/balance/update`,
      userData,
      config
    );

    dispatch({
      type: UPDATE_BALANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BALANCE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/users`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

export const getAllBets = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BETS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/bets`);

    dispatch({ type: ALL_BETS_SUCCESS, payload: data.bets });
  } catch (error) {
    dispatch({ type: ALL_BETS_FAIL, payload: error.response.data.message });
  }
};

export const getAllDeposits = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DEPOSITS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/deposits`);

    dispatch({ type: ALL_DEPOSITS_SUCCESS, payload: data.deposits });
  } catch (error) {
    dispatch({ type: ALL_DEPOSITS_FAIL, payload: error.response.data.message });
  }
};

export const getAllWithdrawals = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_WITHDRAWALS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/withdrawals`);

    dispatch({ type: ALL_WITHDRAWALS_SUCCESS, payload: data.withdrawals });
  } catch (error) {
    dispatch({
      type: ALL_WITHDRAWALS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AdminUpdateUser1 = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ADUSER_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/user/update/${id}`,
      userData,
      config
    );
    dispatch({ type: UPDATE_ADUSER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_ADUSER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AdminUpdateWith1 = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_WITHDRAWAL_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/withdrawals/update/${id}`,
      userData,
      config
    );
    dispatch({ type: UPDATE_WITHDRAWAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_WITHDRAWAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AdminUpdateDeposit1 = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DEPOSIT_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/deposits/update/${id}`,
      userData,
      config
    );
    dispatch({ type: UPDATE_DEPOSIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_DEPOSIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AdminUpdateShowTime = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SHOWTIME_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/showtime/update`,
      userData,
      config
    );
    dispatch({ type: UPDATE_SHOWTIME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_SHOWTIME_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AdminUpdateWinset = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_WINSET_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/winset/update`,
      userData,
      config
    );
    dispatch({ type: UPDATE_WINSET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_WINSET_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getShowtime = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SHOWTIME_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/getshowtime`);

    dispatch({ type: ALL_SHOWTIME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_SHOWTIME_FAIL, payload: error.response.data.message });
  }
};

export const AdminUpdateBetDone = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BETDONE_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/bet/done`, config);
    dispatch({ type: ALL_BETDONE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_BETDONE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const UpdateNotifi = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_NOTIFICATION_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/me/notifi`, config);
    dispatch({ type: ALL_NOTIFICATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_NOTIFICATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createSay = (sayData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SAY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/user/say`, sayData, config);

    dispatch({
      type: CREATE_SAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SAY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createShowhistory = (sayData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SHOWHISTORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/showhistory`,
      sayData,
      config
    );

    dispatch({
      type: CREATE_SHOWHISTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SHOWHISTORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllShowHistory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SHOWHISTORY_REQUEST });

    const { data } = await axios.get(`/api/v1/user/showhistory`);

    dispatch({
      type: GET_SHOWHISTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SHOWHISTORY_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const updateSession = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SESSION_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/session/update/${id}`,
      userData,
      config
    );
    dispatch({ type: UPDATE_SESSION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_SESSION_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const sessionDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SESSION_REQUEST });

    const { data } = await axios.delete(`/api/v1/session/delete/${id}`);
    dispatch({ type: DELETE_SESSION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_SESSION_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const classDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CLASS_REQUEST });

    const { data } = await axios.delete(`/api/v1/class/delete/${id}`);
    dispatch({ type: DELETE_CLASS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const studentDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_STUDENT_REQUEST });

    const { data } = await axios.delete(`/api/v1/student/delete/${id}`);
    dispatch({ type: DELETE_STUDENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
