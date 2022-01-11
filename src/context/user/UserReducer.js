import {GET_PROFILE, GET_USERS} from '../types'


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default(state, action)=>{
    const {payload, type} = action;

    switch(type){
        case GET_USERS:
            return{
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return{
               ...state,
               selectedUser: payload
            }
        default:
            return state;
    }
}