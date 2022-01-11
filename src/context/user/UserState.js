import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

import { getProfile, getUsers } from "../../services/request";
//Estado inicial de la aplicacion
const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getAllUsers = () => {
    getUsers().then(res=>{
        dispatch({
            type: 'GET_USERS',
            payload: res.data
        })
    })
  };

  const getProfileById = (id) => {
    getProfile(id).then(res=>{
        dispatch({
            type:'GET_PROFILE',
            payload: res.data
        })
    })
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getAllUsers,
        getProfileById,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
